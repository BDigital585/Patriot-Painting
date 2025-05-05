import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { validateEmail } from "@/lib/validation";
import SocialLinks from "./SocialLinks";

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
      title: "Phone", 
      content: "(123) 456-7890" 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: "Email", 
      content: "info@yourcompany.com" 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: "Office", 
      content: "123 Business Avenue, Suite 500\nSan Francisco, CA 94107" 
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our team to discuss how we can help your business grow and succeed.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <SocialLinks />
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 transition ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 transition ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className={`w-full px-4 py-3 transition ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
