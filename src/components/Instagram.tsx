"use client";

import Image from "next/image";
import { Instagram as InstagramIcon, Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface InstagramPost {
  id: number;
  image: string;
  likes: number;
  comments: number;
  caption: string;
}

export default function Instagram() {
  const posts: InstagramPost[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
      likes: 312,
      comments: 18,
      caption: "Fiery, crispy, and glazed to perfection. Our signature Korean Chicken Wings are waiting for you! 🍗🔥 #hanokhyderabad #koreanfriedchicken",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
      likes: 245,
      comments: 9,
      caption: "Boba weather in Hyderabad! Chill out with our classic Brown Sugar Bubble Tea. 🧋✨ #seoulfulfood #bubbletea",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
      likes: 421,
      comments: 32,
      caption: "Healthy, colorful, and packed with authentic Seoul flavors. Mix it up! 🥗🇰🇷 #bibimbap #hyderabadfoodies",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=600&q=80",
      likes: 389,
      comments: 21,
      caption: "Cheesy, gooey, and bubbling hot. Cozy comfort food at its best. 🧀🔥 #tteokbokki #cheesyfood",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
      likes: 298,
      comments: 14,
      caption: "Find your cozy corner at Hanok. Soft lighting, warm wood, and good food. 🏮🥢 #hanokambiance #seoulcafe",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
      likes: 512,
      comments: 45,
      caption: "Steaming hot Ramyun bowl to warm up your week. Choose your spice level! 🍜🌶️ #seoulfulfood #ramyun",
    },
  ];

  return (
    <section className="py-20 bg-brand-cream border-t border-brand-orange/15 relative overflow-hidden">
      
      {/* Decorative lattice details */}
      <div className="absolute inset-0 bg-lattice opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
              Social Connect
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight mb-2">
              On Instagram
            </h2>
            <p className="font-body text-brand-navy/60 text-sm">
              Keep up with daily updates, specials, and mouth-watering posts at our handle.
            </p>
          </div>
          
          <div>
            <a
              href="https://www.instagram.com/hanok.seoulfulfood/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest bg-[#181512] hover:bg-brand-orange text-brand-cream py-3.5 px-6 border border-[#181512] hover:border-brand-orange transition-all duration-300 shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @hanok.seoulfulfood</span>
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/hanok.seoulfulfood/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden border border-brand-navy/10 bg-brand-cream shadow-sm block cursor-pointer"
            >
              <Image
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#181512]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 border border-brand-orange/40">
                
                {/* Top logo */}
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 text-brand-orange" />
                </div>

                {/* Center Likes/Comments */}
                <div className="flex flex-col items-center justify-center flex-grow gap-2 text-brand-cream text-xs font-heading font-extrabold tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-brand-orange fill-current" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-brand-cream" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Bottom caption snippet */}
                <p className="font-body text-[10px] text-brand-cream/80 line-clamp-2 leading-relaxed text-center">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
