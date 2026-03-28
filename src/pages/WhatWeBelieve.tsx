import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import hero1 from "@/assets/hero-1.jpg";

const beliefs = [
  {
    title: "The Bible",
    text: "The Bible is the WORD of God; it is the TREASURE POT for every SUCCESS. The writings in both the Old and New Testaments scriptures as verbally inspired of God; and are inerrant (i.e. free from errors) in the various matters of interest.",
  },
  {
    title: "The Trinity",
    text: "God is a trinity of persons: the Father, the Son, and the Holy Spirit. These three persons are one and they have the same nature, attributes and perfection.",
  },
  {
    title: "Jesus Christ",
    text: "Jesus Christ was conceived by the Holy Spirit, born of the virgin Mary, and is the only and true son of God who shed His blood for the sins of all men as a substitutionary sacrifice on the cross; He arose in the very body, though glorified, in which He had been crucified; He ascended into heaven and is seated at the right hand of God interceding for us all.",
  },
  {
    title: "The Holy Spirit",
    text: "The Holy Spirit is a divine person; He inspired men to write the Scriptures; He convicts the world of sin, of righteousness, and of judgment, and He regenerates those who believe God through Jesus Christ.",
  },
  {
    title: "Baptism of the Holy Spirit",
    text: 'Being baptized or "filled" with the Holy Spirit is a unique and visible event separate from salvation. Everyone that is born again should desire the baptism of the Holy Spirit.',
  },
  {
    title: "Salvation",
    text: "Salvation is through Jesus Christ. Man is justified, regenerated and given the position of a child in the family of God through faith in the crucified and risen Jesus Christ.",
  },
  {
    title: "Holy Communion",
    text: "Passover and Holy Communion are simply the same; the origin is not man but God. Therefore, taking Holy Communion is a mark of obedience to God's command.",
  },
];

const WhatWeBelieve = () => {
  return (
    <PublicLayout>
      <PageHero title="What We Believe" subtitle="Our statement of faith" backgroundImage={hero1} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {beliefs.map((belief, index) => (
              <div key={belief.title} className="p-8 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-lg">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{belief.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{belief.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WhatWeBelieve;
