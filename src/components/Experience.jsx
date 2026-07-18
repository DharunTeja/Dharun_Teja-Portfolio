import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = ({ data }) => {
    const shouldReduceMotion = useReducedMotion();

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
                    {data.map((exp, index) => {
                        const isOngoing = exp.duration === "Ongoing" || exp.duration === "Currently Working";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-12 last:pb-0"
                            >
                                {/* Timeline line segment */}
                                {index < data.length - 1 && (
                                    <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-gray-800/60 rounded-full">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: shouldReduceMotion ? 0 : 1.2, 
                                                ease: "easeInOut" 
                                            }}
                                            className={`w-full origin-top rounded-full ${
                                                index === 0 
                                                    ? "bg-gradient-to-b from-green-500 via-green-400 to-primary" 
                                                    : "bg-primary"
                                            }`}
                                        />
                                    </div>
                                )}

                                {/* Timeline Node */}
                                {isOngoing ? (
                                    <div className="absolute left-0 top-0 w-6 h-6 bg-dark border-2 border-green-500 rounded-full flex items-center justify-center text-xs text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] z-10">
                                        {!shouldReduceMotion && (
                                            <motion.span
                                                className="absolute inset-0 rounded-full border-2 border-green-400 opacity-75"
                                                animate={{
                                                    scale: [1, 1.6],
                                                    opacity: [0.8, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        )}
                                        <motion.span
                                            className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#22c55e]"
                                            animate={shouldReduceMotion ? {} : {
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="absolute left-0 top-0 w-6 h-6 bg-dark border-2 border-primary rounded-full flex items-center justify-center text-xs text-primary z-10">
                                        <FaBriefcase />
                                    </div>
                                )}

                                {/* Experience Card */}
                                <motion.div
                                    animate={isOngoing && !shouldReduceMotion ? {
                                        boxShadow: [
                                            "0 0 12px 1px rgba(34, 197, 94, 0.12)",
                                            "0 0 24px 3px rgba(34, 197, 94, 0.22)",
                                            "0 0 12px 1px rgba(34, 197, 94, 0.12)"
                                        ],
                                        borderColor: [
                                            "rgba(34, 197, 94, 0.15)",
                                            "rgba(34, 197, 94, 0.3)",
                                            "rgba(34, 197, 94, 0.15)"
                                        ]
                                    } : {}}
                                    whileHover={shouldReduceMotion ? {} : {
                                        y: -4,
                                        scale: 1.01,
                                        boxShadow: isOngoing 
                                            ? "0 0 28px 4px rgba(34, 197, 94, 0.35)" 
                                            : "0 0 20px 2px rgba(56, 189, 248, 0.25)",
                                        borderColor: isOngoing 
                                            ? "rgba(34, 197, 94, 0.5)" 
                                            : "rgba(56, 189, 248, 0.5)",
                                    }}
                                    transition={{
                                        boxShadow: isOngoing && !shouldReduceMotion ? {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        } : {
                                            type: "tween",
                                            ease: "easeOut",
                                            duration: 0.3
                                        },
                                        borderColor: isOngoing && !shouldReduceMotion ? {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        } : {
                                            type: "tween",
                                            ease: "easeOut",
                                            duration: 0.3
                                        },
                                        y: {
                                            type: "tween",
                                            ease: "easeOut",
                                            duration: 0.3
                                        },
                                        scale: {
                                            type: "tween",
                                            ease: "easeOut",
                                            duration: 0.3
                                        }
                                    }}
                                    className={`glass-panel p-6 rounded-xl ml-4 border transition-colors duration-300 ${
                                        isOngoing 
                                            ? 'border-green-500/20 bg-green-950/5' 
                                            : 'border-white/10 hover:border-primary/50'
                                    }`}
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-secondary font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-3 mt-2 md:mt-0">
                                            {isOngoing ? (
                                                <div className="relative flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs font-semibold shadow-[0_0_15px_rgba(34,197,94,0.15)] overflow-hidden">
                                                    <span className="relative flex h-2 w-2">
                                                        {!shouldReduceMotion && (
                                                            <motion.span
                                                                className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                                                animate={{
                                                                    scale: [1, 2.5],
                                                                    opacity: [0.75, 0]
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    repeatDelay: 1.5,
                                                                    ease: "easeOut"
                                                                }}
                                                            />
                                                        )}
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                                                    </span>
                                                    <span>Currently Working</span>
                                                </div>
                                            ) : (
                                                <span className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">{exp.duration}</span>
                                            )}
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
                                    <div className="text-gray-400 leading-relaxed space-y-3">
                                        {Array.isArray(exp.description) ? (
                                            exp.description.map((para, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ 
                                                        duration: 0.4, 
                                                        delay: shouldReduceMotion ? 0 : idx * 0.1,
                                                        ease: "easeOut"
                                                    }}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <span className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${isOngoing ? 'bg-green-500 shadow-[0_0_6px_#22c55e]' : 'bg-primary'}`} />
                                                    <p className="text-gray-300 text-base md:text-md">
                                                        {para}
                                                    </p>
                                                </motion.div>
                                            ))
                                        ) : (
                                            <motion.div
                                                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="flex items-start gap-2.5"
                                            >
                                                <span className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${isOngoing ? 'bg-green-500 shadow-[0_0_6px_#22c55e]' : 'bg-primary'}`} />
                                                <p className="text-gray-300 text-base md:text-md">{exp.description}</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
