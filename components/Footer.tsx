export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-800 mt-20">
      <p className="text-sm text-gray-400">
        @copy; {new Date().getFullYear()} Om Baisane. All rights reserved.
      </p>
    </footer>
  );
}
