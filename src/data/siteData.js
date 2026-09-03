export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const statistics = [
  { value: '$28M+', label: 'Marketplace Volume' },
  { value: '150K+', label: 'Active Merchants' },
  { value: '99.98%', label: 'Checkout Uptime' },
  { value: '4.9/5', label: 'App Store Rating' },
];

export const features = [
  {
    id: 1,
    icon: 'IoFlashOutline',
    title: '1-Click Mobile Checkout',
    description: 'Frictionless one-thumb purchasing with integrated Apple Pay, Google Pay, and biometric authentication.',
    badge: 'Ultra Fast',
  },
  {
    id: 2,
    icon: 'IoShieldCheckmarkOutline',
    title: 'Bank-Grade Escrow Guard',
    description: 'Full buyer and seller protection backed by automated PCI-DSS Level 1 encrypted payment rails.',
    badge: 'Protected',
  },
  {
    id: 3,
    icon: 'IoSyncOutline',
    title: 'Real-Time Inventory Sync',
    description: 'Zero overselling with instantaneous cloud sync across warehouses, retail points, and mobile apps.',
    badge: 'Live Sync',
  },
  {
    id: 4,
    icon: 'IoSparklesOutline',
    title: 'AI Smart Discovery',
    description: 'Context-aware search and visual recommendation engine tailored to each shopper’s taste profile.',
    badge: 'AI Powered',
  },
  {
    id: 5,
    icon: 'IoGlobeOutline',
    title: 'Global Shipping & Tracking',
    description: 'Automated cross-border customs handling, dynamic rate calculations, and live GPS parcel updates.',
    badge: 'Worldwide',
  },
  {
    id: 6,
    icon: 'IoPhonePortraitOutline',
    title: 'Touch-First Commerce UI',
    description: 'Designed natively for 320px+ mobile screens with fluid gesture navigation and instant loading.',
    badge: 'Mobile Native',
  },
];

export const products = [
  {
    id: 'starter',
    name: 'Market Starter',
    tagline: 'Ideal for independent creators and boutique shops launching on mobile.',
    monthlyPrice: 19,
    annualPrice: 15,
    popular: false,
    features: [
      'Up to 100 Live Products',
      'Standard Mobile Checkout',
      'Direct Bank Deposits',
      'Basic Sales Analytics',
      'Community & Email Support',
    ],
    ctaText: 'Start Free 14-Day Trial',
  },
  {
    id: 'growth',
    name: 'Market Growth',
    tagline: 'Built for scaling merchants who demand zero transaction surcharges.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    features: [
      'Unlimited Product Listings',
      '1-Click Express Checkout',
      'Real-Time Inventory Alerts',
      'AI Recommendation Engine',
      'Priority 24/7 Seller Concierge',
      'Multi-Currency Support',
    ],
    ctaText: 'Launch Growth Store',
  },
  {
    id: 'enterprise',
    name: 'Market Enterprise',
    tagline: 'Engineered for multi-brand operators requiring tailored logistics and APIs.',
    monthlyPrice: 129,
    annualPrice: 99,
    popular: false,
    features: [
      'Dedicated Account Director',
      'Custom ERP & Warehouse APIs',
      '99.99% Uptime SLA',
      'Advanced Fraud Prevention',
      'White-Label Mobile App',
      'Custom Fee Structures',
    ],
    ctaText: 'Speak with Enterprise Team',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Founder',
    company: 'Atelier Artisan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'Switching to Market increased our mobile conversion rate by 42%. The 1-click checkout is simply magical for our shoppers.',
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'Head of Growth',
    company: 'Vanguard Goods',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'The mobile-first dashboard lets me track live sales, manage order fulfillments, and restock items straight from my phone.',
  },
  {
    id: 3,
    name: 'Sophia Patel',
    role: 'Creative Director',
    company: 'Loom & Thread',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'The palette and layout feel elevated and professional. Shoppers constantly praise how fast and reliable the experience is.',
  },
  {
    id: 4,
    name: 'Devon Wright',
    role: 'Logistics Operations',
    company: 'NovaCraft Supply',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'Real-time inventory sync resolved all our previous overselling bottlenecks during holiday flash sales. Outstanding platform.',
  },
];

export const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Market Mobile App', href: '#home' },
    { name: 'Merchant Portal', href: '#features' },
    { name: 'Integrations', href: '#services' },
  ],
  company: [
    { name: 'About Market', href: '#about' },
    { name: 'Careers', href: '#about' },
    { name: 'Press & Media', href: '#about' },
    { name: 'Contact Sales', href: '#contact' },
    { name: 'Merchant Stories', href: '#testimonials' },
  ],
  resources: [
    { name: 'Developer Docs', href: '#' },
    { name: 'Seller Guidelines', href: '#' },
    { name: 'Escrow Guarantee', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Community Hub', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Trust & Safety', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};
