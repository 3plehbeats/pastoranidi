import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const defaultSlides = [
  {
    title: "Welcome to House of Living Hope",
    subtitle: "A place where faith comes alive and hope is renewed",
    image_url: hero1,
    button_text: "Join Us Sunday",
    button_link: "/services",
  },
  {
    title: "Growing Together in Faith",
    subtitle: "Building a community rooted in love, prayer, and the Word of God",
    image_url: hero2,
    button_text: "Learn More",
    button_link: "/about",
  },
  {
    title: "Experience God's Presence",
    subtitle: "Come as you are and encounter the transforming power of God",
    image_url: hero3,
    button_text: "Our Services",
    button_link: "/services",
  },
];

interface Slide {
  title: string;
  subtitle?: string | null;
  image_url: string;
  button_text?: string | null;
  button_link?: string | null;
}

const HeroSlider = ({ slides: propSlides }: { slides?: Slide[] }) => {
  const slides = propSlides && propSlides.length > 0 ? propSlides : defaultSlides;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image_url}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <h1
                className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 transition-all duration-700 ${
                  index === current ? "animate-slide-up" : "opacity-0"
                }`}
              >
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p
                  className={`text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                    index === current ? "animate-slide-up" : "opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
              )}
              {slide.button_text && (
                <a
                  href={slide.button_link || "#"}
                  className={`inline-block gold-gradient text-primary font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-all duration-700 delay-300 ${
                    index === current ? "animate-slide-up" : "opacity-0"
                  }`}
                >
                  {slide.button_text}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/30 backdrop-blur-sm text-primary-foreground hover:bg-primary/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/30 backdrop-blur-sm text-primary-foreground hover:bg-primary/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
