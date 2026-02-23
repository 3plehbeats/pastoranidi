import { useEffect, useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, ExternalLink } from "lucide-react";
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

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          {books.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Our bookstore is being stocked. Check back soon for inspiring reads!
              </p>
            </div>
          ) : (
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
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Bookstore;
