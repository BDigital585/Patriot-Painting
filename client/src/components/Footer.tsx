import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Interior Painting", link: "/services/interior-painting" },
    { name: "Exterior Painting", link: "/services/exterior-painting" },
    { name: "Staining", link: "/services/staining" },
    { name: "Power Washing", link: "/services/power-washing" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" }
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Services", link: "/#services" },
    { name: "Contact", link: "/#contact" }
  ];

  return (
    <footer className="bg-[#0a3161] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 md:mb-6">
              <img 
                src="/Patriot Painting.png" 
                alt="Patriot Painting" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Professional painting services serving Western New York. 
              Veteran-owned and operated with military precision and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.link}
                    className="text-blue-200 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.link}
                    className="text-blue-200 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Info</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-2 md:space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-200 mt-0.5" />
                <div>
                  <p className="text-blue-200 text-sm md:text-base">Dustin Garrett</p>
                  <a href="tel:5853560218" className="text-white hover:text-blue-200 transition-colors text-sm md:text-base">
                    (585) 356-0218
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-200 mt-0.5" />
                <div>
                  <p className="text-blue-200 text-sm md:text-base">Justin Schmelzer</p>
                  <a href="tel:5854153370" className="text-white hover:text-blue-200 transition-colors text-sm md:text-base">
                    (585) 415-3370
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 md:space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-200 mt-0.5" />
                <p className="text-blue-200 text-sm md:text-base">Serving Western New York</p>
              </div>

              <div className="flex items-start space-x-2 md:space-x-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-200 mt-0.5" />
                <div>
                  <p className="text-blue-200 text-sm md:text-base">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-blue-200 text-sm md:text-base">Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600/30 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200">
            <p className="text-sm md:text-base">© {currentYear} Patriot Painting. All rights reserved.</p>
            <p className="mt-2 md:mt-0 text-sm md:text-base text-center md:text-right">
              Proudly serving Western New York with excellence and integrity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;