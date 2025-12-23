'use client';

import Image from 'next/image';
import GlideCarousel from '@/app/components/GlideCarousel';

// Define slide data inside the component so SliderBlock can access them
export default function Home() {
  const liveSlides = [
    {
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop',
      caption: 'Selected projects from the last month',
    },
    {
      src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop',
      caption: 'Otherworldly places located on Earth',
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop',
      caption: 'Visualizing distorted sound mixes',
    },
  ];

  const portraitSlides = [
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop',
      caption: 'Quiet light studies',
    },
    {
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop',
      caption: 'Natural frames',
    },
    {
      src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1400&auto=format&fit=crop',
      caption: 'Faces & textures',
    },
  ];

  const jacketSlides = [
    {
      src: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1400&auto=format&fit=crop',
      caption: 'Custom denim & drip',
    },
    {
      src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
      caption: 'Back-panel compositions',
    },
    {
      src: 'https://images.unsplash.com/photo-1520975779018-2f6823a8f72f?q=80&w=1400&auto=format&fit=crop',
      caption: 'Wearable canvases',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative min-h-[80vh] md:min-h-[85vh]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,.45), rgba(0,0,0,.45)), url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat",
            }}
          />

          <div className="relative z-20 max-w-5xl mx-auto px-6 pt-20 md:pt-24 text-center text-white">
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm opacity-90">
              Welcome,
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold">
              This is Burnt Sienna.
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-95">
              Canvas &amp; fabric paintings, portraits, and bespoke commissions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#what-i-do"
                className="rounded-full border border-white/70 px-6 py-2 text-sm md:text-base hover:bg-white hover:text-black transition"
              >
                Explore
              </a>
              <a
                href="#sliders"
                className="rounded-full bg-white text-black px-6 py-2 text-sm md:text-base hover:opacity-90 transition"
              >
                See Work
              </a>
            </div>
          </div>

          {/* Gradient fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#fdf1dc]" />

          {/* Wave SVG */}
          <svg
            className="pointer-events-none absolute inset-x-0 w-full h-64 text-[#fdf1dc] animate-wave-sway"
            style={{ bottom: -2, zIndex: 15 }}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,180 C240,140 360,200 600,170 C840,140 1080,200 1440,160 L1440,320 L0,320 Z"
              fill="currentColor"
              opacity="0.35"
            />
            <path
              d="M0,200 C220,160 380,220 640,190 C900,160 1140,220 1440,180 L1440,320 L0,320 Z"
              fill="currentColor"
              opacity="0.55"
            />
            <path
              d="M0,220 C260,180 420,240 700,210 C980,180 1220,240 1440,200 L1440,320 L0,320 Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT COPY */}
      <section
        id="what-i-do"
        className="relative bg-[#fdf1dc] max-w-4xl mx-auto px-6 pt-20 pb-8 text-center text-neutral-800"
        style={{ marginTop: '-2px' }}
      >
        <p className="text-lg md:text-xl leading-relaxed">
          The artistic endeavor of Jahir Khan, a self-taught artist based in
          Goa, who is passionate for infusing intricate details and compelling
          narratives into every piece.
        </p>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          Each artwork tells a story, crafted to capture your moments and
          memories with timeless elegance. Explore my world of creativity and
          let me bring your vision to canvas.
        </p>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-[#fdf1dc]">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop"
              alt="Studio work in progress"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">What I Do</h2>
            <p className="mt-4 text-neutral-700">
              Whether you seek an artist to immortalize your wedding moments
              through live painting, create a meticulously crafted portrait
              capturing the essence of your loved ones, or design sophisticated,
              customized drip (denim jackets n baggy jeans) with distinctive
              artistic flair, I am committed to transforming your vision into
              reality with unparalleled dedication and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDERS */}
      <section
        id="sliders"
        className="max-w-7xl mx-auto px-6 pb-24 space-y-24 bg-[#fdf1dc]"
      >
        {/* Top partition */}
        <Divider />

        <SliderBlock
          id="live-painting"
          title="Live Painting"
          slides={liveSlides}
        />

        <SliderBlock
          id="portrait-painting"
          title="Portrait Painting"
          slides={portraitSlides}
        />

        <SliderBlock
          id="jacket-painting"
          title="Jacket Painting"
          slides={jacketSlides}
        />
      </section>
    </>
  );
}

function SliderBlock({
  id,
  title,
  slides,
}: {
  id: string;
  title: string;
  slides: { src: string; caption?: string }[];
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="mb-6 text-2xl md:text-3xl font-extrabold text-center select-none cursor-default">
        {title}
      </h3>

      <GlideCarousel slides={slides ?? []} id={id} />

      <Divider />
    </div>
  );
}

/* Subtle divider component */
function Divider() {
  return (
    <div className="mt-16 flex justify-center">
      <span className="block h-px w-2/3 bg-gradient-to-r from-transparent via-[#783324]/30 to-transparent" />
    </div>
  );
}
