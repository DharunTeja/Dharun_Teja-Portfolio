import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ data }) => {
    const [showAll, setShowAll] = useState(false);
    const hasMore = data.length > 6;

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                {/* Transition wrapper */}
                <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${!showAll && hasMore ? 'max-h-[680px] pb-28' : 'max-h-[5000px] pb-8'}`}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-primary transition-colors" title="Github Repo">
                                                <FaGithub />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-primary transition-colors" title="View Project">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300 border border-gray-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-auto">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center border border-gray-600 rounded-lg text-sm hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                                                <FaGithub /> Repo
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center bg-primary text-black font-bold rounded-lg text-sm hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
                                                <FaExternalLinkAlt /> Visit
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Blurry Gradient Overlay covering the cut off bottom half */}
                    {!showAll && hasMore && (
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark via-dark/95 to-transparent backdrop-blur-[3px] flex items-end justify-center pb-4 z-20 pointer-events-auto">
                            <button
                                onClick={() => setShowAll(true)}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-2"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>

                {showAll && hasMore && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(false)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
