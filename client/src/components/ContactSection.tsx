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
      content: <a href="tel:5853560218" className="hover:text-white transition-colors">(585) 356-0218</a>
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: "Justin Schmelzer", 
      content: <a href="tel:5854153370" className="hover:text-white transition-colors">(585) 415-3370</a>
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#0a3161] to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Call us directly for a free quote about your painting project. We serve all of Western New York.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <div className="text-white mr-3">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-blue-100">{item.content}</div>
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
