import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Heart, Phone } from "lucide-react";
import afterService from "@/assets/after-service-1.jpg";
import { Link } from "react-router-dom";

const LivingCare = () => {
  return (
    <PublicLayout>
      <PageHero title="Living Care" subtitle="Our charity arm — bringing hope to the less-privileged" backgroundImage={afterService} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Giving <span className="text-secondary">Hope</span>
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Living Care is the charity arm of House of Living Hope Gospel Ministry. Each time you support this charity arm through cash donation or provision of items (foods, clothing, etc.) in our ministry, it is recorded and credited in your favour in fulfilment of the Scripture.
            </p>

            <blockquote className="border-l-4 border-secondary pl-6 italic text-foreground">
              "Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal; But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal. For where your treasure is, there will your heart be also." — Matthew 6:19-21
            </blockquote>

            <p>
              Over the years, several hundreds of people have been transformed through provision of essentials of life which include but not limited to Shelter, Medicare, Clothings, Foods, Training and Scholarship among others to the less-privileged in our society.
            </p>

            <p>
              Our ministry also partners with <strong className="text-foreground">Charity Missions Empowerment Foundation (CMEF)</strong> — an NGO with mission activities across rural Nigeria, Ghana, Togo & Niger Republic among others. CMEF was founded by Rev (Dr.) & Rev (Mrs) Ngozi Oluwagbemiga with the sole mission of giving hope to the less-privileged (orphans, widows, old people, etc.) in our world.
            </p>

            <p>We trust God to keep His grace with us continually in order to continue unabated.</p>

            <div className="p-6 rounded-lg bg-secondary/10 mt-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">We Need Your Support</h3>
              <p className="text-muted-foreground mb-4">For goods donation, call or SMS:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">Juliet: +234 802 748 4615</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">Goodluck: +234 814 380 9010</span>
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
