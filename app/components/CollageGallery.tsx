'use client';
import React, { useState } from 'react';

type Img = { id: number; src: string; alt: string };

export default function CollageGallery(): JSX.Element {
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    src?: string;
    alt?: string;
  }>({ open: false });

  const collageImages: Img[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    src: `/images/collage-${(i % 8) + 1}.jpg`,
    alt: `Artwork ${i + 1}`,
  }));

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <h2 className="sr-only">Gallery collage</h2>

      <div className="mt-8">
        <div className="masonry-gallery columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {collageImages.map((img) => (
            <figure
              key={img.id}
              className="break-inside-avoid rounded-lg overflow-hidden cursor-pointer shadow-sm transform-gpu hover:scale-[1.01] transition"
              onClick={() =>
                setLightbox({ open: true, src: img.src, alt: img.alt })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  setLightbox({ open: true, src: img.src, alt: img.alt });
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover block"
              />
            </figure>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
          onClick={() => setLightbox({ open: false })}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-hidden rounded shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                className="absolute right-3 top-3 z-50 bg-white/80 rounded-full p-2 shadow"
                onClick={() => setLightbox({ open: false })}
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-gray-50"
              />
              <figcaption className="p-3 text-sm text-neutral-600">
                {lightbox.alt}
              </figcaption>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .masonry-gallery { column-gap: 1rem; }
        .masonry-gallery img { width: 100%; display: block; }
        @media (min-width: 1024px) { .masonry-gallery { column-count: 4; } }
        @media (min-width: 768px) and (max-width: 1023px) { .masonry-gallery { column-count: 3; } }
        @media (max-width: 767px) { .masonry-gallery { column-count: 2; } }
      `}</style>
    </section>
  );
}
