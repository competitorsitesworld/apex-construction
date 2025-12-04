import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Apex Tower",
      category: "Commercial",
      location: "New York",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 2,
      title: "The Glass House",
      category: "Residential",
      location: "California",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 3,
      title: "Logistics Hub A",
      category: "Industrial",
      location: "Texas",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 4,
      title: "Riverside Estate",
      category: "Residential",
      location: "Oregon",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2053"
    },
    {
      id: 5,
      title: "Tech Manufacturing",
      category: "Industrial",
      location: "Nevada",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 6,
      title: "Skyline Center",
      category: "Commercial",
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const tabs = ['All', 'Commercial', 'Residential', 'Industrial'];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
             <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h4>
             <h2 className="text-4xl font-bold text-neutral-900">Featured Projects</h2>
           </div>
           
           <div className="flex flex-wrap gap-2">
             {tabs.map(tab => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all border ${
                   activeTab === tab 
                     ? 'bg-black text-white border-black' 
                     : 'bg-white text-neutral-500 border-neutral-200 hover:border-orange-500 hover:text-orange-500'
                 }`}
               >
                 {tab}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-neutral-100 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">View Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-neutral-500">{project.category} / {project.location}</p>
                </div>
                <span className="text-xs font-bold border border-neutral-200 px-2 py-1 text-neutral-400">{project.category.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;