import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <span className="text-2xl font-serif font-bold tracking-tighter text-brand-dark mb-6 block">
              Frozen<span className="text-brand-red">X</span>change
            </span>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Your trusted partner for sourcing premium Indian frozen foods. Connecting quality producers with global markets through seamless technology and logistics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/catalog" className="text-slate-500 hover:text-brand-blue transition-colors">Our Products</Link></li>
              <li><Link to="/sourcing" className="text-slate-500 hover:text-brand-blue transition-colors">Sourcing Network</Link></li>
              <li><Link to="/resources" className="text-slate-500 hover:text-brand-blue transition-colors">Resources & Guides</Link></li>
              <li><Link to="/partner" className="text-slate-500 hover:text-brand-blue transition-colors">Partner With Us</Link></li>
              <li><Link to="/cart" className="text-slate-500 hover:text-brand-blue transition-colors">My Inquiry</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-500">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>123 Export Zone, Navi Mumbai,<br/>Maharashtra, India - 400703</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>exports@frozenxchange.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Market Insights</h4>
            <p className="text-slate-500 mb-4 text-sm">Subscribe to get the latest price trends on Indian commodities.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Business Email Address" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              />
              <button className="w-full bg-brand-dark text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 FrozenXchange. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
