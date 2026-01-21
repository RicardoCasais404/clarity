"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-10 text-center">
      {/* Background Decor - Subtle gradient to give depth to the white */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <span className="mb-6 block font-sans text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
          A Safe Space for Education
        </span>

        <h1 className="mb-8 font-sans text-5xl font-extrabold uppercase leading-tight tracking-tighter text-black md:text-7xl lg:text-8xl">
          The Substance.
          <br />
          The Science.
          <br />
          The Safety.
        </h1>

        <p className="mx-auto mb-12 max-w-2xl font-serif text-lg leading-relaxed text-neutral-600 md:text-xl">
          An objective, judgment-free archive of pharmacological facts,
          historical context, and harm reduction strategies for cocaine users.
          Understanding the mechanism is the first step towards safety.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/knowledge"
            className="group flex items-center gap-3 border border-black bg-black px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
          >
            Start Reading
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/tools"
            className="group flex items-center gap-3 border border-neutral-200 px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-neutral-500 transition-all hover:border-black hover:text-black"
          >
            Safety Toolkit
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
