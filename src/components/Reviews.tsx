"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      name: "Rohan K.",
      rating: 5,
      text: "The Korean Chicken Wings are absolutely brilliant! Crispy, sticky, and with just the right hit of spice. Finally, authentic Korean food in Hyderabad!",
      source: "Google Reviews",
      date: "2 weeks ago",
    },
    {
      name: "Ananya V.",
      rating: 5,
      text: "Loved the cozy wooden ambiance. The cane chandeliers and traditional sloped roof design make it feel like a premium café in Seoul. The Veg Bibimbap is a must-try.",
      source: "Zomato",
      date: "1 week ago",
    },
    {
      name: "Siddharth M.",
      rating: 5,
      text: "Packed even on a Tuesday evening! The kimchi fried rice was fantastic, and the homemade kimchi is the best I've tasted. Outstanding flavors and cozy luxury.",
      source: "Zomato",
      date: "3 days ago",
    },
    {
      name: "Meera S.",
      rating: 4,
      text: "Fabulous service and authentic flavors. Priya has done an amazing job transitioning the culinary high standards from Cravery Cafe to Hanok. The Dalgona coffee was pure velvet.",
      source: "Google Reviews",
      date: "1 month ago",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-cream bg-lattice relative overflow-hidden">
      
      {/* Decorative Traditional Korean Accent lines */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-px bg-brand-orange/20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-px bg-brand-orange/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
            Social Proof
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
            Already A Hit
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="font-body text-brand-navy/80 text-base max-w-xl mx-auto italic font-medium">
            "The place is packed even during weekdays and buzzing on weekends."
          </p>
        </div>

        {/* Rating Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Justdial Badge */}
          <div className="flex flex-col items-center justify-center p-6 border border-brand-navy/10 bg-brand-cream/80 backdrop-blur-sm shadow-sm rounded-sm">
            <span className="font-heading text-[10px] uppercase tracking-widest text-brand-navy/50 font-bold mb-2">
              Justdial Rating
            </span>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-heading font-black text-lg text-brand-navy">4.3 / 5</span>
            </div>
            <p className="font-body text-xs text-brand-navy/60">871 Customer Ratings</p>
          </div>

          {/* Magicpin Badge */}
          <div className="flex flex-col items-center justify-center p-6 border border-brand-navy/10 bg-brand-cream/80 backdrop-blur-sm shadow-sm rounded-sm">
            <span className="font-heading text-[10px] uppercase tracking-widest text-brand-navy/50 font-bold mb-2">
              MagicPin Rating
            </span>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-brand-orange">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 text-brand-navy/25" />
              </div>
              <span className="font-heading font-black text-lg text-brand-navy">4.1 / 5</span>
            </div>
            <p className="font-body text-xs text-brand-navy/60">Top Rated Korean Eatery</p>
          </div>

          {/* Zomato Badge */}
          <div className="flex flex-col items-center justify-center p-6 border border-brand-navy/10 bg-brand-cream/80 backdrop-blur-sm shadow-sm rounded-sm sm:col-span-2 lg:col-span-1">
            <span className="font-heading text-[10px] uppercase tracking-widest text-brand-navy/50 font-bold mb-2">
              Zomato Delivery
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-heading font-black text-lg text-brand-navy">⭐ 4.2 / 5</span>
              <span className="text-xs text-brand-red font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-red/10">
                Popular
              </span>
            </div>
            <p className="font-body text-xs text-brand-navy/60">Film Nagar Top Pick</p>
          </div>

        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={review.name}
              className="bg-brand-cream border border-brand-navy/10 p-8 relative shadow-sm hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 rounded-sm flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-orange/5 pointer-events-none" />
              
              <div>
                {/* Rating stars */}
                <div className="flex text-brand-orange mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-navy/20" />
                  ))}
                </div>

                <p className="font-body text-brand-navy/85 text-base leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-brand-navy/5 pt-4">
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-brand-navy">
                    {review.name}
                  </h4>
                  <span className="font-body text-[11px] text-brand-navy/50">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-brand-orange font-heading font-bold uppercase tracking-wider">
                  <span>{review.source}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
