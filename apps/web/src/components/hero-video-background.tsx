'use client';

import { useEffect, useRef } from 'react';

const HERO_VIDEO_ID = 'H4YIGbr_Fa0';
const HERO_VIDEO_START = 313;
const HERO_VIDEO_END = 400;
const YOUTUBE_IFRAME_API_SRC = 'https://www.youtube.com/iframe_api';

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          };
        },
      ) => YTPlayer;
      PlayerState: {
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YTPlayer = {
  destroy: () => void;
  getCurrentTime: () => number;
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
};

export function HeroVideoBackground() {
  const playerHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let player: YTPlayer | null = null;
    let playerReady = false;
    let replayCheck: number | null = null;

    const mountPlayer = () => {
      if (!window.YT?.Player || !playerHostRef.current || player) {
        return;
      }

      player = new window.YT.Player(playerHostRef.current, {
        videoId: HERO_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          end: HERO_VIDEO_END,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          start: HERO_VIDEO_START,
        },
        events: {
          onReady: ({ target }) => {
            playerReady = true;
            target.mute();
            target.seekTo(HERO_VIDEO_START, true);
            target.playVideo();
          },
          onStateChange: ({ data, target }) => {
            if (data === window.YT?.PlayerState.ENDED) {
              target.seekTo(HERO_VIDEO_START, true);
              target.playVideo();
            }
          },
        },
      });

      replayCheck = window.setInterval(() => {
        if (
          !player ||
          !playerReady ||
          typeof player.getCurrentTime !== 'function' ||
          typeof player.seekTo !== 'function' ||
          typeof player.playVideo !== 'function'
        ) {
          return;
        }

        const currentTime = player.getCurrentTime();

        if (currentTime >= HERO_VIDEO_END - 0.4) {
          player.seekTo(HERO_VIDEO_START, true);
          player.playVideo();
        }
      }, 700);
    };

    const ensureApi = () => {
      if (window.YT?.Player) {
        mountPlayer();
        return;
      }

      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${YOUTUBE_IFRAME_API_SRC}"]`,
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = YOUTUBE_IFRAME_API_SRC;
        script.async = true;
        document.head.appendChild(script);
      }

      const previousReady = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        mountPlayer();
      };
    };

    ensureApi();

    return () => {
      if (replayCheck !== null) {
        window.clearInterval(replayCheck);
      }

      playerReady = false;
      player?.destroy();
    };
  }, []);

  return (
    <div className="hero-video-backdrop" aria-hidden="true">
      <div className="hero-video-backdrop-inner">
        <div ref={playerHostRef} className="hero-video-player" />
      </div>
      <div className="hero-video-veil" />
      <div className="hero-video-ambient-glow" />
    </div>
  );
}
