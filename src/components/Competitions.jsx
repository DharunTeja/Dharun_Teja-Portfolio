import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const Competitions = ({ data }) => {
    return (
        <section id="competitions" className="py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Competitions</span> & Challenges
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {data.map((competition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="glass-panel rounded-3xl overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={competition.image}
                                        alt={competition.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    
                                    {/* Trophy Icon Badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                                            <FaTrophy className="text-2xl text-white" />
                                        </div>
                                    </div>

                                    {/* Year Badge */}
                                    {competition.year && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-sm font-bold text-black">
                                                {competition.year}
                                            </span>
                                        </div>
                                    )}

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {competition.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-400 mb-6 flex-1 leading-relaxed">
                                        {competition.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {competition.tech.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-300 border border-gray-700 hover:border-primary/50 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    {competition.demo && (
                                        <a
                                            href={competition.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                                        >
                                            <span>View Competition</span>
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competitions;
