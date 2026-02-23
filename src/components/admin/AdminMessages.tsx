import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setMessages(data);
        setLoading(false);
      });
  }, []);

  const markRead = async (id: string) => {
    await supabase.from("contact_messages").update({ is_read: true }).eq("id", id);
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, is_read: true } : m)));
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="text-muted-foreground">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-6 rounded-lg bg-card border transition-colors cursor-pointer ${
                msg.is_read ? "border-border" : "border-secondary/40 bg-secondary/5"
              }`}
              onClick={() => !msg.is_read && markRead(msg.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-foreground">{msg.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3 w-3" /> {msg.email}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!msg.is_read && <Badge className="bg-secondary text-secondary-foreground">New</Badge>}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(msg.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
              {msg.subject && <p className="text-sm font-medium text-foreground mb-1">{msg.subject}</p>}
              <p className="text-sm text-muted-foreground">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
