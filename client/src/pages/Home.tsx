import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const Home = () => {
  // Add page title
  useEffect(() => {
    document.title = "Patriot Painting | Professional Painting Services in Western New York";
    
    // Optional: Add meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Patriot Painting provides professional interior and exterior painting, staining, power washing, and gutter cleaning services throughout Western New York.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Patriot Painting provides professional interior and exterior painting, staining, power washing, and gutter cleaning services throughout Western New York.';
      document.head.appendChild(newMetaDesc);
    }

    // Handle anchor links on initial load
    const handleInitialAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleInitialAnchor();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-0 mt-0">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
