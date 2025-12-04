import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center bg-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-orange-500"></div>
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Est. 1998</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            REACH THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">APEX</span> <br />
            OF DESIGN
          </h1>
          <p className="text-xl text-neutral-300 max-w-xl leading-relaxed font-light mb-12 border-l-4 border-neutral-700 pl-6">
            We don't just build buildings; we engineer legacies. Marrying brutalist efficiency with modern sustainability for the skylines of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#projects" className="px-8 py-4 bg-orange-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-orange-700 transition-colors text-center">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors text-center">
              Start Project
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;