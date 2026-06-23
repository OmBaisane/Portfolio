import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Geist, Inter } from "next/font/google";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Om Baisane | Full-Stack JavaScript Developer",
  description:
    "Portfolio of Om Baisane. Building modern web applications using React, Next.js, TypeScript, Node.js and MongoDB.",

  keywords: [
    "Om Baisane",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Portfolio",
  ],

  authors: [{ name: "Om Baisane" }],

  openGraph: {
    title: "Om Baisane | Full-Stack JavaScript Developer",
    description:
      "Building modern, scalable and user-friendly web applications.",
    url: "https://portfolio-nine-phi-ry8fa70ws1.vercel.app",
    siteName: "Om Baisane Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Om Baisane | Full-Stack JavaScript Developer",
    description:
      "Building modern, scalable and user-friendly web applications.",
  },
};

const geist = Geist({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ScrollProgress />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
