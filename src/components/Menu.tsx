"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info, HelpCircle } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  isVeg: boolean;
  image: string;
}

interface MenuData {
  [key: string]: MenuItem[];
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters & Street Food");

  const categories = [
    "Starters & Street Food",
    "Korean Classics",
    "Rice & Bowl",
    "Noodles",
    "Beverages",
  ];

  const menuData: MenuData = {
    "Starters & Street Food": [
      {
        name: "Korean Chicken Wings",
        price: "₹450",
        description: "Crispy fried chicken wings coated in a sweet, savory, and sticky garlic soy glaze with crushed sesame.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Prawn Tempura",
        price: "₹480",
        description: "Light, lacy-crisp battered prawns fried golden, served with a seasoned dipping tentsuyu sauce.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Crispy Squid",
        price: "₹450",
        description: "Tender calamari rings dusted with spiced starch, wok-tossed with fresh scallions and red chilies.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Korean Hot Dog",
        price: "₹380",
        description: "Sausage and mozzarella stick coated in sweet yeast dough and panko, fried crisp and dusted with sugar and ketchup.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1627059313793-aa9a5b6b15ec?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Silken Tofu with Stir-fried Kimchi",
        price: "₹360",
        description: "Chilled organic silken tofu blocks loaded with warm, caramelized kimchi, scallions, and toasted sesame oil.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Hanok Spring Rolls",
        price: "₹320",
        description: "Crisp wheat wrappers loaded with glass noodles, shredded wood-ear mushrooms, carrots, and sweet chili sauce.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Sweet Potato Balls",
        price: "₹290",
        description: "Crispy outer crust filled with soft, warm, sweet mashed sweet potato and a melting mozzarella center.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
      },
    ],
    "Korean Classics": [
      {
        name: "Veg Kimbap",
        price: "₹380",
        description: "Roasted seaweed rolls packed with seasoned white rice, pickled radish (danmuji), carrots, cucumber, and blanched spinach.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Non-Veg Beef & Egg Kimbap",
        price: "₹450",
        description: "Seaweed rice rolls stuffed with savory marinated bulgogi beef strips, rolled omelet, pickled radish, and spinach.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Mushroom Mandu Dumplings",
        price: "₹380",
        description: "Pan-fried dumplings packed with chopped shiitake, wood-ear, tofu, and glass noodles. Served with spicy soy-vinegar dip.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Savory Pajeon Pancake",
        price: "₹390",
        description: "Traditional Korean crispy flat pancake loaded with lots of green onions, leeks, and a savory dipping sauce.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
      },
    ],
    "Rice & Bowl": [
      {
        name: "Veg Bibimbap",
        price: "₹480",
        description: "Steaming rice bowl topped with neatly arranged shiitake mushrooms, zucchini, carrots, spinach, bean sprouts, and Gochujang chili paste.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Kimchi Fried Rice",
        price: "₹420",
        description: "Wok-fried rice with mature sour kimchi, dark soy sauce, sesame oil, and toasted nori, topped with a fried sunny-side-up egg.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1618411640018-80985552b753?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Cheesy Tteok-bokki",
        price: "₹450",
        description: "Cylindrical soft rice cakes and fish cakes simmered in sweet and spicy gochujang sauce, baked with a layer of thick mozzarella.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=600&q=80",
      },
    ],
    Noodles: [
      {
        name: "Hanok Ramyun Bowl",
        price: "₹440",
        description: "Spicy instantly-cooked Korean instant noodles in a rich vegetable broth with soft egg halves, bok choy, mushrooms, and spring onions.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Jajangmyeon",
        price: "₹460",
        description: "Thick hand-pulled wheat noodles topped with a dense, savory, dark roasted black bean paste sauce containing diced tofu and vegetables.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Japchae",
        price: "₹420",
        description: "Stir-fried sweet potato glass noodles with crunchy bell peppers, spinach, carrots, and onions in a light sesame-garlic soy dressing.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Dan Dan Noodles",
        price: "₹430",
        description: "Spicy Sichuan-style sesame peanut sauce noodles customized with local Korean elements, crushed peanuts, and spring onions.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
      },
    ],
    Beverages: [
      {
        name: "Korean Flavoured Plum Tea",
        price: "₹180",
        description: "Chilled extract of sweet Korean green plums (Maesil) mixed with carbonated water and fresh mint leaves.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Classic Brown Sugar Bubble Tea",
        price: "₹260",
        description: "Creamy iced milk tea infused with rich caramelized brown sugar syrup streaks and chewy tapioca boba pearls.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Dalgona Iced Coffee",
        price: "₹220",
        description: "Whipped velvet coffee froth layered over chilled fresh milk and syrup, inspired by the Seoul street candy craze.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Watermelon Lychee Slushie",
        price: "₹190",
        description: "Ice-blended pure fresh watermelon juice mixed with sweet lychee chunks and a squeeze of key lime.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-brand-cream border-t border-brand-orange/15 relative overflow-hidden">
      {/* Decorative layout accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-orange/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
            Seoulful Plates
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
            Explore Our Menu
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6" />
          
          {/* Average Cost Highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/5 border border-brand-orange/20 text-brand-navy rounded-sm text-sm">
            <Info className="w-4 h-4 text-brand-orange" />
            <span className="font-heading font-medium">Average Cost:</span>
            <span>₹800 per person / ₹1,600 for two</span>
          </div>
        </div>

        {/* Tab Selector Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 border-b border-brand-navy/10 pb-4 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-heading text-xs uppercase tracking-wider font-bold transition-all duration-300 relative ${
                  isActive
                    ? "text-brand-orange"
                    : "text-brand-navy/60 hover:text-brand-navy"
                }`}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col bg-brand-cream border border-brand-navy/10 p-4 relative hover:border-brand-orange/40 hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 border border-brand-navy/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Veg Tag overlay */}
                  <div className="absolute top-3 right-3 bg-brand-cream/95 backdrop-blur-sm p-1.5 shadow-md flex items-center justify-center border border-brand-navy/5">
                    <span 
                      className={`w-3.5 h-3.5 border-2 flex items-center justify-center ${
                        item.isVeg ? "border-green-600" : "border-red-600"
                      }`}
                    >
                      <span 
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.isVeg ? "bg-green-600" : "bg-red-600"
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-brand-navy group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-heading font-black text-brand-orange text-base whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                <p className="font-body text-brand-navy/70 text-xs sm:text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                {/* Traditional motif accent in corner */}
                <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 w-8 h-8 border-b border-r border-brand-navy" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
