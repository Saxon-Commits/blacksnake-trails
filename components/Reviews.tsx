import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: 1, name: "Tom H.", location: "Hobart", text: "Blacksnake Trails transformed our unusable backyard slope into an epic pump track. The kids haven't been inside since!", rating: 5 },
  { id: 2, name: "Sarah J.", location: "Launceston", text: "Professional, punctual, and clean work. The drainage solutions they installed saved our garden this winter.", rating: 5 },
  { id: 3, name: "Mike D.", location: "Derby", text: "These guys know dirt. The flow trail they cut in is world-class. Highly recommend for any MTB project.", rating: 5 },
  { id: 4, name: "Council Rep", location: "Huon Valley", text: "Excellent contractors for our community walking trail extension. Respectful of the environment and great communication.", rating: 5 },
  { id: 5, name: "Davey", location: "Maydena", text: "Fast, efficient, and they shred too. Knows exactly what a rider wants from a jump line.", rating: 5 },
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;
    
    const animate = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-earth-green relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 relative z-10 mb-12 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">WHAT THE LOCALS SAY</h2>
      </div>

      <div className="w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-6 w-max pl-6 cursor-grab active:cursor-grabbing hover:pause-animation"
        >
          {/* Double the array to create seamless loop illusion */}
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={`${review.id}-${index}`}
              className="w-[300px] md:w-[400px] bg-white text-snake-black p-8 rounded-lg shadow-xl flex-shrink-0 relative"
            >
              <Quote className="absolute top-6 right-6 text-earth-green/20 w-12 h-12" />
              <div className="flex gap-1 mb-4 text-pop-orange">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-sans text-lg font-medium mb-6 italic leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold font-display uppercase tracking-wider">{review.name}</h4>
                <span className="text-sm text-slate-500 font-semibold">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;