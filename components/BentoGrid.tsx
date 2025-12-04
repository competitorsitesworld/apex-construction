import React from 'react';
import { Ruler, HardHat, Truck, Home, Building2, Warehouse, ArrowUpRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
          <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">Services & Capabilities</h2>
          <p className="mt-4 text-lg text-neutral-500">A comprehensive suite of construction services tailored to modern needs. Structured for efficiency, designed for impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4 lg:gap-6 auto-rows-[200px]">
          
          {/* Item 1: Large Feature - Residential */}
          <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-neutral-50 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
             <div className="absolute inset-0">
               <img src="https://images.unsplash.com/photo-1600596542815-e32c215962e1?q=80&w=1000&auto=format&fit=crop" alt="Residential" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"/>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
             </div>
             <div className="absolute bottom-0 left-0 p-8">
               <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl w-fit mb-4">
                 <Home className="text-white h-6 w-6" />
               </div>
               <h3 className="text-3xl font-bold text-white mb-2">Residential</h3>
               <p className="text-neutral-200 mb-6 max-w-md">From modern minimalist homes to luxury estates, we build living spaces that inspire.</p>
               <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
                 Learn more <ArrowUpRight className="h-4 w-4" />
               </button>
             </div>
          </div>

          {/* Item 2: Commercial */}
          <div className="md:col-span-1 md:row-span-2 rounded-[2rem] bg-neutral-900 p-8 flex flex-col justify-between group hover:bg-neutral-800 transition-colors">
            <div>
              <div className="bg-neutral-800 p-3 rounded-xl w-fit mb-4 group-hover:bg-neutral-700 transition-colors">
                 <Building2 className="text-orange-500 h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Commercial Hubs</h3>
               <p className="text-neutral-400 text-sm">Offices, retail spaces, and mixed-use developments engineered for business growth.</p>
            </div>
            <div className="w-full h-32 rounded-xl overflow-hidden mt-4">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" alt="Commercial" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Item 3: Stats - Years */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-orange-500 p-6 flex flex-col justify-center items-center text-center text-white hover:bg-orange-600 transition-colors">
            <h4 className="text-6xl font-bold">25+</h4>
            <span className="text-orange-100 font-medium">Years Experience</span>
          </div>

          {/* Item 4: Industrial */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-neutral-100 p-6 flex flex-col justify-between group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-neutral-200">
             <div className="flex justify-between items-start">
               <Warehouse className="text-neutral-600 h-8 w-8" />
               <ArrowUpRight className="text-neutral-300 group-hover:text-orange-500 transition-colors" />
             </div>
             <div>
               <h3 className="text-lg font-bold text-neutral-900">Industrial</h3>
               <p className="text-xs text-neutral-500 mt-1">Warehouses & Logistics</p>
             </div>
          </div>

           {/* Item 5: Renovation - Wide */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2rem] bg-white border border-neutral-100 p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-all">
             <div className="h-full w-1/3 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" alt="Renovation" className="w-full h-full object-cover" />
             </div>
             <div>
                <div className="flex items-center gap-2 mb-2">
                   <Ruler className="text-orange-600 h-5 w-5" />
                   <h3 className="text-xl font-bold text-neutral-900">Renovations</h3>
                </div>
                <p className="text-neutral-500 text-sm">Breathe new life into existing structures. We specialize in historical restorations and modern upgrades.</p>
             </div>
          </div>

          {/* Item 6: Logistics */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-neutral-50 p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <Truck className="w-24 h-24" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
               <h3 className="text-lg font-bold text-neutral-900">Heavy Logistics</h3>
               <p className="text-xs text-neutral-500 mt-1">Fleet of 50+ vehicles</p>
            </div>
          </div>

           {/* Item 7: Team */}
           <div className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-neutral-900 p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop" alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10 text-center">
                 <HardHat className="mx-auto text-white h-8 w-8 mb-2" />
                 <h3 className="text-white font-bold">Join the Team</h3>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;