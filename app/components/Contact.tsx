"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 tracking-tight"
          >
            Let’s Work Together
          </motion.h2>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-8"
        >
          I'm currently open to internship and frontend developer opportunities.
          If you have a project, idea or role — feel free to reach out.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a href="mailto:ombaisane29@gmail.com">
            <button className="px-6 py-3 bg-white text-black rounded-xl transition-all duration-300 hover:scale-105">
              Email Me
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/om-baisane-b96625346"
            target="_blank"
          >
            <button className="px-6 py-3 border border-gray-600 rounded-xl hover:border-gray-400 transition">
              LinkedIn
            </button>
          </a>
        </motion.div>
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-16 mb-0" />
    </section>
  );
}
