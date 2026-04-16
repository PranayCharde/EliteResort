import React, { useState, useEffect } from 'react';
import heroBg from '../../assets/hero_bg.png';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 22,
    minutes: 7,
    seconds: 37
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num) => num.toString().padStart(2, '0');

  return (
    <div className="flex space-x-12 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="text-center">
        <div className="text-6xl font-light mb-2">{format(timeLeft.hours)}</div>
        <div className="text-xs uppercase tracking-widest text-slate-300">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-light mb-2">{format(timeLeft.minutes)}</div>
        <div className="text-xs uppercase tracking-widest text-slate-300">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-light mb-2">{format(timeLeft.seconds)}</div>
        <div className="text-xs uppercase tracking-widest text-slate-300">Seconds</div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy-dark opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
        <span className="text-accent-cyan font-semibold tracking-widest uppercase mb-6 text-sm animate-fade-in bg-cyan-400/20 px-3 py-1 rounded">New Update</span>
        
        <h1 className="text-7xl md:text-9xl font-serif mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hotel Resort
        </h1>
        
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          With this WordPress Theme you will have everything you need to create a memorable and enchanting online presence. Start create your dream site today with this amazing promotion!
        </p>

        <p className="mt-4 text-accent-cyan font-semibold italic animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Price will change in:
        </p>

        <Countdown />

        <div className="mt-12 flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button className="btn-navy px-12 py-4 text-lg">Purchase Now</button>
          <p className="mt-4 text-sm opacity-70">* Final Price Will be $ 89</p>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
