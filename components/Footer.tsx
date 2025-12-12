import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-snake-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-xl tracking-wider text-white block mb-1">
            BLACKSNAKE <span className="text-pop-orange">TRAILS</span>
          </span>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All Rights Reserved. Tasmanian Owned & Operated.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;