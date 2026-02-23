import { useEffect, useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/integrations/supabase/client";
import { Clock, MapPin } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

interface Service {
  id: string;
  name: string;
  description: string | null;
  day_of_week: string;
  time: string;
  location: string | null;
}

const defaultServices: Service[] = [
  { id: "1", name: "Sunday Worship Service", description: "A powerful time of worship, praise, and the Word of God. Come experience God's presence with us.", day_of_week: "Sunday", time: "8:00 AM & 10:30 AM", location: "Main Auditorium" },
  { id: "2", name: "Wednesday Bible Study", description: "Deep dive into the scriptures and grow in your understanding of God's Word.", day_of_week: "Wednesday", time: "6:00 PM", location: "Main Auditorium" },
  { id: "3", name: "Friday Prayer Meeting", description: "A night of fervent prayers and intercession for the nations.", day_of_week: "Friday", time: "6:30 PM", location: "Prayer Hall" },
  { id: "4", name: "Youth Fellowship", description: "A vibrant gathering for young people to connect with God and one another.", day_of_week: "Saturday", time: "4:00 PM", location: "Youth Center" },
];

const Services = () => {
  const [services, setServices] = useState<Service[]>(defaultServices);

  useEffect(() => {
    supabase
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("sort_order")
      .then(({ data }) => {
        if (data && data.length > 0) setServices(data);
      });
  }, []);

  return (
    <PublicLayout>
      <PageHero title="Our Services" subtitle="Join us in worship and fellowship" backgroundImage={hero1} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-lg bg-card border border-border hover:border-secondary/40 transition-colors"
              >
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                {service.description && (
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                )}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-secondary">
                    <Clock className="h-4 w-4" />
                    <span>{service.day_of_week} — {service.time}</span>
                  </div>
                  {service.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Services;
