"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES_LIST } from '@/app/data/portfolio';

export const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="services" 
      className="py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-3 md:px-8">

        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">What I Do</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter">My Services</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {SERVICES_LIST.map((service: any, index) => (
            <Link
              key={index}
              href={`/services/${service.slug || index}`}
              className="group relative block aspect-4/5 rounded-md overflow-hidden border border-white/5 bg-[#111] cursor-pointer"
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

              {/* FLOATING CONTENT */}
              <div className="absolute bottom-0 left-0 p-3 md:p-8 z-30 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                  {service.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors text-md md:text-xl">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-500 rounded-tr-xl" />
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};