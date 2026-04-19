import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { BookOpen, GraduationCap, Users, Clock, Mail, MessageSquareQuote } from "lucide-react";
import drAnidiImg from "@/assets/dr-anidi-bible-school.jpeg";
import admissionImg from "@/assets/bible-school-admission.jpeg";
import studyImg from "@/assets/bible-school-study.jpeg";
import michaelImg from "@/assets/michael-dimkpa.jpeg";
import titusImg from "@/assets/titus-alvan.jpeg";
import uyoyomaImg from "@/assets/uyoyoma-edafe.jpeg";
import anuoluwapoImg from "@/assets/anuoluwapo-ojo.jpeg";
import omowunmiImg from "@/assets/omowunmi-adubi.jpeg";
import { usePageContent } from "@/hooks/usePageContent";

const BibleSchool = () => {
  const { get } = usePageContent("bible-school");

  const testimonials = [
    {
      name: "Michael Dimkpa",
      location: "United Kingdom",
      image: michaelImg,
      text: "My time at Living Hope School of Christian Education has been so transformative. Attending the bible school made me to understand that, it is not just a school for studying scriptures, but a place to gain a deeper understanding of bible history and theology, major biblical doctrines and how they relate to each other. I have learned to apply biblical principles to my daily life and I feel more equipped than ever to serve others.",
    },
    {
      name: "Pst Titus Matthew Alvan",
      location: "Lagos, Nigeria",
      image: titusImg,
      text: "My period as a student at Living Hope School of Christian Education has been very wonderful and impactful in so many areas of my life and ministry. It has deepened and strengthened my understanding of God's Word and aid my spiritual foundation.",
    },
    {
      name: "Uyoyoma Edafe Thankgod",
      location: "Delta State, Nigeria",
      image: uyoyomaImg,
      text: "My coming to Living Hope School of Christian Education has really boosted or I can say re-ignite my passion for study once again. This few weeks of training has affected me positively by wanting to know more and read more.",
    },
    {
      name: "Ojo Anuoluwapo Elizabeth",
      location: "Oyo State, Nigeria",
      image: anuoluwapoImg,
      text: "Attending Living Hope Bible School has been a transformative experience that has impacted my life. Over the past few weeks, I have gained valuable insights and perspectives that have changed my understanding of faith, community, and personal growth.",
    },
    {
      name: "Omowunmi Adubi",
      location: "Lagos State, Nigeria",
      image: omowunmiImg,
      text: "Coming to study in Living Hope School of Christian Education has helped spiritual growth and development in several ways; and has opened my eyes to the things of God and better ways of life.",
    },
  ];

  const courseIcons = [Users, BookOpen, GraduationCap];
  const courseNumbers = [1, 2, 3];

  return (
    <PublicLayout>
      <PageHero
        title={get("hero_title", "Living Hope School of Christian Education")}
        subtitle={get("hero_subtitle", '"You are educated when you have the ability to listen to almost anything without losing your temper or self-confidence" – Robert Frost')}
      />

      {/* How It Started */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              How the School Journey Got Started…
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p className="whitespace-pre-line">{get("start_p1", "")}</p>
                <p className="whitespace-pre-line">{get("start_p2", "")}</p>
                <p className="whitespace-pre-line">{get("start_p3", "")}</p>
                <p className="whitespace-pre-line">{get("start_p4", "")}</p>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <img src={drAnidiImg} alt="Dr. Patrick Anidi" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">What Makes Us Different!</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p className="whitespace-pre-line">{get("diff_p1", "")}</p>
              <p className="whitespace-pre-line">{get("diff_p2", "")}</p>
              <p className="whitespace-pre-line">{get("diff_p3", "")}</p>
              <p className="font-semibold text-primary italic whitespace-pre-line">
                {get("diff_signoff", "Dr. Patrick Anidi, Ph.D, fmra\nPresident, Living Hope School of Christian Education.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Admission Process</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/5 flex-shrink-0">
                <img src={admissionImg} alt="Bible School Admission" className="w-full rounded-xl shadow-lg" />
              </div>
              <div className="md:w-3/5 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p className="whitespace-pre-line">{get("admission_p1", "")}</p>
                <p className="whitespace-pre-line">{get("admission_p2", "")}</p>
                <p className="whitespace-pre-line">{get("admission_p3", "")}</p>
                <p className="whitespace-pre-line">{get("admission_p4", "")}</p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-6">
                  <p className="flex items-center gap-2 font-semibold text-primary mb-2">
                    <Mail className="h-5 w-5" /> Submit Your Application
                  </p>
                  <p>
                    Email:{" "}
                    <a href={`mailto:${get("admission_email_primary", "info@houseoflivinghope.org")}`} className="text-secondary underline">
                      {get("admission_email_primary", "info@houseoflivinghope.org")}
                    </a>
                  </p>
                  <p>
                    Also copy:{" "}
                    <a href={`mailto:${get("admission_email_cc", "paanidi@gmail.com")}`} className="text-secondary underline">
                      {get("admission_email_cc", "paanidi@gmail.com")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Courses</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <div className="grid gap-6">
                  {courseNumbers.map((n, i) => {
                    const Icon = courseIcons[i];
                    const title = get(`course_${n}_title`, "");
                    const desc = get(`course_${n}_desc`, "");
                    if (!title && !desc) return null;
                    return (
                      <div key={n} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="h-7 w-7 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <img src={studyImg} alt="Study materials" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures Schedule & Course Fee */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Lectures Schedule & Course Fee</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="whitespace-pre-line">{get("schedule_p1", "")}</p>
                  <p className="mt-2 whitespace-pre-line">{get("schedule_p2", "")}</p>
                  <p className="mt-2 whitespace-pre-line">{get("schedule_p3", "")}</p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-primary mb-3">Course Fee</h3>
                <p className="mb-2">
                  <strong>{get("fee_naira", "₦200,000")}</strong> OR <strong>{get("fee_usd", "$145 USD")}</strong>
                </p>
                <p className="mb-1">
                  Payable to: <strong>{get("fee_payable", "HOUSE OF LIVING HOPE GOSPEL MINISTRY")}</strong>
                </p>
                <p className="text-sm whitespace-pre-line">
                  Naira: {get("fee_naira_account", "Acct. No. 2023621730 – First Bank of Nigeria PLC")}
                </p>
                <p className="text-sm whitespace-pre-line">
                  Dollars: {get("fee_dollar_account", "Acct. No. 2033153665 (SWIFT Code: FBNINGLA) – First Bank of Nigeria PLC")}
                </p>
                <p className="mt-3 text-sm italic whitespace-pre-line">
                  {get("fee_note", "Note: Students with challenges regarding affordability can call or write directly for special arrangement or consideration.")}
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-primary mb-4">Post-Course Requirements</h3>
              <div className="space-y-3 text-muted-foreground">
                {[
                  "Write an examination. Questions will cut across the different subjects covered within the period.",
                  'Write and submit "Statements of Learning" (similar to the Statement of Purpose written prior to admission) to the Academic Committee.',
                  "Record a 2 or 3-minute video of your experience with the school.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="bg-secondary text-secondary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground text-sm italic">
                All 3 items above are required to facilitate the delivery of students' certificates, testimonials and reference letters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <MessageSquareQuote className="h-8 w-8 text-secondary" />
              Students Testimonies
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground italic leading-relaxed mb-4">"{testimonial.text}"</p>
                    <p className="font-bold text-primary">
                      – {testimonial.name},{" "}
                      <span className="font-normal text-muted-foreground">{testimonial.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default BibleSchool;
