import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import aboutChurch from "@/assets/about-church.jpg";
import youthMeeting from "@/assets/youth-meeting-1.jpg";
import afterService from "@/assets/after-service-1.jpg";
import { Target, Eye, Heart, BookOpen, History } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PublicLayout>
      <PageHero
        title="About Us"
        subtitle="Discover our story, mission, and vision"
        backgroundImage={aboutChurch}
      />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                House of Living Hope Gospel Ministry (simply known as House of Living Hope) was founded on <strong className="text-foreground">June 5th, 2011</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The mandate upon which the ministry was established was received by God's servant (Dr. Patrick Anidi) after a 2-hour vision of the noon day (12noon – 3pm) at Fina White Hotel in Kaduna (North Western region of Nigeria) in 1996 while on a research assignment to the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The ministry believes that success is possible with the right frame of mind; it delights in cases of failures that became heroes; and is so passionate about seeking knowledge because in its view, <em>"growth comes from knowledge"</em>. It also teaches that living right is the ultimate pathway to total deliverance and freedom.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={youthMeeting} alt="Youth in meeting at House of Living Hope" className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "To make people see possibilities in our world. — Luke 1:37",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To build people's confidence and hope through messages and teaching evidenced in the Bible. — Gen 45:27",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-lg bg-card border border-border"
              >
                <item.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Core Values & What We Say */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg bg-muted/50">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Our Core Values</h3>
              <div className="space-y-4">
                {[
                  { icon: Heart, title: "Respect for Others", desc: "We treat everyone with dignity and honor." },
                  { icon: BookOpen, title: "Knowledge", desc: "Growth comes from knowledge — we pursue it relentlessly." },
                  { icon: Target, title: "Integrity", desc: "We live right as the pathway to total deliverance and freedom." },
                ].map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <value.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-lg bg-secondary/10 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">What We Say</h3>
              <blockquote className="text-lg italic text-foreground leading-relaxed">
                "I can do all things through Christ which strengthens me!"
              </blockquote>
              <p className="text-secondary font-medium mt-2">— Philippians 4:13</p>
            </div>
          </div>

          {/* Our Purpose */}
          <div className="text-center mb-16 p-10 rounded-lg bg-card border border-border">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Purpose</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our purpose, which is a blend of our vision and mission statement, is to make people see possibilities in our world; and thus build people's confidence and hope through messages and teaching evidenced in the Bible.
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since 2011 to-date, the ministry distributes items to selected needy centres including Little Saints Orphanages, Sisters of Mother Teresa Motherless Babies Home, and Charity Mission Empowerment Foundation.
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
          <p className="text-primary-foreground/70 mb-6">
            From the divine call in 1996 to the reality birth in 2011 and beyond — discover the milestones of our ministry.
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
