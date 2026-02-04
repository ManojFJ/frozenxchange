import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className={`text-3xl font-serif font-bold tracking-tighter ${scrolled || !isHome ? 'text-brand-dark' : 'text-brand-dark lg:text-slate-900'} transition-colors`}>
              Frozen<span className="text-brand-red text-4xl leading-none">X</span>change
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">Products</Link>
            <Link to="/sourcing" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">Sourcing</Link>
            <a href="/#process" className="text-slate-600 hover:text-brand-blue font-medium transition-colors">Process</a>
            <div className="relative group">
              <Link to="/resources" className="flex items-center text-slate-600 hover:text-brand-blue font-medium transition-colors">
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA & Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative text-slate-600 hover:text-brand-blue transition-colors p-2">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button className="flex items-center text-slate-500 hover:text-brand-dark transition-colors">
              <Globe className="w-5 h-5 mr-1" />
              <span className="text-sm">EN</span>
            </button>
            
            <button onClick={() => navigate('/partner')} className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 transition-all duration-300">
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <Link to="/cart" className="relative text-slate-800 p-1">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-brand-red rounded-full">
                    {cartCount}
                  </span>
                )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              <Link to="/catalog" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 hover:text-brand-blue">Products</Link>
              <Link to="/sourcing" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 hover:text-brand-blue">Sourcing</Link>
              <Link to="/resources" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 hover:text-brand-blue">Resources</Link>
              <Link to="/cart" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 hover:text-brand-blue">My Quote ({cartCount})</Link>
              <button onClick={() => { setIsOpen(false); navigate('/partner'); }} className="w-full mt-4 bg-brand-blue text-white py-3 rounded-xl font-bold shadow-md">
                Partner With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
