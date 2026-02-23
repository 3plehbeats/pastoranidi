import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Heart, CreditCard, Building, Phone } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const Donate = () => {
  return (
    <PublicLayout>
      <PageHero title="Give & Donate" subtitle="Support the work of God" backgroundImage={hero2} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Your Generosity Makes a <span className="text-secondary">Difference</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or 
              under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <Building className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Bank Transfer</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Bank:</span> First Bank of Nigeria</p>
                    <p><span className="font-medium text-foreground">Account Name:</span> House of Living Hope</p>
                    <p><span className="font-medium text-foreground">Account Number:</span> 0123456789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <CreditCard className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Online Giving</h3>
                  <p className="text-muted-foreground mb-4">
                    Give conveniently online. Contact the church office for more information on our online giving platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Mobile Transfer</h3>
                  <p className="text-muted-foreground">
                    You can also give via mobile money transfer. Contact us at{" "}
                    <span className="text-secondary">+234 800 000 0000</span> for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Donate;
