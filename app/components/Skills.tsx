"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-gray-800 hover:border-gray-500 transition"
            >
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 border border-gray-700 rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
