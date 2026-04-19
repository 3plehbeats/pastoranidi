import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import hero1 from "@/assets/hero-1.jpg";
import { usePageContent } from "@/hooks/usePageContent";

const WhatWeBelieve = () => {
  const { get } = usePageContent("what-we-believe");
  const beliefNumbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "What We Believe")}
        subtitle={get("hero_subtitle", "Our statement of faith")}
        backgroundImage={hero1}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {beliefNumbers.map((n, index) => {
              const title = get(`belief_${n}_title`, "");
              const text = get(`belief_${n}_text`, "");
              if (!title && !text) return null;
              return (
                <div key={n} className="p-8 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-lg">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WhatWeBelieve;
