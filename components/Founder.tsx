import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">The Visionary</h4>
             <h2 className="text-4xl font-bold text-neutral-900 mb-8">Built on Integrity, <br/> Driven by Excellence.</h2>
             <div className="prose prose-lg text-neutral-500 mb-8">
               <p className="mb-6">
                 "When I founded APEX in 1998, my vision was simple: to bring a level of architectural precision to construction that the industry had never seen before. We don't just follow blueprints; we interrogate them, improve them, and bring them to life with zero compromise."
               </p>
               <p>
                 Today, we stand as a beacon of modern engineering, trusted by the world's leading architects to execute their most ambitious visions.
               </p>
             </div>
             <div>
               <p className="text-2xl font-signature text-neutral-900 mb-2">Alexander Sterling</p>
               <p className="font-bold text-neutral-900">Alexander Sterling</p>
               <p className="text-sm text-neutral-500 uppercase tracking-wider">Founder & CEO</p>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                 alt="Founder" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 border-[1rem] border-white/0 lg:border-white/50 pointer-events-none"></div>
             </div>
             <div className="absolute -bottom-12 -left-12 w-64 h-64 border-2 border-orange-500 hidden lg:block -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;