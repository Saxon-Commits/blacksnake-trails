import React, { useState } from 'react';
import { Send, Sparkles, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { refineProjectDescription } from '../services/geminiService';
import { ProjectType } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: ProjectType.MTB,
    message: ''
  });
  const [isRefining, setIsRefining] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRefineWithAI = async () => {
    if (!formData.message || formData.message.length < 10) return;
    
    setIsRefining(true);
    const refined = await refineProjectDescription(formData.message);
    setFormData(prev => ({ ...prev, message: refined }));
    setIsRefining(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your enquiry! In a real app, this would send an email to the landscaper.');
  };

  return (
    <section id="contact" className="py-24 bg-snake-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              LET'S BREAK <span className="text-pop-orange">GROUND</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Ready to start your project? Fill out the form or give us a call. 
              We operate throughout Tasmania, from Hobart to the rugged West Coast.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-pop-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Call Us</h4>
                  <p className="text-slate-300">0400 123 456</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-pop-orange">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Email Us</h4>
                  <p className="text-slate-300">hello@blacksnaketrails.com.au</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-pop-orange">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Based In</h4>
                  <p className="text-slate-300">Hobart, Tasmania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-snake-black p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
            <h3 className="font-display font-bold text-2xl text-white mb-6">PROJECT ENQUIRY</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-500 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-snake-gray border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-pop-orange transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase text-slate-500 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-snake-gray border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-pop-orange transition-colors"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-500 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-snake-gray border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-pop-orange transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-xs font-bold uppercase text-slate-500 mb-2">Project Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-snake-gray border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-pop-orange transition-colors"
                >
                  {Object.values(ProjectType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <div className="flex justify-between items-end mb-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-500">Project Details</label>
                    <button
                        type="button"
                        onClick={handleRefineWithAI}
                        disabled={isRefining || !formData.message}
                        className="text-xs flex items-center gap-1 text-pop-orange hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Use AI to structure your project notes into a professional brief"
                    >
                        {isRefining ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                        {isRefining ? 'Refining...' : 'Refine with AI'}
                    </button>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-snake-gray border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-pop-orange transition-colors"
                  placeholder="Describe your project (e.g., I have a sloping backyard and want a flow trail with two berms and a small jump line...)"
                  required
                ></textarea>
                <p className="text-[10px] text-slate-600 mt-1 text-right">*AI feature requires API key setup</p>
              </div>

              <button
                type="submit"
                className="w-full bg-pop-orange hover:bg-orange-600 text-white font-bold uppercase tracking-widest py-4 rounded transition-all flex items-center justify-center gap-2 group"
              >
                Send Enquiry
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;