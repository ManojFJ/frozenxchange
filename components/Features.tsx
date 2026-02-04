import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Globe2, Leaf } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: "Owned Processing Units",
    desc: "Complete control over hygiene and handling with our state-of-the-art facilities in India."
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "We pack exactly how you need it. Retail packs, bulk catering, or private labeling."
  },
  {
    icon: Globe2,
    title: "Global Logistics",
    desc: "Seamless cold-chain logistics to the Middle East, SE Asia, and beyond."
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "Working directly with farmers and fishermen to ensure ethical and sustainable practices."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-widest uppercase text-sm"
          >
            The FrozenXchange Advantage
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3"
          >
            Why Leading Importers Trust Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-brand-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
