"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileHover={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-400 leading-relaxed"
      >
        I’m a frontend developer focused on building modern, scalable web
        applications using Next.js and TypeScript.
        <br />
        <br />I enjoy turning ideas into real-world products with clean UI and
        solid functionality. Currently, I’m expanding into full-stack
        development to build complete, production-ready applications.
      </motion.p>
    </section>
  );
}
