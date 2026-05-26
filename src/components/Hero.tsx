"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >

        <p className="mb-4 text-gray-400">
          Student Developer
        </p>

        <h1 className="text-7xl font-bold">
          Building ideas
          <br />
          into products
        </h1>

        <p className="mt-6 text-gray-400">
          Exploring web technologies and building projects.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <button className="rounded-full bg-white px-6 py-3 text-black">
            Projects
          </button>

          <button className="rounded-full border border-white/20 px-6 py-3">
            Contact
          </button>

        </div>

      </motion.div>

    </section>
  );
}