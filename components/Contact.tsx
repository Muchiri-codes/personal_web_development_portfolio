"use client"
import {submitToMongo} from '@/app/action';
import { useActionState } from 'react';
import {handleInquirySubmit} from '@/components/handleSubmit'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';


const Contact = () => {
  const [state, formAction, pending] = useActionState(submitToMongo, null);
  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a]">
      {/* Decorative Gradient Flare */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Get in Touch Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs">
                Contact Me
              </h2>
              <h3 className="text-5xl font-black text-white tracking-tighter">
                Let’s build something <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-600">
                  extraordinary.
                </span>
              </h3>
              <p className="text-gray-400 text-lg max-w-sm">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Email</p>
                  <p className="text-white font-medium">muchirijohn0018@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">LOCATION</p>
                  <p className="text-white font-medium">Remote || Nyeri, Kenya</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
            action={formAction}
            onSubmit={handleInquirySubmit}
            className="p-8 md:p-10 rounded-[2.5rem] bg-white/2 border border-white/5 backdrop-blur-sm space-y-6">
              {state?.success && (
                <p className="text-emerald-500 font-bold text-center">
                  Message sent successfully!
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Name</label>
                  <input 
                  name='name'
                    type="text" 
                    placeholder="your name here..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email</label>
                  <input 
                   name='email'
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Subject</label>
                <input 
                name='subject'
                  type="text" 
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                <textarea 
                  name='message'
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                />
              </div>

              <button 
              type='submit'
              disabled={pending}
              className="w-full group bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-2 active:scale-[0.98]">
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;