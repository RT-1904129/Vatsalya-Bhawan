// components/Header.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const  Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect runs after the component mounts
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled down more than 10px, set state to true
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function: runs when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array [] means this runs only once on mount

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Dining", href: "#dining" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-none"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-amber-700 tracking-wide">
          Vatsalya Bhawan
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-600 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-amber-700 transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block hover:text-amber-600 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-amber-600 text-white px-4 py-2 rounded-lg text-center shadow-md hover:bg-amber-700 transition"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
