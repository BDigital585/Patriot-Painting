import { Link } from "wouter";
import { ArrowLeft, Trash2, CheckCircle, Phone, Shield, Droplets, Wrench } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const GutterCleaning = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    "Complete debris removal",
    "Downspout cleaning and testing",
    "Gutter inspection and assessment",
    "Minor repair identification",
    "Proper disposal of debris",
    "Gutter guard installation available"
  ];

  const services = [
    "Residential gutter cleaning",
    "Commercial property maintenance",
    "Emergency storm cleanup",
    "Seasonal maintenance programs",
    "Gutter repair consultations",
    "Preventive maintenance plans"
  ];

  const benefits = [
    { icon: <Shield className="w-8 h-8" />, title: "Foundation Protection", description: "Prevent water damage to your home's foundation and basement" },
    { icon: <Droplets className="w-8 h-8" />, title: "Water Management", description: "Ensure proper water flow away from your property" },
    { icon: <Wrench className="w-8 h-8" />, title: "System Maintenance", description: "Keep your entire gutter system functioning optimally" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/paintbackground.PNG')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
            {/* Back to Home Link */}
            <Link 
              href="/" 
              className="inline-flex items-center text-[#0a3161] hover:text-[#dd1c1c] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>

            {/* Page Header */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#dd1c1c]/10 to-red-700/10 text-[#dd1c1c] mb-6">
                <Trash2 className="w-10 h-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0a3161] to-[#dd1c1c] bg-clip-text text-transparent">
                Gutter Cleaning Services
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Protect your home's foundation and structure with our comprehensive gutter cleaning and 
                maintenance services. Keep water flowing where it should.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Service Overview */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Gutter Cleaning</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Clean gutters are essential for protecting your home from water damage. Our thorough 
                gutter cleaning service removes debris, tests downspout flow, and identifies potential 
                issues before they become costly problems.
              </p>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Western New York's changing seasons bring leaves, snow, and debris that can quickly 
                  clog your gutters. Our regular maintenance service ensures your gutter system 
                  functions properly year-round.
                </p>
                <p>
                  We don't just clean – we inspect. Our team identifies loose brackets, damaged sections, 
                  and potential improvements to keep your gutter system working at its best.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Regular Gutter Cleaning Matters</h2>
            <p className="text-xl text-gray-600">
              Proper gutter maintenance protects your entire property investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd1c1c]/10 to-red-700/10 text-[#dd1c1c] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Gutter Services</h2>
            <p className="text-xl text-gray-600">
              From routine cleaning to emergency repairs, we handle all your gutter needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#dd1c1c] rounded-full"></div>
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Cleaning Process</h2>
            <p className="text-xl text-gray-600">
              Thorough, safe, and efficient gutter cleaning with complete inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Safety Setup", description: "Secure ladder placement and safety equipment" },
              { step: "2", title: "Debris Removal", description: "Remove all leaves, twigs, and accumulated debris" },
              { step: "3", title: "Downspout Check", description: "Test and clear all downspouts for proper flow" },
              { step: "4", title: "Inspection", description: "Check for damage, loose brackets, and leaks" },
              { step: "5", title: "Final Test", description: "Water test system and provide service report" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#dd1c1c] to-red-700 text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seasonal Gutter Maintenance</h2>
              <p className="text-xl text-gray-600">
                Western New York's seasons demand regular gutter attention
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#dd1c1c]">Spring & Summer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Post-winter debris cleanup</li>
                  <li>• Storm damage inspection</li>
                  <li>• Preparation for heavy summer rains</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#0a3161]">Fall & Winter</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Leaf and debris removal</li>
                  <li>• Ice dam prevention preparation</li>
                  <li>• Winter storm readiness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a3161] to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Home with Clean Gutters</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your gutter cleaning today and avoid costly water damage repairs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-3" />
              <span className="font-semibold">Dustin: (585) 356-0218</span>
            </div>
            <div className="flex items-center bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-3" />
              <span className="font-semibold">Justin: (585) 415-3370</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GutterCleaning;