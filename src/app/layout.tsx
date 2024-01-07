import type { Metadata } from "next";

import "./globals.css";
import clsx from "clsx";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Urbanist } from "next/font/google";
import { ContextProvider } from "@/lib/context/ContextProvider";
import { Toaster } from "react-hot-toast";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-[#F3F4F6] widthContainer`}>
        <ContextProvider>
          <Navbar />
          <div className="p-2 min-h-screen flex-grow">{children}</div>
          <Footer />

          <Toaster position="top-left" />
        </ContextProvider>
      </body>
    </html>
  );
}