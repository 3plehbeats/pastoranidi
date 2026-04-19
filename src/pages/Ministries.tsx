import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Music, Users, UserCheck, Flame, BookOpen, Globe, Heart, Church, HandHeart } from "lucide-react";
import youthMeeting1 from "@/assets/youth-meeting-1.jpg";
import { Link } from "react-router-dom";
import { usePageContent } from "@/hooks/usePageContent";

const ministryIcons = [Music, Heart, UserCheck, Flame, BookOpen, Globe, Users, Church, HandHeart];
const ministryLinks: Record<number, string> = { 9: "/living-care" };
const ministrySchedules: Record<number, string> = {};

const Ministries = () => {
  const { get } = usePageContent("ministries");
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Our Ministries")}
        subtitle={get("hero_subtitle", "Fellowship groups nurturing every member of God's family")}
        backgroundImage={youthMeeting1}
      />

      {/* Quote Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-serif text-lg md:text-xl italic text-primary-foreground/90 max-w-3xl mx-auto whitespace-pre-line">
            {get("quote_text", '"The main end of our lives is to serve God in the serving of men in the works of our callings."')}
          </blockquote>
          <p className="text-secondary font-semibold mt-2">— {get("quote_author", "Unknown")}</p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Ministries within <span className="text-secondary">House of Living Hope</span>
            </h2>
          </div>

          <div className="space-y-16">
            {numbers.map((n, index) => {
              const key = String(n).padStart(2, "0");
              const name = get(`m${key}_name`, "");
              const subtitle = get(`m${key}_subtitle`, "");
              const body = get(`m${key}_body`, "");
              const quote = get(`m${key}_quote`, "");
              const cta = get(`m${key}_cta`, "");
              const schedule = ministrySchedules[n];
              const link = ministryLinks[n];
              const Icon = ministryIcons[index] || Users;
              const paragraphs = body.split(/\n\s*\n/).filter(Boolean);
              if (!name && !body) return null;
              return (
                <article key={n} className="scroll-mt-24" id={name.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {n}. {name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-16">
                    {paragraphs.map((p, i) => (
                      <p key={i} className="whitespace-pre-line">{p}</p>
                    ))}

                    {quote && (
                      <blockquote className="border-l-4 border-secondary pl-6 italic text-foreground my-6 whitespace-pre-line">
                        {quote}
                      </blockquote>
                    )}

                    {schedule && (
                      <p className="font-semibold text-foreground">📅 {schedule}</p>
                    )}

                    {cta && (
                      <p className="text-foreground font-medium mt-4 whitespace-pre-line">{cta}</p>
                    )}

                    {link && (
                      <Link
                        to={link}
                        className="inline-block mt-2 bg-secondary text-secondary-foreground font-semibold px-6 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>

                  {index < numbers.length - 1 && <hr className="mt-12 border-border" />}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Ministries;
