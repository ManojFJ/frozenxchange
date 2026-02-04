import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920"
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Halal Certified • ISO 22000</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-tight mb-6">
              Sourcing India's <br />
              <span className="text-gradient">Finest Frozen Foods</span>
              <br /> for the World.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              We connect global buyers with premium Indian Meat, Seafood, and Frozen Vegetables. Owned processing, custom packaging, and guaranteed quality.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-red/25 flex items-center transition-all duration-300 hover:scale-105">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center space-x-3 px-6 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-brand-blue hover:text-brand-blue transition-all duration-300 shadow-sm hover:shadow-md">
                <PlayCircle className="w-6 h-6" />
                <span>See How We Pack</span>
              </button>
            </div>
          </motion.div>

          {/* Visual Content / Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Hero Image */}
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800" alt="Premium Seafood" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                        <p className="text-white font-serif text-2xl">Premium King Prawns</p>
                        <p className="text-white/80 text-sm">Processed at Source</p>
                    </div>
                </div>

                {/* Floating Badge 1 */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[180px]"
                >
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Live Tracking</span>
                    </div>
                    <p className="font-bold text-slate-800 leading-tight">Shipment #FX-920 Arrived Dubai</p>
                </motion.div>

                 {/* Floating Badge 2 */}
                 <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3"
                >
                    <div className="bg-brand-blue/10 p-2 rounded-lg">
                        <ShieldCheck className="w-8 h-8 text-brand-blue" />
                    </div>
                    <div>
                        <p className="font-bold text-2xl text-slate-800">100%</p>
                        <p className="text-xs text-slate-500 font-semibold uppercase">Quality Tested</p>
                    </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="flex flex-col items-center space-y-2">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
