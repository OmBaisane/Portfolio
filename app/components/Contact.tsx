"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-300 mb-6">
        Feel free to reach out for opportunities or collaborations.
      </p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        href="mailto:ombaisane29@gmail.com"
        className="inline-block px-6 py-3 bg-white text-black rounded-xl shadow-lg"
      >
        Say Hello
      </motion.a>
    </section>
  );
}
