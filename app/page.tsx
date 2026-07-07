import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesMarquee from "./components/ServicesMarquee";
import ServicesSection from "./components/ServicesSection";
import ProjectSection from "./components/ProjectSection";
import ContactFooter from "./components/ContactFooter";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Media_FX_I",
  description:
    "MediaFXI is a creative agency offering video editing, VFX, branding, product photography, social media design, and web development. Based in India, working globally.",
  alternates: { canonical: "https://www.mediafxi.in" },
  openGraph: {
    url: "https://www.mediafxi.in",
    title: "MediaFXI",
    description:
      "Strategy, design, and production for brands that refuse to stand still.",
  },
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesMarquee />
      <ServicesSection />
      <ProjectSection />
      <ContactFooter />
      <Footer />
    </main>
  );
}
