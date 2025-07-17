import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { validateEmail } from "@/lib/validation";


interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: ContactFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: "Dustin Garrett", 
      content: <a href="tel:5853560218" className="hover:text-[#dd1c1c] transition-colors">(585) 356-0218</a>
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: "Justin Schmelzer", 
      content: <a href="tel:5854153370" className="hover:text-[#dd1c1c] transition-colors">(585) 415-3370</a>
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#dd1c1c]/10 text-[#dd1c1c] text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Call us directly for a free quote about your painting project. We serve all of Western New York.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {contactInfo.map((item, index) => (
              <div key={index} className="group relative overflow-hidden p-8 bg-gradient-to-br from-white via-blue-50/30 to-red-50/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dd1c1c]/5 via-transparent to-[#0a3161]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#dd1c1c]/10 to-[#0a3161]/10 text-[#dd1c1c] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#0a3161] transition-colors duration-300">{item.title}</h3>
                  <div className="text-lg text-gray-700 font-medium group-hover:text-[#dd1c1c] transition-colors duration-300">{item.content}</div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
