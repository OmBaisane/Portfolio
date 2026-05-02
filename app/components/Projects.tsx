"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "DevPostify",
    desc: "A full-stack social platform with authentication, CRUD posts and production deployment.",
    tech: "Next.js, MongoDB, Tailwind",
    image: "/DevPostify.png",
    live: "https://dev-postify.vercel.app/",
    github: "https://github.com/OmBaisane/DevPostify",
  },
  {
    title: "TaskZen",
    desc: "A modern task manager with filtering, persistence and clean UI/UX.",
    tech: "React, TypeScript, Tailwind",
    image: "/TaskZen.png",
    live: "https://task-zen-omega.vercel.app/",
    github: "https://github.com/OmBaisane/TaskZen",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Reveal>
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  project.title === "DevPostify"
                    ? "border-white"
                    : "border-gray-800 hover:border-gray-500"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 border border-gray-800"
                />

                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-300 mt-2">{project.desc}</p>

                <p className="text-sm mt-3 text-gray-500">{project.tech}</p>

                <div className="flex gap-4 mt-5">
                  <a href={project.live} target="_blank">
                    <button className="px-4 py-2 bg-white text-black rounded-lg transition-all duration-300 hover:scale-105">
                      Live
                    </button>
                  </a>

                  <a href={project.github} target="_blank">
                    <button className="px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition">
                      Code
                    </button>
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
