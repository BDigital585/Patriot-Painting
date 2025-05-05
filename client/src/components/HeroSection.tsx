import { Button } from "@/components/ui/button";
import PaintBrush from "./PaintBrush";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-20 relative overflow-hidden">
      {/* Light gray background as in the reference image */}
      <div className="absolute inset-0 bg-gray-100 z-0"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Paint brush with paint stroke */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="w-full max-w-xs">
              <PaintBrush />
            </div>
          </div>

          {/* Right side: Content */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-start">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/painter.png" 
                alt="Patriot Painting Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Headline and content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Proudly Painting<br />
                <span className="text-[#dd1c1c]">Western New York</span>
              </h1>
              
              <p className="mt-4 text-lg text-gray-700">
                Veteran-level Precision.<br />
                All-American Craftsmanship.
              </p>
              
              {/* CTA Button */}
              <div className="mt-8">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="px-8 py-6 text-xl font-bold rounded-md bg-[#dd1c1c] hover:bg-[#c41c1c] text-white border-0 w-full md:w-auto"
                >
                  Request a Free Quote
                </Button>
              </div>
              
              {/* Stars decoration */}
              <div className="flex justify-center md:justify-start mt-6 space-x-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#002868">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#dd1c1c">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#002868">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
