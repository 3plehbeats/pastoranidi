import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type ContentMap = Record<string, string>;

/**
 * Fetches all editable content blocks for a given page slug
 * and returns them as a key->content map. Defaults provided
 * via `defaults` are returned until live data loads, and used
 * as fallback if a key is missing.
 */
export function usePageContent(pageSlug: string, defaults: ContentMap = {}) {
  const [content, setContent] = useState<ContentMap>(defaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("page_content")
      .select("block_key, content")
      .eq("page_slug", pageSlug)
      .then(({ data }) => {
        if (cancelled) return;
        if (data) {
          const map: ContentMap = { ...defaults };
          for (const row of data) {
            map[row.block_key] = row.content ?? "";
          }
          setContent(map);
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSlug]);

  const get = (key: string, fallback = "") => content[key] ?? fallback;
  return { content, get, loading };
}
