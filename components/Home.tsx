import React from 'react';
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import { HERO_CONTENT } from '../app/data/portfolio';

export  const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-green-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Content (8 columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase">
            <Terminal className="w-3 h-3" />
            <span>{HERO_CONTENT.badge}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              {HERO_CONTENT.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                {HERO_CONTENT.titleGradient}
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              {HERO_CONTENT.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
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

        {/* Right Side: Visual (5 columns) */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-emerald-500/50 to-transparent shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-[#111]">
              <img 
                src={HERO_CONTENT.imagePath} 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-90 hover:brightness-110 scale-110 hover:scale-100"
              />
            </div>
          </div>
          
          {/* Subtle Glow Behind Image */}
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-0 rounded-full" />
        </div>
      </div>
    </section>
  );
};