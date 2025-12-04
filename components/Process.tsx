import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { id: "01", title: "Consultation", desc: "Initial feasibility study and budget analysis." },
    { id: "02", title: "Design", desc: "Architectural blueprints and engineering approvals." },
    { id: "03", title: "Construction", desc: "Site preparation, framing, and systems installation." },
    { id: "04", title: "Handover", desc: "Final inspection, certification, and key delivery." },
  ];

  return (
    <section id="process" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-800 pb-8">
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">How We Work</h4>
            <h2 className="text-4xl md:text-5xl font-bold">The APEX Workflow</h2>
          </div>
          <p className="text-neutral-400 max-w-md text-right hidden md:block">
            A transparent, streamlined process designed to minimize delays and maximize quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-7xl font-black text-neutral-800 group-hover:text-orange-600/20 transition-colors select-none mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-full h-[1px] bg-neutral-800 -z-0 translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;