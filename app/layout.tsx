import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-black text-white`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
