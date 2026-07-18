import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = ({ data }) => {
    const handleCertificateClick = (link) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section id="certificates" className="py-20 bg-dark/50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">My </span>Certifications
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {data.map((cert, index) => {
                        const certName = typeof cert === 'string' ? cert : cert.name;
                        const certLink = typeof cert === 'object' ? cert.link : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative"
                            >
                                <div 
                                    onClick={() => certLink && handleCertificateClick(certLink)}
                                    className={`glass-panel rounded-2xl p-6 border-2 border-transparent hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden ${certLink ? 'cursor-pointer' : ''}`}
                                >
                                    {/* Decorative gradient background */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <FaCertificate className="text-3xl text-primary group-hover:text-secondary transition-colors" />
                                        </div>
                                    </div>

                                    {/* Certificate Name */}
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors relative z-10">
                                        {certName}
                                    </h3>

                                    {/* Decorative line */}
                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Award icon on hover */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {certLink ? (
                                            <FaExternalLinkAlt className="text-2xl text-secondary" />
                                        ) : (
                                            <FaAward className="text-2xl text-secondary" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
