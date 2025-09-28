import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // 60% visible baru dianggap active
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const headerOffset = 65; // tinggi header (sesuaikan kalau beda)
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  setIsMenuOpen(false);
};


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* nav full width tanpa margin auto */}
      <nav className="w-full px-60">
        <div className="flex justify-between items-center py-4">
          {/* Logo kiri */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pl-4">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 pr-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-lg transition-all duration-300 group ${
                    isActive
                      ? 'text-white scale-105'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
<span
  className={`absolute left-0 -bottom-1.5 h-[2px] 
  bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
    isActive
      ? 'w-full'
      : 'w-0 group-hover:w-full'
  }`}
/>

                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors pr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                  activeSection === item.href
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
