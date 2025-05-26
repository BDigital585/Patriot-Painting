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
    <div className="group relative bg-gradient-to-br from-white via-white to-gray-50/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-gray-200/70 shimmer overflow-hidden hover:scale-105 cursor-pointer">
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${iconBgColor} ${iconColor} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#0a3161] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Call-to-action arrow */}
        <div className="flex items-center text-[#dd1c1c] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          <span className="text-sm mr-2">Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: <PaintBucket className="w-7 h-7" />,
    title: "Interior Painting",
    description: "High-quality interior painting services for walls, ceilings, trim, and more. We ensure clean lines and premium finishes for your home.",
    iconBgColor: "bg-gradient-to-br from-red-500/20 to-red-600/30",
    iconColor: "text-red-600"
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: "Exterior Painting",
    description: "Enhance your home's curb appeal with our exterior painting services. Weather-resistant finishes that protect and beautify your property.",
    iconBgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30",
    iconColor: "text-blue-600"
  },
  {
    icon: <Droplet className="w-7 h-7" />,
    title: "Staining",
    description: "Professional staining services for decks, fences, cabinets, and other wood surfaces. We bring out the natural beauty of your wood elements.",
    iconBgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/30",
    iconColor: "text-amber-600"
  },
  {
    icon: <Waves className="w-7 h-7" />,
    title: "Power Washing",
    description: "Restore your surfaces to like-new condition with our thorough power washing services for siding, driveways, patios, and more.",
    iconBgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/30",
    iconColor: "text-cyan-600"
  },
  {
    icon: <Trash2 className="w-7 h-7" />,
    title: "Gutter Cleaning",
    description: "Keep your home protected with our comprehensive gutter cleaning services. We remove debris and ensure proper water drainage.",
    iconBgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/30",
    iconColor: "text-green-600"
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
