import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import aboutBg from "@/assets/about-bg.jpg";

const events = [
  { year: "1996", title: "The Call & Mandate", text: 'God called His servant after a 2-hour vision of the noon day (12noon – 3pm) at Fina White Hotel, Kaduna and handed the mandate – "Go and Preach Hope unto My People" to him.' },
  { year: "1996–1997", title: "A Roving Minister", text: "God's servant was moved by the Holy Spirit; he began to divide the Word of Truth in buses on transit across the regions of Nigeria. This was God's test to assess His servant's readiness for the call." },
  { year: "1998–2011", title: "Experiential Training", text: "God's servant was divinely sent to be trained in other ministries for 15 years preparatory for the God-given assignment." },
  { year: "June 5, 2011", title: "Birth of House of Living Hope", text: "The assignment was given an identity; the ministry was born and named House of Living Hope. First service was held with nine (9) family member worshippers at Duban Hotel, Ogba, Lagos." },
  { year: "September 2011", title: "Pastors Joined", text: "Four (4) experienced pastors independently joined the church (by the leading of God) to help lift up the hands of God's servant to accomplish the God-given mandate." },
  { year: "December 2011", title: "Living Care Was Born", text: "The charity arm was established. The ministry started distributing materials and food items to selected needy centres including orphanages and homes for the aged." },
  { year: "July 1, 2012", title: "Inauguration & Consecration", text: "House of Living Hope was formally inaugurated by Bishop Reuben Ifovbua, Presiding Bishop of Christ Life & Image Church, Lagos. Pastor Patrick was consecrated Reverend." },
  { year: "August 2013", title: "PFN Appointment", text: "Pastor Patrick was appointed Assistant Secretary by the Pentecostal Fellowship of Nigeria (PFN), Ikeja Chapter, Lagos." },
  { year: "December 1, 2013", title: "Moved Forward", text: "House of Living Hope moved out of Duban Hotel, Ogba into a leased property in Ogba. The property was reconstructed to fit the purpose of the ministry." },
  { year: "December 2013", title: "Knowledge Acquisition", text: "Dr. Patrick Anidi completed his Masters and Ph.D courses at Triune Biblical University, Washington DC." },
  { year: "June 2016", title: "CAN Appointment", text: "Dr. Patrick Anidi was appointed Assistant Chairman (Coordinator) of Christian Association of Nigeria (CAN) – Ikeja LGA." },
  { year: "December 2016", title: "Academic Board", text: "Dr. Patrick Anidi was admitted into the Academic Board of Triune Biblical University (Nigeria Extension)." },
];

const HistoricEvents = () => {
  return (
    <PublicLayout>
      <PageHero title="Our History" subtitle="Key milestones in our journey of faith" backgroundImage={aboutBg} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="relative border-l-2 border-secondary/30 pl-8 space-y-10">
            {events.map((event) => (
              <div key={event.year + event.title} className="relative">
                <div className="absolute -left-[2.55rem] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                <span className="inline-block text-sm font-bold text-secondary mb-1">{event.year}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HistoricEvents;
