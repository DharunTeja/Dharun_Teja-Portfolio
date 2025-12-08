import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Check if we've reached the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
                setActiveSection('contact');
                return;
            }

            const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'competitions', 'education', 'certificates', 'gallery', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Competitions', href: '#competitions', id: 'competitions' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Certificates', href: '#certificates', id: 'certificates' },
        { name: 'Gallery', href: '#gallery', id: 'gallery' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-6">
                {/* Logo column (narrow) */}
                <div className="shrink-0">
                    <a href="#" className="text-2xl font-bold text-primary tracking-tight">PORTFOLIO</a>
                </div>

                {/* Links column (wide) */}
                <div className="flex-1 flex justify-end">
                    <ul className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href} text-orange-400
                                    className={`text-[11px] lg:text-sm uppercase tracking-[0.12em] font-medium transition-colors ${activeSection === link.id ? 'text-orange-400' : 'text-gray-300 hover:text-primary'}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
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
                        className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden"
                    >
                        <ul className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg ${activeSection === link.id ? 'text-orange-400' : 'text-white hover:text-primary'}`}
                                    >
                                        {link.name}
                                    </a>
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
