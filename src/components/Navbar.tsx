import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/", external: false },
  {
    name: "About",
    path: "/about",
    external: false,
    children: [
      { name: "Our Story", path: "/about" },
      { name: "What We Believe", path: "/what-we-believe" },
      { name: "Our History", path: "/history" },
      { name: "Words of Wisdom", path: "/wisdom" },
    ],
  },
  { name: "Programs", path: "/services", external: false },
  { name: "Pastors", path: "/pastors", external: false },
  { name: "Bookstore", path: "/bookstore", external: false },
  {
    name: "Give",
    path: "/donate",
    external: false,
    children: [
      { name: "Donate", path: "/donate" },
      { name: "Partner With Us", path: "/partner" },
      { name: "Living Care (Charity)", path: "/living-care" },
    ],
  },
  { name: "Contact", path: "/contact", external: false },
  { name: "News", path: "https://moresglobal.com/news", external: true },
  { name: "Webmail", path: "https://ajapexlimited.com:2096/", external: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="House of Living Hope" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <span className="block text-sm font-serif font-bold text-primary-foreground">House of Living Hope</span>
              <span className="block text-[10px] text-secondary tracking-widest uppercase">Ojodu Berger, Lagos</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-primary-foreground/80 hover:text-secondary"
                >
                  {link.name}
                </a>
              ) : link.children ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                      location.pathname === link.path || link.children.some(c => c.path === location.pathname)
                        ? "text-secondary"
                        : "text-primary-foreground/80 hover:text-secondary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-3 w-3" />
                  </Link>
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-primary border border-secondary/20 rounded-md shadow-lg py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === child.path
                              ? "text-secondary bg-secondary/10"
                              : "text-primary-foreground/80 hover:text-secondary hover:bg-secondary/5"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "text-secondary"
                      : "text-primary-foreground/80 hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-primary-foreground/80 hover:text-secondary"
                >
                  {link.name}
                </a>
              ) : link.children ? (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === link.path ? "text-secondary bg-secondary/10" : "text-primary-foreground/80 hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-8 py-2 text-sm transition-colors ${
                        location.pathname === child.path ? "text-secondary" : "text-primary-foreground/60 hover:text-secondary"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path ? "text-secondary bg-secondary/10" : "text-primary-foreground/80 hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
