"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-brand-cream bg-lattice relative overflow-hidden">
      {/* Decorative Traditional Korean Accent lines */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-brand-orange/15 mr-8 mt-8 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-brand-orange/15 ml-8 mb-8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side (Left / Col 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Picture Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-brand-navy p-3 bg-brand-cream shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
                  alt="Hanok Interior Ambiance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Overlapping small detail badge */}
            <div className="absolute -bottom-6 -right-6 w-48 bg-[#181512] p-6 shadow-xl border border-brand-orange/30 hidden sm:block">
              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-brand-orange font-bold block mb-1">
                Design Motif
              </span>
              <p className="font-body text-xs text-brand-cream/80 leading-relaxed">
                Sloped tiled roofs, cozy cane lighting, and rich outdoor woodwork.
              </p>
            </div>
          </motion.div>

          {/* Text Side (Right / Col 7) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <motion.span 
              variants={itemVariants}
              className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3"
            >
              Our Story
            </motion.span>

            {/* Main Headline */}
            <motion.h2 
              variants={itemVariants}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight mb-6"
            >
              A Taste of Seoul in the <br className="hidden sm:inline" />
              <span className="text-brand-red">City of Biryani</span>
            </motion.h2>

            {/* Story Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 text-brand-navy/80 text-base leading-relaxed mb-8">
              <p>
                The name <strong className="font-semibold text-brand-navy">Hanok (한옥)</strong> refers to traditional Korean houses built to sustain harmony with nature. Inspired by a deep culinary exploration of Seoul, founder <strong className="font-medium text-brand-navy">Priya Vasireddy</strong> envisioned bringing that authentic, cozy, rich dining culture to Hyderabad following the success of Cravery Cafe.
              </p>
              <p>
                At Hanok, we weave together traditional East Asian dining elements with subtle local hospitality. Our kitchen thrives on meticulous details: homemade Kimchi fermented in clay jars, in-house stone-milled rice cakes, and custom chili marinades imported directly from Korea to secure authentic profiles.
              </p>
              <p>
                Step inside to experience a space designed with open wooden framing, beautiful sloped eaves, and hand-woven cane chandeliers. It’s a contemporary Seoul café meets cozy culinary luxury.
              </p>
            </motion.div>

            {/* Quote Block */}
            <motion.div 
              variants={itemVariants}
              className="border-l-4 border-brand-orange bg-[#181512]/5 p-6 relative rounded-r-sm"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-orange/10 pointer-events-none" />
              <p className="font-body italic text-brand-navy/95 text-base sm:text-lg leading-relaxed mb-3">
                "We've kept the classics intact and deviated some to appeal to all — but the fiery Korean spices are always present."
              </p>
              <span className="font-heading text-xs uppercase tracking-wider font-bold text-brand-orange">
                — Priya Vasireddy, Founder
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
