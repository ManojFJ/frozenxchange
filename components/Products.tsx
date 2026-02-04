import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Premium Indian Buffalo Meat",
    category: "Meat",
    image: "https://picsum.photos/600/400?random=10",
    desc: "Boneless, lean, and hygienic. Perfect for processing and retail."
  },
  {
    id: 2,
    title: "Black Tiger Prawns",
    category: "Seafood",
    image: "https://picsum.photos/600/400?random=11",
    desc: "Farm-raised, high-quality prawns available in all counts."
  },
  {
    id: 3,
    title: "Sweet Corn & Green Peas",
    category: "Frozen Veg",
    image: "https://picsum.photos/600/400?random=12",
    desc: "IQF Frozen at peak freshness to retain sweetness and nutrition."
  },
  {
    id: 4,
    title: "Table Eggs & Poultry",
    category: "Poultry",
    image: "https://picsum.photos/600/400?random=13",
    desc: "Export-quality white and brown eggs, securely packed."
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-brand-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Our Catalog</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3">Export Quality Standard</h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-white border-b border-brand-red pb-1 hover:text-brand-red transition-colors mt-6 md:mt-0">
            <span>View Full Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[16/9] cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    {product.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-md">
                    {product.desc}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="text-white border-b border-brand-red pb-1">
                View Full Catalog
            </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
