import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="House of Living Hope" className="h-10 w-10 object-contain" />
              <span className="font-serif font-bold text-lg">House of Living Hope</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A place where people see possibilities in our world. Join us as we grow together in the knowledge of God's word.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-secondary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", path: "/about" },
                { name: "Programs", path: "/services" },
                { name: "Pastors", path: "/pastors" },
                { name: "What We Believe", path: "/what-we-believe" },
                { name: "Our History", path: "/history" },
                { name: "Words of Wisdom", path: "/wisdom" },
                { name: "Bookstore", path: "/bookstore" },
                { name: "Partner With Us", path: "/partner" },
                { name: "Living Care", path: "/living-care" },
                { name: "Donate", path: "/donate" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-secondary mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <span>13, Oladipupo Oduwowe Street, Beside Bovas Oil Station, Opp. UBA, Ojodu, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+234 803 300 4553</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@houseoflivinghope.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif font-semibold text-secondary mb-4">Service Times</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-secondary" />
                <div>
                  <p className="font-medium text-primary-foreground">WORD of HOPE (Sunday)</p>
                  <p>9:00 AM – 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-secondary" />
                <div>
                  <p className="font-medium text-primary-foreground">NIGHT OF PRAYER (Thursday)</p>
                  <p>9:00 PM – 10:00 PM (Online)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} House of Living Hope Gospel Ministry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
