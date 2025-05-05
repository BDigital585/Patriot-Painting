import { ArrowRight, Monitor, BarChart2, Edit3, Shield } from "lucide-react";

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
      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom, responsive websites tailored to your business needs with modern design and optimized performance.",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our powerful analytics solutions and reporting tools.",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: <Edit3 className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Strategic content creation and management to boost your online presence and engage your audience.",
    iconBgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity",
    description: "Protect your business with our advanced security solutions, threat detection, and compliance services.",
    iconBgColor: "bg-green-100",
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
            We offer comprehensive solutions to help your business grow and succeed in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
