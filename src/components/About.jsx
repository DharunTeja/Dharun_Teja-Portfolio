import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
import aboutImg from '../assets/About_Image.jpeg';

const About = ({ data }) => {
    return (
        <section id="about" className="pt-20 pb-8 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                {/* Top Section: Image + Description */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center items-center relative py-12 md:py-16"
                    >
                        {/* Faint ambient glow */}
                        <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center z-10">
                            {/* Floating Card 1: Top-Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
                                className="absolute -top-4 -left-6 md:-top-6 md:-left-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-3.5 flex items-center gap-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-20 cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.3)] text-gray-300 hover:text-white"
                            >
                                <FaPython className="text-primary text-base md:text-lg" />
                                <span className="text-[10px] md:text-xs font-semibold whitespace-nowrap">Python & ML</span>
                            </motion.div>

                            {/* Floating Card 2: Top-Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
                                className="absolute -top-6 -right-4 md:-top-8 md:-right-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-3.5 flex items-center gap-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-20 cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:bg-secondary/5 hover:shadow-[0_10px_20px_-10px_rgba(244,63,94,0.3)] text-gray-300 hover:text-white"
                            >
                                <FaReact className="text-secondary text-base md:text-lg" />
                                <span className="text-[10px] md:text-xs font-semibold whitespace-nowrap">React & Web</span>
                            </motion.div>

                            {/* Floating Card 3: Bottom-Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
                                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-3.5 flex items-center gap-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-20 cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400/40 hover:bg-orange-400/5 hover:shadow-[0_10px_20px_-10px_rgba(251,146,60,0.3)] text-gray-300 hover:text-white"
                            >
                                <FaDatabase className="text-orange-400 text-base md:text-lg" />
                                <span className="text-[10px] md:text-xs font-semibold whitespace-nowrap">Data Analytics</span>
                            </motion.div>

                            {/* Floating Card 4: Bottom-Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
                                className="absolute -bottom-4 -right-6 md:-bottom-6 md:-right-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-3.5 flex items-center gap-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-20 cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.3)] text-gray-300 hover:text-white"
                            >
                                <FaCode className="text-primary text-base md:text-lg" />
                                <span className="text-[10px] md:text-xs font-semibold whitespace-nowrap">Full Stack</span>
                            </motion.div>

                            {/* Liquid Morphing: Outer Gradient Glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-thirdary opacity-50 filter blur-md shadow-[0_0_30px_rgba(56,189,248,0.2)] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Liquid Morphing: Inner Profile Image Container */}
                            <div className="absolute inset-2 overflow-hidden bg-gray-800 border-2 border-white/20 shadow-2xl rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]">
                                <img
                                    src={aboutImg}
                                    alt="About Me"
                                    className="w-full h-full object-cover scale-110 select-none pointer-events-none"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h3 className="text-2xl font-bold mb-4">Passionate Developer & Creative Thinker</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I am a dedicated Full Stack Developer with a strong foundation in building dynamic and responsive web applications.
                            My journey is driven by a curiosity to explore new technologies and a commitment to solving real-world problems through code.
                            Whether it's crafting intuitive user interfaces or engineering robust backend systems, I thrive on the challenge of bringing ideas to life.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Beyond coding, I am an athlete who believes in discipline and pushing limits—values that I bring to my professional work every day.
                        </p>
                    </motion.div>
                </div>

                {/* Areas of Interest & Future Goals Side-by-Side */}
                {((data.interests && data.interests.length > 0) || (data.goals && data.goals.length > 0)) && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 md:mt-16 max-w-7xl mx-auto items-start">
                        {/* 1st Column: Areas of Interest */}
                        {data.interests && data.interests.length > 0 && (
                            <div className="flex flex-col gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-left"
                                >
                                    <h3 className="text-2xl font-bold mb-2">Areas of Interest</h3>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
                                </motion.div>

                                <div className="flex flex-wrap gap-2.5">
                                    {data.interests.map((interest, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                                            className="border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.3)] shadow-sm cursor-pointer select-none text-gray-300 hover:text-white"
                                        >
                                            {interest}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Philosophy Card to fill empty space */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="glass-panel p-6 rounded-2xl border border-white/10 mt-8 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Philosophy</h4>
                                    <p className="text-gray-300 text-sm italic leading-relaxed">
                                        "Building intelligent systems that bridge the gap between data insights and robust, interactive user experiences."
                                    </p>
                                </motion.div>
                            </div>
                        )}

                        {/* 2nd Column: Future Goals */}
                        {data.goals && data.goals.length > 0 && (
                            <div className="flex flex-col gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-left"
                                >
                                    <h3 className="text-2xl font-bold mb-2">Future Goals</h3>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
                                </motion.div>

                                <div className="flex flex-col gap-4">
                                    {data.goals.map((goal, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                                            className="group glass-panel p-4.5 rounded-2xl border border-white/10 flex items-start gap-3 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-[0_15px_30px_-10px_rgba(244,63,94,0.15)] cursor-default"
                                        >
                                            <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse" />
                                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{goal}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
