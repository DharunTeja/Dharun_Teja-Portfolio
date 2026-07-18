import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Theme synchronization
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
          ? 'bg-black/80 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-2xl font-bold text-primary tracking-tight shrink-0"
        >
          PORTFOLIO
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-end ml-12">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[10px] lg:text-[13px] uppercase tracking-[0.08em] font-medium transition-colors whitespace-nowrap ${
                    activeSection === link.id
                      ? 'text-orange-400'
                      : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions (Theme Toggle & Mobile Menu Toggle) */}
        <div className="flex items-center gap-4 ml-4 md:ml-6 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-primary transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer text-sm md:text-base"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-sky-900" />}
          </button>

          <button
            className="md:hidden text-white text-2xl flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
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
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden"
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