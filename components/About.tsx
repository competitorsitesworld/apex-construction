import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-neutral-100 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Architect looking at blueprints" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black p-8 flex flex-col justify-center">
               <span className="text-orange-500 text-5xl font-bold">25</span>
               <span className="text-white text-sm font-medium uppercase tracking-wider mt-2">Years of<br/>Excellence</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
              We Build the Foundations <br/> of the Future.
            </h2>
            <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
              At APEX, we believe that construction is more than just pouring concrete and raising steel. It is about creating environments that foster growth, innovation, and community.
            </p>
            <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
              From complex industrial facilities to bespoke residential high-rises, our team of engineers, architects, and builders work in unison to deliver projects that defy expectations and withstand the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-neutral-900">Sustainable Practices</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-neutral-900">Digital Modeling</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-neutral-900">Global Standards</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-neutral-900">Safety First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;