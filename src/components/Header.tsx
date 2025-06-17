import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import UiButton from '@/components/ui/UiButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div
        className="max-w-full mx-auto px-8 py-4 flex items-center justify-between"
        style={{
          background: "transparent",
          border: "none"
        }}
      >
        {/* Logo and School Name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="inline-flex items-center justify-center w-30 h-30">
            <img src="/logo.jpg" alt="Rainbow Logo" className="h-16 w-30 object-contain" />
          </span>
        </div>

        {/* Navigation and Button */}
        <div className="hidden lg:flex items-center gap-8 ml-auto ">
          <nav className="flex gap-8 p-1">
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Home</a>
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Administration</a>
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Faculty</a>
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Parents & Students</a>
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Photo Gallery</a>
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Bookmarks</a>
            <a href="#" className="text-white text-sm font-normal hover:opacity-80 transition">Calendar</a>
          </nav>
          <UiButton
            color="rgb(230 175 46)"
            textColor="#fff"
            borderColor="rgb(230 175 46)"
            className="font-normal px-8 py-3 shadow transition-all ml-8"
            style={{
              borderRadius: "22px 12px 22px 22px",
              transform: "skewX(8deg)",
              fontSize: "16px",
              padding: "10px 30px",
              fontWeight: 400,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              alignSelf: "flex-start",
              letterSpacing: "normal"
            }}
          >
            <span style={{ display: "inline-block", transform: "skewX(-8deg)", fontWeight: 400, letterSpacing: "normal" }}>
              Admission
            </span>
          </UiButton>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="lg:hidden px-8 pb-6"
          style={{
            background: "linear-gradient(90deg, #8e24aa 0%, #d500f9 100%)"
          }}
        >
          <nav className="flex flex-col gap-4 mt-2 p-1 pt-2 ">
            <a href="#" className="text-white text-base font-normal">Home</a>
            <a href="#" className="text-white text-base font-normal">Administration</a>
            <a href="#" className="text-white text-base font-normal">Faculty</a>
            <a href="#" className="text-white text-base font-normal">Parents & Students</a>
            <a href="#" className="text-white text-base font-normal">Photo Gallery</a>
            <a href="#" className="text-white text-base font-normal">Bookmarks</a>
            <a href="#" className="text-white text-base font-normal">Calendar</a>
            <UiButton 
              color="rgb(230 175 46)"
              textColor="#fff"
              // borderColor="rgb(230 175 46)"
              style={{ fontSize: "1.5rem", padding: "12px 30px"}}
              className=' outline-none border-none '
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
