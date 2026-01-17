import { ArrowRight, PaintBucket, Home, Droplet, Waves, Trash2 } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, iconBgColor, iconColor, link }: ServiceCardProps) => {
  return (
    <Link href={link}>
      <div className={`group relative ${iconBgColor} p-4 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/20 hover:border-white/40 overflow-hidden hover:scale-105 cursor-pointer backdrop-blur-sm`}>
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        {/* Decorative geometric pattern */}
        <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full -translate-y-8 md:-translate-y-12 translate-x-8 md:translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-full translate-y-6 md:translate-y-8 -translate-x-6 md:-translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-white/90 shadow-lg mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <div className={`${iconColor}`}>
              {icon}
            </div>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white drop-shadow-lg">{title}</h3>
          
          <p className="text-white/90 mb-3 md:mb-4 leading-relaxed text-sm md:text-base drop-shadow-sm">
            {description}
          </p>
          
          {/* Call-to-action button */}
          <div className="inline-flex items-center bg-white/20 hover:bg-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white font-medium opacity-80 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-sm border border-white/20">
            <span className="text-xs md:text-sm mr-2">Learn More</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const services = [
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Interior Painting",
    description: "High-quality interior painting services for walls, ceilings, trim, and more. We ensure clean lines and premium finishes for your home.",
    iconBgColor: "bg-gradient-to-br from-[#dd1c1c] via-red-600 to-red-800",
    iconColor: "text-red-800",
    link: "/services/interior-painting"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Exterior Painting",
    description: "Enhance your home's curb appeal with our exterior painting services. Weather-resistant finishes that protect and beautify your property.",
    iconBgColor: "bg-gradient-to-br from-[#0a3161] via-blue-700 to-blue-900",
    iconColor: "text-blue-900",
    link: "/services/exterior-painting"
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Staining",
    description: "Professional staining services for decks, fences, cabinets, and other wood surfaces. We bring out the natural beauty of your wood elements.",
    iconBgColor: "bg-gradient-to-br from-[#dd1c1c] via-red-500 to-red-700",
    iconColor: "text-red-800",
    link: "/services/staining"
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Power Washing",
    description: "Restore your surfaces to like-new condition with our thorough power washing services for siding, driveways, patios, and more.",
    iconBgColor: "bg-gradient-to-br from-[#0a3161] via-blue-600 to-blue-800",
    iconColor: "text-blue-900",
    link: "/services/power-washing"
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Gutter Cleaning",
    description: "Keep your home protected with our comprehensive gutter cleaning services. We remove debris and ensure proper water drainage.",
    iconBgColor: "bg-gradient-to-br from-[#dd1c1c] via-red-500 to-red-700",
    iconColor: "text-red-800",
    link: "/services/gutter-cleaning"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Professional Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            We provide a full range of premium painting and maintenance services for homes and businesses across Western New York.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
              iconColor={service.iconColor}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
