import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronUp, 
  MessageCircle, 
  ArrowUpRight, 
  Check, 
  Star, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Dumbbell, 
  Wallet, 
  Clock, 
  ShieldCheck, 
  Users, 
  Trophy, 
  Mail, 
  MapPin, 
  Phone, 
  Send 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const masterContainer = useRef(null);
  const heroImageContainer = useRef(null);
  const leftTextColumn = useRef(null);

  useGSAP(() => {
    if (currentPage !== 'Home') return;

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      if (!heroImageContainer.current) return; 
      gsap.fromTo(heroImageContainer.current,
        { width: "100%", height: "100vh", borderRadius: "0px" },
        {
          width: "85%",
          height: "75vh",
          borderRadius: "12px",
          ease: "none",
          scrollTrigger: {
            trigger: masterContainer.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true
          }
        }
      );

      if (leftTextColumn.current && masterContainer.current) {
        gsap.to(leftTextColumn.current, {
          y: -60,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: masterContainer.current,
            start: "top top",
            end: "center top",
            scrub: 0.5
          }
        });
      }
    });

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    gsap.utils.toArray("section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%"
        }
      });
    });

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("scroll", handleScroll);
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [currentPage]);

  const handleTabChange = (targetView) => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (targetView === 'Plans & Rates' || targetView === 'Membership') {
      setCurrentPage('Membership');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      setCurrentPage(targetView);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020203]">
        <img
          src="/logo.png"
          alt="Tiger Fitness"
          className="animate-pulse w-28 h-28 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020203] text-white font-sans antialiased selection:bg-gymAccent selection:text-black overflow-x-hidden scroll-smooth">
      
      <Navbar activeTab={currentPage === 'Membership' ? 'Plans & Rates' : currentPage} onTabChange={handleTabChange} />

      <div className="fixed inset-0 grid grid-cols-6 lg:grid-cols-12 pointer-events-none z-0 px-4 md:px-8 opacity-[0.01]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-white last:border-0" />
        ))}
      </div>

      {currentPage === 'Contact' ? (
        <Contact onTabChange={handleTabChange} />
      ) : currentPage === 'Membership' ? (
        
        /* ==================== PAGE VIEW 03: DEDICATED MEMBERSHIP VIEW ==================== */
        <div className="pt-24 min-h-screen relative z-10 flex flex-col justify-between animation-fade-in">
          <div>
            <section className="relative w-full h-[45vh] flex items-center justify-center px-6 sm:px-8 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/20 via-[#020203]/70 to-[#020203] z-10" />
              <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1600" alt="Dark Matte Gym Interior" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 brightness-[0.25]" />
              <div className="relative z-20 max-w-3xl mx-auto space-y-4">
                <span className="text-gymAccent text-[10px] font-mono font-bold tracking-[0.35em] uppercase block">Tier Selections</span>
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">Choose A Plan Built Around Your Goals.</h1>
                <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                  Flexible memberships designed for beginners, consistent gym-goers, and serious training goals.
                </p>
              </div>
            </section>

            <section className="relative w-full bg-[#020203] py-16 px-4 sm:px-6 md:px-16 border-t border-white/[0.02]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* STUDENT PLAN */}
                <div 
                  onClick={() => setSelectedPlan('Student')}
                  className={`border p-8 rounded-sm flex flex-col justify-between min-h-[520px] cursor-pointer transition-all duration-300 group
                    ${selectedPlan === 'Student' 
                      ? 'border-gymAccent ring-2 ring-gymAccent/20 bg-white/[0.02]' 
                      : 'border-white/[0.03] bg-white/[0.001] hover:border-gymAccent hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]'
                    }`}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-500/5 border border-cyan-500/20 px-3 py-1 rounded-sm uppercase">
                      <GraduationCap className="w-3.5 h-3.5" /> Student Plan
                    </div>
                    <p className="text-[11px] text-gray-500 font-light leading-relaxed">Available for all local college and school students with active institutional ID card profiles.</p>
                    <div className="space-y-3 pt-2 text-xs">
                      <div className="grid grid-cols-3 border-b border-white/5 pb-2 font-mono text-gray-500 font-bold uppercase text-[10px]">
                        <span>Term</span><span className="text-center">Gym</span><span className="text-right text-gymAccent">Fitness</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-white/5 pb-2 py-2">
                        <span className="text-gray-400 font-medium">1 Year</span><span className="text-center font-bold text-white">₹3,000</span><span className="text-right font-black text-gymAccent">₹4,000</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-white/5 pb-2 py-2">
                        <span className="text-gray-400 font-medium">6 Months</span><span className="text-center font-bold text-white">₹2,000</span><span className="text-right font-black text-gymAccent">₹3,000</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-white/5 pb-2 py-2">
                        <span className="text-gray-400 font-medium">3 Months</span><span className="text-center font-bold text-white">₹1,500</span><span className="text-right font-black text-gymAccent">₹2,000</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleTabChange('Contact'); }} 
                    className="w-full mt-8 bg-white hover:bg-gymAccent text-black font-bold text-xs uppercase py-3.5 rounded-sm cursor-pointer transition-colors border-0"
                  >
                    Select Student Plan
                  </button>
                </div>

                {/* EMPLOYEE PLAN */}
                <div 
                  onClick={() => setSelectedPlan('Employee')}
                  className={`border-2 p-8 rounded-sm flex flex-col justify-between min-h-[540px] cursor-pointer transition-all duration-300 group lg:-translate-y-4
                    ${selectedPlan === 'Employee' 
                      ? 'border-gymAccent ring-2 ring-gymAccent/20 bg-white/[0.02]' 
                      : 'border-gymAccent bg-gymAccent/[0.01] hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]'
                    }`}
                >
                  <span className="absolute -top-3 left-6 bg-gymAccent text-black text-[8px] font-mono tracking-widest font-black uppercase px-3 py-0.5 rounded-sm">Best Seller</span>
                  <div className="space-y-6 pt-2">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-gymAccent bg-gymAccent/5 border border-gymAccent/20 px-3 py-1 rounded-sm uppercase">
                      <Briefcase className="w-3.5 h-3.5" /> Employee Plan
                    </div>
                    <p className="text-[11px] text-gray-300 font-light leading-relaxed">Configured for working professionals, tech park tenants, and returning regular gym members.</p>
                    <div className="space-y-3 pt-2 text-xs">
                      <div className="grid grid-cols-3 border-b border-white/10 pb-2 font-mono text-gray-400 font-bold uppercase text-[10px]">
                        <span>Term</span><span className="text-center">Gym</span><span className="text-right text-gymAccent">Fitness</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-white/10 pb-2 py-2">
                        <span className="text-gray-200 font-medium">1 Year</span><span className="text-center font-bold text-white">₹4,000</span><span className="text-right font-black text-gymAccent">₹5,000</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-white/10 pb-2 py-2">
                        <span className="text-gray-400 font-medium">6 Months</span><span className="text-center font-bold text-white">₹3,000</span><span className="text-right font-black text-gymAccent">₹4,000</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-white/10 pb-2 py-2">
                        <span className="text-gray-400 font-medium">3 Months</span><span className="text-center font-bold text-white">₹2,000</span><span className="text-right font-black text-gymAccent">₹3,000</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleTabChange('Contact'); }} 
                    className="w-full mt-8 bg-gymAccent hover:bg-orange-600 text-black font-bold text-xs uppercase py-3.5 rounded-sm cursor-pointer transition-colors border-0"
                  >
                    Lock In Plan
                  </button> 
                </div>

                {/* COUPLE PACK */}
                <div 
                  onClick={() => setSelectedPlan('Couple')}
                  className={`border p-8 rounded-sm flex flex-col justify-between min-h-[520px] cursor-pointer transition-all duration-300 group
                    ${selectedPlan === 'Couple' 
                      ? 'border-gymAccent ring-2 ring-gymAccent/20 bg-white/[0.02]' 
                      : 'border-white/[0.03] bg-white/[0.001] hover:border-gymAccent hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]'
                    }`}
                > 
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-pink-400 bg-pink-500/5 border border-pink-500/20 px-3 py-1 rounded-sm uppercase">
                      <Heart className="w-3.5 h-3.5" /> Couple Pack
                    </div>
                    <p className="text-[11px] text-gray-500 font-light leading-relaxed">Perfect 1+1 bundle rates designed for corporate colleagues, friends, or couples joining together.</p> 
                    <div className="space-y-6 pt-4 border-t border-white/5">
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-white font-bold uppercase tracking-wider">1 Year GYM Pass</span>
                          <span className="text-[10px] text-gray-500 font-light mt-0.5">Weights Only // 2 People</span>
                        </div>
                        <span className="text-xl font-black text-white">₹6,000</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gymAccent font-bold uppercase tracking-wider">1 Year FITNESS Pass</span>
                          <span className="text-[10px] text-gray-500 font-light mt-0.5">Weights + Treadmills // 2 People</span>
                        </div>
                        <span className="text-xl font-black text-gymAccent">₹7,000</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleTabChange('Contact'); }} 
                    className="w-full mt-8 bg-white hover:bg-gymAccent text-black hover:text-white font-bold text-xs uppercase py-3.5 rounded-sm cursor-pointer transition-colors border-0"
                  >
                    Secure Package
                  </button> 
                </div>
              </div>
            </section>

            <section className="relative w-full bg-[#050507] py-24 px-6 sm:px-8 md:px-16 border-t border-white/[0.02]">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="space-y-3 max-w-xl">
                  <span className="text-gymAccent text-[10px] font-mono font-bold tracking-[0.35em] uppercase block">Why Join Us</span>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white select-none leading-none">
                    More Than Equipment. <br /><span className="text-neutral-500">Built Around Consistency.</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                  {[
                    { title: "Modern Equipment", desc: "Heavy mechanical setups and certified cages optimized for progression.", icon: Dumbbell },
                    { title: "Flexible Timings", desc: "Spacious session hours configured around professional profiles.", icon: Clock },
                    { title: "Expert Trainers", desc: "Grounded spatial guidance and program architecture support grids.", icon: Trophy },
                    { title: "Community Support", desc: "A respectful environment of local peers lifting quietly alongside.", icon: Users }
                  ].map((benefit) => (
                    <div key={benefit.title} className="border border-white/[0.03] bg-white/[0.002] p-6 rounded-sm hover:border-white/10 transition-colors">
                      <benefit.icon className="w-4 h-4 text-gymAccent mb-4" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-2">{benefit.title}</h3>
                      <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="relative w-full bg-[#020203] py-28 px-6 text-center border-t border-white/[0.02]">
              <div className="max-w-xl mx-auto space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Start Your Fitness Journey Today.</h2>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
                  <button onClick={() => handleTabChange('Contact')} className="w-full sm:w-auto bg-gymAccent hover:bg-orange-600 text-black font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-300 shadow-md cursor-pointer border-0">Join Now</button>
                  <button onClick={() => handleTabChange('Contact')} className="w-full sm:w-auto bg-transparent hover:bg-white/[0.03] text-white border border-white/10 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer">Contact Us</button>
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

      ) : currentPage === 'Facility' ? (
        
        /* ==================== SCREEN PATH 02: DEDICATED ABOUT US VIEW ==================== */
        <div className="pt-24 min-h-screen relative z-10 flex flex-col justify-between animation-fade-in">
          <div>
            <section className="relative w-full h-[50vh] flex items-center justify-center px-6 sm:px-8 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/20 via-[#020203]/70 to-[#020203] z-10" />
              <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1600" alt="Gym Grid Interior" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 brightness-[0.3]" />
              <div className="relative z-20 max-w-4xl mx-auto space-y-4">
                <span className="text-gymAccent text-[10px] md:text-xs font-mono font-bold tracking-[0.35em] uppercase block">Our Identity</span>
                <h1 className="text-4xl sm:text-5xl md:text-[3.8rem] font-black uppercase tracking-tighter text-white leading-[0.95] select-none">Built Around Consistency. <br /><span className="text-white/40 block mt-1">Designed For Real Progress.</span></h1>
                <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide max-w-md mx-auto pt-2 leading-relaxed">A premium strength training arena meticulously designed for day-to-day progression and local community focus.</p>
              </div>
            </section>

            <section className="relative w-full bg-[#050507] py-24 px-6 sm:px-8 md:px-16 border-t border-white/[0.02]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-gymAccent text-[10px] font-mono tracking-widest uppercase block">[ Grounded Local Philosophy ]</span>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white select-none leading-none">A Serious Lifting Space <br />Without Commercial Clutter.</h2>
                  <div className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed tracking-wide space-y-4 max-w-xl">
                    <p>Tiger Fitness was built to create a training space that feels serious, welcoming, and consistent — without the artificial intimidation, bright neon distractions, and heavy overcrowding found in traditional commercial gym clubs.</p>
                    <p>We realized local working professionals, tech park tenants, and beginners were tired of high-pressure corporate marketing and complex hidden contract terms. By offering raw iron loads, premium structural plans, and upfront billing, we engineered an environment configured entirely for execution.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 h-[260px] sm:h-[350px] rounded-md border border-white/[0.03] overflow-hidden shadow-2xl bg-[#0b0b0d]">
                  <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000" alt="Iron Dumbbells Setup" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                </div>
              </div>
            </section>

            <section className="relative w-full bg-[#020203] py-24 px-6 sm:px-8 md:px-16 border-t border-white/[0.02]">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-sm mx-auto space-y-2">
                  <span className="text-gymAccent text-[10px] font-mono tracking-[0.3em] uppercase block">Core Values</span>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white">What Moves Us Forward</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  <div className="border border-white/[0.03] bg-white/[0.003] p-8 rounded-sm hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                    <Clock className="w-4 h-4 text-gymAccent" />
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">Consistency</h3>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">We optimize layout configurations and tracking indicators so executing daily workout splits feels completely effortless.</p>
                    </div>
                  </div>
                  <div className="border border-white/[0.03] bg-white/[0.005] p-8 rounded-sm hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                    <Heart className="w-4 h-4 text-gymAccent" />
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">Community</h3>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">A respectful network of corporate developers, school peers, and regular neighborhood residents training side by side.</p>
                    </div>
                  </div>
                  <div className="border border-white/[0.03] bg-white/[0.005] p-8 rounded-sm hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                    <Dumbbell className="w-4 h-4 text-gymAccent" />
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">Discipline</h3>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">No tracking gimmicks. Raw iron plates, custom mechanical lines, and performance metrics that deliver genuine progress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative w-full bg-[#050507] py-20 px-6 sm:px-8 md:px-16 border-t border-white/[0.02]">
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-end border-b border-white/[0.03] pb-4">
                  <span className="text-gymAccent text-[10px] md:text-xs font-mono font-bold tracking-[0.35em] uppercase block">The Space</span>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-600 hidden sm:block"></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                  <div className="h-[200px] md:h-[240px] rounded-sm overflow-hidden border border-white/[0.03] bg-[#0b0b0d]">
                    <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=85" alt="Calibrated Structural Barbell Detail" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                  </div>
                  <div className="h-[200px] md:h-[240px] rounded-sm overflow-hidden border border-white/[0.03] bg-[#0b0b0d]">
                    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=600&q=85" alt="Elite Power Station Setup" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                  </div>
                  <div className="h-[200px] md:h-[240px] rounded-sm overflow-hidden border border-white/[0.03] bg-[#0b0b0d]">
                    <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=600&q=85" alt="Aligned Cardio Conditioning Deck Row" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                  </div>
                </div>
              </div>
            </section>

            <section className="relative w-full bg-[#020203] py-28 px-6 text-center border-t border-white/[0.02]">
              <div className="max-w-xl mx-auto space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Train With Purpose.</h2>
                <div className="pt-2">
                  <button 
                    onClick={() => handleTabChange('Membership')}
                    className="inline-flex items-center justify-center gap-4 bg-gymAccent hover:bg-orange-600 text-black font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-300 shadow-md cursor-pointer border-0"
                  >
                    Explore Memberships
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
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
      ) : (
        
        /* ==================== SCREEN PATH 01: COMPREHENSIVE HOMEPAGE VIEW CONTAINER ==================== */
        <>
          <div ref={masterContainer} className="relative w-full min-h-screen lg:h-screen z-10 flex flex-col justify-center lg:block">
            <div className="absolute inset-x-0 bottom-0 hidden lg:flex justify-between items-end px-8 md:px-16 pb-12 z-0 pointer-events-none select-none">
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-sm backdrop-blur-md">
                <div className="flex -space-x-3">
                  <img className="w-8 h-8 rounded-full border-2 border-[#020203] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Profile" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#020203] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=100" alt="Profile" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#020203] object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=60" alt="Profile" />
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gymAccent text-gymAccent" />)}
                  </div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400 mt-0.5">Top-Rated Neighborhood Strength Center</p>
                </div>
              </div>
              <div className="flex items-center gap-8 opacity-40 font-mono text-[10px] tracking-[0.2em] text-gray-400">
                <span>CHOOSE BETWEEN CORE STRENGTH OR FULL CARDIO FITNESS PACKAGES</span>
              </div>
            </div>

            <div className="relative w-full h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 sm:px-8 md:px-16 z-20 pointer-events-none pt-40 pb-16 lg:py-0">
              <div ref={leftTextColumn} className="lg:col-span-6 space-y-6 max-w-lg pointer-events-auto will-change-transform">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.35em] text-gymAccent uppercase block">Tiger Fitness Strength Hub</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.92] select-none">Premium Training. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gymAccent via-orange-500 to-red-600">Honest Local Rates.</span></h1>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed tracking-wide font-light">Stop overpaying for commercial health clubs. Tiger Fitness delivers heavy strength setups, specialized fitness options, and flexible tracks built specifically for local students, PG residents, and working professionals.</p>
                <div className="pt-2">
                  <button onClick={() => handleTabChange('Membership')} className="inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-gymAccent hover:bg-orange-600 text-black font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-black group cursor-pointer transform will-change-transform hover:-translate-y-[1px]">
                    View Membership Plans
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none hidden lg:flex">
              <div ref={heroImageContainer} className="relative overflow-hidden w-full h-full shadow-[0_50px_100px_rgba(0,0,0,0.95)] border border-white/[0.03] pointer-events-auto group cursor-pointer will-change-[transform,width,height]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/70 via-transparent to-[#020203]/90 z-20 pointer-events-none" />
                <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=1400" alt="Gym Overview Framework" className="absolute inset-0 w-full h-full object-cover origin-center filter grayscale contrast-125 brightness-[0.75] transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.02] z-0" />
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=1400" alt="Iron Bars Closup View" className="absolute inset-0 w-full h-full object-cover origin-center filter grayscale contrast-125 brightness-[0.75] opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-in-out group-hover:scale-[1.02] z-10" />
              </div>
            </div>
          </div>

          <section className="relative w-full bg-[#050507] py-20 md:py-32 px-6 sm:px-8 md:px-16 z-20 border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto">
              <span className="text-gymAccent text-[10px] md:text-xs font-mono font-bold tracking-[0.35em] uppercase block mb-6">Why Choose Us</span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <h2 className="text-4xl md:text-[3.6rem] font-black uppercase tracking-tighter text-white leading-[0.95]">Built For Real People. <br /><span className="text-white/40 tracking-tighter block mt-1">Not Just Bodybuilders.</span></h2>
                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed tracking-wide max-w-sm">We built a premium, straightforward workspace designed for local professionals, students, and beginners who want genuine machinery and honest billing structures.</p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                  <div className="border border-white/[0.03] bg-white/[0.005] p-6 rounded-sm hover:border-white/10 transition-colors">
                    <Dumbbell className="w-4 h-4 text-gymAccent mb-3" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Strength Equipment</h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">Heavy-duty machines and free weights for serious progression.</p>
                  </div>
                  <div className="border border-white/[0.03] bg-white/[0.005] p-6 rounded-sm hover:border-white/10 transition-colors">
                    <Wallet className="w-4 h-4 text-gymAccent mb-3" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Affordable Plans</h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">Transparent pricing built for local students and professionals.</p>
                  </div>
                  <div className="border border-white/[0.03] bg-white/[0.005] p-6 rounded-sm hover:border-white/10 transition-colors">
                    <Clock className="w-4 h-4 text-gymAccent mb-3" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Flexible Timings</h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">Morning and evening schedules that fit your lifestyle.</p>
                  </div>
                  <div className="border border-white/[0.03] bg-white/[0.005] p-6 rounded-sm hover:border-white/10 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-gymAccent mb-3" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Beginner Friendly</h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">A comfortable environment for people starting their fitness journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full bg-[#020203] py-20 md:py-28 px-6 sm:px-8 md:px-16 z-20 border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="space-y-4 max-w-xl text-left">
                <span className="text-gymAccent text-[10px] md:text-xs font-mono font-bold tracking-[0.35em] uppercase block">Our Facility</span>
                <h2 className="text-3xl md:text-[2.8rem] font-black uppercase tracking-tighter text-white leading-[0.98]">Built For Serious Training. <br /><span className="text-neutral-500">Designed For Everyday Consistency.</span></h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
                <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[380px] lg:h-[540px] rounded-md border border-white/[0.03] bg-[#0b0b0d] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=1200" alt="Squat Racks Frame" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                  <div className="relative w-full h-[180px] md:h-[257px] rounded-md border border-white/[0.03] bg-[#0b0b0d] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&q=80&w=800" alt="Dumbbells System Arrays" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                  </div>
                  <div className="relative w-full h-[180px] md:h-[257px] rounded-md border border-white/[0.03] bg-[#0b0b0d] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80&w=800" alt="Cardio Treadmills Deck Room" className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="relative w-full bg-[#050507] border-t border-white/[0.03] pt-20 pb-10 px-6 sm:px-8 md:px-16 z-20">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
                <div className="md:col-span-5 space-y-4">
                  <span className="text-lg font-black tracking-tighter uppercase text-white select-none">TIGER <span className="text-gymAccent">FITNESS</span></span>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed tracking-wide max-w-sm">Strength-focused training space built for consistency, community, and real progress. Stop overpaying for health clubs and experience structured training limits.</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <h4 className="text-[10px] font-mono font-bold tracking-[0.25em] text-gray-500 uppercase">Navigation</h4>
                  <ul className="flex flex-col gap-2.5 text-xs font-semibold text-neutral-400 uppercase tracking-wider p-0 m-0 list-none">
                    <li><button onClick={() => handleTabChange('Home')} className="hover:text-gymAccent transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer uppercase text-xs text-neutral-400 font-bold tracking-wider">Home</button></li>
                    <li><button onClick={() => handleTabChange('Membership')} className="hover:text-gymAccent transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer uppercase text-xs text-neutral-400 font-bold tracking-wider">Membership</button></li>
                    <li><button onClick={() => handleTabChange('Facility')} className="hover:text-gymAccent transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer uppercase text-xs text-neutral-400 font-bold tracking-wider">About Us</button></li>
                  </ul>
                </div>
                <div className="md:col-span-4 space-y-4">
                  <h4 className="text-[10px] font-mono font-bold tracking-[0.25em] text-gray-500 uppercase">Connect</h4>
                  <ul className="space-y-3 text-xs text-neutral-400 font-light tracking-wide p-0 m-0 list-none">
                    <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ArrowUpRight className="w-3.5 h-3.5 text-gymAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span className="font-semibold uppercase tracking-wider">Instagram Channel</span>
                    </li>
                    <li className="flex items-center gap-3 hover:text-white transition-colors text-xs cursor-pointer" onClick={() => handleTabChange('Contact')}><Phone className="w-3.5 h-3.5 text-gymAccent flex-shrink-0" /><span>Contact Us / WhatsApp</span></li>
                    <li className="flex items-center gap-3 hover:text-white transition-colors text-xs cursor-pointer" onClick={() => handleTabChange('Contact')}><Mail className="w-3.5 h-3.5 text-gymAccent flex-shrink-0" /><span>support@tigerfitness.com</span></li>
                    <li className="flex items-start gap-3 text-neutral-500 pt-1 text-xs"><MapPin className="w-3.5 h-3.5 text-gymAccent flex-shrink-0 mt-0.5" /><span className="leading-relaxed">2,8th A Cross, Vishwanath Naganahalli Main Rd, Kanaka Nagar, Hebbal, Bengaluru, Karnataka 560045</span></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/[0.03] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-neutral-600">
                <p>© 2026 TIGER FITNESS. ALL RIGHTS RESERVED.</p>
                <p className="text-[9px] text-neutral-700 hidden sm:block"></p>
              </div>
            </div>
          </footer>
        </>
      )} 
      
      {showTopBtn && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-24 right-8 w-12 h-12 rounded-full bg-gymAccent text-black flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-[998]"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
      
      <a 
        href="https://wa.me/919876543210?text=Hi! I am interested in joining Tiger Fitness." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

    </div>
  );
}