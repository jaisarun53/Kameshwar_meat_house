import {
  businessInfo as fallbackBusinessInfo,
  mediaMentions as fallbackMediaMentions,
  menuCategories as fallbackMenuCategories,
} from './site-data';
import type { BusinessInfo, Category, MediaMention } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
const USE_LOCAL_CONTENT = process.env.NEXT_PUBLIC_USE_LOCAL_CONTENT === 'true';

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  if (USE_LOCAL_CONTENT) {
    return fallback;
  }

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

export function getMediaMentions() {
  return fetchJson<MediaMention[]>('/media-mentions', fallbackMediaMentions);
}
