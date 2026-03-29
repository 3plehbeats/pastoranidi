import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import hero3 from "@/assets/hero-3.jpg";
import pastorPatrick from "@/assets/pastor-patrick-anidi.jpg";
import julietAnidi from "@/assets/juliet-anidi.jpg";
import comfortNwoke from "@/assets/comfort-nwoke.jpg";
import goodluckIkpefuran from "@/assets/goodluck-ikpefuran.jpg";
import peterEkanem from "@/assets/peter-ekanem.jpg";

const leaders = [
  {
    name: "Dr. Patrick Anidi",
    title: "Senior Pastor / Founder",
    image: pastorPatrick,
    bio: "Dr. Patrick Anidi is the founder of House of Living Hope Gospel Ministry. He received the mandate from God in 1996 after a 2-hour vision at Fina White Hotel in Kaduna, Nigeria. He is a pastor, life coach, business & social economic research consultant, and author of various books and articles. He holds a Masters and Ph.D from Triune Biblical University, Washington DC.",
  },
  {
    name: "Rev. (Mrs.) Juliet Anidi",
    title: "Co-Pastor",
    image: julietAnidi,
    bio: "Rev. Juliet Anidi serves alongside Dr. Patrick Anidi as Co-Pastor of House of Living Hope Gospel Ministry. She is actively involved in the ministry's outreach, charity programs, and the coordination of Living Care — the charity arm of the ministry.",
  },
  {
    name: "Pastor Peter Ekanem",
    title: "Associate Pastor",
    image: peterEkanem,
    bio: "Pastor Peter Ekanem is one of the experienced pastors who joined the church by the leading of God to help lift up the hands of God's servant to accomplish the God-given mandate.",
  },
  {
    name: "Deaconess Comfort Nwoke",
    title: "Deaconess",
    image: comfortNwoke,
    bio: "Deaconess Comfort Nwoke is a dedicated member of the leadership team at House of Living Hope Gospel Ministry, serving faithfully in various capacities within the church.",
  },
  {
    name: "Goodluck Ikpefuran",
    title: "Youth President",
    image: goodluckIkpefuran,
    bio: "Goodluck Ikpefuran serves as the Youth President of House of Living Hope Gospel Ministry, leading the youth in spiritual growth, fellowship, and service to the community.",
  },
];

const Pastors = () => {
  return (
    <PublicLayout>
      <PageHero title="Our Pastors & Leaders" subtitle="Meet the leaders of our church family" backgroundImage={hero3} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          {/* Senior Pastor - Featured */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-card rounded-xl border border-border overflow-hidden shadow-md">
              <img
                src={leaders[0].image}
                alt={leaders[0].name}
                className="w-full md:w-80 h-80 object-cover object-top"
              />
              <div className="p-6 md:py-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">{leaders[0].name}</h2>
                <p className="text-secondary font-semibold mb-4">{leaders[0].title}</p>
                <p className="text-muted-foreground leading-relaxed">{leaders[0].bio}</p>
              </div>
            </div>
          </div>

          {/* Other Leaders */}
          <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-10">Church Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.slice(1).map((leader) => (
              <div
                key={leader.name}
                className="rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{leader.name}</h3>
                  <p className="text-secondary text-sm font-medium mb-2">{leader.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Pastors;
