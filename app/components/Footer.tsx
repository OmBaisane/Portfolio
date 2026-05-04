export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Om Baisane.</p>

      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/OmBaisane"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/om-baisane-b96625346"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ombaisane29@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
