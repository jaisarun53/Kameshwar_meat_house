import { GallerySection } from '@/components/gallery-section';
import { HeroSection } from '@/components/hero-section';
import { MenuSection } from '@/components/menu-section';
import { MentionsSection } from '@/components/mentions-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { StorySection } from '@/components/story-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { VisitSection } from '@/components/visit-section';
import {
  getBusinessInfo,
  getGalleryImages,
  getMediaMentions,
  getMenuCategories,
  getTestimonials,
} from '@/lib/api';

export default async function HomePage() {
  const [businessInfo, menuCategories, galleryImages, testimonials, mediaMentions] =
    await Promise.all([
      getBusinessInfo(),
      getMenuCategories(),
      getGalleryImages(),
      getTestimonials(),
      getMediaMentions(),
    ]);

  return (
    <main>
      <SiteHeader />
      <HeroSection businessInfo={businessInfo} />
      <StorySection businessInfo={businessInfo} />
      <MenuSection categories={menuCategories} />
      <GallerySection images={galleryImages} />
      <MentionsSection mentions={mediaMentions} />
      <TestimonialsSection testimonials={testimonials} />
      <VisitSection businessInfo={businessInfo} />
      <SiteFooter />
    </main>
  );
}
