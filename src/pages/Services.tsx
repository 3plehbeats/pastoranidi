import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Clock, BookOpen, Video, MapPin } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import youthMeeting from "@/assets/youth-meeting-2.jpg";
import { usePageContent } from "@/hooks/usePageContent";

const Services = () => {
  const { get } = usePageContent("services");

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Our Programs")}
        subtitle={get("hero_subtitle", "Join us in worship and fellowship")}
        backgroundImage={hero1}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto whitespace-pre-line">
            {get("intro", "At the moment, House of Living Hope Gospel Ministry is known for two (2) services or programs:")}
          </p>

          <div className="space-y-10">
            {/* Word of Hope */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-secondary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {get("woh_title", "WORD of HOPE")}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-secondary text-sm mb-6 flex-wrap">
                <Clock className="h-4 w-4" />
                <span>{get("woh_schedule", "Sundays — 9:00 AM – 11:00 AM · Main Auditorium")}</span>
              </div>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p className="whitespace-pre-line">{get("woh_p1", "")}</p>
                <p className="whitespace-pre-line">{get("woh_p2", "")}</p>
                <p className="whitespace-pre-line">{get("woh_p3", "")}</p>
                <p className="whitespace-pre-line">{get("woh_p4", "")}</p>
              </div>
            </div>

            {/* Night of Prayer */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Video className="h-8 w-8 text-secondary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {get("nop_title", "NIGHT OF PRAYER (NOP)")}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-secondary text-sm mb-6 flex-wrap">
                <Clock className="h-4 w-4" />
                <span>{get("nop_schedule", "Thursdays — 9:00 PM – 10:00 PM (Online) · ZOOM & Facebook")}</span>
              </div>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p className="whitespace-pre-line">{get("nop_p1", "")}</p>
                <p className="whitespace-pre-line">{get("nop_p2", "")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image */}
      <section className="py-0">
        <img src={youthMeeting} alt="Youth fellowship meeting" className="w-full h-64 md:h-96 object-cover" />
      </section>
    </PublicLayout>
  );
};

export default Services;
