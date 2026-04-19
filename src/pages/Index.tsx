import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, BookOpen, Heart, Users, Handshake } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";
import HeroSlider from "@/components/HeroSlider";
import { supabase } from "@/integrations/supabase/client";
import { usePageContent } from "@/hooks/usePageContent";
import welcomeImg from "@/assets/welcome-church.jpg";
import quoteImg from "@/assets/quote-pastor.jpg";
import believeImg from "@/assets/leaders-collage.jpg";

const Index = () => {
  const [slides, setSlides] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const { get } = usePageContent("home");

  useEffect(() => {
    supabase
      .from("hero_slides")
      .select("*")
      .eq("is_active", true)
      .order("sort_order")
      .then(({ data }) => {
        if (data && data.length > 0) setSlides(data);
      });
    supabase
      .from("youtube_videos")
      .select("*")
      .eq("is_active", true)
      .order("sort_order")
      .then(({ data }) => {
        if (data) setVideos(data);
      });
  }, []);

  const fallbackVideos = [
    { video_id: "kEGYyRdLStw", title: "FEAR NOT (Help is on the way)" },
    { video_id: "IeCeyId1ahI", title: "FEAR NOT You are Secured" },
    { video_id: "cJzI3Ap2Lnk", title: "FEAR NOT More about Fear" },
  ];
  const displayVideos = videos.length > 0 ? videos : fallbackVideos;

  return (
    <PublicLayout>
      <HeroSlider slides={slides.length > 0 ? slides : undefined} />

      {/* Ministry Quote */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img src={quoteImg} alt="Dr. Patrick Anidi" className="w-48 h-48 rounded-full object-cover border-4 border-secondary shadow-lg" />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-4">
                {get("quote_text", '"You can help to redesign tomorrow today, to make it more interesting for tomorrow generation"')}
              </p>
              <p className="text-secondary font-semibold">— {get("quote_author", "Dr. Patrick Anidi")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {get("welcome_heading", "Welcome to House of Living Hope")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("welcome_p1", "Calvary greetings to you in the unalloyed name of our Lord Jesus Christ. Whether you are a long-time member or a first-time visitor, we are glad to meet with you here!")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("welcome_p2", "Our vision is to make people see possibilities in our world (Luke 1:37), and our mission is to build people's confidence and hope through messages and teaching evidenced in the Bible (Gen 45:27).")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("welcome_p3", "To us, the Bible is the TREASURE POT for every SUCCESS. Only those who embrace and study the Bible discover the best formula for their lives (2 Timothy 2:15, Psalm 25:14; Isaiah 45:3).")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                {get("welcome_p4", "Our core values are anchored on respect for others, knowledge, and integrity.")}
              </p>
              <Link
                to="/about"
                className="inline-block border-2 border-secondary text-secondary font-semibold px-8 py-3 rounded-md hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={welcomeImg} alt="Church congregation in worship" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Highlight */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We <span className="text-secondary">Believe</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                {get("believe_p1", "We believe that the FORMULA for effective deliverance and freedom from life challenges is knowing JESUS CHRIST; and accepting HIM as our LORD and SAVIOUR (Matthew 11:27-30).")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                {get("believe_p2", "On a typical Sunday morning at our church, men, women, and children of all ages gather for worship and encouragement. Our congregation has a warm and welcoming \"family\" feel.")}
              </p>
              <Link
                to="/what-we-believe"
                className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors"
              >
                Read Our Statement of Faith
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={believeImg} alt="Our church leaders" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Join Us for <span className="text-secondary">Worship</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { day: "WORD of HOPE (Sunday)", time: "9:00 AM – 11:00 AM", icon: Clock },
              { day: "NIGHT OF PRAYER (Thursday)", time: "9:00 PM – 10:00 PM (Online)", icon: BookOpen },
            ].map((service) => (
              <div
                key={service.day}
                className="text-center p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
              >
                <service.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">{service.day}</h3>
                <p className="text-primary-foreground/70">{service.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>13, Oladipupo Oduwowe Street, Beside Bovas Oil Station, Opp. UBA, Ojodu, Lagos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Our Pastors", desc: "Meet the dedicated leaders guiding our church family.", icon: Users, link: "/pastors" },
              { title: "Bookstore", desc: "Explore inspiring books to strengthen your faith journey.", icon: BookOpen, link: "/bookstore" },
              { title: "Partner With Us", desc: "Support the work of God and help transform lives.", icon: Handshake, link: "/partner" },
              { title: "Living Care", desc: "Our charity arm bringing hope to the less-privileged.", icon: Heart, link: "/living-care" },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group p-8 rounded-lg bg-card border border-border hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <item.icon className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Messages / Sermons */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Our <span className="text-secondary">Messages</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Watch our latest sermons and teachings from our YouTube channel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayVideos.map((video: any) => (
              <div key={video.video_id} className="rounded-lg overflow-hidden bg-card border border-border shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.video_id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-foreground">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/channel/UCvjNZvA67jWVKy4kVBYx1Yw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-secondary text-secondary font-semibold px-8 py-3 rounded-md hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              View All Messages on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-lg leading-relaxed mb-6 text-primary-foreground/90 whitespace-pre-line">
            {get("closing_text", "We invite you to join us and discover what has drawn people to our warm congregation. We hope that you too will find House of Living Hope Gospel Ministry to be a Place People See Possibilities in Our World.")}
          </p>
          <p className="text-primary-foreground/70 text-sm">
            Questions? Contact us at{" "}
            <a href="mailto:info@houseoflivinghope.org" className="text-secondary hover:underline">info@houseoflivinghope.org</a>{" · "}
            <a href="mailto:dranidi@houseoflivinghope.org" className="text-secondary hover:underline">dranidi@houseoflivinghope.org</a>{" · "}
            <a href="mailto:paanidi@gmail.com" className="text-secondary hover:underline">paanidi@gmail.com</a>
          </p>
          <p className="font-serif text-secondary mt-6 italic">{get("closing_signoff", "Remain blessed! — Dr. Patrick & Juliet Anidi")}</p>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Index;
