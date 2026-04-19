import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Heart, Building } from "lucide-react";
import partnerImg from "@/assets/partner-with-us.jpg";
import { usePageContent } from "@/hooks/usePageContent";

const Partner = () => {
  const { get } = usePageContent("partner");

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Partner With Us")}
        subtitle={get("hero_subtitle", "Make your fingerprints show on the Lord's projects")}
        backgroundImage={partnerImg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            <p className="whitespace-pre-line">{get("intro_p1", "")}</p>
            <p className="whitespace-pre-line">{get("intro_p2", "")}</p>
            <p className="whitespace-pre-line">{get("intro_p3", "")}</p>
            <p className="whitespace-pre-line">{get("intro_p4", "")}</p>
          </div>

          {/* Bank Details */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-6">
              Send Your Financial Support
            </h2>

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

          <div className="text-center mt-12">
            <p className="text-muted-foreground italic whitespace-pre-line">
              {get("closing", "Once again, thank you for allowing God use you to promote His work; your support makes a lot of difference!")}
            </p>
            <p className="font-serif text-secondary font-semibold mt-2">— {get("closing_signoff", "Dr. Patrick Anidi")}</p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Partner;
