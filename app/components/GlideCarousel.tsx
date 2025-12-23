'use client';

import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

type Slide = {
  src: string;
  caption?: string;
};

export default function GlideCarousel({
  slides,
  id = 'glide-carousel',
}: {
  slides: Slide[];
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const glide = new Glide(`#${id}`, {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      gap: 8,
      autoplay: 4000,
      hoverpause: false,
      animationDuration: 600,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    });

    glide.mount();
    return () => glide.destroy();
  }, [id]);

  return (
    <div className="glide-shell">
      <div id={id} ref={ref} className="glide py-10">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides.map((s, i) => (
              <li key={i} className="glide__slide flex justify-center">
                <div
                  className="glide-card"
                  style={{ backgroundImage: `url(${s.src})` }}
                >
                  <div className="glide-card__overlay">
                    <h4>{s.caption ?? `Slide ${i + 1}`}</h4>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            ◀
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
