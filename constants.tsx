import React from 'react';
import { NavItem, Category, Feature } from './types';
import { Shield, Sparkles, Clock, Award, Car, Palette, Sun, Film } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Auto Detailing', href: '/auto-detailing' },
  { label: 'Ceramic Coating', href: '/ceramic-coatings' },
  { label: 'Paint Protection Films', href: '/paint-protection-film' },
  { 
    label: 'ALL SERVICES', 
    href: '#',
    subItems: [
      { label: 'All Services', href: '/services' },
      { label: 'Auto Detailing', href: '/auto-detailing' },
      { label: 'Paint Correction', href: '/paint-correction' },
      { label: 'Ceramic Coating', href: '/ceramic-coatings' },
      { label: 'Paint Protection Films', href: '/paint-protection-film' },
      { label: 'Vinyl Wrap', href: '/vehicle-wraps' },
      { label: 'Window Tint', href: '/window-tinting' },
      { label: 'Factory Finish System', href: '/factory-finish-system' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { 
    label: 'About', 
    href: '#',
    subItems: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ]
  },
];

export const CATEGORIES: Category[] = [
  { id: 'auto-detailing', name: 'Auto Detailing', image: '/services/auto-detailing.webp' },
  { id: 'paint-correction', name: 'Paint Correction', image: '/services/paint-correction.webp' },
  { id: 'ceramic-coatings', name: 'Ceramic Coating', image: '/services/ceramic-coating.webp' },
  { id: 'paint-protection-film', name: 'Paint Protection Films', image: '/services/paint-protection-film.webp' },
  { id: 'vehicle-wraps', name: 'Vinyl Wrap', image: '/services/vinyl-wrap.webp' },
  { id: 'window-tinting', name: 'Window Tint', image: '/services/window-tint.webp' },
  { id: 'factory-finish-system', name: 'Factory Finish System', image: '/services/factory-finish.webp' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Premium Protection',
    description: 'Industry-leading films and coatings that shield your vehicle from scratches, chips, and UV damage.',
    icon: <Shield className="w-8 h-8" style={{ color: '#F21C1D' }} />,
  },
  {
    title: 'Flawless Finish',
    description: 'Meticulous attention to detail with certified installers who deliver showroom-quality results.',
    icon: <Sparkles className="w-8 h-8" style={{ color: '#F21C1D' }} />,
  },
  {
    title: 'Quick Turnaround',
    description: 'Efficient service without compromising quality. Most services completed within 1-3 days.',
    icon: <Clock className="w-8 h-8" style={{ color: '#F21C1D' }} />,
  },
  {
    title: 'Warranty Backed',
    description: 'Comprehensive warranties on all products and installations for your peace of mind.',
    icon: <Award className="w-8 h-8" style={{ color: '#F21C1D' }} />,
  },
];