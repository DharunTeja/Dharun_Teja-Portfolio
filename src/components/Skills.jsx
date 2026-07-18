import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiSupabase, SiC, SiMysql, SiMongodb } from 'react-icons/si';

const iconMap = {
    "React.js": <FaReact />,
    "JavaScript": <FaJs />,
    "Python": <FaPython />,
    "C": <SiC />,
    "HTML": <FaHtml5 />,
    "CSS": <FaCss3Alt />,
    "Firebase": <SiFirebase />,
    "Supabase": <SiSupabase />,
    "Git": <FaGitAlt />,
    "GitHub": <FaGithub />,
    "MySQL": <SiMysql />,
    "MongoDB": <SiMongodb />
};

const Skills = ({ data }) => {
    const skillCategories = [
        { title: "Languages", skills: data.skills?.languages || [], icon: "💻" },
        { title: "Frontend", skills: data.skills?.frontend || [], icon: "🎨" },
        { title: "Tools", skills: data.skills?.tools || [], icon: "🛠️" },
        { title: "Backend / Cloud", skills: data.skills?.backend || [], icon: "☁️" },
        { title: "Database", skills: data.skills?.database || [], icon: "🗄️" }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-primary">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="space-y-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 }}
                            className="relative"
                        >
                            {/* Category Label */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-2xl font-bold">
                                    <span className="text-primary">{category.title}</span>
                                </h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                            </div>

                            {/* Skills Container - Horizontal Scroll on Mobile */}
                            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:overflow-visible md:grid md:grid-cols-3 lg:grid-cols-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: (categoryIndex * 0.2) + (index * 0.1),
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{ 
                                            y: -8,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex-shrink-0 min-w-[140px] md:min-w-0"
                                    >
                                        <div className="glass-panel rounded-2xl p-6 text-center border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                                            {/* Icon with animated background */}
                                            <div className="relative mb-4">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                                                <div className="relative w-20 h-20 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center text-4xl text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300 border border-gray-700 group-hover:border-primary/50">
                                                    {iconMap[skill] || <FaReact />}
                                                </div>
                                            </div>
                                            
                                            {/* Skill Name */}
                                            <h4 className="font-bold text-lg text-gray-200 group-hover:text-primary transition-colors">
                                                {skill}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Skills;
