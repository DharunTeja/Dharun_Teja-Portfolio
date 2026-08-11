import React from 'react';
import { motion } from 'framer-motion';

const categoryStyles = {
    "Programming Languages": {
        borderHover: "hover:border-sky-500/50",
        iconBg: "group-hover:bg-sky-500/10",
        iconBorder: "border-white/10 group-hover:border-sky-500/50",
        badgeHover: "hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5",
        accent: "from-sky-500 to-blue-600",
        shadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
        divider: "from-sky-500/30",
        textPrimary: "group-hover:text-sky-400",
    },
    "Web Technologies": {
        borderHover: "hover:border-rose-500/50",
        iconBg: "group-hover:bg-rose-500/10",
        iconBorder: "border-white/10 group-hover:border-rose-500/50",
        badgeHover: "hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/5",
        accent: "from-rose-500 to-red-600",
        shadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
        divider: "from-rose-500/30",
        textPrimary: "group-hover:text-rose-400",
    },
    "AI/ML & Data Science": {
        borderHover: "hover:border-emerald-500/50",
        iconBg: "group-hover:bg-emerald-500/10",
        iconBorder: "border-white/10 group-hover:border-emerald-500/50",
        badgeHover: "hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5",
        accent: "from-emerald-500 to-teal-600",
        shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
        divider: "from-emerald-500/30",
        textPrimary: "group-hover:text-emerald-400",
    },
    "Developer Tools": {
        borderHover: "hover:border-violet-500/50",
        iconBg: "group-hover:bg-violet-500/10",
        iconBorder: "border-white/10 group-hover:border-violet-500/50",
        badgeHover: "hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/5",
        accent: "from-violet-500 to-purple-600",
        shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
        divider: "from-violet-500/30",
        textPrimary: "group-hover:text-violet-400",
    }
};

const Skills = ({ data }) => {
    const skillCategories = [
        { title: "Programming Languages", skills: data.skills?.programmingLanguages || [], icon: "💻" },
        { title: "Web Technologies", skills: data.skills?.webTechnologies || [], icon: "🌐" },
        { title: "AI/ML & Data Science", skills: data.skills?.aiMlDataScience || [], icon: "🧠" },
        { title: "Developer Tools", skills: data.skills?.developerTools || [], icon: "🛠️" }
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

                {/* Responsive Category Grid */}
                <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => {
                        const style = categoryStyles[category.title] || categoryStyles["Programming Languages"];
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="w-full md:w-[calc(50%-12px)] flex-grow-0 group"
                            >
                                <div className={`glass-panel p-6 md:p-8 rounded-3xl border border-gray-700/50 ${style.borderHover} ${style.shadow} transition-all duration-300 h-full flex flex-col justify-between`}>
                                    <div>
                                        {/* Category Header: Icon & Title */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-12 h-12 rounded-2xl bg-white/5 border ${style.iconBorder} ${style.iconBg} flex items-center justify-center text-2xl transition-all duration-300 shrink-0`}>
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold text-gray-100 ${style.textPrimary} transition-colors duration-300`}>
                                                    {category.title}
                                                </h3>
                                                <span className="text-xs text-gray-400 font-medium select-none">
                                                    {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Decorative Divider */}
                                        <div className={`h-px bg-gradient-to-r ${style.divider} to-transparent mb-6`}></div>

                                        {/* Skills Badge Container */}
                                        <div className="flex flex-wrap gap-2.5">
                                            {category.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className={`bg-white/5 border border-white/5 rounded-xl py-2 px-4 text-sm font-medium text-gray-300 ${style.badgeHover} transition-all duration-300 cursor-default select-none whitespace-nowrap`}
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Accent Detail */}
                                    <div className={`w-12 h-1 bg-gradient-to-r ${style.accent} rounded-full mt-8 opacity-20 group-hover:opacity-100 group-hover:w-20 transition-all duration-300`}></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
