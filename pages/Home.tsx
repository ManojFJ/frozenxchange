import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { motion } from 'framer-motion';
import { ArrowUpRight, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

// Reusing existing ProcessSection logic but making it internal
const ProcessSection = () => {
  const steps = [
    { title: "Sourcing", desc: "We procure directly from certified processing plants.", color: "bg-blue-100 text-blue-600" },
    { title: "Quality Check", desc: "Rigorous lab testing and physical inspection.", color: "bg-red-100 text-red-600" },
    { title: "Custom Packing", desc: "Packed in your brand or generic export packs.", color: "bg-orange-100 text-orange-600" },
    { title: "Export", desc: "Efficient logistics to your destination port.", color: "bg-green-100 text-green-600" }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">How It Works</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">From our plants in India to your warehouse, we handle the entire supply chain with transparency.</p>
         </div>

         <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </div>
    </section>
  )
}

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to upgrade your supply chain?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get verified quality, competitive pricing, and timely delivery. Join the network of successful importers today.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/catalog" className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto inline-block">
            Start Sourcing
          </Link>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
            Schedule a Call
          </button>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8 opacity-80">
          <div className="flex items-center space-x-2">
            <Truck className="w-5 h-5" />
            <span className="text-sm font-medium">Global Shipping</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Certified Quality</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home: React.FC = () => {
  // Select first 4 products for the homepage
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />
      <Features />
      
      {/* Featured Products Section */}
      <section id="products" className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Our Catalog</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3">Export Quality Standard</h2>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center space-x-2 text-white border-b border-brand-red pb-1 hover:text-brand-red transition-colors mt-6 md:mt-0">
                <span>View Full Catalog</span>
                <ArrowUpRight className="w-4 h-4" />
            </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
                <motion.div key={product.id} className="bg-white rounded-3xl overflow-hidden h-full">
                     <ProductCard product={product} />
                </motion.div>
            ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
                <Link to="/catalog" className="text-white border-b border-brand-red pb-1">
                    View Full Catalog
                </Link>
            </div>
        </div>
      </section>

      <ProcessSection />
      <CallToAction />
    </>
  );
};

export default Home;
