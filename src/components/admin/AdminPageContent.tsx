import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2 } from "lucide-react";

interface Block {
  id: string;
  page_slug: string;
  block_key: string;
  label: string;
  content: string;
  field_type: string;
  sort_order: number;
}

const PAGES: { slug: string; label: string }[] = [
  { slug: "home", label: "Home" },
  { slug: "about", label: "About" },
  { slug: "what-we-believe", label: "What We Believe" },
  { slug: "history", label: "Historic Events" },
  { slug: "services", label: "Services / Programs" },
  { slug: "ministries", label: "Ministries" },
  { slug: "bible-school", label: "Bible School" },
  { slug: "bookstore", label: "Bookstore" },
  { slug: "living-care", label: "Living Care" },
  { slug: "partner", label: "Partner With Us" },
  { slug: "donate", label: "Give & Donate" },
  { slug: "contact", label: "Contact" },
  { slug: "wisdom", label: "Words of Wisdom" },
];

const AdminPageContent = () => {
  const { toast } = useToast();
  const [pageSlug, setPageSlug] = useState<string>("home");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = async (slug: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("page_content")
      .select("*")
      .eq("page_slug", slug)
      .order("sort_order");
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else if (data) {
      setBlocks(data as Block[]);
      setEdits({});
    }
    setLoading(false);
  };

  useEffect(() => {
    load(pageSlug);
  }, [pageSlug]);

  const saveBlock = async (block: Block) => {
    const newValue = edits[block.id] ?? block.content;
    setSavingId(block.id);
    const { error } = await supabase
      .from("page_content")
      .update({ content: newValue })
      .eq("id", block.id);
    setSavingId(null);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Saved", description: `Updated "${block.label}"` });
      setBlocks((prev) =>
        prev.map((b) => (b.id === block.id ? { ...b, content: newValue } : b))
      );
      setEdits((prev) => {
        const next = { ...prev };
        delete next[block.id];
        return next;
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Page Content</h1>
        <p className="text-muted-foreground">
          Edit any text block on the public website. Changes appear instantly after saving.
        </p>
      </div>

      <div>
        <Label className="mb-2 block">Select Page</Label>
        <select
          value={pageSlug}
          onChange={(e) => setPageSlug(e.target.value)}
          className="w-full md:w-80 rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          {PAGES.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading…
        </div>
      ) : blocks.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          No editable blocks for this page yet.
        </p>
      ) : (
        <div className="space-y-4">
          {blocks.map((block) => {
            const value = edits[block.id] ?? block.content;
            const isDirty = edits[block.id] !== undefined && edits[block.id] !== block.content;
            return (
              <div
                key={block.id}
                className="p-4 rounded-lg bg-card border border-border space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Label className="text-sm font-semibold">{block.label}</Label>
                    <p className="text-xs text-muted-foreground font-mono">
                      {block.block_key}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => saveBlock(block)}
                    disabled={!isDirty || savingId === block.id}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    {savingId === block.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-1" /> Save
                      </>
                    )}
                  </Button>
                </div>
                {block.field_type === "textarea" ? (
                  <Textarea
                    rows={Math.min(12, Math.max(3, Math.ceil(value.length / 80)))}
                    value={value}
                    onChange={(e) =>
                      setEdits((prev) => ({ ...prev, [block.id]: e.target.value }))
                    }
                  />
                ) : (
                  <Input
                    value={value}
                    onChange={(e) =>
                      setEdits((prev) => ({ ...prev, [block.id]: e.target.value }))
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPageContent;
