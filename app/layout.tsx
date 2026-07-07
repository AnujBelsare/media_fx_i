import type { Metadata } from "next";
import { Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.mediafxi.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Media_FX_I",
    template: "%s | Media_FX_I",
  },
  description:
    "MediaFXI is a creative agency offering video editing, VFX, branding, product photography, social media design, and web development for brands that want to stand out.",

  keywords: [
    "creative agency India",
    "video editing agency",
    "branding agency",
    "product photography",
    "social media design",
    "web design agency",
    "digital marketing India",
    "VFX agency",
    "MediaFXI",
    "media fx i",
  ],

  authors: [{ name: "MediaFXI", url: SITE_URL }],
  creator: "MediaFXI",
  publisher: "MediaFXI",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "MediaFXI",
    title: "MediaFXI — Creative Agency | Video, Branding & Digital",
    description:
      "Strategy, design, and production for brands that refuse to stand still. Video editing, branding, photography, and web — all under one roof.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MediaFXI — Creative Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MediaFXI — Creative Agency",
    description:
      "Strategy, design, and production for brands that refuse to stand still.",
    images: ["/og-image.jpg"],
    creator: "@media_fx_i",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  alternates: {
    canonical: SITE_URL,
  },
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
