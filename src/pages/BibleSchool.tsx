import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { BookOpen, GraduationCap, Calendar, Users } from "lucide-react";

const BibleSchool = () => {
  return (
    <PublicLayout>
      <PageHero
        title="Bible School"
        subtitle="Grow deeper in God's Word through structured biblical education"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Welcome to Our Bible School
            </h2>
            <p className="text-muted-foreground text-lg">
              Our Bible School is designed to equip believers with a solid foundation in
              Scripture, sound doctrine, and practical ministry skills. Whether you are a
              new believer or a seasoned Christian, there is a place for you to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: BookOpen,
                title: "Biblical Studies",
                description: "In-depth study of Old and New Testament books",
              },
              {
                icon: GraduationCap,
                title: "Theology",
                description: "Systematic and practical theology courses",
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Classes designed to fit your lifestyle",
              },
              {
                icon: Users,
                title: "Community",
                description: "Learn and grow together with fellow believers",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center bg-primary/5 border border-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              Enrolment Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We are preparing an exciting curriculum for the next session. Stay connected
              with us for enrolment details and class schedules.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default BibleSchool;
