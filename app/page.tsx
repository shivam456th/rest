"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
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
  ZoomIn,
  Phone,
  MessageCircle,
  Clock,
  Car,
  Accessibility,
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-fjord-line/50 fixed w-full top-0 bg-fjord-bg/90 backdrop-blur-md z-50">
    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
      {["Menu", "Reservation", "About", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-fjord-accent transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="md:hidden text-lg font-bold">MENU</div>
    <div className="flex gap-6 items-center text-sm font-medium">
      <span className="opacity-60">En / No</span>
      <span>+1 825 423-126</span>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
        alt="Mukhiya's Dhaba Ambience"
        className="w-full h-full object-cover scale-105"
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
        <button className="w-full md:w-auto px-8 py-4 bg-[#8C3E32] hover:bg-[#7a362b] text-[#EAE6DF] text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-lg">
          Reserve a Table
        </button>
        <button className="w-full md:w-auto px-8 py-4 border border-[#EAE6DF] hover:bg-[#EAE6DF] hover:text-[#2A231D] text-[#EAE6DF] text-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm">
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
      value: "Vegan",
      label: "Dietary Options",
      sub: "100% Pure Veg Section Available",
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
  // FIX: Added <string | null> to allow null values
  const [openCategory, setOpenCategory] = useState<string | null>(
    "Tandoor Specials",
  );

  const menuData = [
    {
      category: "Starters",
      count: 12,
      items: [
        {
          name: "Dahi Ke Kebab",
          price: "₹345",
          desc: "Hung curd patties spiced with cardamom and pan-fried.",
          spice: 1,
          tag: "Bestseller",
          img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
        },
        {
          name: "Amritsari Fish Fry",
          price: "₹525",
          desc: "Batter-fried fresh river sole with carom seeds.",
          spice: 2,
          tag: "Chef's Rec",
          img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Tandoor Specials",
      count: 8,
      items: [
        {
          name: "Murgh Malai Tikka",
          price: "₹495",
          desc: "Chicken marinated in cream cheese, cashew paste and grilled.",
          spice: 1,
          tag: "Kids Favorite",
          img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
        },
        {
          name: "Seekh Kebab Gilafi",
          price: "₹545",
          desc: "Minced mutton skewers coated with colored bell peppers.",
          spice: 3,
          tag: "Spicy",
          img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
        },
        {
          name: "Paneer Tikka Shashlik",
          price: "₹395",
          desc: "Cottage cheese cubes grilled with onion and capsicum.",
          spice: 2,
          tag: "Veg Delight",
          img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Main Course",
      count: 24,
      items: [
        {
          name: "Mukhiya's Dal Makhani",
          price: "₹375",
          desc: "Black lentils slow-cooked overnight on charcoal.",
          spice: 1,
          tag: "Signature",
          img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
        },
        {
          name: "Butter Chicken 1998",
          price: "₹575",
          desc: "Classic shredded chicken in rich tomato gravy.",
          spice: 2,
          tag: "Legendary",
          img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Thalis",
      count: 5,
      items: [
        {
          name: "Royal Punjabi Thali",
          price: "₹650",
          desc: "A platter of 3 curries, naan, rice, raita and sweet.",
          spice: 2,
          tag: "Value Meal",
          img: "https://images.unsplash.com/photo-1626776420079-95e247494630?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    { category: "Vegan Options", count: 15, items: [] },
    { category: "Desserts", count: 7, items: [] },
  ];

  return (
    <section id="menu" className="py-20 bg-[#EAE6DF]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-[#8C3E32] text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
            Our Culinary Heritage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A231D] uppercase">
            Explore the Menu
          </h2>
        </div>
        <div className="flex flex-col">
          {menuData.map((category) => (
            <div key={category.category} className="border-b border-[#D1CDC5]">
              <button
                onClick={() =>
                  setOpenCategory(
                    openCategory === category.category
                      ? null
                      : category.category,
                  )
                }
                className={`w-full flex items-center justify-between py-8 px-4 transition-all duration-300 hover:bg-white/40 ${
                  openCategory === category.category ? "bg-white/60" : ""
                }`}
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-sm font-bold text-[#2A231D]/40 w-8 text-left">
                    ({category.count})
                  </span>
                  <h3
                    className={`text-2xl md:text-4xl font-medium uppercase transition-colors ${
                      openCategory === category.category
                        ? "text-[#8C3E32]"
                        : "text-[#2A231D]"
                    }`}
                  >
                    {category.category}
                  </h3>
                </div>
                <div className="transform transition-transform duration-300">
                  {openCategory === category.category ? (
                    <ArrowRight className="text-[#8C3E32] w-6 h-6" />
                  ) : (
                    <ArrowUpRight className="text-[#2A231D]/40 w-6 h-6" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openCategory === category.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 bg-white/30">
                      {category.items.length > 0 ? (
                        category.items.map((dish, idx) => (
                          <div
                            key={idx}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#D1CDC5]/20"
                          >
                            <div className="h-48 overflow-hidden relative">
                              <img
                                src={dish.img}
                                alt={dish.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                              />
                              {dish.tag && (
                                <span className="absolute top-3 left-3 bg-[#8C3E32] text-[#EAE6DF] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-md">
                                  {dish.tag}
                                </span>
                              )}
                            </div>
                            <div className="p-5">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-[#2A231D] group-hover:text-[#8C3E32] transition-colors">
                                  {dish.name}
                                </h4>
                                <span className="font-serif font-bold text-[#2A231D]">
                                  {dish.price}
                                </span>
                              </div>
                              <p className="text-sm text-[#2A231D]/70 mb-4 line-clamp-2">
                                {dish.desc}
                              </p>
                              <div className="flex justify-between items-center border-t border-[#D1CDC5]/30 pt-4">
                                <div
                                  className="flex gap-1"
                                  title={`Spice Level: ${dish.spice}/3`}
                                >
                                  {[...Array(3)].map((_, i) => (
                                    <Flame
                                      key={i}
                                      size={14}
                                      className={
                                        i < dish.spice
                                          ? "fill-[#8C3E32] text-[#8C3E32]"
                                          : "text-[#D1CDC5]"
                                      }
                                    />
                                  ))}
                                </div>
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2A231D] hover:text-[#8C3E32] transition-colors">
                                  Add{" "}
                                  <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
                                    +
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="col-span-3 text-center py-10 opacity-50 italic">
                          Full menu coming soon...
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-24 px-4 md:px-12 bg-fjord-bg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-fjord-accent mb-4 block">
          Northern Atmosphere
        </span>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-fjord-dark uppercase">
          Embody the coziness and warmth of Norwegian Flavor
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
          <p className="text-lg leading-relaxed text-fjord-dark/80">
            Pleasant wooden finishes, natural fabrics and traditional decor
            elements will make you feel at home. We have created an atmosphere
            where every guest can relax and enjoy the taste.
          </p>
          <button className="mt-6 px-6 py-3 border border-fjord-dark text-fjord-dark hover:bg-fjord-dark hover:text-white transition-all text-sm uppercase tracking-wider">
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

const GallerySection = () => {
  // FIX: Added <any> type here too, otherwise selecting an image object will fail in TS
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
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
      src: "https://images.unsplash.com/photo-1626776420079-95e247494630?q=80&w=1200&auto=format&fit=crop",
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
              className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-lg ${img.span}`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#EAE6DF] p-4 text-center">
                <ZoomIn className="mb-2" />
                <h4 className="text-xl font-bold uppercase">{img.title}</h4>
                <p className="text-xs uppercase tracking-widest opacity-80">
                  {img.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="opacity-70">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            <div className="flex gap-4 items-start pt-4">
              <a
                href="tel:+919876543210"
                className="flex-1 bg-[#EAE6DF] text-[#2A231D] py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold uppercase text-xs hover:bg-[#fff] transition-colors"
              >
                <Phone size={16} /> Call Us
              </a>
              <a
                href="https://wa.me/919876543210"
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
    <main className="min-h-screen bg-fjord-bg text-fjord-dark overflow-hidden">
      <Navbar />
      <Hero />
      <BrandStory />
      <TrustIndicators />
      <DigitalMenu />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}