import { HeroSection } from '@/components/hero-section';
import { MenuSection } from '@/components/menu-section';
import { MentionsSection } from '@/components/mentions-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { StorySection } from '@/components/story-section';
import { VisitSection } from '@/components/visit-section';
import {
  getBusinessInfo,
  getMediaMentions,
  getMenuCategories,
} from '@/lib/api';

export default async function HomePage() {
  const [businessInfo, menuCategories, mediaMentions] = await Promise.all([
    getBusinessInfo(),
    getMenuCategories(),
    getMediaMentions(),
  ]);

  return (
    <main>
      <SiteHeader />
      <HeroSection businessInfo={businessInfo} />
      <StorySection businessInfo={businessInfo} />
      <MenuSection categories={menuCategories} />
      <MentionsSection mentions={mediaMentions} />
      <VisitSection businessInfo={businessInfo} />
      <SiteFooter />
    </main>
  );
}
