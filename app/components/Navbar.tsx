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
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#skills" className="hover:text-gray-400">
          Skills
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
