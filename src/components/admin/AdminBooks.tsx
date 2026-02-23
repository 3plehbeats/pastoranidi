import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";

interface Book {
  id?: string;
  title: string;
  author: string;
  description: string;
  price: number | null;
  image_url: string;
  purchase_link: string;
  is_active: boolean;
}

const AdminBooks = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await supabase.from("books").select("*").order("created_at", { ascending: false });
    if (data) setItems(data as any);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSave = async (item: Book) => {
    const payload = { title: item.title, author: item.author, description: item.description, price: item.price, image_url: item.image_url, purchase_link: item.purchase_link, is_active: item.is_active };
    if (item.id) {
      const { error } = await supabase.from("books").update(payload).eq("id", item.id);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else toast({ title: "Saved!" });
    } else {
      const { error } = await supabase.from("books").insert([payload]);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else { toast({ title: "Created!" }); fetchData(); }
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from("books").delete().eq("id", id);
    toast({ title: "Deleted" }); fetchData();
  };

  const addNew = () => {
    setItems([...items, { title: "", author: "", description: "", price: null, image_url: "", purchase_link: "", is_active: true }]);
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Books</h2>
        <Button onClick={addNew} className="bg-secondary text-secondary-foreground hover:bg-secondary/90"><Plus className="h-4 w-4 mr-2" /> Add Book</Button>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={item.id || i} className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input placeholder="Title" value={item.title} onChange={(e) => { const s = [...items]; s[i].title = e.target.value; setItems(s); }} />
              <Input placeholder="Author" value={item.author} onChange={(e) => { const s = [...items]; s[i].author = e.target.value; setItems(s); }} />
              <Input placeholder="Image URL" value={item.image_url} onChange={(e) => { const s = [...items]; s[i].image_url = e.target.value; setItems(s); }} />
              <Input placeholder="Purchase Link" value={item.purchase_link} onChange={(e) => { const s = [...items]; s[i].purchase_link = e.target.value; setItems(s); }} />
              <Input type="number" placeholder="Price (₦)" value={item.price ?? ""} onChange={(e) => { const s = [...items]; s[i].price = e.target.value ? Number(e.target.value) : null; setItems(s); }} />
            </div>
            <Textarea placeholder="Description" value={item.description} onChange={(e) => { const s = [...items]; s[i].description = e.target.value; setItems(s); }} />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={item.is_active} onChange={(e) => { const s = [...items]; s[i].is_active = e.target.checked; setItems(s); }} /> Active</label>
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

export default AdminBooks;
