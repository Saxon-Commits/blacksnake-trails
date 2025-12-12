import React from 'react';
import { Pickaxe, PencilRuler, Tractor, MountainSnow, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'design',
    title: 'Trail Planning & Design',
    description: 'From concept to flags on the ground. We design flow trails, tech lines, and walking paths that work with the natural terrain, ensuring sustainability and maximum fun.',
    icon: <PencilRuler className="w-8 h-8" />,
  },
  {
    id: 'construction',
    title: 'Trail Construction',
    description: 'Professional building of MTB flow trails, jump lines, pump tracks, and technical walking trails. We use modern techniques to create durable surfaces.',
    icon: <Pickaxe className="w-8 h-8" />,
  },
  {
    id: 'excavation',
    title: 'Excavation & Landscaping',
    description: 'General earthworks, drainage solutions, rock wall construction, and site preparation. Our 3.5T excavator can get into tight spots and move serious dirt.',
    icon: <Tractor className="w-8 h-8" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-snake-gray relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              BUILT FOR RIDERS, <br />
              <span className="text-earth-green">BY RIDERS.</span>
            </h2>
            <p className="text-slate-400">
              Whether it's a backyard pump track or a commercial trail network, we bring passion and precision to every shovel load.
            </p>
          </div>
          <div className="hidden md:block">
            <MountainSnow className="w-16 h-16 text-slate-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-snake-black p-8 rounded-lg border border-white/5 hover:border-pop-orange/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full w-fit text-pop-orange group-hover:bg-pop-orange group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-pop-orange uppercase tracking-wider group-hover:gap-2 transition-all">
                Enquire Now <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;