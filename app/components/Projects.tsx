"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Project = {
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
  features: string[];
  featured?: boolean;
  client?: boolean;
};

const projects: Project[] = [
  {
    title: "Shiv Fashion Store",
    featured: true,
    client: true,
    desc: "Designed and developed a full-stack e-commerce platform for a real client featuring authentication, product management, order management, Cloudinary uploads and an admin dashboard.",
    features: [
      "Authentication",
      "Admin Dashboard",
      "Cloudinary",
      "Order Management",
    ],
    image: "/ShivFashion.png",
    live: "https://shiv-fashion-store.vercel.app/",
    github: "https://github.com/OmBaisane/shiv-fashion-store",
  },

  {
    title: "DevPostify",
    featured: true,
    desc: "A full-stack social platform with authentication, CRUD posts, MongoDB integration and production deployment.",
    features: ["Authentication", "CRUD Posts", "MongoDB", "Responsive UI"],
    image: "/DevPostify.PNG",
    live: "https://dev-postify.vercel.app/",
    github: "https://github.com/OmBaisane/DevPostify",
  },

  {
    title: "TaskZen",
    desc: "A modern task manager with filtering, persistence and clean UI/UX.",
    features: ["CRUD", "TypeScript", "Filtering", "Local Storage"],
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
            Featured Projects
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                project.featured
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

              <div className="flex gap-2 mt-2 flex-wrap">
                {project.featured && (
                  <span className="px-2 py-1 text-xs rounded-full bg-white text-black">
                    Featured
                  </span>
                )}

                {project.client && (
                  <span className="px-2 py-1 text-xs rounded-full border border-green-500 text-green-400">
                    Client Project
                  </span>
                )}
              </div>

              <p className="text-gray-300 mt-3">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

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
