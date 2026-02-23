import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";

interface Service {
  id?: string;
  name: string;
  description: string;
  day_of_week: string;
  time: string;
  location: string;
  sort_order: number;
  is_active: boolean;
}

const AdminServices = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await supabase.from("services").select("*").order("sort_order");
    if (data) setItems(data as any);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSave = async (item: Service) => {
    const payload = { name: item.name, description: item.description, day_of_week: item.day_of_week, time: item.time, location: item.location, sort_order: item.sort_order, is_active: item.is_active };
    if (item.id) {
      const { error } = await supabase.from("services").update(payload).eq("id", item.id);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else toast({ title: "Saved!" });
    } else {
      const { error } = await supabase.from("services").insert([payload]);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else { toast({ title: "Created!" }); fetchData(); }
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from("services").delete().eq("id", id);
    toast({ title: "Deleted" }); fetchData();
  };

  const addNew = () => {
    setItems([...items, { name: "", description: "", day_of_week: "", time: "", location: "Main Auditorium", sort_order: items.length, is_active: true }]);
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Services</h2>
        <Button onClick={addNew} className="bg-secondary text-secondary-foreground hover:bg-secondary/90"><Plus className="h-4 w-4 mr-2" /> Add Service</Button>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={item.id || i} className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input placeholder="Name" value={item.name} onChange={(e) => { const s = [...items]; s[i].name = e.target.value; setItems(s); }} />
              <Input placeholder="Day (e.g. Sunday)" value={item.day_of_week} onChange={(e) => { const s = [...items]; s[i].day_of_week = e.target.value; setItems(s); }} />
              <Input placeholder="Time (e.g. 9:00 AM)" value={item.time} onChange={(e) => { const s = [...items]; s[i].time = e.target.value; setItems(s); }} />
              <Input placeholder="Location" value={item.location} onChange={(e) => { const s = [...items]; s[i].location = e.target.value; setItems(s); }} />
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

export default AdminServices;
