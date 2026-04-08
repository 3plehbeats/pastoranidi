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

const BibleSchool = () => {
  const testimonials = [
    {
      name: "Michael Dimkpa",
      location: "United Kingdom",
      image: michaelImg,
      text: "My time at Living Hope School of Christian Education has been so transformative. Attending the bible school made me to understand that, it is not just a school for studying scriptures, but a place to gain a deeper understanding of bible history and theology, major biblical doctrines and how they relate to each other. I have learned to apply biblical principles to my daily life and I feel more equipped than ever to serve others. The lessons covered during the bible school have given me a broader perspective – a resources for personal growth, spiritual discernment and engaging in conversations about faith and values.",
    },
    {
      name: "Pst Titus Matthew Alvan",
      location: "Lagos, Nigeria",
      image: titusImg,
      text: "My period as a student at Living Hope School of Christian Education has been very wonderful and impactful in so many areas of my life and ministry. It has deepened and strengthened my understanding of God's Word and aid my spiritual foundation. Passing through Living Hope School of Christian Education has been a journey of transformation that continues to shape my mind and broaden my sense of purpose and vision.",
    },
    {
      name: "Uyoyoma Edafe Thankgod",
      location: "Delta State, Nigeria",
      image: uyoyomaImg,
      text: "My coming to Living Hope School of Christian Education has really boosted or I can say re-ignite my passion for study once again. This few weeks of training has affected me positively by wanting to know more and read more. This study has opened my eye and knowledge to see things better and react to things better. It is an interactive online course that helps student achieve better engagement as well as grow both in their academic and business. If Living Hope School of Christian Education has other professional certify courses outside Christian education e.g Management courses, HR course, and so on. I will gladly pick up another application form.",
    },
    {
      name: "Ojo Anuoluwapo Elizabeth",
      location: "Oyo State, Nigeria",
      image: anuoluwapoImg,
      text: "Attending Living Hope Bible School has been a transformative experience that has impacted my life. Over the past few weeks, I have gained valuable insights and perspectives that have changed my understanding of faith, community, and personal growth. This learning has helped me approach scripture with a more thoughtful perspective. I have gained new perspectives, skills, and understandings that have transformed my approach to faith, community, and personal growth. I am grateful for the opportunity to have been part of this community and look forward to continuing my journey of growth and discovery.",
    },
    {
      name: "Omowunmi Adubi",
      location: "Lagos State, Nigeria",
      image: omowunmiImg,
      text: "Coming to study in Living Hope School of Christian Education has helped spiritual growth and development in several ways; and has opened my eyes to the things of God and better ways of life. The teaching on Emotional Intelligent has equipped me with the understanding that wisdom is required to live with others in our society in a seamless manner. I bless the name of God for being one of the students the program has really impacted.",
    },
  ];

  const courses = [
    {
      icon: Users,
      title: "Leadership & Workforce Development",
      description:
        "A 6 course-content focussed course. Generally recommendable to organisation workforce; especially on personal development and what employers would like to see in a typical organisation workforce. Areas of focus include Education (origin & essence; circular vs. Christian), Environment of Christian Living, Emotional Intelligence, Significance of Leadership & Service Delivery.",
    },
    {
      icon: BookOpen,
      title: "Children Ministry",
      description:
        "This field covers 6 core courses or subjects. The overall focus is to expose students to church ministry activities tailored towards providing basic coordinated education for children development as well as nurturing their spiritual growth from infancy to adulthood. Contents include Communication, Emotional Intelligence, and Children Ministry Management.",
    },
    {
      icon: GraduationCap,
      title: "Youth Ministry",
      description:
        "Aimed at helping church/ministry youth pastors discover the strategy elements for effective leadership of youth in today's world; helping them to start and deepen their relationships with Jesus thereby transforming them into disciples. Course contents include Education, Bible School concepts, Sunday School concepts, The Bible survey, Emotional Intelligence, Significance of Leadership & Service Delivery.",
    },
  ];

  return (
    <PublicLayout>
      <PageHero
        title="Living Hope School of Christian Education"
        subtitle={`"You are educated when you have the ability to listen to almost anything without losing your temper or self-confidence" – Robert Frost`}
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
                <p>
                  In the month of May 2021, I got a call from a pastor friend based in the
                  United Kingdom requesting that I should help to facilitate a training
                  program for one of the persons in Nigeria who will soon be joining their
                  church workforce in the United Kingdom.
                </p>
                <p>
                  The request was very specific and tailor made; it says: "We want your kind
                  of knowledge to be impacted on whoever we would like to engage in our
                  church here in the UK". The request was what triggered and broke the ice
                  for the birth of the education arm of our church branded as Living Hope
                  School of Christian Education.
                </p>
                <p>
                  From that time going forward, we have had students admitted, trained and
                  certified both in Nigeria and overseas.
                </p>
                <p>
                  Because most of the candidates are working class and students especially at
                  the final level in higher colleges, lectures are facilitated online via
                  ZOOM at a time most convenient to the individuals – so far, we have had
                  tailor-made class lectures in the evening (especially between 8pm – 10pm
                  WAT).
                </p>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src={drAnidiImg}
                  alt="Dr. Patrick Anidi"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              What Makes Us Different!
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Truly, the school focuses on Christian education and seeks to equip,
                  develop and grow people with understanding and appreciation of the
                  personality, life, and teachings of Jesus Christ to lead them to better
                  personal experiences.
                </p>
                <p>
                  Living Hope School of Christian Education is not a fixated school for the
                  study of Bible related subjects only – it is much more.
                </p>
                <p>
                  The contents of our courses are blended, and encompass both biblical and
                  circular expository teachings and revelations. They are intentionally and
                  strategically designed to help the individuals or group of people
                  understand the environment and framework of their life journey beyond
                  ministry, and church, family, homes, but including business and career
                  fields among others.
                </p>
                <p className="font-semibold text-primary italic">
                  Dr. Patrick Anidi, Ph.D, fmra
                  <br />
                  President, Living Hope School of Christian Education.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Admission Process
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/5 flex-shrink-0">
                <img
                  src={admissionImg}
                  alt="Bible School Admission"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-3/5 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Candidates seeking admission into Living Hope School of Christian Education
                  are to send a formal application expressing interest for admission into the
                  school.
                </p>
                <p>
                  In addition to the expression of interest, it is our standard that each
                  candidate or student should write a Statement of Purpose of about 500 words
                  on why he or she is interested in Christian related Education from a Bible
                  School.
                </p>
                <p>
                  The Statement of Purpose is expected to indicate how the qualification or
                  skill to be earned will impact on the body of knowledge in the Christian
                  Community and the society at large.
                </p>
                <p>
                  Both the Expression of Interest and the Statement of Purpose are to be
                  submitted for evaluation prior to offer of admission and commencement of
                  lectures.
                </p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-6">
                  <p className="flex items-center gap-2 font-semibold text-primary mb-2">
                    <Mail className="h-5 w-5" /> Submit Your Application
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@houseoflivinghope.org"
                      className="text-secondary underline"
                    >
                      info@houseoflivinghope.org
                    </a>
                  </p>
                  <p>
                    Also copy:{" "}
                    <a
                      href="mailto:paanidi@gmail.com"
                      className="text-secondary underline"
                    >
                      paanidi@gmail.com
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
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">
              Courses
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <div className="grid gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.title}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <course.icon className="h-7 w-7 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">
                            {course.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {course.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src={studyImg}
                  alt="Study materials"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures Schedule & Course Fee */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Lectures Schedule & Course Fee
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p>
                    Once admission is given, lectures are held daily in the morning (8am –
                    10am) and in the evening (8pm – 10pm or 9pm – 11pm WAT) for 5 days.
                    Students are free to choose a time best suitable to their situation.
                    Every student is treated according to specific request or demand.
                  </p>
                  <p className="mt-2">
                    In some cases, students have requested that the entire 5-day calendar
                    be collapsed into 3 days given their busy schedules. Such requests have
                    been severally granted.
                  </p>
                  <p className="mt-2">
                    The program is driven through ZOOM platform – the link is made
                    available once the application is approved or admission granted.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-primary mb-3">Course Fee</h3>
                <p className="mb-2">
                  <strong>₦200,000</strong> (Two Hundred Thousand Naira) OR{" "}
                  <strong>$145 USD</strong>
                </p>
                <p className="mb-1">
                  Payable to: <strong>HOUSE OF LIVING HOPE GOSPEL MINISTRY</strong>
                </p>
                <p className="text-sm">
                  Naira: Acct. No. <strong>2023621730</strong> – First Bank of Nigeria PLC
                </p>
                <p className="text-sm">
                  Dollars: Acct. No. <strong>2033153665</strong> (SWIFT Code: FBNINGLA) –
                  First Bank of Nigeria PLC
                </p>
                <p className="mt-3 text-sm italic">
                  Note: Students with challenges regarding affordability can call or write
                  directly for special arrangement or consideration.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-primary mb-4">
                Post-Course Requirements
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="bg-secondary text-secondary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </span>
                  <p>
                    Write an examination. Questions will cut across the different subjects
                    covered within the period.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-secondary text-secondary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </span>
                  <p>
                    Write and submit "Statements of Learning" (similar to the Statement of
                    Purpose written prior to admission) to the Academic Committee.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-secondary text-secondary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </span>
                  <p>
                    Record a 2 or 3-minute video of your experience with the school.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground text-sm italic">
                All 3 items above are required to facilitate the delivery of students'
                certificates, testimonials and reference letters.
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
                <div
                  key={testimonial.name}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-primary">
                    – {testimonial.name},{" "}
                    <span className="font-normal text-muted-foreground">
                      {testimonial.location}
                    </span>
                  </p>
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
