import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import UiButton from '@/components/ui/UiButton';

const ACCENT_COLOR = "#8e24aa"; // Purple accent
const BUTTON_COLOR = "rgb(230, 175, 46)"; // Gold

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Announcement", href: "#announcement" },
  { label: "Why Choose us", href: "#why-choose-us" },
  { label: "Courses", href: "#courses" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#Contact" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // adjust for header height
        behavior: "smooth",
      });
    }
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all">
      <div className="max-w-full mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="inline-flex items-center justify-center w-30 h-30">
            <img src="/logo.jpg" alt="Rainbow Logo" className="h-14 w-28 object-contain" />
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6 ml-auto">
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className="text-gray-800 text-base font-medium hover:text-[var(--accent-color)] transition"
                style={{ '--accent-color': ACCENT_COLOR } as React.CSSProperties}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <UiButton
            color={BUTTON_COLOR}
            textColor="#fff"
            borderColor={BUTTON_COLOR}
            className="font-medium px-8 py-3 ml-6 shadow transition-all"
            style={{
              borderRadius: "22px 12px 22px 22px",
              transform: "skewX(8deg)",
              fontSize: "16px",
              fontWeight: 500,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              letterSpacing: "normal"
            }}
          >
            <span style={{ display: "inline-block", transform: "skewX(-8deg)" }}>
              Admission
            </span>
          </UiButton>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-[var(--accent-color)] p-2 focus:outline-none"
            style={{ '--accent-color': ACCENT_COLOR } as React.CSSProperties}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="xl:hidden px-4 pb-6 pt-2"
          style={{
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => {
                  scrollToSection(e, link.href);
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 text-base font-medium hover:text-[var(--accent-color)] transition"
                style={{ '--accent-color': ACCENT_COLOR } as React.CSSProperties}
              >
                {link.label}
              </a>
            ))}
            <UiButton
              color={BUTTON_COLOR}
              textColor="#fff"
              style={{ fontSize: "1.1rem", padding: "12px 30px", marginTop: "8px" }}
              className="outline-none border-none font-medium"
            >
              Enroll Now
            </UiButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
