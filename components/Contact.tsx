import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
            <h2 className="text-5xl font-bold text-neutral-900 mb-8">Ready to Start Building?</h2>
            <p className="text-lg text-neutral-500 mb-12">
              Whether you have a fully drafted blueprint or just a vision, our team is ready to help you take the next step.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3">
                  <Phone className="h-6 w-6 text-neutral-900" />
                </div>
                <div>
                  <h5 className="font-bold text-neutral-900">Call Us</h5>
                  <p className="text-neutral-500">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3">
                  <Mail className="h-6 w-6 text-neutral-900" />
                </div>
                <div>
                  <h5 className="font-bold text-neutral-900">Email Us</h5>
                  <p className="text-neutral-500">projects@apexconstruct.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3">
                  <MapPin className="h-6 w-6 text-neutral-900" />
                </div>
                <div>
                  <h5 className="font-bold text-neutral-900">Visit HQ</h5>
                  <p className="text-neutral-500">88 Construction Blvd, Industry City, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">Email</label>
                <input type="email" className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">Project Details</label>
                <textarea rows={4} className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Tell us about what you want to build..."></textarea>
              </div>
              <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-orange-600 transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;