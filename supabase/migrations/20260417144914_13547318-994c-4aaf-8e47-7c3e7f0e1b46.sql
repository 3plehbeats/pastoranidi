-- Generic page content blocks (key-value text per page)
CREATE TABLE public.page_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug TEXT NOT NULL,
  block_key TEXT NOT NULL,
  label TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  field_type TEXT NOT NULL DEFAULT 'text',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(page_slug, block_key)
);

CREATE INDEX idx_page_content_page ON public.page_content(page_slug, sort_order);

ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view page content"
  ON public.page_content FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage page content"
  ON public.page_content FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Reusable updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_page_content_updated_at
  BEFORE UPDATE ON public.page_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- YouTube videos for the Home "Our Messages" section
CREATE TABLE public.youtube_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id TEXT NOT NULL,
  title TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.youtube_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active videos"
  ON public.youtube_videos FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage videos"
  ON public.youtube_videos FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));