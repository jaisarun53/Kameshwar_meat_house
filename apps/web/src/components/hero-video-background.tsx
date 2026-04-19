const HERO_VIDEO_ID = 'H4YIGbr_Fa0';
const HERO_VIDEO_START = 313;

const HERO_VIDEO_EMBED_URL = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&start=${HERO_VIDEO_START}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`;

export function HeroVideoBackground() {
  return (
    <div className="hero-video-backdrop" aria-hidden="true">
      <div className="hero-video-backdrop-inner">
        <iframe
          className="hero-video-iframe"
          src={HERO_VIDEO_EMBED_URL}
          title="Kameshwar Meat House background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
      </div>
      <div className="hero-video-veil" />
      <div className="hero-video-ambient-glow" />
    </div>
  );
}
