import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/Hero_Image.png';

const Hero = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-gray-400 font-medium tracking-widest mb-4 text-xl">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary">
                        <TypeAnimation
                            sequence={[
                                data.name,
                                1000,
                                "C.R.DHARUN TEJA",
                                1000,
                                "DHARUN TEJA",
                                1000,
                                "DHARUN",
                                1000,
                            ]}
                            wrapper="span"
                            speed={75}
                            repeat={Infinity}
                        />
                    </h1>
                    <h3 className="text-2xl md:text-3xl mb-6">
                        <span className="gradient-text font-semibold">{data.role}</span>
                    </h3>
                    <h2 className="text-gray-400 font-medium tracking-widest mb-4 text-xl">
                        {data.tagline}
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="https://drive.google.com/file/d/18moai8QZzxZcKPX6rXk5UijrmKPQ1Ied/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-opacity-80 transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            <svg 
                                viewBox="0 0 24 24" 
                                width="20" 
                                height="20" 
                                className="fill-none stroke-current" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <motion.circle
                                    cx="12"
                                    cy="12"
                                    r="3"
                                    fill="currentColor"
                                    animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                />
                                <motion.path
                                    animate={isHovered ? { d: "M 2 12 Q 12 3 22 12 Q 12 21 2 12" } : { d: "M 2 12 Q 12 12 22 12 Q 12 12 2 12" }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                />
                            </svg>
                            View Resume
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-gray-600 text-white rounded-full hover:border-primary hover:text-primary transition-all">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 border-2 border-primary rounded-2xl animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-2 border-2 border-secondary rounded-2xl animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-4 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(0,255,229,0.1)] bg-black">
                            <img src={profileImg} alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
