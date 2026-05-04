"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          About Me
        </motion.h2>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed"
        >
          I'm a frontend developer who enjoys building clean, modern and
          user-friendly web applications using React, TypeScript and Next.js.
          <br />
          <br />
          I’ve worked on real-world projects with features like authentication,
          CRUD operations and responsive UI, focusing on both performance and
          user experience.
          <br />
          <br />
          Currently, I'm expanding into full-stack development and working
          towards becoming a complete MERN stack developer.
        </motion.p>
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent my-12" />
    </section>
  );
}
