import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  title: string;
  category: string;
  subCategory?: string;
  image: string;
  description: string;
  fullDescription?: string;
  price?: string; // Guide price
  unit?: string;
  specifications?: Record<string, string>;
  origin?: string;
  minOrder?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar: string;
}
