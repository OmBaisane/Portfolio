"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto bg-linear-to-b from-black to-zinc-900">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold"
      >
        Om Baisane
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-300"
      >
        Frontend Developer | Next.js Enthusiast
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-gray-500 text-sm"
      >
        I build modern, scalable and user-friendly web applications.
      </motion.p>

      <a href="#projects">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          View Projects
        </motion.button>
      </a>

      <div className="flex gap-4 mt-6">
        <a href="https://github.com/OmBaisane" target="_blank">
          <button className="px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            GitHub
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/om-baisane-b96625346"
          target="_blank"
        >
          <button className="px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
}
