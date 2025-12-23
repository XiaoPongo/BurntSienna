// app/components/GalleryHeroSimple.tsx
'use client';
import React, { useState } from 'react';

const tabs = [
  {
    id: 'live',
    label: 'Live Painting',
    // stock images from Unsplash (royalty-free)
    img: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'portraits',
    label: 'Portraits',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'jackets',
    label: 'Jackets & Jeans',
    img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop',
  },
];

const sampleSlides: Record<string, string[]> = {
  live: [
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop',
  ],
  portraits: [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1400&auto=format&fit=crop',
  ],
  jackets: [
    'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975779018-2f6823a8f72f?q=80&w=1400&auto=format&fit=crop',
  ],
};

export default function GalleryHeroSimple(): JSX.Element {
  const [active, setActive] = useState<string>('live');

  return (
    <section className="relative">
      {/* Hero background */}
      <div className="relative min-h-[56vh] md:min-h-[64vh] lg:min-h-[72vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.orientbell.com/media/catalog/product/d/e/decor_portugese_art_multi.jpg')",
          }}
          aria-hidden
        />

        {/* Move title + tabs slightly upwards: reduced top padding + small negative translate */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-12 md:pt-14 lg:pt-16 text-center -translate-y-4 md:-translate-y-6">
          {/* translucent overlay behind the title (for contrast) */}
          <div className="inline-block relative mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 mx-auto rounded-md"
              style={{
                background: 'rgba(0,0,0,0.45)',
                transform: 'scale(1.06)',
                padding: '0.5rem 1rem',
              }}
            />
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase text-white drop-shadow-lg leading-none">
              GALLERIA
            </h1>
          </div>

          {/* circular tabs */}
          <div className="mt-6 flex items-center justify-center gap-8">
            {tabs.map((t) => (
              <div key={t.id} className="flex flex-col items-center">
                <button
                  onClick={() => setActive(t.id)}
                  aria-pressed={active === t.id}
                  className="group flex items-center justify-center focus:outline-none"
                >
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden transition-transform shadow-md grid place-items-center ${
                      active === t.id
                        ? 'scale-105 ring-2 ring-amber-300'
                        : 'hover:scale-[1.03]'
                    }`}
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <img
                      src={t.img}
                      alt={t.label}
                      className="object-cover w-full h-full opacity-70"
                    />
                  </div>
                </button>

                {/* label outside the tab, below, in white on translucent overlay */}
                <div
                  className="mt-3 px-3 py-1 rounded-full text-white text-sm font-medium"
                  style={{
                    background: 'rgba(0,0,0,0.45)',
                    minWidth: 86,
                    textAlign: 'center',
                  }}
                >
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* single wave divider (no layered waves) */}
        <div
          className="absolute inset-x-0 w-full h-20"
          style={{ bottom: -1, zIndex: 30, color: '#fdf1dc' }}
          aria-hidden
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C300,120 420,0 720,40 C1020,80 1140,20 1440,60 L1440 120 L0 120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Sliders (only the active one is visible) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mt-8 pb-8">
        {tabs.map((t) => (
          <div
            key={t.id}
            className={`${
              active === t.id ? 'block' : 'hidden'
            } slider-container`}
          >
            <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 py-2">
              {sampleSlides[t.id].map((src, idx) => (
                <div
                  key={idx}
                  className="min-w-[260px] snap-center rounded-lg overflow-hidden bg-white/90 shadow-lg"
                >
                  <img
                    src={src}
                    alt={`${t.label} ${idx + 1}`}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3 text-sm text-neutral-800">
                    {t.label} #{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
