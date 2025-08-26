import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Felix Cordero | Portfolio",
  description: "Full Stack Developer & UX/UI Designer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
