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
    <footer className="bg-gradient-to-br from-[#0a3161] via-blue-800 to-[#dd1c1c] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/Patriot Painting.png" 
                alt="Patriot Painting" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Professional painting services serving Western New York. 
              Veteran-owned and operated with military precision and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.link}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.link}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-200 mt-0.5" />
                <div>
                  <p className="text-blue-200">Dustin Garrett</p>
                  <a href="tel:5853560218" className="text-white hover:text-blue-200 transition-colors">
                    (585) 356-0218
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-200 mt-0.5" />
                <div>
                  <p className="text-blue-200">Justin Schmelzer</p>
                  <a href="tel:5854153370" className="text-white hover:text-blue-200 transition-colors">
                    (585) 415-3370
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-200 mt-0.5" />
                <p className="text-blue-200">Serving Western New York</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-200 mt-0.5" />
                <div>
                  <p className="text-blue-200">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-blue-200">Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200">
            <p>© {currentYear} Patriot Painting. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Proudly serving Western New York with excellence and integrity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;