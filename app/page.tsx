import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesMarquee from "./components/ServicesMarquee";
import ServicesSection from "./components/ServicesSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesMarquee />
      <ServicesSection />
    </main>
  );
}
