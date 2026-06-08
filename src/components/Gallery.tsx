"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "ambiance" | "food";
  title: string;
}

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<"all" | "food" | "ambiance">("all");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      alt: "Hanok Restaurant Ambiance - Cozy dining room",
      category: "ambiance",
      title: "Cozy Dining Room",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      alt: "Korean Fried Chicken - Soy Garlic Glaze",
      category: "food",
      title: "Korean Fried Chicken",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
      alt: "Traditional wooden table setup at Hanok",
      category: "ambiance",
      title: "Traditional Table Setup",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
      alt: "Kimbap roll slices on plate",
      category: "food",
      title: "Classic Vegetable Kimbap",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
      alt: "Hanok Cafe seating corner with cane light shade",
      category: "ambiance",
      title: "Cane Light Seating",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      alt: "Steaming Stone Bowl Bibimbap with veggies and egg",
      category: "food",
      title: "Hot Stone Dolsot Bibimbap",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      alt: "Steaming Ramyun noodles golden pot with toppings",
      category: "food",
      title: "Fiery Korean Ramyun",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      alt: "Warm wooden beams and lighting interior detailing",
      category: "ambiance",
      title: "Architectural Detailing",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="gallery" className="py-24 bg-brand-navy text-brand-cream relative overflow-hidden">
      
      {/* Decorative lattice background with reduced opacity */}
      <div className="absolute inset-0 bg-lattice opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
            Visual Ambiance
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-cream tracking-tight mb-4">
            Gallery of Hanok
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="font-body text-brand-cream/70 text-sm sm:text-base max-w-xl mx-auto">
            A glimpse into our cozy dining spaces, detailed wooden architecture, and signature plates crafted with fiery spices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "food", "ambiance"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-5 py-2 font-heading text-[10px] sm:text-xs uppercase tracking-wider font-extrabold border transition-all duration-300 ${
                filter === type
                  ? "bg-brand-orange border-brand-orange text-brand-cream"
                  : "border-brand-cream/20 text-brand-cream/70 hover:border-brand-cream hover:text-brand-cream"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden border border-brand-cream/10 bg-brand-navy cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-2 border-brand-orange/60 m-3">
                  <ZoomIn className="w-6 h-6 text-brand-orange mb-3 transition-transform duration-500 translate-y-3 group-hover:translate-y-0" />
                  <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-brand-orange font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-brand-cream tracking-wider leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-navy/95 flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Close handler on backdrop click */}
            <div className="absolute inset-0" onClick={() => setActiveItem(null)} />

            {/* Lightbox Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full aspect-video sm:aspect-square md:aspect-video overflow-hidden border-2 border-brand-orange bg-brand-navy p-1 shadow-2xl"
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 bg-brand-navy/85 border border-brand-orange text-brand-cream hover:text-brand-orange p-2 shadow-lg z-10 transition-colors"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Lightbox Text Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center mt-6 z-10"
            >
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-brand-orange font-bold block mb-1">
                {activeItem.category}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-brand-cream tracking-widest">
                {activeItem.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
