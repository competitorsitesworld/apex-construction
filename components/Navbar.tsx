import React, { useState, useEffect } from 'react';
import { Menu, X, Triangle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <Triangle className="h-6 w-6 fill-current" />
            </div>
            <span className={`font-bold text-2xl tracking-tighter ${scrolled ? 'text-neutral-900' : 'text-neutral-900 lg:text-white'}`}>
              APEX
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Process', 'Projects', 'Founder'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium tracking-wide hover:text-orange-500 transition-colors ${scrolled ? 'text-neutral-600' : 'text-white/90'}`}
              >
                {item.toUpperCase()}
              </a>
            ))}
            <a 
              href="#ai-consultant" 
              className={`px-6 py-2.5 rounded-none border-2 transition-all font-bold text-xs tracking-widest uppercase ${
                scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              AI Planner
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-black' : 'text-black lg:text-white'} focus:outline-none`}>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col pt-24 px-8 space-y-6">
          {['About', 'Services', 'Process', 'Projects', 'Founder', 'AI Consultant'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              onClick={() => setIsOpen(false)} 
              className="text-3xl font-bold text-neutral-900 tracking-tighter hover:text-orange-600"
            >
              {item}
            </a>
          ))}
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-4">
            <X className="h-8 w-8 text-neutral-900" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;