"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import { SERVICES_LIST } from "@/app/data/portfolio";
import { useRef, useState, useEffect, MutableRefObject } from "react";

interface ServiceCardProps {
  service: any;
  index: number;
  scrollDir: MutableRefObject<"down" | "up">;
}

const ServiceCard = ({ service, index, scrollDir }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.15 });
  const [status, setStatus] = useState<"hidden" | "visible">("hidden");

  useEffect(() => {
    if (isInView) {
      setStatus("visible");
    } else if (scrollDir.current === "down") {
      // Only reset to hidden when scrolling downward past the element
      setStatus("hidden");
    }
  }, [isInView, scrollDir]);

  const isVideo = /\.(mp4|webm|ogg)$/i.test(service.img);
  const isScrollingUp = scrollDir.current === "up";

  return (
    <div ref={cardRef} className="w-full h-full">
      <motion.div
        initial="hidden"
        animate={status}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: isScrollingUp
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                  mass: 0.8,
                  delay: (index % 3) * 0.1, // Stagger effect across rows on desktop
                },
          },
        }}
        className="w-full h-full"
      >
        <Link
          href={`/services/${service.slug || index}`}
          prefetch={false}
          className="group relative aspect-16/9 sm:aspect-4/5 rounded-xl overflow-hidden border transform-gpu will-change-transform tap-highlight-transparent flex flex-col h-full"
        >
          {/* Media Section: Smaller ratio on mobile (h-1/2 vs sm:h-2/3) */}
          <div className="relative w-full h-1/2 sm:h-2/3 overflow-hidden bg-[#0a0a0a]">
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

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center items-center text-center bg-yellow-600 p-3 sm:p-4">
            <span className="inline-block py-0.5 sm:py-1 mb-1 sm:mb-3 rounded-full text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {service.category}
            </span>

            <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-black transition-colors px-2">
              {service.title}
            </h4>

            <p className="text-white text-xs sm:text-sm leading-relaxed max-w-[90%] line-clamp-2">
              {service.desc}
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export const Services = () => {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const scrollDir = useRef<"down" | "up">("down");

  // Track global scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY.current) {
      scrollDir.current = "down";
    } else if (latest < lastScrollY.current) {
      scrollDir.current = "up";
    }
    lastScrollY.current = latest;
  });

  return (
    <section id="services" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">
            What I Do
          </h2>
          <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
            My Services
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {SERVICES_LIST.map((service: any, index: number) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              scrollDir={scrollDir}
            />
          ))}
        </div>
      </div>
    </section>
  );
};