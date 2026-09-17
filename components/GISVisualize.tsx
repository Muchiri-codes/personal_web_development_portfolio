"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { maps } from "@/app/data/GIS_visuals";


const desktopPositions = [
  // Far right
  {
    x: 600,
    y: 60,
    scale: 0.55,
    rotateY: -45,
    opacity: 0.25,
    z: -300,
  },

  // Right
  {
    x: 350,
    y: 25,
    scale: 0.78,
    rotateY: -25,
    opacity: 0.65,
    z: -100,
  },

  // FRONT
  {
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    opacity: 1,
    z: 100,
  },

  // Left
  {
    x: -350,
    y: 25,
    scale: 0.78,
    rotateY: 25,
    opacity: 0.65,
    z: -100,
  },

  // Far left
  {
    x: -600,
    y: 60,
    scale: 0.55,
    rotateY: 45,
    opacity: 0.25,
    z: -300,
  },
];

const mobilePositions = [
  // Far right
  { x: 180, y: 45, scale: 0.5, rotateY: -45, opacity: 0.2, z: -300 },
  // Right
  { x: 100, y: 20, scale: 0.75, rotateY: -25, opacity: 0.6, z: -100 },
  // FRONT
  { x: 0, y: 0, scale: 1, rotateY: 0, opacity: 1, z: 100 },
  // Left
  { x: -100, y: 20, scale: 0.75, rotateY: 25, opacity: 0.6, z: -100 },
  // Far left
  { x: -180, y: 45, scale: 0.5, rotateY: 45, opacity: 0.2, z: -300 },
];

export default function GISVisualization() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % maps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const positions = isMobile ? mobilePositions : desktopPositions;

  return (
    <section className="relative w-full mt-0 mb-20 sm:mb-0 sm:pt-20 sm:pb-0 overflow-x-hidden">
      <div className="relative mx-auto h-87.5 sm:h-107.5  w-full  max-w-300 overflow-x-clip"
        style={{ perspective: isMobile ? "900px" : "1400px" }}>
        {maps.map((map, index) => {
          const positionIndex =
            (index - offset + positions.length) % positions.length;

          const position = positions[positionIndex];

          return (
            <motion.div
              key={map.title}
              id="8c4y2m"
              className="absolute left-1/2 top-1/2 w-70 sm:w-90 -translate-x-1/2 -translate-y-1/2"

              animate={{
                x: position.x,
                y: position.y,
                scale: position.scale,
                rotateY: position.rotateY,
                opacity: position.opacity,
                zIndex: position.z + 500,
              }}
              transition={{
                duration: positionIndex === 2 ? 1.1 : 2.2,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className=" relative aspect-3/4 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black shadow-2xl"
              >
                <Image
                  src={map.image}
                  alt={map.title}
                  fill
                  className="object-contain sm:rounded-2xl rounded-xl"
                  sizes="(max-width: 640px) 280px, 440px"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-2xl font-bold">
                    {map.title}
                  </h3>

                  <p className="mt-1 sm:mt-2 max-w-sm text-xs sm:text-sm text-white/75">
                    {map.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
