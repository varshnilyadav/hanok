"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Find Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md border-b border-brand-orange/20 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-brand-orange/30 group-hover:border-brand-orange transition-all duration-300 bg-brand-cream/10">
                <Image
                  src="/images/logo.png"
                  alt="HANOK Logo"
                  fill
                  sizes="48px"
                  className="object-cover scale-110"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-heading font-extrabold tracking-widest text-lg sm:text-xl transition-colors duration-300 ${
                    isScrolled ? "text-brand-cream" : "text-brand-cream sm:text-brand-navy"
                  }`}
                >
                  HANOK
                </span>
                <span
                  className={`text-[9px] font-heading uppercase tracking-[0.3em] font-medium -mt-1 transition-colors duration-300 ${
                    isScrolled ? "text-brand-orange" : "text-brand-orange"
                  }`}
                >
                  Seoulful Food
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading text-sm font-medium uppercase tracking-wider transition-all duration-300 relative py-1 hover:text-brand-orange group ${
                    isScrolled ? "text-brand-cream" : "text-brand-cream md:text-brand-navy"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="#reserve"
                className={`font-heading text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-none transition-all duration-300 border-2 ${
                  isScrolled
                    ? "bg-brand-orange border-brand-orange text-brand-cream hover:bg-transparent hover:text-brand-cream hover:border-brand-cream"
                    : "bg-brand-navy border-brand-navy text-brand-cream hover:bg-transparent hover:text-brand-navy"
                }`}
              >
                Book a Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors duration-300 hover:text-brand-orange ${
                  isScrolled ? "text-brand-cream" : "text-brand-cream sm:text-brand-navy"
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-navy flex flex-col justify-center items-center md:hidden"
          >
            {/* Close Overlay when background clicked */}
            <div
              className="absolute inset-0 bg-brand-navy -z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Decorative Close Button inside drawer */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-brand-cream hover:text-brand-orange p-2"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Logo in Drawer */}
            <div className="mb-12 flex flex-col items-center">
              <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-brand-orange/50 bg-brand-cream/10 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="HANOK Logo"
                  fill
                  sizes="80px"
                  className="object-cover scale-110"
                />
              </div>
              <h2 className="font-heading font-black tracking-widest text-2xl text-brand-cream">
                HANOK
              </h2>
              <p className="text-xs font-heading uppercase tracking-[0.4em] text-brand-orange">
                Seoulful Food
              </p>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col items-center space-y-6 mb-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-lg font-medium uppercase tracking-widest text-brand-cream hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Drawer CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                href="#reserve"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-sm font-semibold uppercase tracking-wider py-4 px-8 bg-brand-orange text-brand-cream hover:bg-brand-red border-2 border-brand-orange hover:border-brand-red transition-all duration-300 flex items-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4" />
                Book a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
