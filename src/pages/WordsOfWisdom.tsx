import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import hero3 from "@/assets/hero-3.jpg";

const categories = [
  {
    title: "About Raising Children",
    quotes: [
      { text: "To understand your parents' love you must raise children yourself.", author: "Chinese Proverb" },
      { text: "A mother is a child's first looking glass into the world.", author: "Richelle E. Goodrich" },
      { text: "Before I got married I had six theories about raising children; now, I have six children and no theories.", author: "John Wilmot" },
      { text: "We never know the love of the parent till we become parents ourselves.", author: "Henry Ward Beecher" },
      { text: "To bring up a child in the way he should go – travel that way yourself once in a while.", author: "Josh Billings" },
      { text: "It is easier to build strong children than to repair broken men.", author: "Frederick Douglass" },
    ],
  },
  {
    title: "About Education & Knowledge",
    quotes: [
      { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
      { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
      { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
      { text: "Overall, education is the platform that makes it possible to defeat all barriers.", author: "Author Unknown" },
    ],
  },
  {
    title: "About Focus",
    quotes: [
      { text: "A giraffe doesn't waste time quarrelling with rabbits over what the top of a tree looks like.", author: "Matshona Dhliwayo" },
    ],
  },
  {
    title: "About Doing Something, Making Impact",
    quotes: [
      { text: "Anyone who thinks that he is too small to make a difference has never tried to fall asleep with a mosquito in the room.", author: "Christine Todd Whitman" },
      { text: "It is the greatest of all mistakes to do nothing because you can only do little, do what you can.", author: "Sydney Smith" },
      { text: "If you are looking at the length of a snake, you may not find object that is as long as the snake to kill it; so lay your hand on anything, just do something, to either scare or strike the snake.", author: "Elizabeth Amirika Anidi – nee Odjoji (Dr. Patrick Anidi's mother)" },
    ],
  },
  {
    title: "About Giving & Changing Our World",
    quotes: [
      { text: "As we work to create light for others, we naturally light our own way.", author: "Mary Anne Radmacher" },
      { text: "When you cease to make a contribution, you begin to die.", author: "Eleanor Roosevelt" },
      { text: "We make living by what we get, but we make a life by what we give.", author: "Winston Churchill" },
    ],
  },
  {
    title: "About Cleanliness",
    quotes: [
      { text: "As Adam was expected to dress and keep the garden of Eden; and human being expected to dress his/her house & compound, so also, you are expected to dress, nurture and keep your body which is the temple of God.", author: "Dr. Patrick Anidi" },
    ],
  },
  {
    title: "About Your Tomorrow",
    quotes: [
      { text: "You can help to redesign tomorrow today, to make it more interesting for tomorrow's generation.", author: "Dr. Patrick Anidi" },
      { text: "The greatest legacy one can pass on to one's children and grandchildren is not money or other material things accumulated in one's life, but rather a legacy of character and faith.", author: "Billy Graham" },
    ],
  },
  {
    title: "About Leading & Living by Example",
    quotes: [
      { text: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.", author: "John Quincy Adams" },
      { text: "A good example has twice the value of good advice.", author: "Albert Schweitzer" },
    ],
  },
  {
    title: "About Success & Not Giving Up",
    quotes: [
      { text: "Most of the important things in this world were accomplished by people who kept trying when there seemed to be no hope at all.", author: "Dale Carnegie" },
      { text: "Success is the transitory sensation of being admired; but when the applause dies down, the true meaning of success is the impact someone made for good in human hearts.", author: "Author Unknown" },
      { text: "A river that disconnects from its source will soon dry up; because of revenue a lot of Christians including pastors have lost revelation.", author: "Author Unknown" },
      { text: "It is only in dictionary that you find enjoyment before investment; but in life, success is about investment before enjoyment. Keep working hard; your future is bright.", author: "Author Unknown" },
    ],
  },
];

const WordsOfWisdom = () => {
  return (
    <PublicLayout>
      <PageHero title="Words of Wisdom" subtitle="Timeless insights for daily living" backgroundImage={hero3} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A few of the arrays of words of wisdom from different individuals whose words have helped shape and are still shaping our world for good!
          </p>

          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  <span className="text-secondary">●</span> {cat.title}
                </h2>
                <div className="space-y-4">
                  {cat.quotes.map((q, i) => (
                    <blockquote key={i} className="p-6 rounded-lg bg-card border border-border">
                      <p className="italic text-foreground leading-relaxed mb-2">"{q.text}"</p>
                      <footer className="text-sm text-secondary font-medium">— {q.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WordsOfWisdom;
