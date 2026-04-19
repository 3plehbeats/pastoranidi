import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Heart, Phone } from "lucide-react";
import afterService from "@/assets/after-service-1.jpg";
import { Link } from "react-router-dom";
import { usePageContent } from "@/hooks/usePageContent";

const LivingCare = () => {
  const { get } = usePageContent("living-care");

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Living Care")}
        subtitle={get("hero_subtitle", "Our charity arm — bringing hope to the less-privileged")}
        backgroundImage={afterService}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              {get("heading", "Giving Hope")}
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p className="whitespace-pre-line">{get("p1", "")}</p>

            <blockquote className="border-l-4 border-secondary pl-6 italic text-foreground whitespace-pre-line">
              {get("quote", "")}
            </blockquote>

            <p className="whitespace-pre-line">{get("p2", "")}</p>
            <p className="whitespace-pre-line">{get("p3", "")}</p>
            <p className="whitespace-pre-line">{get("p4", "We trust God to keep His grace with us continually in order to continue unabated.")}</p>

            <div className="p-6 rounded-lg bg-secondary/10 mt-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">We Need Your Support</h3>
              <p className="text-muted-foreground mb-4">For goods donation, call or SMS:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">Juliet: {get("contact_juliet", "+234 802 748 4615")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">Goodluck: {get("contact_goodluck", "+234 814 380 9010")}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to="/partner"
                  className="inline-block bg-secondary text-secondary-foreground font-semibold px-6 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Partner With Us Financially
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default LivingCare;
