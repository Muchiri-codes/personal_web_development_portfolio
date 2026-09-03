"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { handleFormSubmission } from '@/action/email-submission';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div
      className="relative inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/contact_mobile.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="contact"
        className="relative z-10 py-24"
      >

        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs">
                  Contact Me
                </h2>
                <h3 className="text-5xl font-black text-yellow-500 tracking-tighter">
                  Let’s build something <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-l from-emerald-400 to-green-600">
                    extraordinary.
                  </span>
                </h3>
                <p className="text-gray-300 text-lg max-w-sm drop-shadow-md">
                  Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Email</p>
                    <p className="text-white font-medium">muchirijohn0018@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors backdrop-blur-sm">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">LOCATION</p>
                    <p className="text-white font-medium">Remote || Nyeri, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                {[SiGithub, FiLinkedin, SiWhatsapp, SiGmail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-emerald-500 hover:border-emerald-500/50 transition-all backdrop-blur-sm bg-white/5"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="lg:col-span-7">
              <form
                ref={formRef}
                action={async (formData) => {
                  const result = await handleFormSubmission(formData);
                  if (result.success) {
                    alert("Thank you for reaching out, I will talk to you shortly :) ");
                    formRef.current?.reset();
                  }
                }}
                className="p-4 md:p-8 rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase ml-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="your name here..."
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase ml-1">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-all backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase ml-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-all resize-none backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-2 active:scale-[0.98]"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;