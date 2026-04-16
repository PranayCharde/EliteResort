import React from 'react';
import resort1 from '../../assets/resort1.png';
import resort2 from '../../assets/resort2.png';
import resort3 from '../../assets/resort3.png';

const DemoCard = ({ img, name }) => (
  <div className="flex-center flex-col animate-fade-in group">
    <div className="relative overflow-hidden rounded-xl shadow-xl w-full aspect-[16/10] card-hover">
      <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-slate-300 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest z-10 glass">New</div>
      <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/20 transition-colors flex-center opacity-0 group-hover:opacity-100 duration-300 z-10">
        <button className="btn-navy scale-90">Preview</button>
      </div>
    </div>
    <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-navy-light">{name}</h3>
  </div>
);

const DemoShowcase = () => {
  const demos = [
    { img: resort1, name: 'Marina Resort' },
    { img: resort2, name: 'Luxury Villa' },
    { img: resort3, name: 'Beach Resort' },
  ];

  return (
    <section className="section-padding bg-secondary-bg">
      <div className="container">
        <div className="flex-center space-x-4 mb-20 animate-fade-in">
          <button className="btn-primary text-xs px-8 py-3">New Demos</button>
          <button className="glass border text-text-muted text-xs px-8 py-3 uppercase tracking-widest font-bold hover:bg-white hover:text-navy-dark transition-all">Original</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {demos.map((d, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <DemoCard {...d} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
