import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
