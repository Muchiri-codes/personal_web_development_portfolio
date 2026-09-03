"use client";

import { ABOUT_CONTENT, HERO_CONTENT } from '../app/data/portfolio';
import { handleDownload } from './CVDownload';
import { User, Briefcase, Award, ChevronDown, ChevronUp } from 'lucide-react'; // added chevron imports
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const About = () => {
  // State for each experience's dropdown – we store an array of booleans
  const [openStates, setOpenStates] = useState(
    ABOUT_CONTENT.experience.map(() => false)
  );

  const toggleOpen = (index: number) => {
    setOpenStates(prev => prev.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="about"
      className="relative overflow-hidden"
    >
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
                  loading="lazy"
                  className="w-full h-full object-cover md:grayscale hover:grayscale-0 transition duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {ABOUT_CONTENT.stats.map((stat, i) => (
                <div
                  key={i}
                  className="sm:p-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-xl">
                My name is <span className="font-bold text-emerald-400">John Muchiri</span>, A full
                stack website developer based in Kenya. <br />
                My aim is to create self selling website for my clients. <br />
                Such a website that keeps your business at the top. <br />
                My aim for skill and less of certificates is evident in my vast range of toolset I
                use. <br />
                Your desired website is a guarantee. To check my toolset,{" "}
                <Link className="text-emerald-600" href="#techstack">
                  click me
                </Link>
              </h1>
              <h2 className="text-lg pt-3">
                To download my CV, hit the button below:
                <motion.button
                  onClick={handleDownload}
                  initial={{ borderRadius: "12px" }}
                  whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-800 m-2 text-white p-4 rounded-lg font-bold"
                >
                  DOWNLOAD CV
                </motion.button>
              </h2>
            </div>
          </div>

          {/* Right Column: Story & Experience Timeline */}
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

            {/* Experience Timeline with Dropdowns */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-gray-500 font-bold tracking-widest uppercase text-xs">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </div>

              <div className="space-y-0 relative">
                {/* Vertical line behind nodes */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-500/20" />

                {ABOUT_CONTENT.experience.map((exp, index) => {
                  const isOpen = openStates[index];

                  return (
                    <div key={index} className="relative pl-14 pb-12 last:pb-0">
                      {/* Node circle */}
                      <div className="absolute left-0 top-1.5 w-12 h-12 rounded-full bg-[#111] border-2 border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                        <span className="text-emerald-400 font-bold text-xs">{index + 1}</span>
                      </div>

                      {/* Card */}
                      <div className="p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition">
                              {exp.role}
                            </h4>
                            <p className="text-gray-500 text-sm">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                              {exp.year}
                            </span>
                            {/* Toggle button */}
                            <button
                              onClick={() => toggleOpen(index)}
                              className="p-1.5 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-emerald-400"
                            >
                              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                          </div>
                        </div>

                       
                        {isOpen && (
                          <div className="pt-4 mt-4 border-t border-white/10">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                              Skills gained
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills?.length ? (
                                exp.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))
                              ) : (
                                <span className="text-gray-400 text-sm">No skills listed</span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};