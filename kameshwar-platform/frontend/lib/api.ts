import {
  businessInfo as fallbackBusinessInfo,
  galleryImages as fallbackGalleryImages,
  mediaMentions as fallbackMediaMentions,
  menuCategories as fallbackMenuCategories,
  testimonials as fallbackTestimonials,
} from './site-data';
import type {
  BusinessInfo,
  Category,
  GalleryImage,
  MediaMention,
  Testimonial,
} from './types';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return fallback;
    }

    const data = (await response.json()) as T | null;
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export function getBusinessInfo() {
  return fetchJson<BusinessInfo>('/business-info', fallbackBusinessInfo);
}

export function getMenuCategories() {
  return fetchJson<Category[]>('/menu/categories', fallbackMenuCategories);
}

export function getGalleryImages() {
  return fetchJson<GalleryImage[]>('/gallery', fallbackGalleryImages);
}

export function getTestimonials() {
  return fetchJson<Testimonial[]>('/testimonials', fallbackTestimonials);
}

export function getMediaMentions() {
  return fetchJson<MediaMention[]>('/media-mentions', fallbackMediaMentions);
}
