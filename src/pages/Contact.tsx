import { useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert([form]);
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <PublicLayout>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" backgroundImage={hero3} />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Worship Centre & <span className="text-secondary">Administrative Office</span>
              </h2>
              <p className="text-muted-foreground mb-2 font-semibold text-foreground">House of Living Hope Gospel Ministry</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a question, need prayer, or want to learn more about our church, we're here for you.
              </p>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "13, Oladipupo Oduwowe Street, Beside Bovas Oil Station, Opp. United Bank for Africa (UBA), Ojodu, Lagos-Nigeria" },
                  { icon: Phone, label: "Phone", value: "+234 803 300 4553, +234 802 748 4615, +234 814 380 9010" },
                  { icon: Mail, label: "Email", value: "info@houseoflivinghope.org · paanidi@gmail.com" },
                  { icon: Globe, label: "Website", value: "www.houseoflivinghope.org" },
                  { icon: Clock, label: "Sunday Service", value: "9:00 AM – 11:00 AM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-lg bg-card border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Send a Message</h3>
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Send className="h-4 w-4 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Contact;
