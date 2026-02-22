import React from 'react';
import { SERVICES_LIST } from '@/app/data/portfolio';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">What I Do</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter">My Services</h3>
        </div>

        {/* 9-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service: any, index) => (
            <div
              key={index}
              className="group relative aspect-4/5 rounded-4xl overflow-hidden border border-white/5 bg-[#111] cursor-default"
            >
              {/* Image Holder */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110">
                <div className="w-full h-full bg-linear-to-b from-transparent to-black/90 absolute z-10" />
                {/\.(mp4|webm|ogg)$/i.test(service.img) ? (
                  <video
                    src={service.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
                  />
                ) : (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
                  />
                )}
              </div>

              {/* Floating Text Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                  {service.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-500 rounded-tr-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};