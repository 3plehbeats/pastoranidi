import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import aboutChurch from "@/assets/about-church.jpg";
import drAnidiQuote from "@/assets/dr-anidi-quote.jpeg";
import afterService from "@/assets/after-service-1.jpg";
import { Target, Eye, Heart, BookOpen, History } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageContent } from "@/hooks/usePageContent";

const About = () => {
  const { get } = usePageContent("about");

  const coreValueIcons = [Heart, BookOpen, Target];

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "About Us")}
        subtitle={get("hero_subtitle", "Discover our story, mission, and vision")}
        backgroundImage={aboutChurch}
      />

      {/* Quote Banner */}
      <section className="bg-background py-10 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <blockquote className="font-serif text-lg md:text-xl italic text-foreground/90 leading-relaxed whitespace-pre-line">
              {get("quote_text", '"Success is possible with the right frame of mind; you can become "somebody from nobody"; growth comes from knowledge."')}
            </blockquote>
            <p className="text-secondary font-semibold mt-3">— {get("quote_author", "Dr. Patrick Anidi")}</p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src={drAnidiQuote} alt="Dr. Patrick Anidi" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-secondary/30" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("story_p1", "House of Living Hope Gospel Ministry (simply known as House of Living Hope) was founded on June 5th, 2011.")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("story_p2", "The mandate upon which the ministry was established was received by God's servant (Dr. Patrick Anidi) after a 2-hour vision of the noon day (12noon – 3pm) at Fina White Hotel in Kaduna (North Western region of Nigeria) in 1996 while on a research assignment to the region.")}
              </p>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {get("story_p3", "The ministry believes that success is possible with the right frame of mind; it delights in cases of failures that became heroes; and is so passionate about seeking knowledge because in its view, \"growth comes from knowledge\". It also teaches that living right is the ultimate pathway to total deliverance and freedom.")}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutChurch} alt="Church members in fellowship" className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg bg-card border border-border">
              <Eye className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {get("vision_text", "To make people see possibilities in our world. — Luke 1:37")}
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Target className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {get("mission_text", "To build people's confidence and hope through messages and teaching evidenced in the Bible. — Gen 45:27")}
              </p>
            </div>
          </div>

          {/* Core Values & What We Say */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg bg-muted/50">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Our Core Values</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((n) => {
                  const Icon = coreValueIcons[n - 1];
                  return (
                    <div key={n} className="flex items-start gap-3">
                      <Icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {get(`core_value_${n}_title`, "")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {get(`core_value_${n}_desc`, "")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-8 rounded-lg bg-secondary/10 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">What We Say</h3>
              <blockquote className="text-lg italic text-foreground leading-relaxed whitespace-pre-line">
                {get("wesay_quote", '"I can do all things through Christ which strengthens me!"')}
              </blockquote>
              <p className="text-secondary font-medium mt-2">— {get("wesay_ref", "Philippians 4:13")}</p>
            </div>
          </div>

          {/* Our Purpose */}
          <div className="text-center mb-16 p-10 rounded-lg bg-card border border-border">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Purpose</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
              {get("purpose_text", "Our purpose, which is a blend of our vision and mission statement, is to make people see possibilities in our world; and thus build people's confidence and hope through messages and teaching evidenced in the Bible.")}
            </p>
          </div>

          {/* Charity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={afterService} alt="Church members after service" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Living Care <span className="text-secondary">(Charity)</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("charity_text", "Since 2011 to-date, the ministry distributes items to selected needy centres including Little Saints Orphanages, Sisters of Mother Teresa Motherless Babies Home, and Charity Mission Empowerment Foundation.")}
              </p>
              <Link
                to="/living-care"
                className="inline-block border-2 border-secondary text-secondary font-semibold px-6 py-2 rounded-md hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Learn More About Living Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Events Link */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <History className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold mb-4">Our Historic Journey</h2>
          <p className="text-primary-foreground/70 mb-6 whitespace-pre-line">
            {get("history_cta_text", "From the divine call in 1996 to the reality birth in 2011 and beyond — discover the milestones of our ministry.")}
          </p>
          <Link
            to="/history"
            className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors"
          >
            View Our History
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
