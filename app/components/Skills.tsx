"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 font-[geist]">Skills</h2>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <Reveal>
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:border-gray-400 transition"
            >
              {skill}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
