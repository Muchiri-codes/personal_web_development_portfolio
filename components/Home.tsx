"use client"
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import { HERO_CONTENT } from '../app/data/portfolio';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { pixelify } from '@/app/layout';

const roles = ["Web Design", "API Integration", "UI/UX Design","Graphisc design",  "Fullstack Development", "Web Mapping"];

const handleClick = () => {
  document.getElementById("services")?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const[ isMobile, setIsMobile] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

return (
  <section
    id="home"
    className="relative h-auto py-22 md:py-32 flex items-center overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    </div>

 
    <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

      <div className="lg:col-span-6 space-y-8 order-2 lg:order-1 w-full">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black text-amber-500 tracking-tighter leading-[0.9]"
          >
            {HERO_CONTENT.title} <br />
            <span className="bg-clip-text text-black bg-linear-to-r">
              {HERO_CONTENT.titleGradient}
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
            {HERO_CONTENT.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={handleClick}
            className="group relative rounded-md w-full sm:w-auto text-center justify-center px-8 py-4 bg-emerald-500 text-black font-bold overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <div className="flex items-center gap-5 text-gray-500 mx-auto sm:mx-0">
            <a href={HERO_CONTENT.socials.github} className="hover:text-emerald-400  font-bold transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href={HERO_CONTENT.socials.linkedin} className="hover:text-emerald-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:col-span-6 relative order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
  
          className="relative z-10 w-full aspect-4/5 sm:aspect-video lg:aspect3/4 xl:aspect-4/5 sm:h-auto rounded-3xl p-0.5 sm:p-1 bg-linear-to-b from-emerald-500/40 to-transparent shadow-2xl overflow-hidden"
        >
          <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-[#111] relative group">
            <video
              ref={videoRef}
              src="/creative_process.mp4"
              playsInline
              muted
              loop
              className="w-full h-full object-cover transition duration-700 opacity-60 hover:opacity-100"
            />

            {/* FLOATING TEXT */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-10 bg-linear-to-t from-black/95 via-black/30 to-transparent pointer-events-none">
              <p className="text-white/80 text-base sm:text-lg font-bold mb-1 italic">Hello, I'm John and I do:</p>
              <div className="h-10 sm:h-12">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className= {`text-emerald-400  ${pixelify.className} text-xl sm:text-2xl md:text-4xl uppercase tracking-tighter block`}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Subtle backing glow accent behind the video frame */}
        <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl z-0 rounded-full pointer-events-none" />
      </div>

    </div>
  </section>
);
};