import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Send, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      clearCart();
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
        >
            <Send className="w-10 h-10 text-green-600" />
        </motion.div>
        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Inquiry Sent!</h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
            Thank you for your interest. Our export team has received your inquiry and will contact you within 24 hours with a competitive quote.
        </p>
        <Link to="/" className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-brand-blue/30 transition-all">
            Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8 flex items-center">
            <ShoppingBag className="w-8 h-8 mr-3 text-brand-blue" />
            Your Inquiry List <span className="ml-3 text-lg font-sans font-normal text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">{cartCount} Items</span>
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 border-dashed">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <ShoppingBag className="w-8 h-8" />
            </div>
            <p className="text-xl text-slate-600 mb-6">Your inquiry list is empty.</p>
            <Link to="/catalog" className="inline-flex items-center text-brand-blue font-bold hover:underline">
              Browse Catalog <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* List */}
            <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
              {items.map((item) => (
                <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center"
                >
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <div>
                             <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                             <p className="text-sm text-slate-500">{item.category} • {item.origin}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500 p-2">
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                         <div className="flex items-center space-x-3 bg-slate-50 rounded-lg p-1">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md transition-colors font-bold">-</button>
                            <span className="font-bold text-slate-900 w-8 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md transition-colors font-bold">+</button>
                         </div>
                         <div className="text-right">
                             <p className="text-xs text-slate-400">Target Order</p>
                             <p className="font-bold text-slate-700">{item.quantity} x {item.minOrder}</p>
                         </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>

            {/* Form */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-28">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Complete Request</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="Import Co. Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Additional Requirements</label>
                    <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none h-24 resize-none" placeholder="Specific packaging, port of destination, etc..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 transition-all flex items-center justify-center">
                    Send Inquiry <Send className="w-5 h-5 ml-2" />
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-4">
                    By submitting, you agree to our Terms of Service. Your data is secure.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
