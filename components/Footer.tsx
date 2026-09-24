"use client";
import { handleSubmit } from '@/action/handleNetworking';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, ArrowUp, Mail, Heart } from 'lucide-react';

export const Footer = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(name, email);
    setName('');
    setEmail('');
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* LEFT: Stay Connected */}
          <div className="space-y-6 border border-black rounded-3xl">
            <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs p-5">Stay Connected</h4>
            <div className="relative w-full justify-between group">
              <h2 className="font-bold text-md px-5 text-gray-400 mb-6">
                Be sure to join our developers team. send us your name and email address.
              </h2>
              <form
                onSubmit={onSubmit}
                className="px-5 py-2 md:p-7 flex-1 ml-2 rounded-[2.5rem] bg-white/2 border border-white/5 backdrop-blur-sm space-y-5 max-w-md mx-auto"
              >
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-grey-400 rounded-2xl px-6 py-4 text-sm text-black focus:outline-none focus:border-emerald-500/50 transition-all"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-grey-400 rounded-2xl px-6 py-4 text-sm text-black focus:outline-none focus:border-emerald-500/50 transition-all"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-emerald-500 text-black rounded-xl text-xl font-bold hover:bg-emerald-400 transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest flex items-center gap-2 p-3">
              <Mail className="w-3 h-3" /> No spam, just pure updates.
            </p>
          </div>

          {/* Text + Socials */}
          <div className="space-y-6 flex flex-col justify-center">
            <Link href="#home" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Logo"
                width={45}
                height={45}
                loading="lazy"
                className="rounded-full border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors"
              />
              <span className="font-black text-green-700 tracking-tighter text-xl">
                DEV<span className="text-emerald-500">.</span>DESIGN
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              A multidisciplinary developer and designer focused on crafting high-performance
              digital experiences with a touch of emerald precision.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/muchiri_codes" },
                { Icon: Linkedin, href: "https://linkedin.com/in/john muchiri" },
                { Icon: Twitter, href: "https://twitter.com/yourusername" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                >
                  <Icon className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mb-16">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Navigation</h4>
          <ul className="flex flex-wrap gap-6 text-gray-500 text-sm">
            <li><Link href="#home" className="hover:text-emerald-500 transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-emerald-500 transition-colors">About</Link></li>
            <li><Link href="#services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
            <li><Link href="#skills" className="hover:text-emerald-500 transition-colors">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium flex items-center gap-2">
            © {new Date().getFullYear()} All rights reserved. Designed by
            <Link href="https://linkedin.com/in/John_Muchiri">
              <span className="text-orange-600">muchiri</span>
            </Link>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            Scroll to top
            <div className="p-2 rounded-full border border-white/10 group-hover:border-emerald-500/50 transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};   