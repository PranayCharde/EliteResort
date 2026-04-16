import React from 'react';
import bookingUi from '../../assets/booking_ui.png';

const FeatureItem = ({ number, title, desc, align }) => (
  <div className={`flex items-center space-x-6 mb-12 animate-fade-in ${align === 'right' ? 'flex-row-reverse space-x-reverse text-right' : ''}`}>
    <div className={`w-12 h-12 rounded-full flex-center text-white font-bold text-lg shadow-lg ${number % 2 === 0 ? 'bg-navy-dark' : 'bg-accent-cyan'}`}>
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-text-muted">{desc}</p>
    </div>
  </div>
);

const FeaturesGrid = () => {
  const leftFeatures = [
    { number: 1, title: 'Color Options', desc: 'Custom colors for elements' },
    { number: 2, title: 'Responsive', desc: 'Mobile-friendly interface' },
    { number: 3, title: 'Admin Panel', desc: 'Powerful panel !' },
    { number: 4, title: 'Page Loader', desc: 'Set your Page loader' },
  ];

  const rightFeatures = [
    { number: 5, title: 'Post Grid', desc: 'Many different design' },
    { number: 6, title: 'Pay Gateways', desc: 'Stripe, Paypal and more !' },
    { number: 7, title: 'Multi-language', desc: 'Multiple translations' },
    { number: 8, title: 'Elementor !', desc: 'Multiple Custom Widgets' },
  ];

  return (
    <section className="section-padding bg-secondary-bg overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 w-full max-w-sm">
            {leftFeatures.map(f => <FeatureItem key={f.number} {...f} align="right" />)}
          </div>

          {/* Center Image */}
          <div className="flex-1 w-full max-w-lg mb-8 lg:mb-0 relative card-hover">
            <div className="absolute inset-0 bg-accent-cyan/10 blur-3xl rounded-full"></div>
            <img src={bookingUi} alt="Booking Interface" className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-8 border-white p-2 bg-white" />
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full max-w-sm">
            {rightFeatures.map(f => <FeatureItem key={f.number} {...f} align="left" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
