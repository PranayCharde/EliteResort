import React from 'react';
import availabilityBg from '../../assets/availability_bg.png';

const LiveAvailability = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-text-muted mb-6 block">Room Booking Features</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Live Room <br /> Availability</h2>
            <p className="text-text-muted mb-8 leading-relaxed max-w-lg">
              The booking rules you define, like minimum stay durations, specific no check-out days, and other restrictions, are shown on the calendar in real time. This allows guests to immediately see which dates are available or blocked, along with the reasons, helping them plan their trips more easily.
            </p>
            
            <p className="font-semibold mb-6">Some magical things you can make.</p>
            
            <ul className="space-y-4 mb-10">
              {['Manage bookings on the go', 'Get instant notifications', 'Access your site anytime'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="text-accent-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-navy-light">{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary px-10">Check the Feature</button>
          </div>

          {/* Right Image with Calendar Overlay */}
          <div className="flex-1 relative w-full lg:w-auto card-hover group">
            <div className="absolute -inset-4 bg-accent-cyan/5 rounded-3xl blur-2xl group-hover:bg-accent-cyan/10 transition-all"></div>
            <img 
              src={availabilityBg} 
              alt="Resort View" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl" 
            />
            
            {/* Calendar Overlay (Simplified Mockup) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-72 glass p-4 rounded-xl shadow-2xl scale-110">
              <div className="flex justify-between items-center mb-4 px-2">
                <span className="text-xs text-accent-cyan cursor-pointer">&lt;</span>
                <span className="text-sm font-bold">February</span>
                <span className="text-xs text-accent-cyan cursor-pointer">&gt;</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-[10px] text-center mb-2 font-bold opacity-60">
                {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
                {Array.from({ length: 28 }).map((_, i) => {
                  const day = i + 1;
                  const isBooked = day >= 9 && day <= 12;
                  const isPending = day >= 17 && day <= 21;
                  return (
                    <div 
                      key={day} 
                      className={`h-8 flex-center rounded-sm transition-colors cursor-pointer
                        ${isBooked ? 'bg-accent-cyan text-white' : ''}
                        ${isPending ? 'bg-navy-dark text-white' : ''}
                        ${!isBooked && !isPending ? 'hover:bg-accent-cyan/20' : ''}
                      `}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex justify-between px-2 text-[9px] font-bold tracking-tighter">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span>Booked</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-navy-dark rounded-full"></div>
                  <span>Pending</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAvailability;
