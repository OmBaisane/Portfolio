"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8 tracking-tight">
            Let’s Work Together
          </h2>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-8"
        >
          I'm currently open to internship and frontend opportunities. Feel free
          to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a href="mailto:ombaisane29@gmail.com">
            <button className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
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

      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-16" />
    </section>
  );
}
