import type { Metadata } from "next";
import { Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Media FX I",
  description: "Strategy, design, and technology for brands that refuse to stand still.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${interTight.variable}
        ${playfair.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen font-sans bg-background text-foreground" suppressHydrationWarning>
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}