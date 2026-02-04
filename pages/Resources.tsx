import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, TrendingUp, FileText, ChevronDown, ChevronRight, Search, Calendar, Clock, ArrowRight, BarChart3, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "India's Frozen Seafood Exports Hit Record $8.5 Billion in FY2025",
    excerpt: "India has cemented its position as the world's fourth-largest seafood exporter, with frozen shrimp and fish accounting for 72% of marine product exports. Key markets include the US, EU, Japan, and the Middle East.",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&q=80&w=600",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    author: "FrozenXchange Research"
  },
  {
    id: 2,
    title: "Complete Guide to Importing Indian Buffalo Meat: Regulations & Standards",
    excerpt: "A comprehensive guide covering APEDA registration, halal certification requirements, import permits for major markets, cold chain specifications, and documentation needed for buffalo meat imports from India.",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=600",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    author: "Export Compliance Team"
  },
  {
    id: 3,
    title: "Understanding IQF Technology: Why It Matters for Frozen Vegetables",
    excerpt: "Individual Quick Freezing (IQF) preserves texture, nutrition, and flavor far better than block freezing. Learn how IQF works, its benefits for importers, and what to look for when sourcing IQF products.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    author: "Quality Assurance Team"
  },
  {
    id: 4,
    title: "2026 Price Forecast: Indian Shrimp Market Outlook",
    excerpt: "With global aquaculture production stabilizing and input costs declining, Indian Vannamei prices are expected to remain competitive. Our analysts break down the Q1-Q4 price projections for major shrimp varieties.",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=600",
    date: "Nov 25, 2025",
    readTime: "7 min read",
    author: "Market Intelligence"
  },
  {
    id: 5,
    title: "Halal Certification in India: What Global Buyers Need to Know",
    excerpt: "Navigating the halal certification landscape in India can be complex. This guide covers recognized certifying bodies, audit processes, documentation requirements, and market-specific standards for the GCC, SE Asia, and Africa.",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?auto=format&fit=crop&q=80&w=600",
    date: "Nov 12, 2025",
    readTime: "10 min read",
    author: "Compliance Team"
  },
  {
    id: 6,
    title: "Cold Chain Logistics: From Indian Plant to International Port",
    excerpt: "Temperature integrity is everything in frozen food exports. Explore the end-to-end cold chain process from blast freezing at the plant, reefer container loading, port handling, and customs clearance best practices.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&q=80&w=600",
    date: "Oct 30, 2025",
    readTime: "9 min read",
    author: "Logistics Team"
  }
];

const downloads = [
  {
    title: "FrozenXchange Product Catalog 2026",
    description: "Complete catalog with specifications, pricing guides, and MOQ details for all product categories.",
    format: "PDF",
    size: "4.2 MB",
    icon: FileText
  },
  {
    title: "Indian Frozen Food Export Standards",
    description: "Comprehensive document covering FSSAI, APEDA, and MPEDA compliance requirements for international trade.",
    format: "PDF",
    size: "2.8 MB",
    icon: ShieldCheck
  },
  {
    title: "Q4 2025 Market Price Report",
    description: "Quarterly price analysis covering buffalo meat, shrimp, frozen vegetables, and poultry across major export markets.",
    format: "PDF",
    size: "1.5 MB",
    icon: BarChart3
  },
  {
    title: "Import Documentation Checklist",
    description: "Step-by-step checklist of all documents required for importing Indian frozen food products into your market.",
    format: "PDF",
    size: "890 KB",
    icon: FileText
  },
  {
    title: "Packaging & Labeling Guidelines",
    description: "Private label and custom packaging specifications, including label requirements for EU, US, GCC, and Asian markets.",
    format: "PDF",
    size: "3.1 MB",
    icon: Globe
  }
];

const faqs = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "MOQs vary by product category. For buffalo meat, the typical MOQ is one 40ft reefer container (approximately 27-28 MT). For seafood, MOQs start at 14 MT. Frozen vegetables typically require 24 MT minimum. We can arrange mixed containers for first-time buyers looking to sample multiple products."
  },
  {
    question: "What certifications do your partner plants hold?",
    answer: "Our partner plants collectively hold HACCP, ISO 22000, BRC, FSSC 22000, Halal (recognized certifying bodies), EU Approved, FDA registered, APEDA, and MPEDA certifications. Specific certifications vary by plant and product type. We always share the relevant certificates with your inquiry response."
  },
  {
    question: "What are the payment terms?",
    answer: "We offer flexible payment terms depending on order volume and relationship duration. Standard terms include 100% LC at sight for new buyers, 30% advance + 70% against BL copy for established relationships, and open credit terms (Net 30/60) for long-term partners with proven track records."
  },
  {
    question: "How long does shipping take from India?",
    answer: "Transit times vary by destination: Middle East (GCC) 5-10 days, Southeast Asia 7-14 days, East Africa 10-18 days, Europe 18-25 days, Americas 25-35 days. We ship from major Indian ports including JNPT (Mumbai), Mundra, Chennai, Kochi, and Vizag."
  },
  {
    question: "Can you provide private label / custom packaging?",
    answer: "Yes, we offer comprehensive private label services. This includes custom branded packaging, market-specific labeling (multi-language), retail-ready packs (from 200g to 25kg), modified atmosphere packaging (MAP), and barcode/QR code integration. Lead time for custom packaging is typically 2-3 weeks after design approval."
  },
  {
    question: "Do you provide pre-shipment inspection?",
    answer: "Absolutely. Every shipment undergoes a pre-shipment quality inspection. We provide detailed inspection reports with photographs covering product quality, packaging integrity, container condition, temperature verification, and loading supervision. Third-party inspections (SGS, Bureau Veritas) can be arranged upon request."
  },
  {
    question: "What happens if there's a quality issue with the shipment?",
    answer: "We stand behind our quality guarantee. In the rare event of a quality issue, our process includes: immediate investigation with the processing plant, third-party assessment if needed, credit note or replacement shipment for verified claims, and root cause analysis to prevent recurrence. Claims must be filed within 48 hours of container unloading."
  },
  {
    question: "Can I visit the processing facilities?",
    answer: "Yes, we encourage factory visits for serious buyers. We arrange complete plant tours covering processing lines, cold storage, quality labs, and packaging areas. We can organize visits across multiple plants in a single trip. Contact our team to schedule a visit — we handle all logistics including local transport and accommodation recommendations."
  }
];

const categories = ["All", "Industry News", "Guides", "Education", "Market Analysis"];

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'downloads' | 'faq'>('blog');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Knowledge Hub</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Resources & Insights</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Stay informed with market intelligence, export guides, compliance updates,
              and industry reports curated by our trade experts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-slate-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto hide-scrollbar">
            {[
              { key: 'blog' as const, label: 'Blog & Insights', icon: BookOpen },
              { key: 'downloads' as const, label: 'Downloads', icon: Download },
              { key: 'faq' as const, label: 'FAQ', icon: FileText }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-brand-blue text-brand-blue'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Blog Tab */}
          {activeTab === 'blog' && (
            <div>
              {/* Filters */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                        selectedCategory === cat
                          ? 'bg-brand-blue text-white shadow-lg'
                          : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue shadow-sm text-sm"
                  />
                </div>
              </div>

              {/* Featured Post */}
              {filteredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-10 grid grid-cols-1 lg:grid-cols-2"
                >
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full w-fit mb-4">
                      {filteredPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {filteredPosts[0].date}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Post Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === "All" && !searchQuery ? filteredPosts.slice(1) : filteredPosts).map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">{post.title}</h3>
                      <p className="text-slate-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
                  <button
                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                    className="mt-4 text-brand-blue font-medium hover:underline"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Downloadable Resources</h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                  Access catalogs, compliance documents, market reports, and operational guides to streamline your import process.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {downloads.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-brand-red" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                      <div className="flex items-center space-x-3 mt-2 text-xs text-slate-400">
                        <span>{item.format}</span>
                        <span>|</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                        <Download className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                  Everything you need to know about sourcing frozen foods from India through FrozenXchange.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-8">Our export specialists are available to assist with any queries about sourcing, compliance, or logistics.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/partner" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 transition-all inline-flex items-center">
              Contact Our Team <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/catalog" className="border border-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold hover:border-brand-dark transition-all inline-block">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
