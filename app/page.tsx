"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Instagram, Facebook, Twitter, MapPin } from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-fjord-line/50 fixed w-full top-0 bg-fjord-bg/90 backdrop-blur-md z-50">
    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
      {['Menu', 'Reservation', 'About', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-fjord-accent transition-colors">
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

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-12 min-h-screen flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h1 className="text-[12vw] leading-[0.85] font-bold text-center tracking-tighter text-fjord-dark uppercase">
          Fjordsmaken
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 items-end">
        <div className="md:col-span-4 space-y-6">
          <h2 className="text-xl md:text-3xl font-medium leading-tight">
            DISCOVER THE FLAVORS OF NORWAY AT OUR AUTHENTIC NORWEGIAN CUISINE RESTAURANT.
          </h2>
        </div>
        
        {/* Main Hero Image */}
        <div className="md:col-span-6 h-[300px] md:h-[400px] overflow-hidden rounded-lg relative group">
           <motion.img 
             initial={{ scale: 1.2 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 1.5 }}
             src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
             alt="Restaurant Interior"
             className="w-full h-full object-cover"
           />
        </div>

        <div className="md:col-span-2 flex flex-col justify-end items-end h-full">
           <a href="#menu" className="hidden md:flex group flex-col items-center gap-2 cursor-pointer">
             <span className="vertical-text text-sm font-bold tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
               See Menu
             </span>
             <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="w-px h-16 bg-fjord-dark mt-4"
             />
           </a>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ category, count, isOpen, onClick, image }) => {
  return (
    <motion.div 
      layout
      onClick={onClick}
      className={`border-t border-fjord-line cursor-pointer overflow-hidden group ${isOpen ? 'bg-white' : 'hover:bg-white/40'}`}
    >
      <div className="flex items-center justify-between py-6 md:py-8 px-4 md:px-12">
        <div className="flex items-center gap-4 md:gap-12 w-full">
           <span className="text-sm font-medium opacity-60 w-8">({count})</span>
           <h3 className={`text-2xl md:text-5xl font-medium uppercase transition-colors ${isOpen ? 'text-fjord-accent' : 'text-fjord-dark'}`}>
             {category}
           </h3>
           
           <AnimatePresence>
             {isOpen && (
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0 }}
                 className="hidden md:flex gap-4 ml-auto"
               >
                 <img src={image} className="w-32 h-20 object-cover rounded-md shadow-sm" alt={category} />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
        
        <div className="transform transition-transform duration-300 group-hover:translate-x-2">
            {isOpen ? <ArrowRight className="text-fjord-accent" /> : <ArrowUpRight className="opacity-40" />}
        </div>
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const [openIndex, setOpenIndex] = useState(2); // 'Meat' open by default

  const menuItems = [
    { name: "Appetizers", count: 8, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800" },
    { name: "Salads", count: 15, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
    { name: "Meat", count: 12, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800" },
    { name: "Seafood", count: 17, img: "https://images.unsplash.com/photo-1534939561126-855f8665b53e?auto=format&fit=crop&q=80&w=800" },
    { name: "Soups", count: 6, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="menu" className="py-20 bg-fjord-bg">
      <div className="w-full">
        {menuItems.map((item, index) => (
          <MenuItem 
            key={item.name}
            category={item.name}
            count={item.count}
            image={item.img}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          />
        ))}
        <div className="border-t border-fjord-line" />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-fjord-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
         <div>
            <span className="text-xs font-bold uppercase tracking-widest text-fjord-accent mb-4 block">Northern Atmosphere</span>
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
                Pleasant wooden finishes, natural fabrics and traditional decor elements will make you feel at home.
                We have created an atmosphere where every guest can relax and enjoy the taste.
              </p>
              <button className="mt-6 px-6 py-3 border border-fjord-dark text-fjord-dark hover:bg-fjord-dark hover:text-white transition-all text-sm uppercase tracking-wider">
                Reserve a Table
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=500" className="rounded-lg h-32 md:h-48 w-full object-cover" alt="Interior" />
               <img src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=500" className="rounded-lg h-32 md:h-48 w-full object-cover" alt="Table setting" />
            </div>
         </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#4A3B32] text-[#EAE6DF] pt-20 pb-10 px-4 md:px-12">
     <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
        <h2 className="text-[15vw] md:text-[10vw] leading-none font-bold uppercase opacity-90">Fjordsmaken</h2>
        <div className="flex flex-col gap-4 text-sm opacity-80">
           <p className="flex items-center gap-2"><MapPin size={16}/> Orenseveien 9, 113 Oslo</p>
           <p>08:00 - 23:00 (Everyday)</p>
        </div>
     </div>
     
     <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 uppercase tracking-wider gap-4">
        <p>© 2026 Fjordsmaken. All rights reserved.</p>
        <div className="flex gap-6">
           <a href="#">Privacy Policy</a>
           <a href="#">Terms</a>
           <a href="#">Partnership</a>
        </div>
        <div className="flex gap-4">
           <Instagram size={20} />
           <Facebook size={20} />
           <Twitter size={20} />
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
      <MenuSection />
      <AboutSection />
      <Footer />
    </main>
  );
}