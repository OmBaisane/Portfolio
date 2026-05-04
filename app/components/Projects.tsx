"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "DevPostify",
    desc: "A full-stack social platform with authentication, CRUD posts and production deployment.",
    tech: "Next.js, MongoDB, Tailwind",
    image: "/DevPostify.PNG",
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
    <section id="projects" className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
            Projects
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                project.title === "DevPostify"
                  ? "border-white"
                  : "border-gray-800 hover:border-gray-500"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-800"
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
          ))}
        </motion.div>
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-16 mb-0" />
    </section>
  );
}
