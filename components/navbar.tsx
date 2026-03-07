"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto relative bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-4 h-20 rounded-3xl md:rounded-4xl flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="#home" className="transition-transform hover:scale-105 active:scale-95 shrink-0">
            <Image
              className="rounded-full border border-emerald-500/20"
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <span className="ml-4 font-black text-white tracking-tighter hidden xs:block">
            DEV<span className="text-emerald-500">.</span>DESIGN
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search for Desktop only */}
          <div className="relative group hidden lg:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all w-40 focus:w-60"
            />
          </div>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-emerald-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}

              className="
        absolute top-24 right-8 w-64 
        bg-[#0a0a0a]/95 backdrop-blur-xl 
        border border-white/10 rounded-2xl 
        p-6 md:hidden z-50 shadow-2xl
      "
            >
              <div className="flex flex-col gap-4 text-middle">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                block text-gray-300 font-bold uppercase tracking-widest 
                hover:text-emerald-500 transition-colors py-3 
                border-b border-white/5 last:border-none
              "
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}