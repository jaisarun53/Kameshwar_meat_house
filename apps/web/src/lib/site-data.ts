import type {
  BusinessInfo,
  Category,
  GalleryImage,
  MediaMention,
  Testimonial,
} from './types';

export const businessInfo: BusinessInfo = {
  name: 'Purano Jayswal Meat House',
  tagline: 'The authentic taste of Katahariya, carried forward through the family of Amritlal Sah.',
  story:
    'A three-generation family kitchen rooted in the clay-pot fire cooking tradition of Katahariya, Rautahat.',
  storyTitle: 'From Amritlal Sah\'s evening handi to Purano Jayswal Meat House.',
  storyParagraphs: [
    'More than 30 years ago, Amritlal Sah ran a vegetarian snack shop in Katahariya. Outside the regular menu, he slow-cooked a special mutton dish in earthen pots for evenings with friends, where conversation, smoke, and local beverages such as mahuwa and taari formed part of the gathering.',
    'The aroma spread, local demand grew, and what started as a personal cooking ritual became a public dish. That was the turning point when the family moved from a vegetarian snacks identity into a non-vegetarian house centered on the clay-pot katiya tradition of Katahariya.',
    'Today the legacy continues through Kameshwar Sah, now running the restaurant from the family home in Katahariya-5, with his eldest son Sagar Kumar Jayswal helping guide the business forward while protecting the original taste memory.',
  ],
  storyHighlights: [
    {
      title: 'Origin',
      description: 'A family dish born from evening gatherings and later opened to the public in Katahariya.',
    },
    {
      title: 'Identity',
      description: 'Clay-pot katiya, wood fire, mustard-oil depth, and a kitchen rooted in Madhesh culture.',
    },
    {
      title: 'Future',
      description: 'A traditional restaurant now entering its next chapter through Kameshwar Sah and Sagar Kumar Jayswal.',
    },
  ],
  launchChecklist: [
    'Approved permissions for creator videos and reels',
    'Final menu prices in NPR',
    'Real food, family, and kitchen photographs',
    'Confirmed opening hours',
    'Logo and final English / Nepali naming style',
  ],
  primaryPhone: '+977 981-7218111',
  whatsappPhone: '+977 981-7218111',
  addressLine: 'Katahariya-5',
  ward: '5',
  municipality: 'Katahariya',
  district: 'Rautahat',
  province: 'Madhesh Province',
  country: 'Nepal',
  openingHours: 'Opening hours to be confirmed with the family',
  mapsUrl:
    'https://www.google.com/maps/place/Kameshwar+ji+Katiya+Pasal/@26.9802525,85.2385305,17z',
};

export const menuCategories: Category[] = [
  {
    id: 1,
    name: 'Exclusive Katiya',
    slug: 'exclusive-katiya',
    menuItems: [
      {
        id: 1,
        name: 'Exclusive Mutton Katiya with Roti',
        description: 'The signature clay-pot preparation served the way regulars remember it.',
        price: 0,
        currency: 'NPR',
        isFeatured: true,
      },
      {
        id: 2,
        name: 'Exclusive Katiya Mutton with Khana Set',
        description: 'A fuller meal built around the house specialty for a complete table experience.',
        price: 0,
        currency: 'NPR',
        isFeatured: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Specialties',
    slug: 'specialties',
    menuItems: [
      {
        id: 3,
        name: 'Mutton Sekuwa',
        description: 'Charcoal-kissed and bold, for guests who want a drier fire-led bite.',
        price: 0,
        currency: 'NPR',
      },
      {
        id: 4,
        name: 'Mutton Fry',
        description: 'A richly spiced house favorite with local depth and a satisfying finish.',
        price: 0,
        currency: 'NPR',
      },
      {
        id: 5,
        name: 'Mutton Chusta Fry',
        description: 'Sharper, denser, and full of spice character for a more intense plate.',
        price: 0,
        currency: 'NPR',
      },
      {
        id: 6,
        name: 'Mutton Bhuttan',
        description: 'A strong local favorite that adds depth to the family menu.',
        price: 0,
        currency: 'NPR',
      },
    ],
  },
  {
    id: 3,
    name: 'Vegetarian',
    slug: 'vegetarian',
    menuItems: [
      {
        id: 7,
        name: 'Veg Khana Set',
        description: 'A simple vegetarian meal set that quietly reflects the family\'s earlier shop roots.',
        price: 0,
        currency: 'NPR',
      },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Hero dish placeholder',
    caption: 'Replace later with the signature clay-pot katiya close-up.',
    imageUrl: '',
    altText: 'Placeholder for exclusive mutton katiya photo',
    isFeatured: true,
    isPlaceholder: true,
  },
  {
    id: 2,
    title: 'Family portrait placeholder',
    caption: 'Replace later with Kameshwar Sah and Sagar Kumar Jayswal.',
    imageUrl: '',
    altText: 'Placeholder for family portrait',
    isPlaceholder: true,
  },
  {
    id: 3,
    title: 'Kitchen scene placeholder',
    caption: 'Replace later with the fire, handi, and wood cooking setup.',
    imageUrl: '',
    altText: 'Placeholder for kitchen scene',
    isPlaceholder: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    customerName: 'Public Review',
    sourceLabel: 'Online listing',
    quote: 'Known for authentic mutton katiya, sekuwa, and a simple traditional local style.',
  },
  {
    id: 2,
    customerName: 'Community Impression',
    sourceLabel: 'Research summary',
    quote: 'A place strongly associated with Katahariya-style katiya and long family continuity.',
  },
];

export const mediaMentions: MediaMention[] = [
  {
    id: 1,
    title: 'Featured by food creators and local vloggers',
    sourceName: 'YouTube',
    sourceType: 'Feature',
    status: 'Use after permission',
    summary:
      'This slot is reserved for the approved YouTube feature and should always keep the original creator visible near the video.',
    creditLine: 'Feature credit must stay visible beside the video or clip.',
    timingNote: 'Embed starts at 5:13 and ends at 6:40',
    url: 'https://www.youtube.com/watch?v=H4YIGbr_Fa0',
  },
  {
    id: 2,
    title: 'Short-form reel feature',
    sourceName: 'Facebook',
    sourceType: 'Reel',
    status: 'Use after permission',
    summary:
      'This slot is intended for the approved Facebook reel or for an edited promo clip with explicit attribution.',
    creditLine: 'Keep the creator name and source link visible at all times.',
    timingNote: 'Ideal for homepage teaser placement',
    url: 'https://www.facebook.com/reel/995647378584539',
  },
];
