"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Image with warm overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Dark overlay with brand color tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90" />
      
      {/* Decorative Traditional Korean Roof Vector Frame (subtle CSS) */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-brand-navy/80 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* HANOK Styled Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 px-4 py-1.5 border border-brand-orange/40 bg-brand-navy/80 backdrop-blur-sm text-brand-orange text-xs font-heading uppercase tracking-[0.4em]"
        >
          한옥 • Seoulful Food
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-tight text-brand-cream mb-4 drop-shadow-sm"
        >
          HANOK
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading uppercase tracking-[0.25em] text-brand-orange text-lg sm:text-xl md:text-2xl font-bold mb-6"
        >
          Seoulful Food
        </motion.p>

        {/* Subheading text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-brand-cream/80 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
        >
          Authentic Korean Cuisine in the Heart of Hyderabad. Experience cozy luxury, traditional aesthetics, and the fiery punch of Seoul's culinary legacy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
        >
          <Link
            href="#menu"
            className="font-heading text-sm font-semibold uppercase tracking-wider py-4 px-8 bg-brand-orange hover:bg-brand-red text-brand-cream transition-all duration-300 border-2 border-brand-orange hover:border-brand-red text-center"
          >
            Explore Menu
          </Link>
          <Link
            href="#reserve"
            className="font-heading text-sm font-semibold uppercase tracking-wider py-4 px-8 border-2 border-brand-cream hover:border-brand-orange text-brand-cream hover:bg-brand-orange transition-all duration-300 text-center"
          >
            Reserve Table
          </Link>
        </motion.div>
      </div>

      {/* Bounce Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-8 z-10 text-brand-cream/60 flex flex-col items-center gap-2 cursor-pointer"
      >
        <Link href="#about" aria-label="Scroll Down">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
