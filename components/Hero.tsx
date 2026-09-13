import React from 'react';
import { ArrowDown, Shovel, Map } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-trail-landscape.png"
          alt="Tasmanian wilderness trail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-snake-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 border border-pop-orange/50 rounded-full bg-pop-orange/10 backdrop-blur-md">
          <span className="text-pop-orange font-bold text-xs uppercase tracking-[0.2em]">Tasmania's Premier Trail Builders</span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          CARVING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">PERFECT LINE</span>
        </h1>

        <p className="font-sans text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Specializing in sustainable MTB trails, BMX tracks, and precision excavation across the rugged Tasmanian landscape.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-200 text-snake-black font-bold uppercase tracking-wider rounded transition-all"
          >
            <Shovel className="w-5 h-5" />
            Our Services
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-pop-orange hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded transition-all"
          >
            <Map className="w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;