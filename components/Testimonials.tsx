import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-neutral-900 mb-16">Trusted by Industry Leaders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "Nexus Build didn't just meet our deadlines; they shattered them. The level of precision in their steelwork is unmatched.", author: "Sarah Jenkins", role: "CEO, TechFlow Inc" },
            { text: "From the initial AI consultation to the final walkthrough, the transparency and professionalism were world-class.", author: "Marcus Thorne", role: "Developer, Urban Estates" },
            { text: "A construction partner that actually understands modern sustainability. Our LEED Platinum certification wouldn't happen without them.", author: "Dr. Emily Chen", role: "Director, Green Future" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 border border-neutral-200 relative">
              <Quote className="text-orange-100 h-12 w-12 absolute top-6 right-6" />
              <p className="text-neutral-600 mb-6 relative z-10 italic">"{item.text}"</p>
              <div>
                <p className="font-bold text-neutral-900">{item.author}</p>
                <p className="text-xs text-orange-600 uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
