import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse MediaFXI's portfolio of creative work — branding, video production, product photography, social media campaigns, and web projects.",
  alternates: { canonical: "https://www.mediafxi.in/work" },
  openGraph: {
    url: "https://www.mediafxi.in/work",
    title: "Our Work — Media_FX_I Portfolio",
    description:
      "A curated selection of recent campaigns, brand identities, and creative productions.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
