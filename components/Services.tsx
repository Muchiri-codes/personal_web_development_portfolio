"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES_LIST } from "@/app/data/portfolio";
import { pixelify } from "@/app/layout";

export const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="services"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">
            What I Do
          </h2>
          <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
            My Services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {SERVICES_LIST.map((service: any, index) => {
            const isVideo = /\.(mp4|webm|ogg)$/i.test(service.img);

            return (
              <Link
                key={index}
                href={`/services/${service.slug || index}`}
                prefetch={false}
                className="group relative aspect-4/5 rounded-xl overflow-hidden border transform-gpu will-change-transform tap-highlight-transparent flex flex-col"
              >
                <div className="relative w-full h-2/3 overflow-hidden bg-[#0a0a0a]">
                  {isVideo ? (
                    <video
                      src={service.img}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center bg-yellow-600">
                  <span className={`inline-block py-1 mb-3 ${pixelify.className}rounded-full text-black text-xs font-bold uppercase tracking-wider`}>
                    {service.category}
                  </span>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-black transition-colors px-2">
                    {service.title}
                  </h4>

                  <p className="text-white text-sm leading-relaxed max-w-[85%] line-clamp-2">
                    {service.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};