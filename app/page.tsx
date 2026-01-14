"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroSection from "@/public/4.jpeg";
import events1 from "@/public/18.jpeg";
// Note: Ensure you have this image in your public folder or change the import
import events4 from "@/public/events4.jpeg"; 

import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Instagram,
  MapPin,
  Quote,
  Star,
  Users,
  Leaf,
  Armchair,
  BadgePercent,
  Flame,
  X,
  Phone,
  MessageCircle,
  Clock,
  Car,
  Accessibility,
  ChefHat,
  Bike,
  ShoppingBag
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-[#D1CDC5]/30 fixed w-full top-0 bg-[#EAE6DF]/90 backdrop-blur-md z-50">
    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-[#2A231D]">
      {["Menu", "Reservation", "About", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-[#8C3E32] transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="md:hidden text-lg font-bold text-[#8C3E32]">MENU</div>
    <div className="flex gap-6 items-center text-sm font-medium text-[#2A231D]">
      <span className="opacity-60">En / Hi</span>
      <span>+91 95683 40064</span>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 z-0">
      <img
        src={heroSection.src}
        alt="Mukhiya's Dhaba Ambience"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-[#EAE6DF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 border border-[#EAE6DF]/30 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full mb-8"
      >
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-90">
          #1 Authentic Dhaba in Dehradun
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-tight mb-6"
      >
        An Iconic Dhaba Experience,
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAE6DF] to-[#D1CDC5]/70">
          Elevated for Modern Dining
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
      >
        Step into a world where rustic charm meets culinary excellence. Enjoy
        authentic flavors in a warm, cinematic atmosphere right in the heart of
        the city.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <button
          onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full md:w-auto px-8 py-4 bg-[#8C3E32] hover:bg-[#7a362b] text-[#EAE6DF] text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
        >
          Reserve a Table
        </button>
        <button 
          onClick={() => document.getElementById('order-online')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full md:w-auto px-8 py-4 border border-[#EAE6DF] hover:bg-[#EAE6DF] hover:text-[#2A231D] text-[#EAE6DF] text-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
        >
          Order Online
        </button>
      </motion.div>
    </div>
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 100 }}
      transition={{ duration: 1.5, delay: 0.8 }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-[#EAE6DF] to-transparent opacity-50 hidden md:block"
    />
  </section>
);

const BrandStory = () => (
  <section className="relative py-24 px-4 md:px-12 bg-[#EAE6DF] overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D1CDC5] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#8C3E32] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 pointer-events-none translate-y-1/3 -translate-x-1/3" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl mx-auto">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1000&auto=format&fit=crop"
            alt="Making Naan in Tandoor"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -bottom-10 -right-4 md:-right-10 w-48 md:w-64 h-48 md:h-64 rounded-lg overflow-hidden border-4 border-[#EAE6DF] shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop"
            alt="Authentic Curry"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute top-8 left-8 bg-[#8C3E32] text-[#EAE6DF] p-4 rounded-sm shadow-lg hidden md:block">
          <p className="text-center leading-none">
            <span className="block text-2xl font-bold">Est.</span>
            <span className="block text-sm uppercase tracking-wide">1998</span>
          </p>
        </div>
      </div>
      <div className="lg:pl-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#8C3E32] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A231D] mb-6 leading-tight">
            More Than Just a Dhaba, <br />
            <span className="italic font-light">It's a Tradition.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-[#2A231D]/80 text-lg leading-relaxed font-light"
        >
          <p>
            What started as a humble clay-oven stop on the winding{" "}
            <strong>Mussoorie Road</strong> has evolved into a landmark of
            culinary heritage. For over two decades, Mukhiya’s Dhaba has been a
            comforting pause for weary travelers and a celebration destination
            for families.
          </p>
          <p>
            We believe in the philosophy of <em>"Atithi Devo Bhava"</em>. Our
            recipes haven't changed—we still hand-grind our spices and slow-cook
            our dals over charcoal—but we've elevated the experience to match
            the modern diner's desire for comfort and hygiene.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 border-l-4 border-[#8C3E32] pl-6 py-2"
        >
          <p className="text-xl font-medium italic text-[#2A231D]">
            "We don't just serve food; we serve memories on a plate."
          </p>
          <p className="mt-4 font-bold text-sm uppercase tracking-widest text-[#8C3E32]">
            — The Mukhiya Family
          </p>
        </motion.div>
        <div className="mt-10">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-[#2A231D] font-bold uppercase tracking-widest text-sm hover:text-[#8C3E32] transition-colors"
          >
            Read Full Story{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const TrustIndicators = () => {
  const highlights = [
    {
      icon: Star,
      value: "4.2 ★",
      label: "Google Rating",
      sub: "Loved by 2.5k+ Reviewers",
    },
    {
      icon: Users,
      value: "50k+",
      label: "Happy Diners",
      sub: "Served Annually",
    },
    {
      icon: Leaf,
      value: "100% Veg",
      label: "Pure Vegetarian",
      sub: "No Meat, No Egg, Pure Taste",
    },
    {
      icon: Armchair,
      value: "Open Air",
      label: "Ambiance",
      sub: "Garden Seating with View",
    },
    {
      icon: BadgePercent,
      value: "Offers",
      label: "Best Value",
      sub: "Bank & Partner Discounts",
    },
  ];

  return (
    <section className="py-12 border-y border-[#D1CDC5]/30 bg-white/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 justify-center items-start">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#EAE6DF] flex items-center justify-center mb-4 group-hover:bg-[#8C3E32] transition-colors duration-300">
                {item.icon && (
                  <item.icon
                    className="w-6 h-6 md:w-8 md:h-8 text-[#2A231D] group-hover:text-[#EAE6DF] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#2A231D] mb-1">
                {item.value}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8C3E32] mb-1">
                {item.label}
              </p>
              <p className="text-xs text-[#2A231D]/60 max-w-[120px]">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DigitalMenu = () => {
  const [openCategory, setOpenCategory] = useState("Main Course (Indian)");

  // Data extracted from your uploaded menu images
  const menuData = [
    {
      category: "Morning Breakfast (7 AM - 12 PM)",
      count: 14,
      items: [
        { name: "Aloo Stuffed Parantha", price: "₹90", desc: "Served with butter and pickle.", spice: 1, type: "veg" },
        { name: "Aloo Stuffed Parantha w/ Curd", price: "₹140", desc: "Served with fresh curd.", spice: 1, type: "veg" },
        { name: "Paneer Stuffed Parantha", price: "₹180", desc: "Stuffed with grated cottage cheese.", spice: 1, type: "veg" },
        { name: "Gobi Stuffed Parantha", price: "₹120", desc: "Seasonal cauliflower stuffing.", spice: 1, type: "veg" },
        { name: "Onion Stuffed Parantha", price: "₹110", desc: "Spiced onion stuffing.", spice: 2, type: "veg" },
        { name: "Mixed Stuffed Parantha", price: "₹170", desc: "Potato, onion, and gobi mix.", spice: 2, type: "veg" },
        { name: "Chole Bhature", price: "₹199", desc: "Spicy chickpeas with fried bread.", spice: 2, type: "veg", tag: "Bestseller" },
        { name: "Chole Poori (4 Pc)", price: "₹199", desc: "Served with spicy chole.", spice: 2, type: "veg" },
        { name: "Aloo Poori (4 Pc)", price: "₹199", desc: "Traditional potato curry with pooris.", spice: 2, type: "veg" },
        { name: "Veg Sandwich", price: "₹140", desc: "Fresh vegetables in bread.", spice: 0, type: "veg" },
        { name: "Veg Grill Sandwich", price: "₹159", desc: "Grilled with veggies and sauces.", spice: 1, type: "veg" },
        { name: "Paneer Grill Sandwich", price: "₹190", desc: "Loaded with grilled paneer.", spice: 1, type: "veg" },
        { name: "Veg Club Sandwich", price: "₹190", desc: "Double layer sandwich.", spice: 1, type: "veg" },
        { name: "Paneer Pakora", price: "₹199", desc: "Fried cottage cheese fritters.", spice: 1, type: "veg" },
      ]
    },
    {
      category: "South Indian",
      count: 22,
      items: [
        { name: "Idli Sambhar", price: "₹150", desc: "Steamed rice cakes with lentil soup.", spice: 0, type: "veg", tag: "Healthy" },
        { name: "Vada Sambhar", price: "₹150", desc: "Fried lentil donuts.", spice: 1, type: "veg" },
        { name: "Dahi Vada", price: "₹140", desc: "Lentil dumplings in sweet yogurt.", spice: 0, type: "veg" },
        { name: "Plain Dosa", price: "₹160", desc: "Crispy rice crepe.", spice: 0, type: "veg" },
        { name: "Masala Dosa", price: "₹179", desc: "Filled with spiced potato masala.", spice: 1, type: "veg", tag: "Popular" },
        { name: "Butter Masala Dosa", price: "₹199", desc: "Cooked with generous butter.", spice: 1, type: "veg" },
        { name: "Mysore Masala Dosa", price: "₹199", desc: "Spicy red chutney spread.", spice: 3, type: "veg" },
        { name: "Paneer Masala Dosa", price: "₹230", desc: "Stuffed with paneer bhurji.", spice: 1, type: "veg" },
        { name: "Cheese Plain Dosa", price: "₹169", desc: "Topped with melted cheese.", spice: 0, type: "veg" },
        { name: "Onion Uttapam", price: "₹199", desc: "Thick pancake with onions.", spice: 1, type: "veg" },
        { name: "Tomato Uttapam", price: "₹199", desc: "Thick pancake with tomatoes.", spice: 1, type: "veg" },
        { name: "Mix Veg Uttapam", price: "₹249", desc: "Loaded with mixed vegetables.", spice: 1, type: "veg" },
        { name: "Rava Masala Dosa", price: "₹239", desc: "Semolina crepe with masala.", spice: 1, type: "veg" },
        { name: "Mukhiya Special Dosa", price: "₹270", desc: "Chef's special filling.", spice: 2, type: "veg", tag: "Signature" },
      ]
    },
    {
      category: "Starters (Tandoor & Chinese)",
      count: 18,
      items: [
        { name: "Paneer Tikka (6pc)", price: "₹360", desc: "Charcoal grilled cottage cheese.", spice: 2, type: "veg", tag: "Classic" },
        { name: "Haryali Paneer Tikka", price: "₹360", desc: "Marinated in mint and coriander.", spice: 1, type: "veg" },
        { name: "Paneer Malai Tikka", price: "₹400", desc: "Creamy cheese marinade.", spice: 0, type: "veg" },
        { name: "Tandoori Aloo", price: "₹260", desc: "Spiced grilled potatoes.", spice: 2, type: "veg" },
        { name: "Tandoori Soya Chaap", price: "₹300", desc: "Spicy grilled soya chunks.", spice: 2, type: "veg" },
        { name: "Tandoori Malai Chaap", price: "₹320", desc: "Creamy grilled soya chunks.", spice: 0, type: "veg" },
        { name: "Veg Seekh Kabab", price: "₹310", desc: "Minced vegetable skewers.", spice: 2, type: "veg" },
        { name: "Tandoori Mushroom", price: "₹350", desc: "Marinated grilled mushrooms.", spice: 1, type: "veg" },
        { name: "Chilli Paneer", price: "₹290", desc: "Cottage cheese in spicy soy sauce.", spice: 3, type: "veg" },
        { name: "Paneer 65", price: "₹280", desc: "Spicy fried paneer chunks.", spice: 3, type: "veg" },
        { name: "Honey Chilli Potato", price: "₹250", desc: "Crispy potatoes in honey sauce.", spice: 1, type: "veg", tag: "Kids Fav" },
        { name: "Veg Manchurian", price: "₹240", desc: "Veg balls in chinese gravy.", spice: 2, type: "veg" },
        { name: "Veg Spring Roll", price: "₹259", desc: "Crispy rolls with veg filling.", spice: 1, type: "veg" },
        { name: "Crispy Corn", price: "₹299", desc: "Fried sweet corn with spices.", spice: 1, type: "veg" },
      ]
    },
    {
      category: "Main Course (Indian)",
      count: 25,
      items: [
        { name: "Dal Makhani", price: "₹280", desc: "Black lentils slow cooked overnight.", spice: 1, type: "veg", tag: "Must Try" },
        { name: "Yellow Dal Tadka", price: "₹240", desc: "Lentils tempered with cumin/garlic.", spice: 2, type: "veg" },
        { name: "Kadhai Paneer", price: "₹320", desc: "Paneer with capsicum and whole spices.", spice: 3, type: "veg" },
        { name: "Paneer Butter Masala", price: "₹300", desc: "Rich tomato butter gravy.", spice: 1, type: "veg" },
        { name: "Shahi Paneer", price: "₹320", desc: "Royal white gravy with nuts.", spice: 0, type: "veg" },
        { name: "Paneer Lababdar", price: "₹320", desc: "Tangy and rich gravy.", spice: 1, type: "veg" },
        { name: "Palak Paneer", price: "₹300", desc: "Spinach gravy with paneer.", spice: 1, type: "veg" },
        { name: "Malai Kofta", price: "₹320", desc: "Cheese dumplings in white gravy.", spice: 0, type: "veg", tag: "Sweet" },
        { name: "Mix Vegetable", price: "₹260", desc: "Seasonal vegetables dry curry.", spice: 2, type: "veg" },
        { name: "Jeera Aloo", price: "₹180", desc: "Cumin spiced potatoes.", spice: 1, type: "veg" },
        { name: "Kashmiri Dum Aloo", price: "₹300", desc: "Stuffed potatoes in rich gravy.", spice: 1, type: "veg" },
        { name: "Mutter Mushroom", price: "₹320", desc: "Peas and mushroom curry.", spice: 2, type: "veg" },
        { name: "Navratna Korma", price: "₹350", desc: "Rich vegetable curry with fruits.", spice: 0, type: "veg" },
        { name: "Soya Chaap Masala", price: "₹320", desc: "Soya chunks in spicy gravy.", spice: 2, type: "veg" },
      ]
    },
    {
      category: "Main Course (Chinese)",
      count: 10,
      items: [
        { name: "Veg Noodles", price: "₹199", desc: "Stir fried noodles with veggies.", spice: 1, type: "veg" },
        { name: "Veg Hakka Noodles", price: "₹240", desc: "Classic chinese noodles.", spice: 1, type: "veg" },
        { name: "Chilli Garlic Noodles", price: "₹240", desc: "Spicy garlic flavor.", spice: 3, type: "veg", tag: "Spicy" },
        { name: "Veg Singapuri Noodles", price: "₹240", desc: "Yellow curry noodles.", spice: 2, type: "veg" },
        { name: "Veg Fried Rice", price: "₹220", desc: "Wok tossed rice with veggies.", spice: 1, type: "veg" },
        { name: "Veg Schezwan Fried Rice", price: "₹230", desc: "Spicy fried rice.", spice: 3, type: "veg" },
        { name: "Veg Pan Fried Noodles", price: "₹280", desc: "Crispy noodles with gravy.", spice: 1, type: "veg" },
      ]
    },
    {
      category: "Breads & Rice",
      count: 12,
      items: [
        { name: "Tandoori Roti", price: "₹25", desc: "Whole wheat bread.", spice: 0, type: "veg" },
        { name: "Butter Roti", price: "₹30", desc: "Topped with butter.", spice: 0, type: "veg" },
        { name: "Butter Naan", price: "₹50", desc: "Leavened bread with butter.", spice: 0, type: "veg" },
        { name: "Garlic Naan", price: "₹75", desc: "Topped with fresh garlic.", spice: 1, type: "veg" },
        { name: "Lacha Paratha", price: "₹55", desc: "Layered wheat bread.", spice: 0, type: "veg" },
        { name: "Stuffed Kulcha", price: "₹99", desc: "Potato/Paneer stuffing.", spice: 1, type: "veg" },
        { name: "Missi Roti", price: "₹45", desc: "Gram flour bread.", spice: 1, type: "veg" },
        { name: "Jeera Rice", price: "₹150", desc: "Cumin tempered rice.", spice: 0, type: "veg" },
        { name: "Veg Pulao", price: "₹199", desc: "Rice with mixed vegetables.", spice: 1, type: "veg" },
        { name: "Peas Pulao", price: "₹180", desc: "Rice with green peas.", spice: 0, type: "veg" },
        { name: "Veg Biryani w/ Raita", price: "₹299", desc: "Spicy rice layered with veggies.", spice: 2, type: "veg", tag: "Recommended" },
      ]
    },
    {
      category: "Thalis & Combos",
      count: 6,
      items: [
        { name: "Amritsari Thali", price: "₹250", desc: "Pindi Chole, Mix Raita, Pickle, Kulcha.", spice: 2, type: "veg" },
        { name: "Mukhiya's Exclusive Thali", price: "₹290", desc: "Shahi Paneer, Dal Makhani, Raita, Rice, Salad, Roti.", spice: 1, type: "veg" },
        { name: "Mukhiya's Deluxe Thali", price: "₹350", desc: "Dal Makhani, Shahi Paneer, Mix Veg, Raita, Rice, Naan, Dessert.", spice: 1, type: "veg", tag: "Full Meal" },
        { name: "Chole Rice", price: "₹260", desc: "Served with pickle and onions.", spice: 2, type: "veg" },
        { name: "Dal Makhani Rice", price: "₹250", desc: "Comfort bowl.", spice: 1, type: "veg" },
        { name: "Paneer Rice", price: "₹289", desc: "Curry served with rice.", spice: 2, type: "veg" },
      ]
    },
    {
      category: "Beverages & Desserts",
      count: 12,
      items: [
        { name: "Masala Tea", price: "₹45", desc: "Indian spiced chai.", spice: 0, type: "veg" },
        { name: "Kulhad Chai", price: "₹55", desc: "Served in clay pot.", spice: 0, type: "veg" },
        { name: "Hot Coffee", price: "₹80", desc: "Steaming hot coffee.", spice: 0, type: "veg" },
        { name: "Cold Coffee", price: "₹149", desc: "Chilled blended coffee.", spice: 0, type: "veg" },
        { name: "Lassi (Sweet/Salted)", price: "₹100", desc: "Thick yogurt drink.", spice: 0, type: "veg" },
        { name: "Fresh Lime Soda", price: "₹80", desc: "Refreshing bubbly drink.", spice: 0, type: "veg" },
        { name: "Gulab Jamun (2pc)", price: "₹99", desc: "Hot sweet dumplings.", spice: 0, type: "veg", tag: "Sweet" },
        { name: "Gulab Jamun w/ Ice Cream", price: "₹120", desc: "Hot and cold combo.", spice: 0, type: "veg" },
        { name: "Rawa Kesri Halwa", price: "₹149", desc: "Semolina pudding.", spice: 0, type: "veg" },
        { name: "Veg Tomato Soup", price: "₹140", desc: "Classic soup.", spice: 0, type: "veg" },
        { name: "Veg Hot & Sour Soup", price: "₹140", desc: "Spicy and tangy.", spice: 2, type: "veg" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-[#EAE6DF] relative z-20">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-[#2A231D]/10 pb-8">
          <div>
            <span className="text-[#8C3E32] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              Menu Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A231D] uppercase">
              Full Menu
            </h2>
          </div>
          <p className="text-[#2A231D]/60 text-sm max-w-xs text-right hidden md:block">
            Explore our wide range of authentic dishes, from morning breakfast to midnight cravings.
          </p>
        </div>

        {/* Menu Accordion Layout - Replicating Video Style */}
        <div className="flex flex-col border-t border-[#2A231D]/20">
          {menuData.map((category) => (
            <div key={category.category} className="group">
              <button
                onClick={() => setOpenCategory(openCategory === category.category ? "" : category.category)}
                className={`w-full flex items-center py-6 px-2 md:px-6 transition-all duration-300 relative overflow-hidden ${
                  openCategory === category.category 
                    ? "bg-[#8C3E32] text-[#EAE6DF]" 
                    : "bg-transparent text-[#2A231D] hover:bg-[#D1CDC5]/30"
                }`}
              >
                {/* Count */}
                <span className={`text-xs md:text-sm font-mono w-16 text-left opacity-60 ${
                  openCategory === category.category ? "text-[#EAE6DF]" : "text-[#2A231D]"
                }`}>
                  ({category.count.toString().padStart(2, '0')})
                </span>

                {/* Category Name */}
                <h3 className="flex-1 text-lg md:text-3xl font-bold uppercase tracking-wide text-left">
                  {category.category}
                </h3>

                {/* Arrow Icon */}
                <div className={`transform transition-transform duration-300 ${
                  openCategory === category.category ? "rotate-90" : "rotate-0"
                }`}>
                   {openCategory === category.category ? <ArrowDown size={24} /> : <ArrowUpRight size={24} />}
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openCategory === category.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#EAE6DF]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 p-6 md:p-10 border-b border-[#2A231D]/20">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-2 group/item">
                          <div className="flex justify-between items-baseline border-b border-dashed border-[#2A231D]/20 pb-2">
                            <h4 className="font-bold text-[#2A231D] text-lg uppercase group-hover/item:text-[#8C3E32] transition-colors">
                              {item.name}
                            </h4>
                            <span className="font-mono font-bold text-[#8C3E32] text-lg">
                              {item.price}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <p className="text-xs text-[#2A231D]/60 uppercase tracking-wider max-w-[80%]">
                              {item.desc}
                            </p>
                            
                            {/* Icons/Tags */}
                            <div className="flex gap-2">
                              {item.tag && (
                                <span className="text-[10px] bg-[#2A231D] text-[#EAE6DF] px-1.5 py-0.5 rounded uppercase font-bold tracking-widest">
                                  {item.tag}
                                </span>
                              )}
                              {[...Array(item.spice)].map((_, i) => (
                                <Flame key={i} size={12} className="text-[#8C3E32] fill-[#8C3E32]" />
                              ))}
                              {item.type === 'veg' && (
                                <div className="border border-green-600 p-[1px] w-3 h-3 flex items-center justify-center">
                                  <div className="bg-green-600 w-1.5 h-1.5 rounded-full"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Decorative Element within Accordion */}
                      <div className="hidden lg:flex items-center justify-center opacity-10 pointer-events-none">
                        <ChefHat size={120} className="text-[#8C3E32]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Divider Line */}
              <div className="h-[1px] w-full bg-[#2A231D]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OrderOnlineSection = () => {
  return (
    <section id="order-online" className="py-24 bg-[#2A231D] text-[#EAE6DF] relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#8C3E32] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Hungry?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6">
            Order Online
          </h2>
          <p className="opacity-70 max-w-2xl mx-auto text-lg font-light">
            Enjoy the authentic taste of Mukhiya's Dhaba at home. 
            Choose delivery via our partners or call us for a quick takeaway pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Home Delivery */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#EAE6DF] text-[#2A231D] p-8 md:p-12 rounded-xl flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C3E32]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ease-out" />
            
            <div className="w-20 h-20 bg-[#8C3E32] text-white rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <Bike size={36} />
            </div>
            
            <h3 className="text-2xl font-bold uppercase mb-2">Home Delivery</h3>
            <p className="opacity-70 mb-8 max-w-sm">
              Get piping hot food delivered to your doorstep via your favorite apps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://www.zomato.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-4 border-2 border-[#CB202D] text-[#CB202D] font-bold uppercase tracking-widest hover:bg-[#CB202D] hover:text-white transition-all rounded-sm flex items-center justify-center gap-2"
              >
                Zomato <ArrowUpRight size={16} />
              </a>
              <a 
                href="https://www.swiggy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-4 border-2 border-[#FC8019] text-[#FC8019] font-bold uppercase tracking-widest hover:bg-[#FC8019] hover:text-white transition-all rounded-sm flex items-center justify-center gap-2"
              >
                Swiggy <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Takeaway */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#3a312a] border border-[#EAE6DF]/10 text-[#EAE6DF] p-8 md:p-12 rounded-xl flex flex-col items-center text-center relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAE6DF]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ease-out" />

            <div className="w-20 h-20 bg-[#EAE6DF] text-[#2A231D] rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <ShoppingBag size={36} />
            </div>
            
            <h3 className="text-2xl font-bold uppercase mb-2">Takeaway Pickup</h3>
            <p className="opacity-70 mb-8 max-w-sm">
              Call us directly to place your order and pick it up hot and fresh.
            </p>
            
            <a 
              href="tel:+919568340064"
              className="w-full py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#1fb354] transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={18} /> Call to Order
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReservationSection = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section id="reservation" className="bg-[#1e1915] text-[#EAE6DF] relative overflow-hidden border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        
        {/* Left: Image Side */}
        <div className="relative h-[400px] lg:h-full w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
            alt="Dining Table"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-12">
            <Quote className="w-12 h-12 text-[#EAE6DF] mb-6 opacity-80" />
            <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-4">
              A Table for Every Story
            </h3>
            <p className="text-lg opacity-80 max-w-md font-light">
              Whether it's a family reunion or a quiet dinner for two, we have the perfect spot waiting for you.
            </p>
          </div>
        </div>

        {/* Right: Form Side */}
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8C3E32] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

          <div className="w-full max-w-md relative z-10">
            <div className="mb-10">
              <span className="text-[#8C3E32] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                Book a Table
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#EAE6DF] uppercase">
                Reservation
              </h2>
            </div>

            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#EAE6DF]/10 border border-[#EAE6DF]/20 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2A231D]">
                  <ChefHat size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Reservation Confirmed!</h3>
                <p className="opacity-70 mb-6">
                  Thank you for choosing Mukhiya's. We have sent a confirmation details to your phone.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="text-[#8C3E32] font-bold uppercase text-xs tracking-widest hover:text-white transition-colors"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-[#EAE6DF]/30 py-3 text-[#EAE6DF] placeholder:text-[#EAE6DF]/30 focus:border-[#8C3E32] outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 99999 99999"
                      className="w-full bg-transparent border-b border-[#EAE6DF]/30 py-3 text-[#EAE6DF] placeholder:text-[#EAE6DF]/30 focus:border-[#8C3E32] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        className="w-full bg-transparent border-b border-[#EAE6DF]/30 py-3 text-[#EAE6DF] focus:border-[#8C3E32] outline-none transition-colors [&::-webkit-calendar-picker-indicator]:invert"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">
                      Time
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-[#EAE6DF]/30 py-3 text-[#EAE6DF] focus:border-[#8C3E32] outline-none transition-colors appearance-none cursor-pointer">
                        <option className="bg-[#2A231D]">7:00 PM</option>
                        <option className="bg-[#2A231D]">7:30 PM</option>
                        <option className="bg-[#2A231D]">8:00 PM</option>
                        <option className="bg-[#2A231D]">8:30 PM</option>
                        <option className="bg-[#2A231D]">9:00 PM</option>
                        <option className="bg-[#2A231D]">9:30 PM</option>
                      </select>
                      <Clock className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none" />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">
                      Guests
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-[#EAE6DF]/30 py-3 text-[#EAE6DF] focus:border-[#8C3E32] outline-none transition-colors appearance-none cursor-pointer">
                        <option className="bg-[#2A231D]">2 People</option>
                        <option className="bg-[#2A231D]">3 People</option>
                        <option className="bg-[#2A231D]">4 People</option>
                        <option className="bg-[#2A231D]">5+ People</option>
                      </select>
                      <Users className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">
                    Special Request
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Anniversary, Birthday, High Chair..."
                    className="w-full bg-transparent border-b border-[#EAE6DF]/30 py-3 text-[#EAE6DF] placeholder:text-[#EAE6DF]/30 focus:border-[#8C3E32] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#8C3E32] hover:bg-[#a04639] text-white py-4 rounded-sm font-bold uppercase tracking-widest transition-all mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    "Booking..."
                  ) : (
                    <>
                      Confirm Booking <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryImages = [
    {
      id: 1,
      src: events1.src,
      category: "Night Ambience",
      title: "Evenings under the Stars",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
      category: "Signature Dishes",
      title: "Tandoori Platter",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
      category: "Family Moments",
      title: "Making Memories",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      src: events4.src,
      category: "Authentic Thalis",
      title: "The Royal Feast",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
      category: "Interiors",
      title: "Rustic & Modern",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1534939561126-855f8665b53e?q=80&w=800&auto=format&fit=crop",
      category: "Outdoor Seating",
      title: "Nature's Company",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-[#EAE6DF] relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#8C3E32] text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A231D] uppercase leading-tight">
              Moments Captured at Mukhiya's
            </h2>
          </div>
          <p className="text-[#2A231D]/70 max-w-sm text-right md:text-left">
            From sizzling tandoors to laughter-filled tables, glimpse the soul
            of our dhaba before you visit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-xl overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#EAE6DF] p-4 text-center">
                <h4 className="text-xl font-bold uppercase">{img.title}</h4>
                <p className="text-xs uppercase tracking-widest opacity-80">
                  {img.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Malhotra",
      date: "2 weeks ago",
      rating: 5,
      text: "Hands down the best Butter Chicken in Dehradun. The vibe is amazing—rustic yet so clean. Perfect for family dinners.",
      source: "Google Review",
    },
    {
      id: 2,
      name: "Priya Sharma",
      date: "1 month ago",
      rating: 5,
      text: "I was skeptical about the 'modern dhaba' concept, but Mukhiya's nailed it. The outdoor seating in the evening is magical.",
      source: "TripAdvisor",
    },
    {
      id: 3,
      name: "Amit & Neha",
      date: "3 days ago",
      rating: 4,
      text: "Great food, slightly busy on weekends but the waiting area is comfortable. The Dahi Kebabs are a must-try!",
      source: "Google Review",
    },
  ];

  return (
    <section className="py-24 bg-[#2A231D] text-[#EAE6DF] relative overflow-hidden">
      <Quote className="absolute top-0 right-0 w-96 h-96 text-[#EAE6DF] opacity-[0.03] -translate-y-1/2 translate-x-1/4 rotate-12 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#EAE6DF]/20 rounded-full px-4 py-1 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Trusted by 50,000+ Foodies
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold uppercase leading-tight"
          >
            Loved by Locals,
            <br />
            <span className="text-[#8C3E32]">Recommended by Critics</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#EAE6DF] text-[#2A231D] rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-[#8C3E32] mb-6 opacity-80" />
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
                "I've traveled all over North India, but the Dal Makhani at
                Mukhiya's hits different. It's not just food; it's a warm hug
                on a plate. Highly recommended for anyone visiting Mussoorie."
              </p>
              <div className="flex items-center gap-4 border-t border-[#2A231D]/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8C3E32]">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    alt="Blogger"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Sanya Eats</h4>
                  <p className="text-xs opacity-60 uppercase tracking-widest">
                    Food Blogger • 120k Followers
                  </p>
                </div>
                <Instagram className="ml-auto w-6 h-6 text-[#8C3E32]" />
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#8C3E32] opacity-10 rounded-full blur-3xl" />
          </motion.div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-[#EAE6DF]/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < review.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <img
                    src={
                      review.source === "Google Review"
                        ? "https://cdn-icons-png.flaticon.com/512/300/300221.png"
                        : "https://cdn-icons-png.flaticon.com/512/2504/2504845.png"
                    }
                    alt={review.source}
                    className="w-5 h-5 opacity-70 grayscale"
                  />
                </div>
                <p className="text-[#EAE6DF]/80 text-sm leading-relaxed mb-6 line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8C3E32] to-[#2A231D] flex items-center justify-center font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wide">
                      {review.name}
                    </h5>
                    <p className="text-[10px] opacity-50">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#8C3E32] rounded-xl p-6 flex flex-col justify-center items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#EAE6DF] rounded-full flex items-center justify-center text-[#8C3E32] mb-3 group-hover:scale-110 transition-transform">
                <ArrowRight size={24} />
              </div>
              <h4 className="font-bold uppercase text-lg mb-1">
                Share your story
              </h4>
              <p className="text-xs opacity-80 mb-0">
                Rate us on Google & get 5% off next time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-24 px-4 md:px-12 bg-[#D1CDC5]/20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#8C3E32] mb-4 block">
          The Ambience
        </span>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-[#2A231D] uppercase">
          Rustic Charm with a Modern Soul
        </h2>
        <div className="relative mt-12 group overflow-hidden rounded-lg">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000"
            alt="Salad Dish"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="bg-[#E4E0D9] p-8 rounded-lg mb-8">
          <p className="text-lg leading-relaxed text-[#2A231D]/80">
            Pleasant wooden finishes, natural fabrics and traditional decor
            elements will make you feel at home. We have created an atmosphere
            where every guest can relax and enjoy the taste.
          </p>
          <button className="mt-6 px-6 py-3 border border-[#2A231D] text-[#2A231D] hover:bg-[#2A231D] hover:text-[#EAE6DF] transition-all text-sm uppercase tracking-wider">
            Reserve a Table
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=500"
            className="rounded-lg h-32 md:h-48 w-full object-cover"
            alt="Interior"
          />
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=500"
            className="rounded-lg h-32 md:h-48 w-full object-cover"
            alt="Table setting"
          />
        </div>
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer id="contact" className="bg-[#2A231D] text-[#EAE6DF] relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 md:p-16 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-[10vw] lg:text-[5vw] leading-[0.8] font-bold uppercase opacity-90 mb-10 text-[#8C3E32]">
            Visit Us
          </h2>
          <div className="space-y-8 max-w-md">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#EAE6DF]/10 flex items-center justify-center shrink-0">
                <MapPin className="text-[#8C3E32]" />
              </div>
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">
                  Mukhiya's Dhaba
                </h4>
                <p className="opacity-70 leading-relaxed">
                  12th Milestone, Mussoorie Road,
                  <br />
                  Malsi, Dehradun, Uttarakhand 248003
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8C3E32] font-bold text-xs uppercase mt-2 hover:underline"
                >
                  Get Directions <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#EAE6DF]/10 flex items-center justify-center shrink-0">
                <Clock className="text-[#8C3E32]" />
              </div>
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">
                  Opening Hours
                </h4>
                <p className="opacity-70">Mon - Sun: 11:00 AM - 11:00 PM</p>
                <p className="opacity-50 text-xs mt-1">
                  Kitchen closes at 10:30 PM
                </p>
              </div>
            </div>
            {/* Updated Contact Buttons with +91 95683 40064 */}
            <div className="flex gap-4 items-start pt-4">
              <a
                href="tel:+919568340064"
                className="flex-1 bg-[#EAE6DF] text-[#2A231D] py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold uppercase text-xs hover:bg-[#fff] transition-colors"
              >
                <Phone size={16} /> Call Us
              </a>
              <a
                href="https://wa.me/919568340064"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold uppercase text-xs hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#EAE6DF]/10 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest opacity-60">
          <span className="flex items-center gap-2">
            <Car size={16} />
            Valet Parking
          </span>
          <span className="flex items-center gap-2">
            <Accessibility size={16} />
            Wheelchair Accessible
          </span>
          <span className="flex items-center gap-2">
            <Leaf size={16} />
            Pet Friendly
          </span>
        </div>
      </div>
      <div className="h-[400px] lg:h-auto w-full bg-[#2A231D] relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.47545367175!2d77.94709424784742!3d30.325564550170067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1709665743789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        ></iframe>
        <div className="absolute bottom-4 right-4 lg:hidden">
          <button className="bg-[#8C3E32] text-white p-3 rounded-full shadow-lg">
            <MapPin size={24} />
          </button>
        </div>
      </div>
    </div>
    <div className="bg-[#1e1915] py-6 px-4 md:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-widest opacity-40">
      <p>© 2026 Mukhiya's Dhaba. All Rights Reserved.</p>
      <div className="flex gap-6 mt-2 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">
          Privacy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Terms
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Sitemap
        </a>
      </div>
    </div>
  </footer>
);

// --- Main Page Composition ---

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAE6DF] text-[#2A231D] overflow-hidden">
      <Navbar />
      <Hero />
      <BrandStory />
      <TrustIndicators />
      <DigitalMenu />
      <OrderOnlineSection />
      <ReservationSection />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}