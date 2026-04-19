import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import aboutBg from "@/assets/about-bg.jpg";
import { usePageContent } from "@/hooks/usePageContent";

const HistoricEvents = () => {
  const { get } = usePageContent("history");
  const eventNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Our History")}
        subtitle={get("hero_subtitle", "Key milestones in our journey of faith")}
        backgroundImage={aboutBg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="relative border-l-2 border-secondary/30 pl-8 space-y-10">
            {eventNumbers.map((n) => {
              const key = String(n).padStart(2, "0");
              const year = get(`event_${key}_year`, "");
              const title = get(`event_${key}_title`, "");
              const text = get(`event_${key}_text`, "");
              if (!year && !title && !text) return null;
              return (
                <div key={n} className="relative">
                  <div className="absolute -left-[2.55rem] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                  <span className="inline-block text-sm font-bold text-secondary mb-1">{year}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HistoricEvents;
