import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";

interface Slide {
  id?: string;
  title: string;
  subtitle: string;
  image_url: string;
  button_text: string;
  button_link: string;
  sort_order: number;
  is_active: boolean;
}

const AdminSlides = () => {
  const { toast } = useToast();
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSlides = async () => {
    const { data } = await supabase.from("hero_slides").select("*").order("sort_order");
    if (data) setSlides(data);
    setLoading(false);
  };

  useEffect(() => { fetchSlides(); }, []);

  const handleSave = async (slide: Slide) => {
    if (slide.id) {
      const { error } = await supabase.from("hero_slides").update({
        title: slide.title, subtitle: slide.subtitle, image_url: slide.image_url,
        button_text: slide.button_text, button_link: slide.button_link,
        sort_order: slide.sort_order, is_active: slide.is_active,
      }).eq("id", slide.id);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else toast({ title: "Saved!" });
    } else {
      const { error } = await supabase.from("hero_slides").insert([slide]);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else { toast({ title: "Created!" }); fetchSlides(); }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("hero_slides").delete().eq("id", id);
    if (!error) { toast({ title: "Deleted" }); fetchSlides(); }
  };

  const addNew = () => {
    setSlides([...slides, { title: "", subtitle: "", image_url: "", button_text: "", button_link: "", sort_order: slides.length, is_active: true }]);
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Hero Slides</h2>
        <Button onClick={addNew} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Plus className="h-4 w-4 mr-2" /> Add Slide
        </Button>
      </div>
      <div className="space-y-4">
        {slides.map((slide, i) => (
          <div key={slide.id || i} className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input placeholder="Title" value={slide.title} onChange={(e) => { const s = [...slides]; s[i].title = e.target.value; setSlides(s); }} />
              <Input placeholder="Subtitle" value={slide.subtitle} onChange={(e) => { const s = [...slides]; s[i].subtitle = e.target.value; setSlides(s); }} />
              <Input placeholder="Image URL" value={slide.image_url} onChange={(e) => { const s = [...slides]; s[i].image_url = e.target.value; setSlides(s); }} />
              <Input placeholder="Button Text" value={slide.button_text} onChange={(e) => { const s = [...slides]; s[i].button_text = e.target.value; setSlides(s); }} />
              <Input placeholder="Button Link" value={slide.button_link} onChange={(e) => { const s = [...slides]; s[i].button_link = e.target.value; setSlides(s); }} />
              <Input type="number" placeholder="Sort Order" value={slide.sort_order} onChange={(e) => { const s = [...slides]; s[i].sort_order = Number(e.target.value); setSlides(s); }} />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={slide.is_active} onChange={(e) => { const s = [...slides]; s[i].is_active = e.target.checked; setSlides(s); }} />
                Active
              </label>
              <div className="flex-1" />
              <Button size="sm" variant="outline" onClick={() => handleSave(slide)}>
                <Save className="h-4 w-4 mr-1" /> Save
              </Button>
              {slide.id && (
                <Button size="sm" variant="destructive" onClick={() => handleDelete(slide.id!)}>
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSlides;
