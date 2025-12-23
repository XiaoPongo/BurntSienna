'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-16 text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* LEFT — full form visible at once */}
          <FormEmbed />

          {/* RIGHT — CONNECT (centered vertically) */}
          <aside className="bg-white/95 text-black rounded-xl shadow-md p-5 md:p-6 flex flex-col justify-center">
            <h4 className="text-lg md:text-xl font-semibold mb-3 text-center">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <SocialRow
                icon={<InstagramIcon />}
                label="Burnt Sienna Insta"
                value="burntsienna.in"
                href="https://instagram.com/burntsienna.in"
              />
              <SocialRow
                icon={<GmailIcon />}
                label="Email"
                value="burntsienna.in@gmail.com"
                href="mailto:burntsienna.in@gmail.com"
              />
              <SocialRow
                icon={<InstagramIcon />}
                label="Jahir Khan Insta"
                value="artzzbyjahirr"
                href="https://instagram.com/artzzbyjahirr"
              />
              <SocialRow
                icon={<GmailIcon />}
                label="Email"
                value="jahir.burntsienna@gmail.com"
                href="mailto:jahir.burntsienna@gmail.com"
              />
              <SocialRow
                icon={<YouTubeIcon />}
                label="YouTube"
                value="Artzzbyjahirr"
                href="https://www.youtube.com/@Artzzbyjahirr"
              />
            </ul>

            <p className="mt-4 text-xs text-center text-neutral-600">
              © {new Date().getFullYear()} Burnt Sienna — Meet Your Art.
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
}

/* ==================== Form (scaled to fit without scroll) ==================== */

function FormEmbed() {
  // PrettyForm canvas (approx) native size
  const BASE_W = 600;
  const BASE_H = 820;

  // Tweak these to taste
  const SCALE_SM = 0.56; // phones
  const SCALE_MD = 0.62; // small laptops/tablets
  const SCALE_LG = 0.68; // desktops

  return (
    <div className="rounded-xl shadow-md p-0 bg-white/85 text-black flex justify-center">
      {/* One wrapper per breakpoint so browser can allocate crisp pixel sizes */}
      <div className="block md:hidden">
        <ScaledIframe baseW={BASE_W} baseH={BASE_H} scale={SCALE_SM} />
      </div>
      <div className="hidden md:block lg:hidden">
        <ScaledIframe baseW={BASE_W} baseH={BASE_H} scale={SCALE_MD} />
      </div>
      <div className="hidden lg:block">
        <ScaledIframe baseW={BASE_W} baseH={BASE_H} scale={SCALE_LG} />
      </div>
    </div>
  );
}

function ScaledIframe({
  baseW,
  baseH,
  scale,
}: {
  baseW: number;
  baseH: number;
  scale: number;
}) {
  const w = Math.round(baseW * scale);
  const h = Math.round(baseH * scale);

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ width: w, height: h, background: 'transparent' }}
    >
      <iframe
        title="Burnt Sienna Contact Form"
        src="https://prettyform.addxt.com/a/form/vf/1FAIpQLSc9XezEAo55VfQ3Q-FcAuaGzYHcMVZ2fMcqSkd1kDBeSeJESw"
        width={baseW}
        height={baseH}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          border: '0',
          display: 'block',
        }}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      />
      {/* soft mask to hide any bottom watermark if visible */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/95 to-transparent" />
    </div>
  );
}

/* ==================== Socials ==================== */

function SocialRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li className="flex items-center gap-2.5 justify-center md:justify-start">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black/5 text-black/70">
        {icon}
      </span>
      <div className="min-w-0 text-center md:text-left">
        <div className="text-[11px] uppercase tracking-wide text-neutral-500">
          {label}
        </div>
        <Link
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          className="block truncate text-sm font-medium text-[#783324] hover:underline"
        >
          {value}
        </Link>
      </div>
    </li>
  );
}

/* ==================== Inline Icons ==================== */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
}
function GmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.4 3.25-7.2 5.1-7.2-5.1V6l7.2 5.1L19.6 6v1.25z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.3.5A3.1 3.1 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3.1 3.1 0 0 0 2.2 2.2c1.7.5 9.3.5 9.3.5s7.6 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2C24 16 24 12 24 12s0-4-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}
