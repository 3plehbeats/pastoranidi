interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <div className="page-hero min-h-[35vh]">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="page-hero-overlay" />
      <div className="relative z-10 text-center px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-3 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto animate-slide-up">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
