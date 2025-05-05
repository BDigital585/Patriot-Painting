import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Elevate Your Business With Our <span className="text-primary">Professional Services</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              We help businesses grow and succeed with our industry-leading solutions tailored to your specific needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="px-6 py-3 text-lg font-medium rounded-lg"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => scrollToSection("services")}
                variant="outline" 
                size="lg"
                className="px-6 py-3 text-lg font-medium rounded-lg"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Trusted by 500+ companies worldwide
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg opacity-30 blur-xl"></div>
            <div className="relative w-full h-auto rounded-lg shadow-md overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Professional team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
