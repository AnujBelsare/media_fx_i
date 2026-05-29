import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesMarquee from "./components/ServicesMarquee";
import ServicesSection from "./components/ServicesSection";
import ProjectSection from "./components/ProjectSection";
import ContactFooter from "./components/ContactFooter";
import Footer from "./components/Footer";

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
