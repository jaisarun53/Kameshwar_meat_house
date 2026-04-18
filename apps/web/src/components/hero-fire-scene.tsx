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
  const sceneShift = scrollOffset * 0.1;
  const emberShift = scrollOffset * 0.14;

  return (
    <div className="hero-fire-stage hero-chulo-scene relative min-h-[620px] rounded-[1.75rem] border border-white/10 p-8">
      <div
        className="hero-night-haze"
        aria-hidden="true"
        style={{ transform: `translateY(${hazeShift}px)` }}
      />
      <div className="hero-smoke hero-smoke-one" aria-hidden="true" />
      <div className="hero-smoke hero-smoke-two" aria-hidden="true" />
      <div className="hero-smoke hero-smoke-three" aria-hidden="true" />
      <div className="hero-embers" aria-hidden="true" style={{ transform: `translateY(${emberShift}px)` }}>
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
          <p className="section-kicker">Clay Stove Scene</p>
          <p className="mt-4 font-display text-4xl leading-tight text-ash">
            A grounded mud chulo, glowing wood-fire, and a real clay pot sitting where the mutton slowly cooks.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/50">
          Rustic live-fire parallax
        </div>
      </div>
      <div
        className="hero-chulo-parallax"
        aria-hidden="true"
        style={{ transform: `translateY(${sceneShift}px)` }}
      >
        <div className="hero-pot-set">
          <div className="hero-pot-steam hero-pot-steam-left" />
          <div className="hero-pot-steam hero-pot-steam-center" />
          <div className="hero-pot-steam hero-pot-steam-right" />
          <div className="hero-pot-neck" />
          <div className="hero-pot-lid" />
          <div className="hero-pot-rim" />
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
        <div className="hero-chulo">
          <div className="hero-chulo-top" />
          <div className="hero-chulo-body" />
          <div className="hero-chulo-mouth-shadow" />
          <div className="hero-hearth">
            <div className="hero-firewood hero-firewood-left" />
            <div className="hero-firewood hero-firewood-center" />
            <div className="hero-firewood hero-firewood-right" />
            <div className="hero-coal-bed" />
            <div className="hero-flame hero-flame-left" />
            <div className="hero-flame hero-flame-center" />
            <div className="hero-flame hero-flame-right" />
            <div className="hero-flame hero-flame-core" />
          </div>
          <div className="hero-chulo-ash" />
        </div>
      </div>
      <div
        className="absolute inset-x-8 bottom-8 z-10 flex justify-center text-center"
        style={{ transform: `translateY(${copyShift * 0.6}px)` }}
      >
        <div className="grid gap-4 text-sm leading-7 text-[#d9cab9] sm:max-w-xl">
          <p>
            This version feels closer to a real kitchen corner: the clay stove carries the weight,
            the wood burns inside the mouth, and the pot stays planted over the heat.
          </p>
          <p>
            We can still replace this later with real footage, but this direction already feels more
            local, believable, and premium than the hanging-pot setup.
          </p>
        </div>
      </div>
    </div>
  );
}
