import type {
  BusinessInfo,
  Category,
  GalleryImage,
  MediaMention,
  Testimonial,
} from './types';

export const businessInfo: BusinessInfo = {
  name: 'Kameshwar Ji Katiya Pasal',
  tagline: 'A family fire kitchen from Katahariya, carried forward through three generations.',
  story:
    'What began around an evening fire more than 30 years ago has grown into a family-run katiya house in Katahariya, where clay, smoke, and slow cooking still lead the experience.',
  storyTitle: 'From Amrililal Sah\'s evening fire to a three-generation family kitchen.',
  storyParagraphs: [
    'Around 30 years ago, your grandfather Amrililal Sah was known locally for running a vegetarian snacks shop. Outside regular business hours, he would cook meat for friends, sit together, and enjoy those evenings with conversation and local drinks like mahuwa and taari.',
    'As local demand grew, that private cooking ritual turned into a public offering. The family gradually shifted from a vegetarian snacks format into a non-vegetarian restaurant and introduced the dish that people came to remember: katiya cooked with clay, smoke, patience, and heat.',
    'Today the restaurant is run by your father, Kameshwar Sah, now relocated to the family home in Katahariya-5, Rautahat. As he gets older, his eldest son Sagar Kumar Jayswal is helping manage the restaurant, carrying the kitchen into its next generation without losing the original taste memory.',
  ],
  storyHighlights: [
    {
      title: 'Origins',
      description: 'Started by Amrililal Sah from an evening cooking culture that became a local demand.',
    },
    {
      title: 'Signature',
      description: 'Exclusive mutton katiya built around clay-pot cooking, fire control, and a strong local identity.',
    },
    {
      title: 'Legacy',
      description: 'Now carried by Kameshwar Sah with support from Sagar Kumar Jayswal in Katahariya-5.',
    },
  ],
  launchChecklist: [
    'Approved creator permissions for YouTube and Facebook media use',
    'Final menu prices in NPR',
    'Real photos of dishes, kitchen, and family',
    'Exact opening hours',
    'Logo and final preferred English/Nepali name styling',
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
    'https://www.google.com/maps/place/Kameshwar+ji+Katiya+Pasal/@26.9803108,85.2385381,-5a,66y/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICWu42Pbg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAFO4vD81mTcY5EX4retX7kW8BfEfhWni34oQaM2xkNJ01eAALUeobdfzu8EG4_mKxo60USFidlgaZSnInBx5wwHkN1QG3Pncl3KDBUJPlAx03P6Ox0omwFlB5vQWznRONSb7Uhi%3Dw203-h270-k-no!7i3024!8i4032!4m7!3m6!1s0x39eca38efdb5954d:0xf50a38ac1f5b6c0c!8m2!3d26.9802525!4d85.2385305!10e5!16s%2Fg%2F11p_81q78q?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D',
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
        description: 'The house signature, served in the style people come to remember first.',
        price: 0,
        currency: 'NPR',
        isFeatured: true,
      },
      {
        id: 2,
        name: 'Exclusive Mutton Katiya Khana Set',
        description: 'A fuller meal built around the restaurant\'s signature katiya for proper dining.',
        price: 0,
        currency: 'NPR',
        isFeatured: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Fire and Fry',
    slug: 'fire-and-fry',
    menuItems: [
      {
        id: 3,
        name: 'Mutton Sekuwa',
        description: 'Charcoal-led flavor for guests who want a drier, fire-forward bite.',
        price: 0,
        currency: 'NPR',
      },
      {
        id: 4,
        name: 'Mutton Fry',
        description: 'A house staple with rich masala depth and a strong local table feel.',
        price: 0,
        currency: 'NPR',
      },
      {
        id: 5,
        name: 'Mutton Chusta Fry',
        description: 'A sharper fry option with strong texture and spice presence.',
        price: 0,
        currency: 'NPR',
      },
    ],
  },
  {
    id: 3,
    name: 'House Meals',
    slug: 'house-meals',
    menuItems: [
      {
        id: 6,
        name: 'Veg Khana Set',
        description: 'A simple vegetarian meal set for the table, keeping the family\'s older roots in view.',
        price: 0,
        currency: 'NPR',
      },
      {
        id: 7,
        name: 'Mutton Bhuttan',
        description: 'A strong local favorite for guests who want a fuller meat spread.',
        price: 0,
        currency: 'NPR',
      },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Exclusive Katiya Hero Shot',
    caption: 'Dummy image for now. Replace later with the real clay-pot katiya presentation and fire setup.',
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    altText: 'Placeholder dish image for exclusive mutton katiya',
    isFeatured: true,
    isPlaceholder: true,
  },
  {
    id: 2,
    title: 'Family Kitchen Portrait',
    caption: 'Dummy image for now. Replace later with a real photo of Kameshwar Sah and Sagar Kumar Jayswal.',
    imageUrl:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    altText: 'Placeholder image for family kitchen story',
    isPlaceholder: true,
  },
  {
    id: 3,
    title: 'Sekuwa, Bhuttan, and House Table',
    caption: 'Dummy image for now. Replace later with the actual menu spread from the restaurant.',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    altText: 'Placeholder image for restaurant menu spread',
    isPlaceholder: true,
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
      'A place people strongly associate with Katahariya-style katiya and family-led continuity.',
  },
];

export const mediaMentions: MediaMention[] = [
  {
    id: 1,
    title: 'YouTube food-vlog feature slot',
    sourceName: 'YouTube',
    sourceType: 'Feature',
    status: 'Awaiting permission',
    summary:
      'Once permission is granted, this card can become a featured video section using the approved clip from the original food-vlog appearance.',
    creditLine: 'Keep the original creator name, channel link, and visible credit near the video.',
    timingNote: 'Suggested approved clip: 5:13 to 6:40',
    url: 'https://www.youtube.com/watch?v=H4YIGbr_Fa0',
  },
  {
    id: 2,
    title: 'Facebook reel feature slot',
    sourceName: 'Facebook',
    sourceType: 'Reel',
    status: 'Awaiting permission',
    summary:
      'Use this slot for the approved short-form feature, either as an official embed or an edited clip with clear creator credit.',
    creditLine: 'Do not remove creator identity or source attribution when this reel is used.',
    timingNote: 'Best used as a short teaser or watch modal with source link.',
    url: 'https://www.facebook.com/reel/995647378584539',
  },
];
