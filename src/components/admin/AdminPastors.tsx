import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";

interface Pastor {
  id?: string;
  name: string;
  title: string;
  bio: string;
  image_url: string;
  sort_order: number;
  is_active: boolean;
}

const AdminPastors = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Pastor[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    const { data } = await supabase.from("pastors").select("*").order("sort_order");
    if (data) setItems(data as any);
    setLoading(false);
  };

  useEffect(() => { fetch(); }, []);

  const handleSave = async (item: Pastor) => {
    const payload = { name: item.name, title: item.title, bio: item.bio, image_url: item.image_url, sort_order: item.sort_order, is_active: item.is_active };
    if (item.id) {
      const { error } = await supabase.from("pastors").update(payload).eq("id", item.id);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else toast({ title: "Saved!" });
    } else {
      const { error } = await supabase.from("pastors").insert([payload]);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else { toast({ title: "Created!" }); fetch(); }
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from("pastors").delete().eq("id", id);
    toast({ title: "Deleted" }); fetch();
  };

  const addNew = () => {
    setItems([...items, { name: "", title: "", bio: "", image_url: "", sort_order: items.length, is_active: true }]);
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Pastors</h2>
        <Button onClick={addNew} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Plus className="h-4 w-4 mr-2" /> Add Pastor
        </Button>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={item.id || i} className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input placeholder="Name" value={item.name} onChange={(e) => { const s = [...items]; s[i].name = e.target.value; setItems(s); }} />
              <Input placeholder="Title (e.g. Senior Pastor)" value={item.title} onChange={(e) => { const s = [...items]; s[i].title = e.target.value; setItems(s); }} />
              <Input placeholder="Image URL" value={item.image_url} onChange={(e) => { const s = [...items]; s[i].image_url = e.target.value; setItems(s); }} />
              <Input type="number" placeholder="Sort Order" value={item.sort_order} onChange={(e) => { const s = [...items]; s[i].sort_order = Number(e.target.value); setItems(s); }} />
            </div>
            <Textarea placeholder="Bio" value={item.bio} onChange={(e) => { const s = [...items]; s[i].bio = e.target.value; setItems(s); }} />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={item.is_active} onChange={(e) => { const s = [...items]; s[i].is_active = e.target.checked; setItems(s); }} />
                Active
              </label>
              <div className="flex-1" />
              <Button size="sm" variant="outline" onClick={() => handleSave(item)}><Save className="h-4 w-4 mr-1" /> Save</Button>
              {item.id && <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id!)}><Trash2 className="h-4 w-4 mr-1" /> Delete</Button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPastors;
