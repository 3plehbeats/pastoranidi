import { useEffect, useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, ExternalLink, ShoppingBag } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
  purchase_link: string | null;
}

const Bookstore = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    supabase
      .from("books")
      .select("*")
      .eq("is_active", true)
      .then(({ data }) => {
        if (data) setBooks(data);
      });
  }, []);

  return (
    <PublicLayout>
      <PageHero title="Bookstore" subtitle="Resources to deepen your faith" backgroundImage={aboutBg} />

      {/* Store Links */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
            Shop Pastor Anidi's Books
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Explore inspiring titles by Pastor Patrick Anidi. Available on Amazon and Selar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://www.amazon.com/stores/Patrick-Anidi/author/B086WQX7LR?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border hover:border-secondary hover:shadow-xl transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <ShoppingBag className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Amazon Store</h3>
                <p className="text-muted-foreground text-sm">Browse & purchase on Amazon</p>
              </div>
              <span className="inline-flex items-center gap-1 text-secondary font-medium text-sm group-hover:underline">
                Visit Store <ExternalLink className="h-4 w-4" />
              </span>
            </a>
            <a
              href="https://selar.com/m/patrick-anidi1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border hover:border-secondary hover:shadow-xl transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Selar Store</h3>
                <p className="text-muted-foreground text-sm">Browse & purchase on Selar</p>
              </div>
              <span className="inline-flex items-center gap-1 text-secondary font-medium text-sm group-hover:underline">
                Visit Store <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Individual Books */}
      {books.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-10">Featured Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  {book.image_url ? (
                    <img src={book.image_url} alt={book.title} className="w-full h-64 object-cover" />
                  ) : (
                    <div className="w-full h-64 bg-muted flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{book.title}</h3>
                    <p className="text-secondary text-sm mb-2">by {book.author}</p>
                    {book.description && (
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{book.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      {book.price && (
                        <span className="font-semibold text-foreground">₦{book.price.toLocaleString()}</span>
                      )}
                      {book.purchase_link && (
                        <a
                          href={book.purchase_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-secondary text-sm hover:underline"
                        >
                          Purchase <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PublicLayout>
  );
};

export default Bookstore;
