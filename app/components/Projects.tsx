"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "DevPostify",
    desc: "A full-stack social platform with authentication, CRUD posts and production deployment.",
    tech: "Next.js, MongoDB, Tailwind",
    live: "#",
    github: "#",
  },
  {
    title: "TaskZen",
    desc: "A modern task manager with filtering, presistence and clean UI/UX.",
    tech: "React, TypeScript, Tailwind",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`border border-gray-800 p-6 rounded-2xl ${project.title === "DevPostify" ? "border-white scale-105" : "border-gray-800"} hover:border-gray-500 transition`}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-gray-400 mt-2">{project.desc}</p>

            <p className="text-sm mt-3 text-gray-500">{project.tech}</p>

            <div className="flex gap-4 mt-4">
              <a href={project.live} target="_blank">
                <button className="px-4 py-2 bg-white text-black rounded-lg">
                  Live
                </button>
              </a>

              <a href={project.github} target="_blank">
                <button className="px-4 py-2 border border-t-gray-600 rounded-lg">
                  Code
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
