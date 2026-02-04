import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
        {/* Quick Overlay */}
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-brand-dark px-4 py-2 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center">
                View Details <ArrowRight className="w-4 h-4 ml-1" />
            </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1">
                {product.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{product.origin}</p>
            </div>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Min Order</span>
            <span className="text-slate-700 font-semibold text-sm">{product.minOrder}</span>
          </div>
          <button 
            onClick={(e) => {
                e.preventDefault();
                addToCart(product);
            }}
            className="w-10 h-10 rounded-full bg-slate-50 text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95"
            title="Add to Quote"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
