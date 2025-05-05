import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { useEffect } from "react";

const Home = () => {
  // Add page title
  useEffect(() => {
    document.title = "Professional Services | Modern Landing Page";
    
    // Optional: Add meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Professional services for businesses - web development, data analytics, content strategy, and cybersecurity.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Professional services for businesses - web development, data analytics, content strategy, and cybersecurity.';
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
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Home;
