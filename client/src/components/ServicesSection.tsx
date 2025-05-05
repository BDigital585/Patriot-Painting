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
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${iconBgColor} ${iconColor} mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
    </div>
  );
};

const services = [
  {
    icon: <PaintBucket className="w-6 h-6" />,
    title: "Interior Painting",
    description: "High-quality interior painting services for walls, ceilings, trim, and more. We ensure clean lines and flawless finishes for your home.",
    iconBgColor: "bg-[#dd1c1c]/10",
    iconColor: "text-[#dd1c1c]"
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Exterior Painting",
    description: "Enhance your home's curb appeal with our exterior painting services. Weather-resistant finishes that protect and beautify your property.",
    iconBgColor: "bg-[#0a3161]/10",
    iconColor: "text-[#0a3161]"
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Staining",
    description: "Professional staining services for decks, fences, cabinets, and other wood surfaces. We bring out the natural beauty of your wood elements.",
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-700"
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: "Power Washing",
    description: "Restore your surfaces to like-new condition with our thorough power washing services for siding, driveways, patios, and more.",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    title: "Gutter Cleaning",
    description: "Keep your home protected with our comprehensive gutter cleaning services. We remove debris and ensure proper water drainage.",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Professional Painting Services</h2>
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
