"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-0.5 bg-white z-9999 origin-left"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}
