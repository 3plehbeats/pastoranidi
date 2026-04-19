import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Heart, Building } from "lucide-react";
import partnerImg from "@/assets/partner-with-us.jpg";
import { Link } from "react-router-dom";
import { usePageContent } from "@/hooks/usePageContent";

const Donate = () => {
  const { get } = usePageContent("donate");

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Give & Donate")}
        subtitle={get("hero_subtitle", "Support the work of God")}
        backgroundImage={partnerImg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              {get("heading", "Your Generosity Makes a Difference")}
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line italic">
              {get("intro_quote", '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <Building className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Domiciliary Account</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Account Name:</span> {get("dom_account_name", "House of Living Hope Gospel Ministry")}</p>
                    <p><span className="font-medium text-foreground">Bank:</span> {get("dom_bank", "First Bank of Nigeria Plc.")}</p>
                    <p><span className="font-medium text-foreground">Account Number:</span> {get("dom_account_no", "2033153665")}</p>
                    <p><span className="font-medium text-foreground">SWIFT Code:</span> {get("dom_swift", "FBNINGLA")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <Building className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Local/Naira Account</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Account Name:</span> {get("naira_account_name", "House of Living Hope Gospel Ministry")}</p>
                    <p><span className="font-medium text-foreground">Bank:</span> {get("naira_bank", "First Bank of Nigeria Plc.")}</p>
                    <p><span className="font-medium text-foreground">Account Number:</span> {get("naira_account_no", "2023621730")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/partner"
              className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Learn More About Partnering With Us
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Donate;
