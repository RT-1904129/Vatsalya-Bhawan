import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Dining", href: "#dining" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">Vatsalya Bhawan</h3>
            <p className="text-gray-300">Your serene home away from home in the holy city of Ayodhya. Experience unparalleled hospitality and comfort.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition"><Facebook /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><Twitter /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><Instagram /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vatsalya Bhawan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;