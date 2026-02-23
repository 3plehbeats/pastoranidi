import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, BookOpen, Heart, Users } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";
import HeroSlider from "@/components/HeroSlider";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("hero_slides")
      .select("*")
      .eq("is_active", true)
      .order("sort_order")
      .then(({ data }) => {
        if (data && data.length > 0) setSlides(data);
      });
  }, []);

  return (
    <PublicLayout>
      <HeroSlider slides={slides.length > 0 ? slides : undefined} />

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to <span className="text-secondary">House of Living Hope</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We are a vibrant community of believers located in Ojodu Berger, Lagos. 
            Our mission is to spread the gospel of Jesus Christ, build strong families, 
            and transform lives through faith, hope, and love.
          </p>
          <Link
            to="/about"
            className="inline-block border-2 border-secondary text-secondary font-semibold px-8 py-3 rounded-md hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Join Us for <span className="text-secondary">Worship</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { day: "Sunday Service", time: "8:00 AM & 10:30 AM", icon: Clock },
              { day: "Wednesday Bible Study", time: "6:00 PM", icon: BookOpen },
              { day: "Friday Prayer Meeting", time: "6:30 PM", icon: Heart },
            ].map((service) => (
              <div
                key={service.day}
                className="text-center p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
              >
                <service.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">{service.day}</h3>
                <p className="text-primary-foreground/70">{service.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Ojodu Berger, Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Pastors",
                desc: "Meet the dedicated leaders guiding our church family.",
                icon: Users,
                link: "/pastors",
              },
              {
                title: "Bookstore",
                desc: "Explore inspiring books to strengthen your faith journey.",
                icon: BookOpen,
                link: "/bookstore",
              },
              {
                title: "Give & Donate",
                desc: "Support the work of God and help transform lives.",
                icon: Heart,
                link: "/donate",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group p-8 rounded-lg bg-card border border-border hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <item.icon className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Index;
