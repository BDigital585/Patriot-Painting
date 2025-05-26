import { ArrowRight, PaintBucket, Home, Droplet, Waves, Trash2 } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const ServiceCard = ({ icon, title, description, iconBgColor, iconColor }: ServiceCardProps) => {
  return (
    <div className={`group relative ${iconBgColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/20 hover:border-white/40 overflow-hidden hover:scale-105 cursor-pointer backdrop-blur-sm`}>
      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      
      {/* Decorative geometric pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/90 shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <div className={`${iconColor}`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{title}</h3>
        
        <p className="text-white/90 mb-6 leading-relaxed text-base drop-shadow-sm">
          {description}
        </p>
        
        {/* Call-to-action button */}
        <div className="inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white font-medium opacity-80 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-sm border border-white/20">
          <span className="text-sm mr-2">Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Interior Painting",
    description: "High-quality interior painting services for walls, ceilings, trim, and more. We ensure clean lines and premium finishes for your home.",
    iconBgColor: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
    iconColor: "text-red-700"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Exterior Painting",
    description: "Enhance your home's curb appeal with our exterior painting services. Weather-resistant finishes that protect and beautify your property.",
    iconBgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800",
    iconColor: "text-blue-800"
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Staining",
    description: "Professional staining services for decks, fences, cabinets, and other wood surfaces. We bring out the natural beauty of your wood elements.",
    iconBgColor: "bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600",
    iconColor: "text-orange-700"
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Power Washing",
    description: "Restore your surfaces to like-new condition with our thorough power washing services for siding, driveways, patios, and more.",
    iconBgColor: "bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600",
    iconColor: "text-cyan-800"
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Gutter Cleaning",
    description: "Keep your home protected with our comprehensive gutter cleaning services. We remove debris and ensure proper water drainage.",
    iconBgColor: "bg-gradient-to-br from-green-500 via-emerald-500 to-emerald-600",
    iconColor: "text-emerald-800"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
