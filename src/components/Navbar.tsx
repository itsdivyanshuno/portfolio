"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Escape key and click-outside
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open, close]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Scroll spy — highlight active section
  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full px-4 py-3">

      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">

        {/* Logo */}
        <h1 className="text-sm font-bold tracking-widest md:text-lg">
          DIVYANSH
        </h1>

        {/* Desktop Links */}
        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                active === item.href.slice(1)
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-black/90 p-5 text-center text-white md:hidden">

          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={`transition-colors ${
                  active === item.href.slice(1) ? "text-white" : "text-gray-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      )}

    </nav>
  );
}