"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-black to-zinc-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm"
      >
        ● Open to Internship Opportunities
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        Om Baisane
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-gray-300 text-lg md:text-xl"
      >
        Frontend Developer building modern web experiences with React, Next.js
        and TypeScript.
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-gray-500 max-w-xl"
      >
        Focused on creating responsive, high-performance web applications and
        growing into full-stack MERN development through real-world projects and
        client work.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <a href="#projects">
          <button className="px-6 py-3 bg-white text-black rounded-xl transition-all duration-300 hover:scale-105">
            View Projects
          </button>
        </a>

        <a href="/resume.pdf" target="_blank">
          <button className="px-6 py-3 border border-gray-600 rounded-xl text-white hover:border-gray-400 transition">
            Download Resume
          </button>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 mt-6 text-sm text-gray-400"
      >
        <a
          href="https://github.com/OmBaisane"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/om-baisane-b96625346"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-3 gap-8 mt-12 text-center"
      >
        <div>
          <h3 className="text-2xl font-bold">3+</h3>
          <p className="text-gray-500 text-sm">Projects Built</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">1</h3>
          <p className="text-gray-500 text-sm">Client Project</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">10+</h3>
          <p className="text-gray-500 text-sm">Technologies</p>
        </div>
      </motion.div>
    </section>
  );
}
