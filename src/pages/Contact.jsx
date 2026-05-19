import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowUpRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact({ onTabChange }) {
  const [state, handleSubmit] = useForm("mwvzpyoy");

  return (
    <div className="pt-24 min-h-screen relative z-10 flex flex-col justify-between animation-fade-in bg-[#020203]">
      <div>
        {/* HERO BANNER */}
        <section className="relative w-full h-[45vh] flex items-center justify-center px-6 sm:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/20 via-[#020203]/70 to-[#020203] z-10" />
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 brightness-[0.25]" />
          <div className="relative z-20 max-w-3xl mx-auto space-y-4">
            <span className="text-gymAccent text-[10px] font-mono font-bold tracking-[0.35em] uppercase block">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">Let's Start Your Fitness Journey.</h1>
          </div>
        </section>

        {/* INFO & FORM SECTION */}
        <section className="relative w-full bg-[#050507] py-24 px-6 sm:px-8 md:px-16 border-t border-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: INFO */}
            <div className="lg:col-span-5 space-y-10">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-5 border border-white/[0.03] bg-white/[0.003] rounded-sm">
                  <MapPin className="w-4 h-4 text-gymAccent mt-1" />
                  <div><h4 className="text-xs font-bold uppercase text-white">Location</h4><p className="text-[11px] text-neutral-500">2,8th A Cross, Vishwanath Naganahalli Main Rd, Kanaka Nagar, Hebbal, Bengaluru, Karnataka 560045</p></div>
                </div>
                <div className="flex items-start gap-5 p-5 border border-white/[0.03] bg-white/[0.003] rounded-sm">
                  <Phone className="w-4 h-4 text-gymAccent mt-1" />
                  <div><h4 className="text-xs font-bold uppercase text-white">Phone</h4><p className="text-[11px] text-neutral-500">+91 98765 43210</p></div>
                </div>
                <div className="flex items-start gap-5 p-5 border border-white/[0.03] bg-white/[0.003] rounded-sm">
                  <Mail className="w-4 h-4 text-gymAccent mt-1" />
                  <div><h4 className="text-xs font-bold uppercase text-white">Email</h4><p className="text-[11px] text-neutral-500">info@tigerfitness.com</p></div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="lg:col-span-7">
              <div className="border border-white/[0.03] bg-white/[0.003] p-8 rounded-sm shadow-2xl">
                <h3 className="text-xl font-black uppercase text-white mb-8">Send Us A Message</h3>
                {state.succeeded ? (
                  <p className="text-white text-center py-10">Thanks for your message!</p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input name="name" type="text" placeholder="Full Name" required className="w-full bg-[#0b0b0d] border border-white/[0.05] p-3 text-xs text-white" />
                    <input name="phone" type="tel" placeholder="Phone" required className="w-full bg-[#0b0b0d] border border-white/[0.05] p-3 text-xs text-white" />
                    <input name="email" type="email" placeholder="Email" required className="w-full bg-[#0b0b0d] border border-white/[0.05] p-3 text-xs text-white" />
                    <textarea name="message" placeholder="Message" required rows="4" className="w-full bg-[#0b0b0d] border border-white/[0.05] p-3 text-xs text-white resize-none"></textarea>
                    <ValidationError errors={state.errors} />
                    <button type="submit" disabled={state.submitting} className="w-full bg-gymAccent text-black font-bold text-xs uppercase py-4 rounded-sm">
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="relative w-full bg-[#050507] border-t border-white/[0.03] pt-12 pb-8 px-6 sm:px-8 md:px-16 z-20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-neutral-600">
              <p>© 2026 TIGER FITNESS. ALL RIGHTS RESERVED. </p>
              <button onClick={() => handleTabChange('Home')} className="text-gymAccent uppercase tracking-widest hover:underline bg-transparent border-0 font-bold p-0 cursor-pointer">Return Home Track</button>
            </div>
          </footer>
    </div>
  );
}

