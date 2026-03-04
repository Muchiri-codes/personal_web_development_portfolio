"use client"

import { useState, useEffect } from 'react';

export const Flashlight= () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  if (!isActive) return <button onClick={() => setIsActive(true)} className="fixed bottom-4 right-4 z-50 p-2 bg-emerald-500 rounded-full text-sm">Dark Mode?</button>;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-99 transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle 350px at ${position.x}px ${position.y}px, transparent 0%, rgba(0,0,0,0.95) 100%)`
      }}
    >
        <button 
            onClick={() => setIsActive(false)} 
            className="pointer-events-auto absolute top-4 right-4 text-white"
        >Exit Flashlight</button>
    </div>
  );
};