import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Heart, Building } from "lucide-react";
import partnerImg from "@/assets/partner-with-us.jpg";

const Partner = () => {
  return (
    <PublicLayout>
      <PageHero title="Partner With Us" subtitle="Make your fingerprints show on the Lord's projects" backgroundImage={partnerImg} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            <p>
              Thank you so much for your interest to partner with our ministry and making your fingerprints show on the Lord's projects; obviously, no individual irrespective of his or her anointing can achieve success alone. Our Lord Jesus Christ did not do the work alone; He called men to Himself (Mark 3:13-14).
            </p>
            <p>
              From one generation to another, God has always used people to promote His work (Isaiah 6:8 and 1 Chronicles 29:1-9). Interestingly, only the life lived for God's work is life worthwhile (Mark 8:34-37; take note of verse 37). Givers never lack; and this is the reason the fragrance always remains on the hand that gives the rose.
            </p>
            <p>
              Each year, Dr. Patrick and the associate pastors meet with all our partners where he does not only brief them of activities of the ministry but most importantly share the word, pray, prophesy and anoint them.
            </p>
            <p>
              While no man of God (MOG) can reward all your support for the kingdom business, the God of Man (GOM) who is the owner of the kingdom business will reward you abundantly as you partner with us regularly and committedly.
            </p>
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
                    <p><span className="font-medium text-foreground">Account Name:</span> House of Living Hope Gospel Ministry</p>
                    <p><span className="font-medium text-foreground">Bank:</span> First Bank of Nigeria Plc.</p>
                    <p><span className="font-medium text-foreground">Account Number:</span> 2033153665</p>
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
                    <p><span className="font-medium text-foreground">Account Name:</span> House of Living Hope Gospel Ministry</p>
                    <p><span className="font-medium text-foreground">Bank:</span> First Bank of Nigeria Plc.</p>
                    <p><span className="font-medium text-foreground">Account Number:</span> 2023621730</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              Once again, thank you for allowing God use you to promote His work; your support makes a lot of difference!
            </p>
            <p className="font-serif text-secondary font-semibold mt-2">— Dr. Patrick Anidi</p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Partner;
