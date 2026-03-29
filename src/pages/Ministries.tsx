import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { Music, Users, UserCheck, Flame, BookOpen, Globe, Heart, Church, HandHeart } from "lucide-react";
import youthMeeting1 from "@/assets/youth-meeting-1.jpg";
import { Link } from "react-router-dom";

const ministries = [
  {
    name: "Harmony Voices",
    subtitle: "Music / Choir",
    icon: Music,
    content: [
      "Harmony Voices, more commonly referred to as the Living Choir are made up of professional music album title holders.",
      "The advent of Harmony Voices is anchored on our understanding that human beings are created for purpose of interactions and fellowship – singing praises and worship songs to God. In the words of W.E. Vine, the worship of God is the momentous, most urgent and the most glorious action that can take place in human life: And that man was created to render worship, while God eternally exists to receive worship.",
      "Every Sunday, our choir's performance brings inspiration, spiritual nurture, cultural renewal and dynamic fellowship to many members who are weary in spirit. The normal challenges of isolation, loneliness, values confusion, life pressure and spiritual challenges are relieved each time The Harmony Voices sing.",
    ],
    quote: '"Singing is a mighty bond of union linking people together in a symphony of one song." — St. Basil',
    schedule: "Weekly rehearsals: Saturdays, 5–7pm",
    cta: "As you join us to worship the Lord Jesus Christ in our ministry, welcome on board The Harmony Voices. Let your voice be heard. We love you!",
  },
  {
    name: "Affectionate Ruth",
    subtitle: "Women Fellowship",
    icon: Heart,
    content: [
      "Affectionate Ruth is the Women fellowship of House of Living Hope Gospel Ministry.",
      "The birth of this fellowship is premised on the fact that women are relationship-oriented and need to connect with like minds in order to grow, mature, and learn from others what they themselves have learned on the journey of faith.",
      "The story of Ruth exhibits the frank and simple manners of the times she lived, and the courtesy and charity of the Hebrew laws; and illustrates God's providential care of families, and the blessings which flow from filial piety and faith in God.",
      "Affectionate Ruth is a fellowship for getting in touch with women generally and helping them out with all kinds of issues, grow in the faith, help out in times of need, or just share each other's problems and happiness. It is a platform to worship, educate, provide resources and information for members, love, and support women with the sole objective of ensuring a better world for all.",
      "The fellowship acts as mentors to the younger women in our ministry as we have strong female leaders who can provide counselling and share experiences in ways men may not be able to. Their aim is to grow together as women while also strengthening the ministry.",
    ],
    cta: "As you join us to worship the Lord Jesus Christ in our ministry, welcome on board Affectionate Ruth. We love you!",
  },
  {
    name: "Apollos Congress",
    subtitle: "Men Fellowship",
    icon: UserCheck,
    content: [
      "Apollos Congress is the men fellowship group of House of Living Hope Gospel Ministry. They are comprised of men who love God and want to learn more about His teachings; and are always committed to programs and events that provide support, encouragement and a positive role model to our world.",
      "Indeed, the fellowship is made up of a multigenerational group of men devoted to \"the apostles' teaching and fellowship, to the breaking of bread and to prayer\" (Acts 2:42).",
      "The sole objective of the fellowship is to help the men in the ministry cultivate the character of Jesus Christ in their daily lives through activities such as Bible studies, retreats and special events.",
      "The fellowship is made of men who clearly exhibit the attributes of the Biblical Apollos not only by lifting up the hands of the senior pastor of the ministry but also are there watering the good seed the leadership had sown and gaining many souls to Jesus Christ.",
    ],
    quote: '"I have planted, Apollos watered; but God gave the increase." — 1 Corinthians 3:6',
    cta: "As you join us to worship the Lord Jesus Christ in our ministry, welcome on board Apollos Congress. We love you!",
  },
  {
    name: "Daniel Generation",
    subtitle: "Youth Fellowship",
    icon: Flame,
    content: [
      "Daniel Generation is the fellowship of the youths – the younger adults (including singles) in our ministry.",
      "Aligning our youths to Biblical Daniel is deliberate; we intend to birth a new generation of youths who will like Daniel decline to pollute themselves by abstaining from every worldly activity which would often be ceremonially unclean to Christians or defiled by some connection with immorality.",
      "Daniel was one of the most spotless characters upon record. His youth and his age were alike devoted to God. He maintained his integrity in the most difficult circumstances, and amid the fascinations of an eastern court he was pure and upright. His history deserves the careful and prayerful study of the young.",
      "The fellowship is a platform meant to instruct and disciple youths in what it means to be a Christian, how to mature as a Christian, and how to encourage others to claim Jesus Christ as their Savior. This is accomplished through teaching, relationship building and/or mentoring.",
    ],
    quote: '"Many youth are not being taught to read and study the Bible or how to pray or understand Christian basics, and thus they tend not to develop a firm foundation of faith." — Schaeffer Institute',
    cta: "The leadership of House of Living Hope Gospel Ministry view the youths fellowship as the most important; and thus willing and committed to employing a great part of the ministry resources to moulding the youths' Christian faith. Welcome on board The Daniel Generation. We love you!",
  },
  {
    name: "Timothy Convention",
    subtitle: "Teenagers (13–17 years)",
    icon: BookOpen,
    content: [
      "Timothy Convention is the fellowship that brings teenagers who are between 13 and 17 years together; teaching them Christian Gospel and encouraging their involvement in local Christian ministries.",
      "House of Living Hope Gospel Ministry devotes a lot of interest into moulding the Timothy generation given understanding that actual development process during this phase is a lot more complex and difficult to understand than early childhood — by this age children are a lot more self-assured and capable of thinking independently. This is also the stage when peer pressure is a wide factor being faced by teens.",
      "We try to be closer to the group in order to help them discover their individual goals as they go through life. We also try to help their emotions and psychology in coping with the more complex friendships they make at this stage and the physical changes of puberty they go through.",
    ],
    quote: '"I call to remembrance the unfeigned faith that is in thee, which dwelt first in thy grandmother Lois, and thy mother Eunice; and I am persuaded that in thee also." — 2 Timothy 1:5',
    cta: "As you join us to worship the Lord Jesus Christ in our ministry, get your children who have attained the teenage age bracket to enrol in Timothy Convention. Welcome!",
  },
  {
    name: "Philip Movement",
    subtitle: "Evangelism & Outreach",
    icon: Globe,
    content: [
      "Philip Movement is the outreach and evangelism arm of House of Living Hope Gospel Ministry.",
      "The establishment of the movement is premised upon the fact that Evangelism is the duty of every Christian and indeed every ministry. Whether one shares his or her faith a lot or a little, the Lord wants Christians to share the message of the gospel of Jesus Christ. This is the great commission.",
      "One of the responsibilities of the Philip Movement includes helping fellow Christians in our world to grow in their faith in Jesus Christ and their understanding of His Word.",
      "Like the Biblical Philip — a Deacon and Evangelist who preached the gospel in Samaria with great success, and wrought many miracles yet was called away to labor in a distant location; which ultimately quickened the spread of the good news into the continent of Africa — members of Philip Movement are expected to help spread the gospel within and beyond our immediate environment.",
    ],
    quote: '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." — Matthew 28:19',
    cta: "Join us in spreading the gospel of Jesus Christ to the ends of the earth!",
  },
  {
    name: "Zach & Elis Couples",
    subtitle: "Couples Fellowship",
    icon: Users,
    content: [
      "Zach & Elis is the fellowship for couples (Dad and Mum) at House of Living Hope Gospel Ministry. It is patterned after Zacharias and Elisabeth (parents of John the Baptist).",
      "Zach & Elis provides a platform where Christian Couples could be moulded through the word and prayer to help build godly families.",
      "The mission of the couple's fellowship is to build, equip and strengthen the Christian family in line with the Holy Scripture to bring a Biblical Worldview to bear in all areas of family lives. Thus, every member of Zach & Elis is expected to build godly marriages, raise godly children and be a good example to the society.",
    ],
    quote: '"And they were both righteous before God, walking in all the commandments and ordinances of the Lord blameless." — Luke 1:6',
    cta: "As you join us to worship the Lord Jesus Christ in our ministry, come on board Zach & Elis for a continual wonderful family fellowship. Welcome!",
  },
  {
    name: "Trinity Access",
    subtitle: "Prayer / Intercession",
    icon: Church,
    content: [
      "Trinity Access is the engine room of House of Living Hope Gospel Ministry – they are the intercessor (prayer) fellowship.",
      "This fellowship is at the centre of activities in our ministry especially because one of our cardinal agenda is prayer which is why we organise six (6) prayer summits each year — every third Sunday in January, March, May, July, September and November.",
      "There is no other power on earth that Satan hates and fears as much as prayer. In fact, Satan trembles when he sees the weakest saint upon his/her knees praying.",
    ],
    quote: '"If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you. However, this kind does not go out but by prayer and fasting." — Matthew 17:20-21',
    cta: "As you join us to worship the Lord Jesus Christ in our ministry, come on board Trinity Access and let us pray together always. Welcome!",
  },
  {
    name: "Living Care",
    subtitle: "Charity",
    icon: HandHeart,
    content: [
      "Living Care is the charity arm of House of Living Hope Gospel Ministry.",
      "Each time you support this charity arm through cash donation or provision of items (foods, clothing, etc.) in our ministry, it is recorded and credited in your favour in fulfilment of the Scripture. What this means is that you are simply securing your future today!",
      "Over the years, several hundreds of people have been transformed through provision of essentials of life which include but not limited to Shelter, Medicare, Clothing, Foods, Training and Scholarship among others to the less-privileged in our society.",
    ],
    quote: '"Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt… But lay up for yourselves treasures in heaven." — Matthew 6:19-21',
    cta: "Support Living Care and help transform lives!",
    link: "/living-care",
  },
];

const Ministries = () => {
  return (
    <PublicLayout>
      <PageHero
        title="Our Ministries"
        subtitle="Fellowship groups nurturing every member of God's family"
        backgroundImage={youthMeeting1}
      />

      {/* Quote Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-serif text-lg md:text-xl italic text-primary-foreground/90 max-w-3xl mx-auto">
            "You can help to redesign tomorrow today, to make it more interesting for tomorrow's generation"
          </blockquote>
          <p className="text-secondary font-semibold mt-2">— Dr. Patrick Anidi</p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Ministries within <span className="text-secondary">House of Living Hope</span>
            </h2>
          </div>

          <div className="space-y-16">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <article key={ministry.name} className="scroll-mt-24" id={ministry.name.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {index + 1}. {ministry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{ministry.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-16">
                    {ministry.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}

                    {ministry.quote && (
                      <blockquote className="border-l-4 border-secondary pl-6 italic text-foreground my-6">
                        {ministry.quote}
                      </blockquote>
                    )}

                    {ministry.schedule && (
                      <p className="font-semibold text-foreground">📅 {ministry.schedule}</p>
                    )}

                    <p className="text-foreground font-medium mt-4">{ministry.cta}</p>

                    {ministry.link && (
                      <Link
                        to={ministry.link}
                        className="inline-block mt-2 bg-secondary text-secondary-foreground font-semibold px-6 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>

                  {index < ministries.length - 1 && (
                    <hr className="mt-12 border-border" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Ministries;
