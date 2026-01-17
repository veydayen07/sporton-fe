import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderLayout from "./(landing)/components/layouts/HeaderLayouts";
import Footer from "./(landing)/components/layouts/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SportOn",
  description:
    "Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.variable} antialiased`}>
        <HeaderLayout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
