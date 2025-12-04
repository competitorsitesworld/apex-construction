import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Projects Completed", value: "450+" },
    { label: "Active Sites", value: "12" },
    { label: "States Covered", value: "08" },
    { label: "Safety Rating", value: "99.9%" },
  ];

  return (
    <section className="bg-orange-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left border-l border-orange-500/50 pl-6">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm font-medium text-orange-100 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
