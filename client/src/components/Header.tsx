import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useScroll } from "@/hooks/use-scroll";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(50);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-xl font-bold">CompanyName</span>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Contact
            </button>
          </nav>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="px-4 py-2 rounded-lg"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-500 hover:text-primary"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden px-6 pb-6 pt-2 border-t border-gray-100 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-gray-600 hover:text-primary font-medium transition"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-gray-600 hover:text-primary font-medium transition"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-gray-600 hover:text-primary font-medium transition"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-gray-600 hover:text-primary font-medium transition"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="default"
            className="w-full justify-center"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
