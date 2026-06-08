"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-cream border-t border-brand-orange/15 relative overflow-hidden">
      {/* Subtle lattice accents */}
      <div className="absolute right-0 bottom-0 w-64 h-64 border-b-2 border-r-2 border-brand-orange/15 mr-8 mb-8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
            Visit Us
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
            Location & Contact
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Details (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="border-l-2 border-brand-orange pl-6 py-2">
              <h3 className="font-heading font-black text-xl text-brand-navy tracking-wider mb-2">
                A Taste of Seoul in Hyderabad
              </h3>
              <p className="font-body text-sm text-brand-navy/70 leading-relaxed">
                Located in the lush hills of Film Nagar, Jubilee Hills. Drop in for authentic sizzlers, homemade kimchi, and our cozy luxury ambiance.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-navy text-brand-cream border border-brand-orange/20 rounded-none shadow-sm flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/50 mb-1">
                  Address
                </span>
                <p className="font-body text-sm text-brand-navy/90 leading-relaxed">
                  Plot No. 416, Road No. 78,<br />
                  Film Nagar, Jubilee Hills,<br />
                  Hyderabad, Telangana – 500033
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-navy text-brand-cream border border-brand-orange/20 rounded-none shadow-sm flex-shrink-0">
                <Phone className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/50 mb-1">
                  Phone & Delivery Info
                </span>
                <a 
                  href="tel:+919346315193" 
                  className="font-heading font-bold text-sm text-brand-navy hover:text-brand-orange transition-colors block mb-1"
                >
                  +91 93463 15193
                </a>
                <p className="font-body text-xs text-brand-navy/60">
                  Call for table inquiries or order tracking.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-navy text-brand-cream border border-brand-orange/20 rounded-none shadow-sm flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/50 mb-1">
                  Operating Hours
                </span>
                <p className="font-body text-sm text-brand-navy/90">
                  <strong className="font-medium">Every Day:</strong> 12:00 PM – 11:00 PM
                </p>
                <p className="font-body text-xs text-brand-red font-semibold mt-1">
                  Kitchen closes at 10:30 PM
                </p>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-navy text-brand-cream border border-brand-orange/20 rounded-none shadow-sm flex-shrink-0">
                <Instagram className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/50 mb-1">
                  Instagram
                </span>
                <a 
                  href="https://www.instagram.com/hanok.seoulfulfood/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-heading font-bold text-sm text-brand-navy hover:text-brand-orange transition-colors"
                >
                  <span>@hanok.seoulfulfood</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
                <p className="font-body text-xs text-brand-navy/60 mt-1">
                  Tag us in your stories to get featured!
                </p>
              </div>
            </div>

          </div>

          {/* Map Section (Col 7) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Map Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-video overflow-hidden border-2 border-brand-navy p-2 bg-brand-cream shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9056461427503!2d78.40058827599026!3d17.416309801979455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97d21ca581eb%3A0xb3ff7656910a30b!2sHanok%20Seoulful%20Food!5e0!3m2!1sen!2sin!4v1717904000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Hanok Seoulful Food"
                className="grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
