"use client"

import { ABOUT_CONTENT, HERO_CONTENT } from '../app/data/portfolio';
import { User, Briefcase, Award } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.section 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:false, amount:0.2}}
    transition={{duration:0.8, ease:"easeOut"}}
    id="about" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background glow to separate sections */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Stats & Image Holder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="aspect-portrait rounded-3xl overflow-hidden bg-[#111] border border-white/5">
              
                <img
                  src={HERO_CONTENT.imagePath}
                  alt="profile_image"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 p-3 bg-emerald-500 rounded-2xl shadow-xl hidden md:block">
                <p className="text-black font-black text-2xl line-height-none">5+</p>
                <p className="text-black/80 text-xs font-bold uppercase tracking-tighter">Years of Mastery</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {ABOUT_CONTENT.stats.map((stat, i) => (
                <div key={i} className="sm:p-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className='text-xl '>
                My name is <span className='font-bold text-emerald-400'>John Muchiri</span>,  A full stack website developer based in Kenya. <br />My aim is to create self selling website for my clients. <br />Such a website that keeps  your business at the top. <br />My aim for skill and less of certificates is evident in my vast range of toolset I use. <br />Your desired website is a guarantee.
                To check my toolset, <Link
                className='text-emerald-600'
                href={'#TechStack'}>click me </Link>
              </h1>
              <h2 className='text-lg pt-3'>
                To download my CV, hit the button below:
                <button className='bg-emerald-800 m-2 text-white p-4 rounded-lg font-bold'>
                  DOWNLOAD CV
                </button>
              </h2>
            </div>
          </div>

          {/* Right Column: Narrative & Experience */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-emerald-500 font-bold tracking-widest uppercase text-xs">
                <User className="w-4 h-4" />
                <span>The Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Building the future of the web, <br />
                <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">
                  one pixel at a time.
                </span>
              </h2>

              <div className="space-y-4">
                {ABOUT_CONTENT.description.map((text, i) => (
                  <p key={i} className="text-gray-400 text-lg leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Experience List - Dark Glassmorphism Style */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-gray-500 font-bold tracking-widest uppercase text-xs">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </div>
              
              <div className="space-y-3">
                {ABOUT_CONTENT.experience.map((exp, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition group"
                  >
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition">
                        {exp.role}
                      </h4>
                      <p className="text-gray-500 text-sm">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                      {exp.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};