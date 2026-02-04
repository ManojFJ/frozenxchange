import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Globe, TrendingUp, Shield, Users, Package, Truck, Award, CheckCircle2, ArrowRight, Send, Building2, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Direct plant sourcing eliminates middlemen, giving you the best FOB and CIF rates in the market. Volume-based tiered pricing available."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every shipment comes with a quality guarantee backed by pre-shipment inspection reports, lab certificates, and documented temperature logs."
  },
  {
    icon: Package,
    title: "Private Label Services",
    description: "Custom branded packaging, multi-language labels, retail-ready formats, and market-specific compliance. Your brand, our expertise."
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "End-to-end logistics management from plant to destination port. Partnered with leading carriers for reliable transit and competitive freight rates."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "A single point of contact who understands your business, manages your orders, and proactively communicates updates across time zones."
  },
  {
    icon: Award,
    title: "Full Compliance Support",
    description: "We handle export documentation, certification matching, regulatory compliance, and customs coordination for your destination market."
  }
];

const partnerTiers = [
  {
    name: "Explorer",
    subtitle: "For first-time buyers",
    features: [
      "Access to full product catalog",
      "Sample orders available",
      "Standard pricing",
      "Email support",
      "Basic market reports",
      "Standard payment terms (LC at sight)"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Growth",
    subtitle: "For regular importers",
    features: [
      "Everything in Explorer, plus:",
      "Volume-based pricing discounts",
      "Priority order fulfillment",
      "Dedicated account manager",
      "Monthly market intelligence",
      "Flexible payment (30% advance + 70% BL)",
      "Custom packaging options",
      "Quarterly business reviews"
    ],
    cta: "Apply Now",
    highlighted: true
  },
  {
    name: "Enterprise",
    subtitle: "For large-scale operations",
    features: [
      "Everything in Growth, plus:",
      "Best-in-class pricing",
      "Exclusive sourcing partnerships",
      "Annual contracts with price locks",
      "Factory visit arrangements",
      "Open credit terms (Net 30/60)",
      "White-label product development",
      "24/7 priority support line",
      "Joint marketing initiatives"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    company: "Gulf Fresh Trading, Dubai",
    role: "Head of Procurement",
    quote: "FrozenXchange has been our primary source for Indian buffalo meat for 3 years. Their quality consistency and documentation speed is unmatched. We've scaled our orders 4x since we started.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Sarah Chen",
    company: "Pacific Seafood Imports, Singapore",
    role: "Managing Director",
    quote: "The private label service is excellent. They helped us launch our own shrimp brand in Singapore within 8 weeks. The team understands Asian market requirements perfectly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Jean-Pierre Dupont",
    company: "EuroFrost Distribution, France",
    role: "Supply Chain Director",
    quote: "Their EU compliance knowledge saved us months of back-and-forth. Every shipment arrives with complete documentation, and the cold chain integrity is always maintained.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  }
];

const Partner: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Partner With Us</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
                Your Gateway to India's <span className="text-gradient">Premium Frozen Foods</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Join 200+ importers across 35 countries who trust FrozenXchange as their sourcing partner.
                Whether you're a first-time buyer or scaling your operations, we have the infrastructure to support your growth.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: "200+", label: "Active Partners" },
                  { value: "35+", label: "Countries" },
                  { value: "98%", label: "Repeat Rate" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                  <Handshake className="w-8 h-8 text-brand-blue mb-3" />
                  <h4 className="font-bold text-white text-sm">Trusted Network</h4>
                  <p className="text-slate-400 text-xs mt-1">44+ verified processing plants across India</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                  <Truck className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white text-sm">Reliable Delivery</h4>
                  <p className="text-slate-400 text-xs mt-1">99.2% on-time shipment record</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                  <Shield className="w-8 h-8 text-brand-red mb-3" />
                  <h4 className="font-bold text-white text-sm">Quality Assured</h4>
                  <p className="text-slate-400 text-xs mt-1">Zero tolerance quality policy with lab reports</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                  <Globe className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white text-sm">Global Reach</h4>
                  <p className="text-slate-400 text-xs mt-1">Shipping to 35+ countries from 5 major ports</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Why Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3">The FrozenXchange Advantage</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We don't just sell products. We build long-term supply chain partnerships that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Partnership Tiers</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Choose the partnership level that fits your business. Upgrade anytime as your volume grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`rounded-3xl p-8 border ${
                  tier.highlighted
                    ? 'bg-brand-dark text-white border-brand-dark shadow-2xl scale-105 relative'
                    : 'bg-white border-slate-200 hover:shadow-md transition-shadow'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <p className={`text-sm mt-1 mb-6 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{tier.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-green-400' : 'text-brand-blue'}`} />
                      <span className={`text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#partner-form"
                  className={`block text-center py-3 rounded-xl font-bold transition-all ${
                    tier.highlighted
                      ? 'bg-brand-blue text-white hover:bg-blue-600'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Trusted Worldwide</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3">What Our Partners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
              >
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                    <p className="text-xs text-brand-blue">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Application Form */}
      <section id="partner-form" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-6">Let's Build Something Together</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you're exploring Indian frozen food sourcing for the first time or looking to optimize your existing supply chain,
                our team is ready to assist. Fill out the form and we'll get back to you within 24 business hours.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">FrozenXchange Pvt. Ltd.</p>
                    <p className="text-sm text-slate-500">Registered Export House</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">123 Export Zone, Navi Mumbai,<br />Maharashtra, India - 400703</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">+91 98765 43210</p>
                    <p className="text-xs text-slate-400">Mon-Sat, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">exports@frozenxchange.com</p>
                    <p className="text-xs text-slate-400">partnerships@frozenxchange.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3">Markets We Actively Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Singapore", "Malaysia", "Vietnam", "Japan", "South Korea", "France", "Germany", "UK", "Netherlands", "USA", "Canada", "Kenya", "Tanzania", "Mozambique", "Egypt"].map((market, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100">{market}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-3xl p-12 border border-slate-100 shadow-lg text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Application Received!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you for your interest in partnering with FrozenXchange. Our business development team will review your application and reach out within 24 business hours.
                  </p>
                  <Link to="/catalog" className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-brand-blue/30 transition-all inline-flex items-center">
                    Explore Products <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Partnership Application</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="Procurement Manager" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="Your Company Ltd." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Business Email *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
                        <select required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-600">
                          <option value="">Select country</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="QA">Qatar</option>
                          <option value="KW">Kuwait</option>
                          <option value="OM">Oman</option>
                          <option value="SG">Singapore</option>
                          <option value="MY">Malaysia</option>
                          <option value="VN">Vietnam</option>
                          <option value="JP">Japan</option>
                          <option value="KR">South Korea</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                          <option value="GB">United Kingdom</option>
                          <option value="NL">Netherlands</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="KE">Kenya</option>
                          <option value="TZ">Tanzania</option>
                          <option value="EG">Egypt</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Annual Volume</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-600">
                          <option value="">Select volume</option>
                          <option value="trial">Trial Order (1 container)</option>
                          <option value="small">1-5 containers/year</option>
                          <option value="medium">5-20 containers/year</option>
                          <option value="large">20-50 containers/year</option>
                          <option value="enterprise">50+ containers/year</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Products of Interest *</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["Buffalo Meat", "Seafood / Shrimp", "Frozen Vegetables", "Poultry / Eggs", "All Categories"].map((product) => (
                          <label key={product} className="flex items-center space-x-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:border-brand-blue/30 transition-colors">
                            <input type="checkbox" className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue/20" />
                            <span className="text-sm text-slate-600">{product}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Additional Information</label>
                      <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none h-28 resize-none" placeholder="Tell us about your business, specific requirements, target markets..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 transition-all flex items-center justify-center">
                      Submit Application <Send className="w-5 h-5 ml-2" />
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to our Terms of Service and Privacy Policy. Your data is encrypted and secure.
                    </p>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
