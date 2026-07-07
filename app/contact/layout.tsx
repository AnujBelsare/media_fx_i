import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with MediaFXI. Get in touch for video editing, branding, photography, social media design, or web development.",
  alternates: { canonical: "https://www.mediafxi.in/contact" },
  openGraph: {
    url: "https://www.mediafxi.in/contact",
    title: "Contact Media_FX_I",
    description:
      "Ready to start a project? Reach out to MediaFXI — we respond within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
