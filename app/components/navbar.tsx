'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Sticky translucent bar with subtle shadow
  const bar =
    'sticky top-0 z-50 border-b border-white/10 bg-[rgba(120,51,36,0.85)] text-[#f1e1d4] backdrop-blur shadow-[0_8px_16px_-12px_rgba(0,0,0,0.35)]';

  return (
    <>
      {/* 🔧 Global: paint only the very top of the page background black (behind header) */}
      <style jsx global>{`
        /* Make body a positioning context for the top tint */
        body {
          position: relative;
          background-repeat: no-repeat;
          /* 64px on small screens */
          background-image: linear-gradient(#000 0 64px, transparent 64px);
        }
        @media (min-width: 768px) {
          /* 80px on md+ screens to match navbar height */
          body {
            background-image: linear-gradient(#000 0 80px, transparent 80px);
          }
        }
      `}</style>

      {/* Fixed MENU paddle (hidden while drawer open) */}
      <MenuPaddle hidden={open} onClick={() => setOpen(true)} />

      {/* Sticky translucent navbar */}
      <header className={bar}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Desktop */}
          <div className="hidden h-20 grid-cols-3 items-center md:grid">
            <div />
            {/* Logo: non-selectable/non-draggable; overlay link handles click */}
            <div className="relative flex items-center justify-center pt-2 select-none">
              <Image
                src="https://raw.githubusercontent.com/XiaoPongo/BurntSiennaClone/main/logos.png"
                alt="Burnt Sienna — Meet Your Art"
                width={200}
                height={70}
                priority
                className="object-contain pointer-events-none select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <Link
                href="/"
                aria-label="Burnt Sienna Home"
                className="absolute inset-0"
              />
            </div>
            <div />
          </div>

          {/* Mobile */}
          <div className="relative flex h-16 items-center justify-center md:hidden select-none">
            <Image
              src="https://raw.githubusercontent.com/XiaoPongo/BurntSiennaClone/main/logos.png"
              alt="Burnt Sienna — Meet Your Art"
              width={150}
              height={50}
              priority
              className="h-[42px] w-auto object-contain pointer-events-none select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <Link
              href="/"
              aria-label="Burnt Sienna home (mobile)"
              className="absolute inset-0"
            />
          </div>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Narrow overlay:
            - starts exactly beneath the navbar (64/80px)
            - only as wide as the drawer (excludes CLOSE bookmark) */}
        <div
          className={`
            absolute left-0 bottom-0
            top-16 md:top-20
            w-52 md:w-60
            bg-black/40
            transition-opacity
            ${open ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-52 md:w-60 max-w-[80%]
                      bg-transparent text-white
                      transform transition-transform duration-300 ease-in-out
                      ${open ? 'translate-x-0' : '-translate-x-full'}
                      flex flex-col`}
          role="dialog"
          aria-modal="true"
        >
          {/* Solid top strip (same height as navbar) */}
          <div className="relative flex items-center justify-between h-16 md:h-20 px-5 border-b border-white/10 bg-[rgba(120,51,36,0.97)] backdrop-blur">
            <span className="uppercase tracking-[0.25em] text-sm md:text-base font-semibold">
              Menu
            </span>

            {/* CLOSE bookmark — same size/corners as MENU paddle; sticks out */}
            {open && (
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="
                  absolute top-1/2 -translate-y-1/2
                  -right-12 md:-right-14
                  h-16 md:h-20 w-12 md:w-14
                  bg-white text-[#b42a2a]
                  border border-black/10 shadow-sm
                  rounded-br-md grid place-items-center
                "
                style={{ transformOrigin: 'left center' }}
              >
                <span
                  className="block select-none uppercase font-bold tracking-[0.25em] text-[12px] md:text-[13px] rotate-90"
                  style={{ letterSpacing: '0.18em' }}
                >
                  CLOSE
                </span>
              </button>
            )}
          </div>

          {/* Transparent region: tabs top-aligned, centered text */}
          <div className="px-5 pt-4">
            <nav className="text-base text-center">
              <MenuLink href="/" onClick={() => setOpen(false)}>
                Home
              </MenuLink>
              <Separator />
              <MenuLink href="/about" onClick={() => setOpen(false)}>
                About
              </MenuLink>
              <Separator />
              <MenuLink href="/gallery" onClick={() => setOpen(false)}>
                Gallery
              </MenuLink>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}

/* helpers */

function Separator() {
  return <div className="mx-auto mt-2 mb-2 h-px w-full bg-white/20" />;
}

function MenuLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 font-semibold hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}

/** Fixed vertical MENU paddle (top-left), rotated +90°, same size/corners as CLOSE */
function MenuPaddle({
  onClick,
  hidden,
}: {
  onClick: () => void;
  hidden: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className={`
        fixed left-0 top-0 z-[55]
        flex items-center justify-center
        h-16 md:h-20 w-12 md:w-14
        bg-white text-[#b42a2a]
        border-r border-black/10 shadow-sm
        rounded-br-md
        transition-all duration-300 ease-out
        ${
          hidden
            ? 'opacity-0 scale-95 -translate-x-2 pointer-events-none'
            : 'opacity-100 scale-100 translate-x-0'
        }
      `}
      style={{ transformOrigin: 'left top' }}
    >
      <span
        className="block select-none uppercase font-bold tracking-[0.25em] text-[12px] md:text-[13px] rotate-90"
        style={{ letterSpacing: '0.18em' }}
      >
        MENU
      </span>
    </button>
  );
}
