import { Link } from "react-router-dom";
import { Church, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="h-8 w-8 text-secondary" />
              <span className="font-serif font-bold text-lg">House of Living Hope</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A place of faith, hope, and love. Join us as we grow together in the knowledge of God's word.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-secondary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Pastors", "Bookstore", "Donate", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link}
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
                <span>Ojodu Berger, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+234 800 000 0000</span>
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
                  <p className="font-medium text-primary-foreground">Sunday Service</p>
                  <p>8:00 AM & 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-secondary" />
                <div>
                  <p className="font-medium text-primary-foreground">Wednesday Bible Study</p>
                  <p>6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} House of Living Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
