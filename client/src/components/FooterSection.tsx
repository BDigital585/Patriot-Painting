import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-xl font-bold">CompanyName</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative solutions for businesses since 2010. Our mission is to help companies thrive in the digital landscape.
            </p>
            <SocialLinks />
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Content Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Company Name. All rights reserved.
            </div>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition flex items-center"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
