import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Competitions', id: 'competitions' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Education', id: 'education' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  // Clean up any remaining light mode class or localStorage setting
  useEffect(() => {
    document.documentElement.classList.remove('light');
    localStorage.removeItem('theme');
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        document.querySelector('nav')?.offsetHeight || 0;

      // Use a 30% viewport threshold for smooth active section detection
      const scrollPosition = window.scrollY + navbarHeight + (window.innerHeight * 0.3);

      setScrolled(window.scrollY > 50);

      let currentSection = 'hero';

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = link.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-3">
        {/* 1st row: Portfolio (left) and Full Name (right) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="text-xl md:text-2xl font-bold text-primary tracking-tight shrink-0 transition-transform duration-300 hover:scale-105"
          >
            PORTFOLIO
          </a>

          {/* Full Name */}
          <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase select-none">
            CARINGULA RATHAN DHARUN TEJA
          </span>
        </div>

        {/* 2nd row: Navbar Section Links & Actions */}
        <div className="flex items-center justify-between">
          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-start">
            <ul className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-[10px] lg:text-[13px] uppercase tracking-[0.08em] font-medium transition-colors whitespace-nowrap ${
                      activeSection === link.id
                        ? 'text-orange-400 font-semibold'
                        : 'text-gray-300 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions (Mobile Menu Toggle) */}
          <div className="flex items-center gap-4 ml-auto shrink-0">
            <button
              className="md:hidden text-white text-2xl flex items-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden mt-3"
          >
            <ul className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-lg transition-colors ${
                      activeSection === link.id
                        ? 'text-orange-400'
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;