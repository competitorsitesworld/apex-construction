import React from 'react';
import { Building2, Home, Warehouse, Ruler, HardHat, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Development",
      description: "Office complexes, retail centers, and mixed-use structures built for modern business needs.",
      features: ["Steel Structure Analysis", "LEED Certification", "Smart Building Integration"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Luxury Residential",
      description: "Bespoke homes and high-rise apartments that redefine modern living standards.",
      features: ["Custom Architecture", "Interior Design", "Landscape Integration"]
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Industrial & Logistics",
      description: "High-capacity warehouses and factories optimized for supply chain efficiency.",
      features: ["Heavy Flooring", "Automated Systems", "Energy Efficient HVAC"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Civil Infrastructure",
      description: "Public works, bridges, and roads that connect communities safely.",
      features: ["Structural Engineering", "Public Safety", "Urban Planning"]
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end oversight ensuring your project stays on time and under budget.",
      features: ["Cost Estimation", "Risk Management", "Vendor Coordination"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Green Energy Retrofit",
      description: "Updating existing structures with solar, insulation, and smart energy systems.",
      features: ["Solar Integration", "Energy Audits", "Sustainable Materials"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Comprehensive Construction Solutions</h2>
          <p className="text-lg text-neutral-500">
            We bring a multidisciplinary approach to every project, ensuring that every angle is covered from ground-breaking to ribbon-cutting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 hover:bg-neutral-900 transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 shadow-sm hover:shadow-2xl">
              <div className="mb-6 p-4 bg-neutral-100 w-fit text-neutral-900 group-hover:bg-neutral-800 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-white">{service.title}</h3>
              <p className="text-neutral-500 mb-6 group-hover:text-neutral-400 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6 group-hover:border-neutral-800">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 group-hover:text-white group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="h-4 w-4 text-orange-500" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
