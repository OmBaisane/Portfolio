"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-lg border-b border-gray-800 z-50"
    >
      <h1 className="font-bold text-xl hover:text-gray-400 transition">Om</h1>

      <div className="flex gap-6 text-sm">
        {["projects", "skills", "about", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-gray-400 hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
