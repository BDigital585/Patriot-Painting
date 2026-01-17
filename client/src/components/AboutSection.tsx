import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div>
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-lg opacity-20 blur-xl"></div>
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Our team collaborating" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dedicated to Delivering Excellence Since 2010</h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to transform how businesses operate in the digital landscape, we've grown from a small team of passionate experts to an industry-leading service provider trusted by hundreds of companies worldwide.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to empower organizations with innovative solutions that drive growth, enhance efficiency, and create lasting value. We combine technical expertise with strategic thinking to solve complex challenges and help our clients thrive.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <StatItem value="500+" label="Clients Worldwide" />
              <StatItem value="98%" label="Customer Satisfaction" />
              <StatItem value="50+" label="Industry Experts" />
              <StatItem value="12+" label="Years Experience" />
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium"
            >
              Get to know us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
