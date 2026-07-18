import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBrain, FaLanguage, FaBriefcase, FaFolderOpen, FaTrophy, FaAward, FaMedal } from "react-icons/fa";

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
  // Scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // --- SKILLS COUNTS ---
  const languagesCount = data.skills?.languages?.length || 0;
  const frontendCount = data.skills?.frontend?.length || 0;
  const toolsCount = data.skills?.tools?.length || 0;
  const backendCount = data.skills?.backend?.length || 0;
  const databaseCount = data.skills?.database?.length || 0;

  const totalSkills =
    languagesCount +
    frontendCount +
    toolsCount +
    backendCount +
    databaseCount;

  // --- OTHER COUNTS ---
  const experienceCount = data.experience?.length || 0;
  const projectsCount = data.projects?.length || 0;
  const competitionsCount = data.competitions?.length || 0;
  const achievementsCount = data.achievements?.length || 0;
  const certificationsCount = data.certifications?.length || 0;

  // Trigger animation when in view
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const duration = 1500; // Slower count up for better effect

  // --- ANIMATIONS ---
  const animatedSkills = useCountUp(isInView ? totalSkills : 0, 0, duration, 0);
  const animatedLanguages = useCountUp(isInView ? languagesCount : 0, 0, duration, 200);
  const animatedExperience = useCountUp(isInView ? experienceCount : 0, 0, duration, 400);
  const animatedProjects = useCountUp(isInView ? projectsCount : 0, 0, duration, 600);
  const animatedCompetitions = useCountUp(isInView ? competitionsCount : 0, 0, duration, 800);
  const animatedAchievements = useCountUp(isInView ? achievementsCount : 0, 0, duration, 1000);
  const animatedCertifications = useCountUp(isInView ? certificationsCount : 0, 0, duration, 1200);

  return (
    <section ref={containerRef} className="pt-8 pb-16 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 lg:gap-5 max-w-7xl mx-auto justify-items-stretch items-stretch">

          {/* Skills */}
          <motion.div
            onClick={() => handleScroll("skills")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaBrain className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedSkills}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Skills
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

          {/* Languages */}
          <motion.div
            onClick={() => handleScroll("skills")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaLanguage className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedLanguages}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Languages
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

          {/* Experience */}
          <motion.div
            onClick={() => handleScroll("experience")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaBriefcase className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedExperience}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Experience
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

          {/* Projects */}
          <motion.div
            onClick={() => handleScroll("projects")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaFolderOpen className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedProjects}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Projects
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

          {/* Competitions */}
          <motion.div
            onClick={() => handleScroll("competitions")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaTrophy className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedCompetitions}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Competitions
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            onClick={() => handleScroll("achievements")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaMedal className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedAchievements}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Achievements
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            onClick={() => handleScroll("certificates")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel p-5 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0">
              <FaAward className="text-primary text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text select-none">
              {animatedCertifications}
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              Certificates
            </p>
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Stats;