import React from 'react';
import { Triangle, Instagram, Twitter, Linkedin, Facebook, ArrowUp, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-900 pb-16 mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Building the <br /> <span className="text-orange-500">Imaginable.</span>
          </h2>
          <a href="#contact" className="group flex items-center gap-4 text-xl font-medium hover:text-orange-500 transition-colors">
            Start a Conversation
            <div className="bg-white text-black p-3 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all">
               <ArrowRight className="h-6 w-6" />
            </div>
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
           {/* Brand Column */}
           <div className="md:col-span-4">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-2 rounded-sm text-black">
                  <Triangle className="h-6 w-6 fill-current" />
                </div>
                <span className="font-bold text-2xl tracking-tighter">APEX</span>
             </div>
             <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
               We are an architectural construction firm dedicated to precision, sustainability, and innovation. Licensed in 50 states.
             </p>
             <div className="flex gap-4">
               <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-orange-600 transition-colors"><Instagram className="h-5 w-5" /></a>
               <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-orange-600 transition-colors"><Twitter className="h-5 w-5" /></a>
               <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-orange-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
               <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-orange-600 transition-colors"><Facebook className="h-5 w-5" /></a>
             </div>
           </div>

           {/* Links Column 1 */}
           <div className="md:col-span-2">
             <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
             <ul className="space-y-4 text-neutral-500 text-sm font-medium">
               <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
               <li><a href="#founder" className="hover:text-orange-500 transition-colors">Leadership</a></li>
               <li><a href="#careers" className="hover:text-orange-500 transition-colors">Careers</a></li>
               <li><a href="#news" className="hover:text-orange-500 transition-colors">News & Press</a></li>
             </ul>
           </div>

           {/* Links Column 2 */}
           <div className="md:col-span-2">
             <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
             <ul className="space-y-4 text-neutral-500 text-sm font-medium">
               <li><a href="#commercial" className="hover:text-orange-500 transition-colors">Commercial</a></li>
               <li><a href="#residential" className="hover:text-orange-500 transition-colors">Residential</a></li>
               <li><a href="#industrial" className="hover:text-orange-500 transition-colors">Industrial</a></li>
               <li><a href="#consulting" className="hover:text-orange-500 transition-colors">Consulting</a></li>
             </ul>
           </div>

           {/* Newsletter Column */}
           <div className="md:col-span-4">
             <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
             <p className="text-neutral-500 text-sm mb-4">Subscribe to our newsletter for the latest architectural trends.</p>
             <form className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="bg-neutral-900 border border-neutral-800 text-white px-4 py-3 w-full focus:outline-none focus:border-orange-500 transition-colors text-sm"
               />
               <button className="bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-colors">
                 Join
               </button>
             </form>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 text-sm">
          <div className="flex gap-6">
            <span>© 2024 Apex Construct.</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-xs">
            Back to Top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;