export type StoryHighlight = {
  title: string;
  description: string;
};

export type BusinessInfo = {
  name: string;
  tagline: string;
  story: string;
  storyTitle?: string;
  storyParagraphs?: string[];
  storyHighlights?: StoryHighlight[];
  launchChecklist?: string[];
  primaryPhone: string;
  whatsappPhone: string;
  addressLine: string;
  ward: string;
  municipality: string;
  district: string;
  province: string;
  country: string;
  openingHours: string;
  mapsUrl?: string;
};

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  isFeatured?: boolean;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  menuItems: MenuItem[];
};

export type GalleryImage = {
  id: number;
  title: string;
  caption: string;
  imageUrl: string;
  altText: string;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
};

export type Testimonial = {
  id: number;
  customerName: string;
  sourceLabel?: string;
  quote: string;
};

export type MediaMention = {
  id: number;
  title: string;
  sourceName: string;
  sourceType?: string;
  summary?: string;
  creditLine?: string;
  timingNote?: string;
  status?: string;
  url: string;
};
