import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education = ({ data }) => {
    const getIcon = (index) => {
        if (index === 0) return <FaUniversity className="text-2xl" />;
        if (index === 1) return <FaSchool className="text-2xl" />;
        return <FaGraduationCap className="text-2xl" />;
    };

    const getGradient = (index) => {
        const gradients = [
            "from-blue-500 to-cyan-500",
            "from-purple-500 to-pink-500",
            "from-orange-500 to-red-500"
        ];
        return gradients[index % gradients.length];
    };

    return (
        <section id="education" className="py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-primary">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A journey of learning, growth, and academic excellence
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"></div>

                        {/* Education Cards */}
                        <div className="space-y-12">
                            {data.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className={`relative flex items-center ${
                                        index % 2 === 0 
                                            ? 'md:flex-row' 
                                            : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${getGradient(index)} flex items-center justify-center shadow-lg border-4 border-dark`}
                                        >
                                            <div className="text-white">
                                                {getIcon(index)}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Education Card */}
                                    <div className={`flex-1 ml-24 md:ml-0 ${
                                        index % 2 === 0 
                                            ? 'md:mr-auto md:pr-8 md:max-w-[45%]' 
                                            : 'md:ml-auto md:pl-8 md:max-w-[45%]'
                                    }`}>
                                        <motion.div
                                            whileHover={{ 
                                                scale: 1.02,
                                                y: -5,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="glass-panel p-6 md:p-8 rounded-2xl border-2 border-transparent hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
                                        >
                                            {/* Decorative gradient background */}
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getGradient(index)} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>

                                            {/* Degree Badge */}
                                            <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${getGradient(index)} mb-4`}>
                                                <span className="text-white text-sm font-bold">{edu.degree}</span>
                                            </div>

                                            {/* School Name */}
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                                {edu.school}
                                            </h3>

                                            {/* Duration */}
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradient(index)}`}></div>
                                                <span className="text-sm md:text-base">{edu.duration}</span>
                                            </div>

                                            {/* Decorative line */}
                                            <div className={`w-16 h-1 bg-gradient-to-r ${getGradient(index)} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
