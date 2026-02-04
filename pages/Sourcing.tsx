import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, Factory, Thermometer, Award, Users, Truck, LeafyGreen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sourcingRegions = [
  {
    state: "Uttar Pradesh",
    speciality: "Buffalo Meat",
    plants: 12,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=600",
    description: "Home to India's largest APEDA-approved integrated slaughterhouses producing premium halal buffalo meat for global markets.",
    certifications: ["Halal", "ISO 22000", "APEDA"]
  },
  {
    state: "Andhra Pradesh",
    speciality: "Vannamei Prawns",
    plants: 8,
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=600",
    description: "India's largest aquaculture hub with state-of-the-art shrimp processing facilities meeting EU and FDA standards.",
    certifications: ["BAP", "ASC", "HACCP"]
  },
  {
    state: "West Bengal",
    speciality: "Black Tiger Prawns",
    plants: 6,
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=600",
    description: "Traditional farming regions producing some of the finest Black Tiger prawns with rich flavor and firm texture.",
    certifications: ["BRC", "HACCP", "EU Approved"]
  },
  {
    state: "Kerala",
    speciality: "Marine Fish",
    plants: 5,
    image: "https://images.unsplash.com/photo-1536264203436-5919023592e9?auto=format&fit=crop&q=80&w=600",
    description: "Coastal processing units specializing in wild-caught fish varieties including mackerel, tuna, and squid rings.",
    certifications: ["HACCP", "FDA", "MPEDA"]
  },
  {
    state: "Maharashtra",
    speciality: "Poultry & Vegetables",
    plants: 9,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=600",
    description: "Modern poultry processing and IQF vegetable facilities serving both domestic and international demand.",
    certifications: ["ISO 22000", "Halal", "FSSAI"]
  },
  {
    state: "Punjab",
    speciality: "Frozen Vegetables",
    plants: 4,
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=600",
    description: "India's breadbasket region producing premium frozen peas, corn, and mixed vegetables with advanced IQF technology.",
    certifications: ["BRC", "ISO 22000", "Organic"]
  }
];

const qualitySteps = [
  {
    icon: Factory,
    title: "Plant Audits",
    description: "Every processing unit undergoes a rigorous on-site audit covering hygiene, infrastructure, cold chain, and compliance before onboarding.",
    stat: "50+",
    statLabel: "Plants Audited"
  },
  {
    icon: Shield,
    title: "Lab Testing",
    description: "Every batch is tested at NABL-accredited labs for microbiological safety, heavy metals, antibiotics, and species authenticity.",
    stat: "200+",
    statLabel: "Tests Per Year"
  },
  {
    icon: Thermometer,
    title: "Cold Chain Integrity",
    description: "GPS-tracked reefer containers maintain -18°C from plant to port. Real-time temperature logs shared with every shipment.",
    stat: "-18°C",
    statLabel: "Maintained Always"
  },
  {
    icon: Award,
    title: "Certification Compliance",
    description: "We only work with plants holding valid HACCP, ISO 22000, BRC, or equivalent certifications recognized globally.",
    stat: "12+",
    statLabel: "Certifications"
  }
];

const stats = [
  { value: "44+", label: "Processing Partners" },
  { value: "9", label: "Indian States Covered" },
  { value: "35+", label: "Countries Exported To" },
  { value: "15,000 MT", label: "Annual Volume" }
];

const Sourcing: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <div className="bg-brand-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Our Sourcing Network</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Direct From India's Finest <span className="text-gradient">Processing Units</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We've built a vetted network of 44+ APEDA and EIA-approved processing plants across 9 Indian states,
              ensuring consistent quality, competitive pricing, and reliable supply for every shipment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-brand-dark">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sourcing Regions */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Sourcing Regions</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We source from the most prolific food production regions across India, each selected for their specialization and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sourcingRegions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.state}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="font-bold">{region.state}</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">{region.speciality}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {region.certifications.map((cert, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-brand-blue px-2 py-1 rounded-full font-medium">{cert}</span>
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">{region.plants} Plants</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Quality First</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3">Our Quality Assurance Process</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Every product that leaves our network undergoes a multi-stage quality verification process before reaching your warehouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualitySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-brand-blue" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{step.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-brand-dark">{step.stat}</span>
                    <span className="text-xs text-slate-400">{step.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Map Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">End-to-End</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">Complete Supply Chain Visibility</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                From the moment raw materials enter our partner plants to the second your container is loaded at the port,
                every step is tracked, documented, and shared with you in real time.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time GPS tracking on all reefer containers",
                  "Digital documentation (BL, COO, Phyto, Health Cert)",
                  "Pre-shipment inspection reports with photos",
                  "Temperature logs from plant to port",
                  "Dedicated account manager for each buyer"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/partner" className="inline-flex items-center mt-8 bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors">
                Start Sourcing <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "Processing", desc: "APEDA-approved plants with automated processing lines" },
                { icon: Shield, label: "Inspection", desc: "Third-party SGS/Bureau Veritas inspections on every lot" },
                { icon: Truck, label: "Logistics", desc: "Partnered with Maersk, MSC, and Hapag-Lloyd for reliable shipping" },
                { icon: Users, label: "Support", desc: "Dedicated export desk operating across 5 time zones" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
                >
                  <item.icon className="w-8 h-8 text-brand-blue mb-3" />
                  <h4 className="font-bold text-white mb-1">{item.label}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Certifications & Compliance</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our partner plants collectively hold the most stringent food safety certifications recognized worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "HACCP", desc: "Hazard Analysis" },
              { name: "ISO 22000", desc: "Food Safety" },
              { name: "BRC", desc: "Global Standard" },
              { name: "Halal", desc: "Islamic Dietary" },
              { name: "EU Approved", desc: "European Union" },
              { name: "FDA", desc: "US Compliance" },
              { name: "APEDA", desc: "Export Authority" },
              { name: "MPEDA", desc: "Marine Products" },
              { name: "BAP", desc: "Aquaculture" },
              { name: "ASC", desc: "Sustainability" },
              { name: "FSSAI", desc: "India Food Safety" },
              { name: "GMP", desc: "Good Practices" }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 hover:border-brand-blue/30 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-brand-blue" />
                </div>
                <p className="font-bold text-sm text-slate-900">{cert.name}</p>
                <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Want to visit our facilities?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We arrange factory visits for serious buyers. See our processing units, meet the teams, and build confidence in your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/partner" className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto inline-block">
              Schedule a Visit
            </Link>
            <Link to="/catalog" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all w-full sm:w-auto inline-block text-center">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sourcing;
