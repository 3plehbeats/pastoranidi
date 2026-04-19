import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import hero3 from "@/assets/hero-3.jpg";
import { usePageContent } from "@/hooks/usePageContent";

const WordsOfWisdom = () => {
  const { get } = usePageContent("wisdom");
  // Up to 12 categories, each with up to 8 quotes
  const categoryNumbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const quoteNumbers = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Words of Wisdom")}
        subtitle={get("hero_subtitle", "Timeless insights for daily living")}
        backgroundImage={hero3}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto whitespace-pre-line">
            {get("intro", "A few of the arrays of words of wisdom from different individuals whose words have helped shape and are still shaping our world for good!")}
          </p>

          <div className="space-y-12">
            {categoryNumbers.map((c) => {
              const cKey = String(c).padStart(2, "0");
              const title = get(`cat_${cKey}_title`, "");
              const quotes = quoteNumbers
                .map((q) => ({
                  text: get(`cat_${cKey}_q${q}_text`, ""),
                  author: get(`cat_${cKey}_q${q}_author`, ""),
                }))
                .filter((q) => q.text);
              if (!title && quotes.length === 0) return null;
              return (
                <div key={c}>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    <span className="text-secondary">●</span> {title}
                  </h2>
                  <div className="space-y-4">
                    {quotes.map((q, i) => (
                      <blockquote key={i} className="p-6 rounded-lg bg-card border border-border">
                        <p className="italic text-foreground leading-relaxed mb-2 whitespace-pre-line">"{q.text}"</p>
                        <footer className="text-sm text-secondary font-medium">— {q.author}</footer>
                      </blockquote>
                    ))}
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

export default WordsOfWisdom;
