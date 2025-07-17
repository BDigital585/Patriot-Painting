import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-2">
              <img 
                src="/Patriot Painting.png" 
                alt="Patriot Painting" 
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-2 leading-tight text-xs md:text-sm">
              Professional painting services serving Western New York. 
              Veteran-owned and operated.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Services & Quick Links Combined */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Services */}
            <div>
              <h3 className="text-sm md:text-base font-bold mb-1.5">Our Services</h3>
              <ul className="space-y-0.5">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.link}
                      className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm md:text-base font-bold mb-1.5">Quick Links</h3>
              <ul className="space-y-0.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.link}
                      className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Horizontal Layout */}
          <div>
            <h3 className="text-sm md:text-base font-bold mb-1.5">Contact Info</h3>
            <div className="space-y-1">
              {/* Phone Numbers Compact */}
              <div className="space-y-0.5">
                <div className="flex items-center space-x-1.5">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <span className="text-blue-200 text-xs">Dustin:</span>
                  <a href="tel:5853560218" className="text-white hover:text-blue-200 transition-colors text-xs md:text-sm">
                    (585) 356-0218
                  </a>
                </div>
                
                <div className="flex items-center space-x-1.5">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <span className="text-blue-200 text-xs">Justin:</span>
                  <a href="tel:5854153370" className="text-white hover:text-blue-200 transition-colors text-xs md:text-sm">
                    (585) 415-3370
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-blue-200" />
                <p className="text-blue-200 text-xs md:text-sm">Serving Western New York</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600/30 mt-4 md:mt-6 pt-3 md:pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200">
            <p className="text-xs md:text-sm">© {currentYear} Patriot Painting. All rights reserved.</p>
            <p className="mt-1 md:mt-0 text-xs md:text-sm text-center md:text-right">
              Proudly serving Western New York.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;