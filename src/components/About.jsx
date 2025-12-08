import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/About_Image.jpeg';

const About = ({ data }) => {
    return (
        <section id="about" className="py-20 bg-dark/50">
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
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Primary Circle - Flies in from top-left */}
                            <motion.div
                                className="absolute inset-0"
                                initial={{ x: -200, y: -100, opacity: 0, scale: 0.5 }}
                                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-full h-full border-2 border-primary rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            {/* Secondary Circle - Flies in from bottom-right */}
                            <motion.div
                                className="absolute inset-2"
                                initial={{ x: 200, y: 100, opacity: 0, scale: 0.5 }}
                                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-full h-full border-2 border-secondary rounded-full"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-800">
                                <img src={aboutImg} alt="About Me" className="w-full h-full object-cover" />
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
            </div>
        </section>
    );
};

export default About;
