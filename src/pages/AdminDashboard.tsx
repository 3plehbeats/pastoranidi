import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Church, LogOut, Image, Users, Calendar, BookOpen, MessageSquare, FileText, Youtube,
} from "lucide-react";
import AdminSlides from "@/components/admin/AdminSlides";
import AdminPastors from "@/components/admin/AdminPastors";
import AdminServices from "@/components/admin/AdminServices";
import AdminBooks from "@/components/admin/AdminBooks";
import AdminMessages from "@/components/admin/AdminMessages";
import AdminPageContent from "@/components/admin/AdminPageContent";
import AdminVideos from "@/components/admin/AdminVideos";

type Tab = "content" | "slides" | "pastors" | "services" | "books" | "videos" | "messages";

const tabs: { key: Tab; label: string; icon: any }[] = [
  { key: "content", label: "Page Content", icon: FileText },
  { key: "slides", label: "Hero Slides", icon: Image },
  { key: "pastors", label: "Pastors", icon: Users },
  { key: "services", label: "Services", icon: Calendar },
  { key: "books", label: "Books", icon: BookOpen },
  { key: "videos", label: "YouTube Videos", icon: Youtube },
  { key: "messages", label: "Messages", icon: MessageSquare },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) {
        navigate("/admin/login");
        return;
      }
      setUser(session.user);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin/login");
        return;
      }
      setUser(session.user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col shrink-0">
        <div className="p-6 border-b border-primary-foreground/10">
          <div className="flex items-center gap-2">
            <Church className="h-6 w-6 text-secondary" />
            <span className="font-serif font-bold text-sm">Admin Panel</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-secondary/20 text-secondary"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 mb-3 truncate">{user?.email}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl">
          {activeTab === "content" && <AdminPageContent />}
          {activeTab === "slides" && <AdminSlides />}
          {activeTab === "pastors" && <AdminPastors />}
          {activeTab === "services" && <AdminServices />}
          {activeTab === "books" && <AdminBooks />}
          {activeTab === "videos" && <AdminVideos />}
          {activeTab === "messages" && <AdminMessages />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
