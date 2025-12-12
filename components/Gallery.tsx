import React, { useState } from 'react';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  { id: 1, url: '/images/hero-trail-landscape.png', title: 'Flow Trail Overview', category: 'MTB' },
  { id: 2, url: '/images/excavator-slope.png', title: 'Slope Excavation', category: 'Excavation' },
  { id: 3, url: '/images/aerial-snake-trail.png', title: 'Snake Trail Lines', category: 'MTB' },
  { id: 4, url: '/images/forest-path.png', title: 'Forest Walking Track', category: 'Walking' },
  { id: 5, url: '/images/excavator-closeup.png', title: 'Precision Digging', category: 'Excavation' },
  { id: 6, url: '/images/yellow-digger-bush.png', title: 'Bush Clearing', category: 'Excavation' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'MTB', 'BMX', 'Walking', 'Excavation'];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-snake-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">RECENT PROJECTS</h2>
          <div className="w-20 h-1 bg-pop-orange mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${filter === cat
                    ? 'bg-white text-snake-black'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-pop-orange text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white font-display font-bold text-xl">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;