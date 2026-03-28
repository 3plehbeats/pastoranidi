import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Clock, BookOpen, Video, MapPin } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import youthMeeting from "@/assets/youth-meeting-2.jpg";

const Services = () => {
  return (
    <PublicLayout>
      <PageHero title="Our Programs" subtitle="Join us in worship and fellowship" backgroundImage={hero1} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            At the moment, House of Living Hope Gospel Ministry is known for two (2) services or programs:
          </p>

          <div className="space-y-10">
            {/* Word of Hope */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-secondary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  WORD of HOPE
                </h2>
              </div>
              <div className="flex items-center gap-2 text-secondary text-sm mb-6">
                <Clock className="h-4 w-4" />
                <span>Sundays — 9:00 AM – 11:00 AM</span>
                <span className="mx-2">·</span>
                <MapPin className="h-4 w-4" />
                <span>Main Auditorium</span>
              </div>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Our Sunday services are teaching oriented, insightfully derived from biblical evidences. They are two-hour services from 9am – 11am.
                </p>
                <p>
                  This service is also prophetic in nature; usually, every <strong className="text-foreground">first Sunday</strong> service comes with <strong className="text-foreground">Impartation</strong> where we lay hands on attendees. We PRAY and God's numerous blessings are BESTOWED on the people. As Moses was to Joshua (Deut 34:9); and Paul was to the Romans (Romans 1:11-12) and Timothy (1 Timothy 4:14); so is every Impartation service to worshippers in our ministry.
                </p>
                <p>
                  Similarly, every <strong className="text-foreground">last Sunday</strong> of each month, we observe <strong className="text-foreground">Holy Communion/Passover service</strong>. We believe that Holy Communion/Passover should be observed regularly; the origin is not man but God. Therefore, taking Holy Communion is a mark of obedience to God's command (Exodus 12:17, 24–28; Luke 22:19–20).
                </p>
                <p>
                  Many members or attendees often share testimonies of what the body and blood of Jesus Christ did for them. The body and the blood of Jesus Christ is actually working wonders and miracles in people's lives.
                </p>
              </div>
            </div>

            {/* Night of Prayer */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Video className="h-8 w-8 text-secondary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  NIGHT OF PRAYER (NOP)
                </h2>
              </div>
              <div className="flex items-center gap-2 text-secondary text-sm mb-6">
                <Clock className="h-4 w-4" />
                <span>Thursdays — 9:00 PM – 10:00 PM (Online)</span>
                <span className="mx-2">·</span>
                <span>ZOOM & Facebook</span>
              </div>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  This is our mid-week prayer meeting. It is interdenominational and takes place online on ZOOM and Facebook every Thursday evening between 9pm and 10pm.
                </p>
                <p>
                  The service is teaching in dimension and also prophetic in nature. So many testimonies abound from every service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image */}
      <section className="py-0">
        <img src={youthMeeting} alt="Youth fellowship meeting" className="w-full h-64 md:h-96 object-cover" />
      </section>
    </PublicLayout>
  );
};

export default Services;
