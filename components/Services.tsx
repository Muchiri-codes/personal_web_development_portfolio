"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES_LIST } from '@/app/data/portfolio';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null)
  return (
    <motion.section
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:false, amount:0.2}}
    transition={{duration:0.8, ease:"easeOut"}}
    
    id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">What I Do</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter">My Services</h3>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service: any, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative aspect-4/5 rounded-4xl overflow-hidden border border-white/5 bg-[#111] cursor-pointer"
            >
              {/* IMAGE/VIDEO BACKGROUND */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110">
                <div className="w-full h-full bg-linear-to-b from-transparent via-black/20 to-black/90 absolute z-10" />
                {/\.(mp4|webm|ogg)$/i.test(service.img) ? (
                  <video
                    src={service.img}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover opacity-100 transition-all duration-700"
                  />
                ) : (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-100 transition-all duration-700"
                  />
                )}
              </div>

              {/*FLOATING CONTENT*/}
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                  {service.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {service.desc}
                </p>
              </div>


              {/* --- MODAL OVERLAY --- */}
              {selectedService && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
                  onClick={() => setSelectedService(null)}
                >
                  <div
                    className="bg-[#111] border border-white/10 rounded-[3rem] max-w-6xl w-full max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-6 right-8 z-50 text-white/50 hover:text-emerald-500 transition-colors text-3xl"
                    >
                      &times;
                    </button>

                    {/*IMAGE CONTAINER */}
                    <div className="relative w-full md:w-[45%] h-64 md:h-auto bg-emerald-500/5 overflow-hidden flex items-center justify-center p-12">
                      {/* Background Decorative Grid */}
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

                      <div className="relative w-full h-full">
                        {/* Image 1: Tilted Left */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-48 md:w-64 aspect-4/5 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl transform -rotate-12 transition-transform hover:-rotate-6 duration-500 z-10">
                          <img src={selectedService.img} alt="Project detail 1" className="w-full h-full object-cover" />
                        </div>
                        {/*second image titled right*/}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/3 w-48 md:w-64 aspect-4/5 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl transform rotate-6 transition-transform hover:rotate-3 duration-500 z-20">
                          <img src={selectedService.img2 || selectedService.img} alt="Project detail 2" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-[55%] p-8 md:p-16 overflow-y-auto">
                      <span className="text-emerald-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                        {selectedService.category}
                      </span>

                      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                        {selectedService.title}
                      </h2>

                      <div className="space-y-6">
                        <div className="h-1 w-20 bg-emerald-500 rounded-full" />

                        <p className="text-gray-400 text-lg leading-relaxed">
                          {selectedService.fullDesc || selectedService.desc}
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-8">
                          <div className="border-l border-emerald-500/30 pl-4">
                            <h4 className="text-white font-bold text-sm uppercase">Focus Area</h4>
                            <p className="text-gray-500 text-xs mt-1">{selectedService.focus || 'Geospatial ML'}</p>
                          </div>
                          <div className="border-l border-emerald-500/30 pl-4">
                            <h4 className="text-white font-bold text-sm uppercase">Deliverable</h4>
                            <p className="text-gray-500 text-xs mt-1">Classification Map</p>
                          </div>
                        </div>

                        <button className="w-full md:w-auto px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all uppercase text-xs tracking-widest">
                          View Live Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}



              {/* Decorative Corner Accent */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-500 rounded-tr-xl" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};