import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = ({ data }) => {
    const handleCertificateView = (certificate) => {
        window.open(certificate, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="experience" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {data.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-12 border-l-2 border-gray-700 last:border-0 last:pb-0"
                        >
                            <div className="absolute -left-[11px] top-0 w-6 h-6 bg-dark border-2 border-primary rounded-full flex items-center justify-center text-xs text-primary">
                                <FaBriefcase />
                            </div>
                            <div className="glass-panel p-6 rounded-xl ml-4 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-secondary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 md:mt-0">
                                        <span className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">{exp.duration}</span>
                                        {exp.certificate && (
                                            <button
                                                onClick={() => handleCertificateView(exp.certificate)}
                                                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/50 hover:border-primary text-primary rounded-lg transition-all duration-300 group"
                                                title="View Certificate in New Tab"
                                            >
                                                <FaCertificate className="group-hover:scale-110 transition-transform" />
                                                <span className="text-sm font-medium">Certificate</span>
                                                <FaExternalLinkAlt className="text-xs opacity-70" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="text-gray-400 leading-relaxed">
                                    {Array.isArray(exp.description) ? (
                                        exp.description.map((para, idx) => (
                                            <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p>{exp.description}</p>
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

export default Experience;
