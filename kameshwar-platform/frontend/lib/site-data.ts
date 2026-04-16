import type {
  BusinessInfo,
  Category,
  GalleryImage,
  MediaMention,
  Testimonial,
} from './types';

export const businessInfo: BusinessInfo = {
  name: 'Kameshwar Meat House',
  tagline: 'Clay-pot katiya, charcoal fire, and the taste memory of Katahariya.',
  story:
    'Built around the local food identity of Katahariya, this brand direction treats katiya as more than a dish. It is smoke, earth, patience, clay, and the shared ritual of eating together.',
  primaryPhone: '+977 981-7218111',
  whatsappPhone: '+977 981-7218111',
  addressLine: 'Katahariya-5',
  ward: '5',
  municipality: 'Katahariya',
  district: 'Rautahat',
  province: 'Madhesh Province',
  country: 'Nepal',
  openingHours: 'Hours to be confirmed with owner',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Katahariya-5+Rautahat+Nepal',
};

export const menuCategories: Category[] = [
  {
    id: 1,
    name: 'Fire Signatures',
    slug: 'fire-signatures',
    menuItems: [
      {
        id: 1,
        name: 'Mutton Katiya',
        description: 'Slow-finished in clay for deep smoke, spice, and rich broth.',
        price: 850,
        currency: 'NPR',
        isFeatured: true,
      },
      {
        id: 2,
        name: 'Sekuwa',
        description: 'Charcoal-grilled meat with a bold local spice profile.',
        price: 650,
        currency: 'NPR',
      },
    ],
  },
  {
    id: 2,
    name: 'Local Table',
    slug: 'local-table',
    menuItems: [
      {
        id: 3,
        name: 'Head Boil',
        description: 'A hearty local specialty with old-school comfort and depth.',
        price: 700,
        currency: 'NPR',
      },
      {
        id: 4,
        name: 'Chiura Pairing Plate',
        description: 'A companion plate designed to sit beside smoky meat dishes.',
        price: 250,
        currency: 'NPR',
      },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Clay and Ember',
    caption: 'The visual mood of charcoal heat, earthen pots, and evening fire.',
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    altText: 'Traditional food plated with earthy tones',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Smoke Ritual',
    caption: 'Food prepared with patience, depth, and a strong local identity.',
    imageUrl:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    altText: 'Smoky grilled food close-up',
  },
  {
    id: 3,
    title: 'Table Memory',
    caption: 'A gathering place shaped by flavor, place, and repetition.',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    altText: 'Food table with warm dramatic lighting',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    customerName: 'Public Review',
    sourceLabel: 'Online listing',
    quote:
      'Known for authentic mutton katiya, sekuwa, and a simple traditional local style.',
  },
  {
    id: 2,
    customerName: 'Community Impression',
    sourceLabel: 'Research summary',
    quote:
      'A strong candidate for a place people connect with Katahariya-style katiya.',
  },
];

export const mediaMentions: MediaMention[] = [
  {
    id: 1,
    title: 'Blog and YouTube features can be showcased here',
    sourceName: 'Owner-curated media',
    sourceType: 'Feature placeholder',
    summary:
      'This section is ready for verified food vlog and blog links once they are collected from the business.',
    url: '#',
  },
];
