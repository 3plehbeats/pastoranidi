import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import aboutBg from "@/assets/about-bg.jpg";
import { Target, Eye, Heart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <PublicLayout>
      <PageHero
        title="About Us"
        subtitle="Discover our story, mission, and vision"
        backgroundImage={aboutBg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-secondary">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              House of Living Hope was founded with a burning desire to create a place where 
              people from all walks of life can encounter the living God. Situated in the heart 
              of Ojodu Berger, Lagos, our church has grown into a vibrant community of believers 
              committed to worship, discipleship, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To build people's confidence and hope through messages and teaching evidenced in the Bible. — Gen 45:27",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To make people see possibilities in our world. — Luke 1:37",
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

          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">
              Our Core <span className="text-secondary">Values</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Love", desc: "We love God and love people unconditionally." },
                { icon: BookOpen, title: "Word", desc: "We are rooted in the truth of God's Word." },
                { icon: Target, title: "Purpose", desc: "We help people discover and fulfill their purpose." },
                { icon: Eye, title: "Excellence", desc: "We pursue excellence in all we do for God's glory." },
              ].map((value) => (
                <div key={value.title} className="text-center p-6 rounded-lg bg-muted/50">
                  <value.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-serif font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
