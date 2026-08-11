import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaAward, FaCalendarAlt, FaUser, FaTrophy, FaRocket, FaLaptopCode } from 'react-icons/fa';

const getAchievementIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes("workshop")) return <FaLaptopCode className="text-2xl" />;
    if (t.includes("sih") || (t.includes("finalist") && t.includes("2023"))) return <FaTrophy className="text-2xl" />;
    if (t.includes("vibe hack") || t.includes("hack")) return <FaRocket className="text-2xl" />;
    return <FaAward className="text-2xl" />;
};

const AchievementCard = ({ achievement, index, shouldReduceMotion }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.15 }}
            whileHover={shouldReduceMotion ? {} : {
                y: -6,
                scale: 1.01,
                boxShadow: "0 0 30px 4px rgba(34, 197, 94, 0.2)",
                borderColor: "rgba(34, 197, 94, 0.4)",
            }}
            className="group glass-panel p-8 rounded-3xl border border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full bg-white/[0.02]"
        >
            {/* Decorative Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

            <div>
                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:text-green-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                            {getAchievementIcon(achievement.title)}
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 leading-snug">
                                {achievement.title}
                            </h3>
                            {achievement.role && (
                                <div className="flex items-center gap-2 mt-1.5 text-gray-400 text-sm font-medium">
                                    <FaUser className="text-xs text-green-500" />
                                    <span>{achievement.role}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {achievement.date && (
                        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-800/80 rounded-full text-[11px] font-bold text-gray-300 border border-gray-700/50 shrink-0 self-start md:self-center">
                            <FaCalendarAlt className="text-green-500 text-[10px]" />
                            <span>{achievement.date}</span>
                        </div>
                    )}
                </div>

                <div className="text-gray-400 leading-relaxed space-y-3 relative z-10 pl-3 border-l-2 border-green-500/20 group-hover:border-green-500/40 transition-colors">
                    {Array.isArray(achievement.description) ? (
                        achievement.description.map((p, i) => (
                            <p key={i} className="text-sm md:text-base text-gray-300">
                                {p}
                            </p>
                        ))
                    ) : (
                        <p className="text-sm md:text-base text-gray-300">{achievement.description}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Achievements = ({ data }) => {
    const shouldReduceMotion = useReducedMotion();
    if (!data || data.length === 0) return null;

    return (
        <section id="achievements" className="py-20 bg-dark/30 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-40 left-10 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Key <span className="text-green-400">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-12"></div>
                    
                    {/* Announcement Banner */}
                    <div className="w-full max-w-4xl mx-auto mb-16">
                        <div className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] transition-all duration-300">
                            {/* Animated light rays inside border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            {/* Inner Card content */}
                            <div className="relative bg-gray-950/90 backdrop-blur-md rounded-[23px] px-6 py-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
                                {/* Announcement Tag + Headline */}
                                <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
                                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-4xl animate-bounce shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                                        🏆
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-bold uppercase tracking-wider mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                            Announcement
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                            Prompt 2 Product 2026
                                        </h3>
                                        <p className="text-gray-300 mt-1 font-medium text-sm md:text-base">
                                            Internal College Hackathon Winner
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Callout Badge */}
                                <div className="shrink-0">
                                    <span className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 text-black font-extrabold text-sm md:text-base uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-300 select-none">
                                        🏆 WINNER 🏆
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">
                    {/* Column 1: Workshop */}
                    {data[1] && (
                        <div className="h-full">
                            <AchievementCard 
                                achievement={data[1]} 
                                index={1} 
                                shouldReduceMotion={shouldReduceMotion} 
                            />
                        </div>
                    )}

                    {/* Column 2: SIH & Vibe Hack stacked */}
                    <div className="flex flex-col gap-8 h-full">
                        {data[2] && (
                            <div className="flex-1">
                                <AchievementCard 
                                    achievement={data[2]} 
                                    index={2} 
                                    shouldReduceMotion={shouldReduceMotion} 
                                />
                            </div>
                        )}
                        {data[3] && (
                            <div className="flex-1">
                                <AchievementCard 
                                    achievement={data[3]} 
                                    index={3} 
                                    shouldReduceMotion={shouldReduceMotion} 
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
