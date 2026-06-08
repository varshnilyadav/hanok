"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Send, Star, ExternalLink } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Find Us", href: "#contact" },
    { name: "Book Table", href: "#reserve" },
  ];

  return (
    <footer className="bg-brand-cream text-brand-navy border-t border-brand-orange/20 pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative lattice background with low opacity */}
      <div className="absolute inset-0 bg-lattice opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-navy/10">
          
          {/* Logo & Tagline (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-brand-orange/30 bg-brand-navy/5">
                <Image
                  src="/images/logo.png"
                  alt="HANOK Logo"
                  fill
                  sizes="48px"
                  className="object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black tracking-widest text-lg text-brand-navy">
                  HANOK
                </span>
                <span className="text-[9px] font-heading uppercase tracking-[0.3em] text-brand-orange font-medium -mt-1">
                  Seoulful Food
                </span>
              </div>
            </div>
            <p className="font-body text-xs text-brand-navy/70 leading-relaxed max-w-sm">
              Bringing authentic Korean textures, clay-fermented kimchi, and hand-rolled rice cakes directly from the busy streets of Seoul to Film Nagar, Hyderabad. 
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/hanok.seoulfulfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-brand-navy/10 hover:border-brand-orange text-brand-navy hover:text-brand-orange transition-all duration-300 rounded-none bg-brand-navy/5"
                aria-label="Visit Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.zomato.com/hyderabad/hanok-seoulful-food-film-nagar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-brand-navy/10 hover:border-brand-orange text-brand-navy hover:text-brand-orange transition-all duration-300 rounded-none bg-brand-navy/5 text-xs font-heading uppercase font-bold tracking-widest flex items-center gap-1.5"
                aria-label="Order on Zomato"
              >
                <span>Zomato</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-heading text-xs uppercase tracking-wider text-brand-navy/75 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
              Dining Hours
            </h4>
            <div className="space-y-2 font-body text-xs text-brand-navy/85">
              <p>
                <strong className="text-brand-navy">Monday – Sunday:</strong><br />
                12:00 PM – 11:00 PM
              </p>
              <p className="text-brand-orange font-heading text-[10px] uppercase font-bold tracking-wider pt-2">
                Table Reservations
              </p>
              <p>
                Host desk open until 10:30 PM.<br />
                Call: +91 93463 15193
              </p>
            </div>
          </div>

          {/* Location Summary (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
              Our Spot
            </h4>
            <address className="not-italic font-body text-xs text-brand-navy/70 space-y-1.5">
              <p>Plot No. 416,</p>
              <p>Road No. 78, Film Nagar,</p>
              <p>Jubilee Hills,</p>
              <p>Hyderabad – 500033</p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-center sm:text-left gap-4">
          <p className="font-body text-xs text-brand-navy/50">
            © 2025 Hanok Seoulful Food. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-body text-[10px] text-brand-navy/40">
            <span>Crafted for premium Korean dining experiences in Jubilee Hills, Hyderabad.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
