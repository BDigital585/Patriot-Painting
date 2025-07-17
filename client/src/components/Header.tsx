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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shimmer ${
        scrolled 
        ? "bg-gradient-to-r from-white/95 via-white/98 to-white/95 shadow-md backdrop-blur-sm" 
        : "bg-gradient-to-r from-blue-50/90 via-white/95 to-red-50/90"
      } before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] before:from-white/30 before:via-transparent before:to-transparent`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex justify-between items-center py-2 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/Patriot Painting.png" 
              alt="Patriot Painting" 
              className="h-[70px] md:h-[90px] w-auto"
            />
          </Link>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-[#0a3161] hover:text-[#dd1c1c] text-sm font-semibold tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#dd1c1c] after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]"
              >
                SERVICES
              </button>
              <Link 
                href="/blog"
                className="text-[#0a3161] hover:text-[#dd1c1c] text-sm font-semibold tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#dd1c1c] after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]"
              >
                BLOG
              </Link>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-[#0a3161] hover:text-[#dd1c1c] text-sm font-semibold tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#dd1c1c] after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]"
              >
                CONTACT
              </button>
            </nav>
            
            {/* CTA Button - Desktop */}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="px-5 py-1.5 text-sm font-semibold rounded-md bg-gradient-to-r from-[#dd1c1c] to-[#b71c1c] hover:from-[#b71c1c] hover:to-[#dd1c1c] text-white shadow-md transition-all duration-300 shimmer"
            >
              Free Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-[#0a3161] hover:text-[#dd1c1c] transition-colors p-1 rounded-md bg-white/70 shadow-sm"
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
      <div className={`md:hidden px-6 pb-4 pt-2 border-t border-gray-100 ${mobileMenuOpen ? "block" : "hidden"} bg-gradient-to-b from-white to-blue-50/30 shadow-md backdrop-blur-sm`}>
        <nav className="flex flex-col space-y-3">
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-[#0a3161] hover:text-[#dd1c1c] text-sm font-semibold tracking-wide transition-colors py-2 border-b border-gray-100/50 drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] text-left"
          >
            SERVICES
          </button>
          <Link 
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0a3161] hover:text-[#dd1c1c] text-sm font-semibold tracking-wide transition-colors py-2 border-b border-gray-100/50 drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] text-left block"
          >
            BLOG
          </Link>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-[#0a3161] hover:text-[#dd1c1c] text-sm font-semibold tracking-wide transition-colors py-2 border-b border-gray-100/50 drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] text-left"
          >
            CONTACT
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="w-full justify-center mt-2 bg-gradient-to-r from-[#dd1c1c] to-[#b71c1c] hover:from-[#b71c1c] hover:to-[#dd1c1c] text-white text-sm font-semibold py-2 shadow-md transition-all duration-300 shimmer"
          >
            Free Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
