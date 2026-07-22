"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SERVICES_LIST } from '@/app/data/portfolio';

export const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="services"
      className="py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">What I Do</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">My Services</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES_LIST.map((service: any, index) => {
            const isVideo = /\.(mp4|webm|ogg)$/i.test(service.img);

            return (
              <Link
                key={index}
                href={`/services/${service.slug || index}`}
                prefetch={false}
                className="group relative block aspect-4/5 rounded-xl overflow-hidden border border-white/5 bg-[#111] transform-gpu will-change-transform tap-highlight-transparent"
              >
             
                <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-black/45 md:bg-linear-to-b md:from-transparent md:via-black/30 md:to-black/95 z-10 pointer-events-none" />

                  {isVideo ? (
                    <video
                      src={service.img}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover opacity-80"
                    />
                  ) : (
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-80 transition-opacity duration-300"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* FLOATING CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:inset-auto md:bottom-0 md:p-8 z-30 w-full transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors px-2">
                    {service.title}
                  </h4>

                  <p className="text-gray-300 md:text-gray-400 text-sm leading-relaxed max-w-[85%] line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {service.desc}
                  </p>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-500/0 md:group-hover:border-emerald-500/40 transition-all duration-300 rounded-tr-lg" />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};