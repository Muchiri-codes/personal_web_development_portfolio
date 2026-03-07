"use client"
import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import { HERO_CONTENT } from '../app/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["Web Design", "API Integration", "UI/UX Design", "Fullstack Development"];

const handleClick = () => {
  document.getElementById("services")?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-20"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-green-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text */}
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase">
            <Terminal className="w-3 h-3" />
            <span>{HERO_CONTENT.badge}</span>
          </div>

          <div className="space-y-4">
            <motion.h1
            initial={{opacity:0, rotateY:0}}
            whileInView={{
              opacity:1,
              rotateY:[0, 360, 720]
            }}
            viewport={{once:false, amount:0.3}}
            transition={{
              duration:2,
              ease:"easeInOut"
            }}
            style={{originX:0.5, perspective:1000}}
            className="text-5xl inline-block md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              {HERO_CONTENT.title} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-600">
                {HERO_CONTENT.titleGradient}
              </span>
            </motion.h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              {HERO_CONTENT.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={handleClick}
              className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center gap-5 text-gray-500">
              <a href={HERO_CONTENT.socials.github} className="hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={HERO_CONTENT.socials.linkedin} className="hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:w-2/3 lg:w-full lg:col-span-5 relative order-1 lg:order-2 mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 aspect-4/5 rounded-3xl p-1 bg-linear-to-b from-emerald-500/50 to-transparent shadow-2xl overflow-hidden"
          >
            <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-[#111] relative">
              <img 
                src={HERO_CONTENT.imagePath} 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              />

              {/* FLOATING TEXT OVERLAY */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 bg-linear-to-t from-black/90 via-black/20 to-transparent">
                <p className="text-white/80 text-sm font-bold mb-1">Hello, I'm John and I do:</p>
                <div className="h-10">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-emerald-400 font-black text-xl md:text-2xl uppercase tracking-tighter block"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl z-0 rounded-full" />
        </div>

      </div>
    </section>
  );
};