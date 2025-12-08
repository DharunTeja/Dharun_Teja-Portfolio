import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Custom hook for counting animation
const useCountUp = (end, start = 0, duration = 500, delay = 0) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const startTimeRef = useRef(null);
    const animationFrameRef = useRef(null);
    const hasStartedRef = useRef(false);

    useEffect(() => {
        const animate = (currentTime) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currentTime;
            }

            const elapsed = currentTime - startTimeRef.current;

            if (elapsed < delay) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }

            if (!hasStartedRef.current) {
                hasStartedRef.current = true;
                startTimeRef.current = currentTime;
            }

            const progress = Math.min((elapsed - delay) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(start + (end - start) * easeOutQuart);

            if (currentCount !== countRef.current) {
                countRef.current = currentCount;
                setCount(currentCount);
            }

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        // Reset when end value changes
        setCount(start);
        countRef.current = start;
        startTimeRef.current = null;
        hasStartedRef.current = false;
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [end, start, duration, delay]);

    return count;
};

const Stats = ({ data }) => {
    const languagesCount = data.skills?.languages?.length || 0;
    const projectsCount = data.projects?.length || 0;
    const experienceCount = data.experience?.length || 0;
    const competitionsCount = data.competitions?.length || 0;
    const certificationsCount = data.certifications?.length || 0;

    const duration = 500; // 0.5 seconds duration

    // Animated counts with sequential delays - each waits for previous to finish
    const animatedLanguages = useCountUp(languagesCount, 0, duration, 0);           // Starts immediately
    const animatedProjects = useCountUp(projectsCount, 0, duration, duration);        // Starts after Languages (0.5s)
    const animatedExperience = useCountUp(experienceCount, 0, duration, duration * 2); // Starts after Projects (1s)
    const animatedCompetitions = useCountUp(competitionsCount, 0, duration, duration * 3); // Starts after Experience (1.5s)
    const animatedCertifications = useCountUp(certificationsCount, 0, duration, duration * 4); // Starts after Competitions (2s)

    return (
        <section className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {/* Languages Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel p-4 md:p-6 lg:p-8 rounded-2xl text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 gradient-text">
                            {animatedLanguages}
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-300">Languages</p>
                    </motion.div>

                    {/* Projects Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-panel p-4 md:p-6 lg:p-8 rounded-2xl text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 gradient-text">
                            {animatedProjects}
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-300">Projects</p>
                    </motion.div>

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel p-4 md:p-6 lg:p-8 rounded-2xl text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 gradient-text">
                            {animatedExperience}
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-300">Experience</p>
                    </motion.div>

                    {/* Competitions Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-panel p-4 md:p-6 lg:p-8 rounded-2xl text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 gradient-text">
                            {animatedCompetitions}
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-300">Competitions</p>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-panel p-4 md:p-6 lg:p-8 rounded-2xl text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 gradient-text">
                            {animatedCertifications}
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-300">Certificates</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
