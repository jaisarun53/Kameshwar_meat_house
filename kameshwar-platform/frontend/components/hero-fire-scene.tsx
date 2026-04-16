'use client';

import { useEffect, useState } from 'react';

export function HeroFireScene() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      frame = 0;
      setScrollOffset(Math.min(window.scrollY, 360));
    };

    const onScroll = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateOffset);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateOffset();

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const hazeShift = scrollOffset * 0.08;
  const copyShift = scrollOffset * 0.05;
  const potShift = scrollOffset * 0.12;
  const fireShift = scrollOffset * 0.18;

  return (
    <div className="hero-fire-stage relative min-h-[620px] rounded-[1.75rem] border border-white/10 p-8">
      <div
        className="hero-night-haze"
        aria-hidden="true"
        style={{ transform: `translateY(${hazeShift}px)` }}
      />
      <div className="hero-smoke hero-smoke-one" aria-hidden="true" />
      <div className="hero-smoke hero-smoke-two" aria-hidden="true" />
      <div className="hero-smoke hero-smoke-three" aria-hidden="true" />
      <div className="hero-embers" aria-hidden="true">
        <span className="hero-ember hero-ember-one" />
        <span className="hero-ember hero-ember-two" />
        <span className="hero-ember hero-ember-three" />
        <span className="hero-ember hero-ember-four" />
        <span className="hero-ember hero-ember-five" />
        <span className="hero-spark hero-spark-one" />
        <span className="hero-spark hero-spark-two" />
        <span className="hero-spark hero-spark-three" />
        <span className="hero-spark hero-spark-four" />
      </div>
      <div
        className="absolute inset-x-8 top-8 z-10 flex flex-col items-center gap-4 text-center"
        style={{ transform: `translateY(${copyShift}px)` }}
      >
        <div className="max-w-xl">
          <p className="section-kicker">Live Fire Scene</p>
          <p className="mt-4 font-display text-4xl leading-tight text-ash">
            The fire sits at the center now, with a darker stage and a heavier clay pot above it.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/50">
          Campfire parallax
        </div>
      </div>
      <div className="hero-pot-parallax" aria-hidden="true" style={{ transform: `translateY(${potShift}px)` }}>
        <div className="hero-pot-rig">
          <div className="hero-pot-rig-bar" />
          <div className="hero-pot-chain hero-pot-chain-left" />
          <div className="hero-pot-chain hero-pot-chain-right" />
          <div className="hero-pot-neck" />
          <div className="hero-pot-lid" />
          <div className="hero-pot-rim" />
          <div className="hero-pot-steam hero-pot-steam-left" />
          <div className="hero-pot-steam hero-pot-steam-center" />
          <div className="hero-pot-steam hero-pot-steam-right" />
          <div className="hero-pot-body">
            <div className="hero-pot-texture hero-pot-texture-one" />
            <div className="hero-pot-texture hero-pot-texture-two" />
            <div className="hero-pot-shine" />
            <div className="hero-pot-broth">
              <span className="hero-bubble hero-bubble-one" />
              <span className="hero-bubble hero-bubble-two" />
              <span className="hero-bubble hero-bubble-three" />
            </div>
            <div className="hero-pot-base" />
          </div>
        </div>
      </div>
      <div
        className="hero-fire-base"
        aria-hidden="true"
        style={{ transform: `translateX(-50%) translateY(${fireShift}px)` }}
      >
        <div className="hero-log hero-log-back-left" />
        <div className="hero-log hero-log-back-right" />
        <div className="hero-log hero-log-front-left" />
        <div className="hero-log hero-log-front-right" />
        <div className="hero-char-line hero-char-line-left" />
        <div className="hero-char-line hero-char-line-right" />
        <div className="hero-coal-bed" />
        <div className="hero-flame hero-flame-left" />
        <div className="hero-flame hero-flame-center" />
        <div className="hero-flame hero-flame-right" />
        <div className="hero-flame hero-flame-core" />
      </div>
      <div
        className="absolute inset-x-8 bottom-8 z-10 flex justify-center text-center"
        style={{ transform: `translateY(${copyShift * 0.6}px)` }}
      >
        <div className="grid gap-4 text-sm leading-7 text-[#d9cab9] sm:max-w-xl">
          <p>
            The hero now centers the cooking ritual itself: darker room, stronger fire bed,
            heavier burning wood, and a clay pot that feels more grounded and hand-made.
          </p>
          <p>
            We can still swap this later for real footage, but the current version already feels
            much closer to a real night-fire cooking setup.
          </p>
        </div>
      </div>
    </div>
  );
}
