import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
function Header() {
  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-blue-400">Anmol</span>
            <span className="text-white">Neupane</span>
          </div>

          {/* Desktop Menus */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button className="hidden md:flex items-center gap-2 bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            Download CV Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 rounded-lg shadow-lg space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-blue-400 px-4 py-2 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-400 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-all duration-300">
              Download CV now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
