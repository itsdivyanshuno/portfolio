"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-3">

      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">

        {/* Logo */}
        <h1 className="text-sm font-bold tracking-widest md:text-lg">
          DIVYANSH
        </h1>

        {/* Desktop Links */}
        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-black/90 p-5 text-center text-white md:hidden">

          <div className="flex flex-col gap-4">

            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          </div>

        </div>
      )}

    </nav>
  );
}