import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaEnvelope, FaBolt } from 'react-icons/fa';
import profileImg from '../assets/Hero_Image.png';

const Footer = ({ data }) => {
    const displayRole = data.contact?.shortRole || data.role;

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <footer className="w-full bg-black/60 border-t border-white/5 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
                    
                    {/* Column 1: Profile & Bio */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3.5">
                            <img 
                                src={profileImg} 
                                alt={data.name} 
                                className="w-10 h-10 object-cover rounded-full border border-white/10 shrink-0" 
                            />
                            <div>
                                <h4 className="font-bold text-white tracking-tight">{data.name}</h4>
                                <span className="text-xs text-gray-500 font-medium block">{displayRole}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                            {data.contact.bio}
                        </p>
                        {data.contact.location && (
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mt-1">
                                <FaMapMarkerAlt className="text-gray-600" />
                                <span>{data.contact.location}</span>
                            </div>
                        )}
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h5 className="text-xs font-bold text-white uppercase tracking-widest">Quick Links</h5>
                        <ul className="flex flex-col gap-2.5">
                            <li>
                                <button 
                                    onClick={() => handleScroll('about')} 
                                    className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer outline-none"
                                >
                                    About Me
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScroll('experience')} 
                                    className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer outline-none"
                                >
                                    Experience
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScroll('projects')} 
                                    className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer outline-none"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScroll('education')} 
                                    className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer outline-none"
                                >
                                    Education
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect Links */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h5 className="text-xs font-bold text-white uppercase tracking-widest">Connect</h5>
                        <ul className="flex flex-col gap-3">
                            {data.contact.github && (
                                <li>
                                    <a 
                                        href={data.contact.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <FaGithub className="text-base" />
                                        <span>GitHub</span>
                                    </a>
                                </li>
                            )}
                            {data.contact.linkedin && (
                                <li>
                                    <a 
                                        href={data.contact.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <FaLinkedinIn className="text-base" />
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                            )}
                            {data.contact.email && (
                                <li>
                                    <a 
                                        href={`mailto:${data.contact.email}`} 
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <FaEnvelope className="text-base" />
                                        <span>Email</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-2 text-emerald-400">
                        <FaBolt className="text-sm shrink-0" />
                        <span>Available for opportunities</span>
                    </div>
                    <div>
                        <p>© {new Date().getFullYear()} - {data.name}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
