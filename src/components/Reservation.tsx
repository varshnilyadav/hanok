"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, CalendarDays, Users, Phone, User, MessageSquare, Check, X, ArrowRight } from "lucide-react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    requests: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    }
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      guests: "2",
      date: "",
      time: "",
      requests: "",
    });
    setShowSuccessModal(false);
  };

  return (
    <section id="reserve" className="py-24 bg-brand-navy text-brand-cream relative overflow-hidden border-t border-brand-orange/15">
      {/* Subtle traditional design accents */}
      <div className="absolute inset-0 bg-lattice opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
            Dine With Us
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-cream tracking-tight mb-4">
            Order & Reservations
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Order Online */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-brand-cream/5 border border-brand-cream/10 rounded-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-brand-orange/20 m-4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-brand-orange/20 m-4 pointer-events-none" />

            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-orange block mb-4">
                Instant Delivery
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-brand-cream tracking-wider mb-4">
                Craving Hanok at Home?
              </h3>
              <p className="font-body text-sm text-brand-cream/70 leading-relaxed mb-8">
                Enjoy hot, crispy Korean Fried Chicken Wings, loaded Rice Bowls, or bubble teas delivered directly to your doorstep. We are partnered with Zomato for super-fast delivery in Film Nagar, Jubilee Hills, and surrounding areas.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="https://www.zomato.com/hyderabad/hanok-seoulful-food-film-nagar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-heading text-xs font-bold uppercase tracking-widest bg-brand-red hover:bg-brand-red/90 text-brand-cream py-4 px-8 border border-brand-red transition-all duration-300 w-full justify-center group"
              >
                <span>Order on Zomato</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </a>
              <span className="block text-center font-body text-[11px] text-brand-cream/40 mt-3">
                Usually delivers in 30-40 minutes
              </span>
            </div>
          </div>

          {/* Right Side: Reserve Form */}
          <div className="lg:col-span-7 bg-brand-cream text-brand-navy p-8 sm:p-10 border border-brand-navy/10 rounded-sm shadow-xl relative">
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-brand-orange pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-brand-orange pointer-events-none" />

            <h3 className="font-heading font-black text-2xl text-brand-navy tracking-wider mb-6">
              Reserve A Table
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="name" className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/60 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-brand-navy/40" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-brand-navy/5 border ${
                        errors.name ? "border-brand-red" : "border-brand-navy/20"
                      } rounded-none py-2.5 pl-10 pr-4 font-body text-sm text-brand-navy placeholder-brand-navy/45 focus:outline-none focus:border-brand-orange transition-colors`}
                    />
                  </div>
                  {errors.name && (
                    <span className="font-heading text-[10px] text-brand-red mt-1 block">{errors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <label htmlFor="phone" className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/60 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-brand-navy/40" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className={`w-full bg-brand-navy/5 border ${
                        errors.phone ? "border-brand-red" : "border-brand-navy/20"
                      } rounded-none py-2.5 pl-10 pr-4 font-body text-sm text-brand-navy placeholder-brand-navy/45 focus:outline-none focus:border-brand-orange transition-colors`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="font-heading text-[10px] text-brand-red mt-1 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Guests, Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/60 mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-4 h-4 text-brand-navy/40 pointer-events-none" />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-brand-navy/5 border border-brand-navy/20 rounded-none py-2.5 pl-10 pr-4 font-body text-sm text-brand-navy focus:outline-none focus:border-brand-orange appearance-none cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6+ People</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/60 mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 w-4 h-4 text-brand-navy/40 pointer-events-none" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-brand-navy/5 border ${
                        errors.date ? "border-brand-red" : "border-brand-navy/20"
                      } rounded-none py-2.5 pl-10 pr-4 font-body text-sm text-brand-navy focus:outline-none focus:border-brand-orange cursor-pointer`}
                    />
                  </div>
                  {errors.date && (
                    <span className="font-heading text-[10px] text-brand-red mt-1 block">{errors.date}</span>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/60 mb-2">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Utensils className="absolute left-3 top-3 w-4 h-4 text-brand-navy/40 pointer-events-none" />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-brand-navy/5 border ${
                        errors.time ? "border-brand-red" : "border-brand-navy/20"
                      } rounded-none py-2.5 pl-10 pr-4 font-body text-sm text-brand-navy focus:outline-none focus:border-brand-orange appearance-none cursor-pointer`}
                    >
                      <option value="">Select Time</option>
                      <option value="12:00 PM">12:00 PM (Lunch)</option>
                      <option value="1:00 PM">1:00 PM (Lunch)</option>
                      <option value="2:00 PM">2:00 PM (Lunch)</option>
                      <option value="7:00 PM">7:00 PM (Dinner)</option>
                      <option value="8:00 PM">8:00 PM (Dinner)</option>
                      <option value="9:00 PM">9:00 PM (Dinner)</option>
                      <option value="10:00 PM">10:00 PM (Dinner)</option>
                    </select>
                  </div>
                  {errors.time && (
                    <span className="font-heading text-[10px] text-brand-red mt-1 block">{errors.time}</span>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="requests" className="block font-heading text-[10px] uppercase tracking-wider font-extrabold text-brand-navy/60 mb-2">
                  Special Requests / Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-brand-navy/40" />
                  <textarea
                    id="requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="E.g., Birthday celebration, vegetarian preferences, high chair request..."
                    className="w-full bg-brand-navy/5 border border-brand-navy/20 rounded-none py-3 pl-10 pr-4 font-body text-sm text-brand-navy placeholder-brand-navy/45 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy hover:bg-brand-orange disabled:bg-brand-navy/50 text-brand-cream font-heading text-xs font-bold uppercase tracking-widest py-4 transition-all duration-300 border-2 border-brand-navy hover:border-brand-orange"
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-navy/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-cream border-2 border-brand-orange text-brand-navy max-w-md w-full p-8 relative shadow-2xl text-center"
            >
              {/* Close Button */}
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 text-brand-navy/50 hover:text-brand-navy p-1 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success Badge */}
              <div className="w-16 h-16 bg-brand-orange/15 rounded-full border-2 border-brand-orange flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-brand-orange" />
              </div>

              <h4 className="font-heading font-black text-2xl text-brand-navy tracking-wider mb-2">
                Booking Requested!
              </h4>
              <p className="font-heading text-xs text-brand-orange font-bold uppercase tracking-widest mb-6">
                Hanok - Seoulful Food
              </p>

              {/* Summary details */}
              <div className="bg-brand-navy/5 border border-brand-navy/10 p-4 mb-6 text-left space-y-2 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-brand-navy/60 font-heading text-[10px] uppercase font-bold tracking-wider">Guest Name:</span>
                  <span className="font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-navy/60 font-heading text-[10px] uppercase font-bold tracking-wider">Table Size:</span>
                  <span className="font-semibold">{formData.guests} {parseInt(formData.guests) === 1 ? "Guest" : "Guests"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-navy/60 font-heading text-[10px] uppercase font-bold tracking-wider">Date & Time:</span>
                  <span className="font-semibold">{formData.date} at {formData.time}</span>
                </div>
              </div>

              <p className="font-body text-xs text-brand-navy/70 leading-relaxed mb-6">
                We've registered your request. Our booking host will call you back at <strong className="text-brand-navy">{formData.phone}</strong> within 15 minutes to confirm availability and lock in your table!
              </p>

              <button
                onClick={resetForm}
                className="w-full bg-brand-navy hover:bg-brand-orange text-brand-cream font-heading text-xs font-bold uppercase tracking-wider py-3 border border-brand-navy hover:border-brand-orange transition-colors"
              >
                Got It, Thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
