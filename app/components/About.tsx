"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8 tracking-tight">About Me</h2>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed"
        >
          I'm a frontend developer who enjoys building clean, modern and
          user-friendly web applications using React, TypeScript and Next.js.
          <br />
          <br />
          I’ve worked on real-world projects with authentication, CRUD
          operations and responsive UI, focusing on performance and user
          experience.
          <br />
          <br />
          Currently, I'm expanding into full-stack development and working
          towards becoming a MERN stack developer.
        </motion.p>
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-16" />
    </section>
  );
}
