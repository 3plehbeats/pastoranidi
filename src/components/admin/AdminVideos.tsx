import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";

interface Video {
  id: string;
  video_id: string;
  title: string;
  sort_order: number;
  is_active: boolean;
}

const AdminVideos = () => {
  const { toast } = useToast();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [newVideo, setNewVideo] = useState({ video_id: "", title: "", sort_order: 0 });

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("youtube_videos")
      .select("*")
      .order("sort_order");
    if (data) setVideos(data as Video[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const addVideo = async () => {
    if (!newVideo.video_id || !newVideo.title) {
      toast({ title: "Missing info", description: "Video ID and title are required", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("youtube_videos").insert([newVideo]);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Added", description: "Video added" });
      setNewVideo({ video_id: "", title: "", sort_order: 0 });
      load();
    }
  };

  const updateVideo = async (v: Video) => {
    const { error } = await supabase
      .from("youtube_videos")
      .update({
        video_id: v.video_id,
        title: v.title,
        sort_order: v.sort_order,
        is_active: v.is_active,
      })
      .eq("id", v.id);
    if (error) toast({ title: "Save failed", description: error.message, variant: "destructive" });
    else toast({ title: "Saved" });
  };

  const deleteVideo = async (id: string) => {
    if (!confirm("Delete this video?")) return;
    const { error } = await supabase.from("youtube_videos").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else load();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">YouTube Videos</h1>
        <p className="text-muted-foreground">
          Manage the videos shown in the "Our Messages" section on the Home page.
        </p>
      </div>

      <div className="p-4 rounded-lg bg-card border border-border space-y-3">
        <h3 className="font-semibold">Add new video</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <Label>YouTube Video ID</Label>
            <Input
              placeholder="e.g. kEGYyRdLStw"
              value={newVideo.video_id}
              onChange={(e) => setNewVideo({ ...newVideo, video_id: e.target.value })}
            />
          </div>
          <div>
            <Label>Title</Label>
            <Input
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            />
          </div>
          <div>
            <Label>Sort Order</Label>
            <Input
              type="number"
              value={newVideo.sort_order}
              onChange={(e) => setNewVideo({ ...newVideo, sort_order: Number(e.target.value) })}
            />
          </div>
        </div>
        <Button onClick={addVideo} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Plus className="h-4 w-4 mr-1" /> Add Video
        </Button>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Loading…</p>
      ) : (
        <div className="space-y-3">
          {videos.map((v, i) => (
            <div key={v.id} className="p-4 rounded-lg bg-card border border-border grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              <div className="md:col-span-3">
                <Label>Video ID</Label>
                <Input
                  value={v.video_id}
                  onChange={(e) => {
                    const copy = [...videos];
                    copy[i] = { ...v, video_id: e.target.value };
                    setVideos(copy);
                  }}
                />
              </div>
              <div className="md:col-span-5">
                <Label>Title</Label>
                <Input
                  value={v.title}
                  onChange={(e) => {
                    const copy = [...videos];
                    copy[i] = { ...v, title: e.target.value };
                    setVideos(copy);
                  }}
                />
              </div>
              <div className="md:col-span-1">
                <Label>Order</Label>
                <Input
                  type="number"
                  value={v.sort_order}
                  onChange={(e) => {
                    const copy = [...videos];
                    copy[i] = { ...v, sort_order: Number(e.target.value) };
                    setVideos(copy);
                  }}
                />
              </div>
              <div className="md:col-span-1 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={v.is_active}
                  onChange={(e) => {
                    const copy = [...videos];
                    copy[i] = { ...v, is_active: e.target.checked };
                    setVideos(copy);
                  }}
                />
                <span className="text-sm">Active</span>
              </div>
              <div className="md:col-span-2 flex gap-2">
                <Button size="sm" onClick={() => updateVideo(v)} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button size="sm" variant="destructive" onClick={() => deleteVideo(v.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminVideos;
