import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: "Frozen Buffalo Topside",
    category: "Meat",
    subCategory: "Buffalo",
    image: "https://images.unsplash.com/photo-1613454320434-234e125c5737?auto=format&fit=crop&q=80&w=800",
    description: "Lean, boneless buffalo topside, Halal certified.",
    fullDescription: "Premium quality Indian Buffalo Topside, fully deglanded and silver skin removed. Processed in state-of-the-art APEDA approved integrated slaughterhouses. Deep frozen to -18°C to maintain freshness and texture.",
    price: "$3,800",
    unit: "Metric Ton",
    origin: "Uttar Pradesh, India",
    minOrder: "28 MT (1 Container)",
    specifications: {
      "Fat Content": "Low (95% VL)",
      "Packaging": "20kg Master Carton (4x5kg)",
      "Storage": "Frozen -18°C",
      "Shelf Life": "12 Months"
    }
  },
  {
    id: 2,
    title: "Black Tiger Prawns (HOSO)",
    category: "Seafood",
    subCategory: "Prawns",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800",
    description: "Head-on Shell-on Black Tiger Prawns. High count.",
    fullDescription: "Farm-raised Black Tiger Prawns (Penaeus monodon), known for their distinct stripes and firm texture. Harvested and frozen immediately to preserve the natural sweetness. Available in various grades.",
    price: "$9,500",
    unit: "Metric Ton",
    origin: "West Bengal, India",
    minOrder: "14 MT",
    specifications: {
      "Size/Count": "16/20, 21/25, 26/30",
      "Glazing": "10-20% as per request",
      "Freezing": "IQF / Block Frozen",
      "Certification": "HACCP, BRC"
    }
  },
  {
    id: 3,
    title: "Vannamei Prawns (PDTO)",
    category: "Seafood",
    subCategory: "Prawns",
    image: "https://images.unsplash.com/photo-1623962570491-a8acc3250b71?auto=format&fit=crop&q=80&w=800",
    description: "Peeled Deveined Tail-on Vannamei shrimps.",
    fullDescription: "High-quality Litopenaeus Vannamei, aquaculture sourced from sustainable farms in Andhra Pradesh. Processed under strict hygiene controls.",
    price: "$7,200",
    unit: "Metric Ton",
    origin: "Andhra Pradesh, India",
    minOrder: "14 MT",
    specifications: {
      "Size": "31/40, 41/50",
      "Processing": "PDTO (Peeled Deveined Tail On)",
      "Freezing": "IQF",
      "Color": "A3/A4"
    }
  },
  {
    id: 4,
    title: "Frozen Sweet Corn Kernels",
    category: "Frozen Veg",
    subCategory: "Vegetables",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800",
    description: "Grade A American Sweet Corn, IQF processed.",
    fullDescription: "Picked at peak maturity for maximum sweetness and crunch. Individually Quick Frozen (IQF) to ensure free-flowing kernels.",
    price: "$1,100",
    unit: "Metric Ton",
    origin: "Maharashtra, India",
    minOrder: "24 MT",
    specifications: {
      "Brix": ">12%",
      "Type": "American Sweet Corn",
      "Defects": "<1%",
      "Packaging": "25kg Bulk Bags"
    }
  },
  {
    id: 5,
    title: "Green Peas (Garden Fresh)",
    category: "Frozen Veg",
    subCategory: "Vegetables",
    image: "https://images.unsplash.com/photo-1592317376378-43394608c704?auto=format&fit=crop&q=80&w=800",
    description: "Tender, sweet green peas. IQF frozen.",
    fullDescription: "Selected from the finest winter crops. Blanched and IQF frozen to retain bright green color and nutritional value.",
    price: "$1,250",
    unit: "Metric Ton",
    origin: "Punjab, India",
    minOrder: "24 MT",
    specifications: {
      "Size": "8-10mm",
      "Color": "Bright Green",
      "Packaging": "10x1kg Retail or Bulk",
      "Variety": "Arkel"
    }
  },
  {
    id: 6,
    title: "Indian Mackerel",
    category: "Seafood",
    subCategory: "Fish",
    image: "https://images.unsplash.com/photo-1535402803947-a878d655f52a?auto=format&fit=crop&q=80&w=800",
    description: "Whole round Indian Mackerel, high oil content.",
    fullDescription: "Freshly caught Indian Mackerel (Rastrelliger kanagurta). Rich in Omega-3 fatty acids. Ideal for canning or direct consumption markets.",
    price: "$1,050",
    unit: "Metric Ton",
    origin: "Kerala, India",
    minOrder: "27 MT",
    specifications: {
      "Size": "4-6, 6-8, 8-10 pcs/kg",
      "Packing": "10kg Carton",
      "Catch Method": "Purse Seine",
      "Freezing": "Blast Frozen"
    }
  },
  {
    id: 7,
    title: "Frozen Buffalo Tenderloin",
    category: "Meat",
    subCategory: "Buffalo",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800",
    description: "The most premium cut. Tender and succulent.",
    fullDescription: "Buffalo Tenderloin is the most prized cut, offering exceptional tenderness. Individually wrapped (IWP) to maintain premium quality.",
    price: "$6,500",
    unit: "Metric Ton",
    origin: "Uttar Pradesh, India",
    minOrder: "Mixed Container",
    specifications: {
      "Cut": "Tenderloin (Fillet)",
      "Packaging": "IWP, 20kg Master",
      "Fat": "Trimmed",
      "Certification": "Halal"
    }
  },
  {
    id: 8,
    title: "Table White Eggs",
    category: "Poultry",
    subCategory: "Eggs",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800",
    description: "Export quality fresh white shell eggs.",
    fullDescription: "Farm-fresh white table eggs, sorted, graded, and packed in sturdy export cartons. Salmonella free.",
    price: "$35",
    unit: "Carton (360 eggs)",
    origin: "Tamil Nadu, India",
    minOrder: "1 Container (1312 Cartons)",
    specifications: {
      "Weight": "50-55g (Medium), 55-60g (Large)",
      "Shell Color": "White",
      "Yolk Color": "Natural Yellow",
      "Shelf Life": "6 Months (Refrigerated)"
    }
  },
  {
    id: 9,
    title: "Frozen Whole Chicken (Griller)",
    category: "Poultry",
    subCategory: "Chicken",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=800",
    description: "Skin-on, gutless whole chicken grillers.",
    fullDescription: "Halal slaughtered whole chicken, without giblets. Calibrated sizing perfect for rotisserie and retail.",
    price: "$1,800",
    unit: "Metric Ton",
    origin: "Maharashtra, India",
    minOrder: "27 MT",
    specifications: {
      "Weight Range": "800g - 1400g",
      "Processing": "Blast Frozen -40°C",
      "Water Content": "<5%",
      "Appearance": "Clean, No bruises"
    }
  }
];