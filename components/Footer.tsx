"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, ArrowUp, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="#home" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Logo"
                width={45}
                height={45}
                className="rounded-full border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors"
              />
              <span className="font-black text-white tracking-tighter text-xl">
                DEV<span className="text-emerald-500">.</span>DESIGN
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              A multidisciplinary developer and designer focused on crafting high-performance 
              digital experiences with a touch of emerald precision.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="#home" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-emerald-500 transition-colors">About</Link></li>
              <li><Link href="#services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              <li><Link href="#skills" className="hover:text-emerald-500 transition-colors">Skills</Link></li>
              <li><Link href="#contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Stay Connected</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-emerald-500 text-black rounded-xl text-xs font-bold hover:bg-emerald-400 transition-colors">
                Join
              </button>
            </div>
            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest flex items-center gap-2">
              <Mail className="w-3 h-3" /> No spam, just pure updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium flex items-center gap-2">
            © {new Date().getFullYear()} All rights reserved. Made with <Heart className="w-3 h-3 text-emerald-500" /> using Next.js.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            Back to top 
            <div className="p-2 rounded-full border border-white/10 group-hover:border-emerald-500/50 transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};