import React from 'react';
import { TECH_STACK } from '@/app/data/portfolio';

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs">
            Capabilities
          </h2>
          <h3 className="text-4xl font-black text-white tracking-tighter">
            My Modern Toolset
          </h3>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {TECH_STACK.map((tech, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all duration-300"
            >
              {/* Icon with Dynamic Hover Color */}
              <tech.icon 
                className="w-10 h-10 mb-3 text-gray-500 group-hover:scale-110 transition-transform duration-300" 
                style={{ color: 'var(--icon-color)' } as any}
              />
              
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {tech.name}
              </span>

              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-emerald-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};