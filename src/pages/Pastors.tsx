import { useEffect, useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/integrations/supabase/client";
import { User } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

interface Pastor {
  id: string;
  name: string;
  title: string;
  bio: string | null;
  image_url: string | null;
}

const Pastors = () => {
  const [pastors, setPastors] = useState<Pastor[]>([]);

  useEffect(() => {
    supabase
      .from("pastors")
      .select("*")
      .eq("is_active", true)
      .order("sort_order")
      .then(({ data }) => {
        if (data) setPastors(data);
      });
  }, []);

  return (
    <PublicLayout>
      <PageHero title="Our Pastors" subtitle="Meet the leaders of our church family" backgroundImage={hero3} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          {pastors.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">
              Pastor profiles coming soon. Check back later!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastors.map((pastor) => (
                <div
                  key={pastor.id}
                  className="rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  {pastor.image_url ? (
                    <img
                      src={pastor.image_url}
                      alt={pastor.name}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 bg-muted flex items-center justify-center">
                      <User className="h-20 w-20 text-muted-foreground/30" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {pastor.name}
                    </h3>
                    <p className="text-secondary text-sm font-medium mb-3">{pastor.title}</p>
                    {pastor.bio && (
                      <p className="text-muted-foreground text-sm leading-relaxed">{pastor.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Pastors;
