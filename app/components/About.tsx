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
          I'm a Full-Stack JavaScript Developer focused on building modern,
          scalable and user-friendly web applications with React, Next.js,
          TypeScript and MongoDB.
          <br />
          <br />
          I've developed real-world projects ranging from task management
          applications to full-stack social platforms and client-facing
          e-commerce solutions, with a strong focus on clean architecture,
          performance and user experience.
          <br />
          <br />
          Currently, I'm advancing my expertise in full-stack development while
          building production-ready applications and preparing for professional
          software engineering opportunities.
        </motion.p>
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-16" />
    </section>
  );
}
