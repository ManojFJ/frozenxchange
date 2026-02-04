import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { ArrowLeft, Check, Shield, Truck, Package, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/catalog" className="text-brand-blue hover:underline mt-4 inline-block">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/catalog" className="inline-flex items-center text-slate-500 hover:text-brand-blue transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Image Section */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
            >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                     {/* Placeholder thumbs just to show layout */}
                     {[1, 2, 3].map((i) => (
                         <div key={i} className="rounded-xl overflow-hidden aspect-square opacity-60 hover:opacity-100 cursor-pointer border border-slate-200">
                             <img src={product.image} className="w-full h-full object-cover" alt="" />
                         </div>
                     ))}
                </div>
            </motion.div>

            {/* Info Section */}
            <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
            >
                <div className="mb-6">
                    <span className="text-brand-blue font-bold tracking-wide text-sm uppercase bg-blue-50 px-3 py-1 rounded-full">{product.category}</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-4 leading-tight">{product.title}</h1>
                    <p className="text-lg text-slate-500 mt-2 font-medium">{product.origin}</p>
                </div>

                <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-slate-100">
                    <div>
                        <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Guide Price</p>
                        <p className="text-2xl font-bold text-slate-900">{product.price} <span className="text-sm font-normal text-slate-500">/ {product.unit}</span></p>
                    </div>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <div>
                        <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Min Order</p>
                        <p className="text-2xl font-bold text-slate-900">{product.minOrder}</p>
                    </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                    {product.fullDescription || product.description}
                </p>

                {/* Specifications Grid */}
                {product.specifications && (
                    <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-4">Product Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-slate-200/60 pb-2 last:border-0">
                                    <span className="text-slate-500 text-sm">{key}</span>
                                    <span className="text-slate-800 font-semibold text-sm">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-brand-blue text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-blue/20 hover:bg-blue-600 transition-all flex items-center justify-center"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Add to Inquiry
                    </button>
                    <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-xl font-bold text-lg hover:border-brand-dark hover:text-brand-dark transition-all">
                        Download Spec Sheet
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <div className="p-3 bg-green-50 rounded-full mb-2">
                            <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-600">Quality Verified</span>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="p-3 bg-orange-50 rounded-full mb-2">
                            <Package className="w-6 h-6 text-orange-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-600">Custom Packing</span>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="p-3 bg-blue-50 rounded-full mb-2">
                            <Truck className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-600">Global Logistics</span>
                    </div>
                </div>

            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
