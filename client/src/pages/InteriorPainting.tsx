import { Link } from "wouter";
import { ArrowLeft, PaintBucket, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";

const InteriorPainting = () => {
  const features = [
    "Professional color consultation",
    "High-quality premium paints",
    "Detailed surface preparation",
    "Clean, precise trim work",
    "Furniture and floor protection",
    "Thorough cleanup service"
  ];

  const roomTypes = [
    "Living rooms and family rooms",
    "Bedrooms and master suites",
    "Kitchens and dining areas",
    "Bathrooms and powder rooms",
    "Hallways and staircases",
    "Home offices and studies"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#dd1c1c]/10 to-red-800/10 text-[#dd1c1c] mb-6">
                <PaintBucket className="w-10 h-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0a3161] to-[#dd1c1c] bg-clip-text text-transparent">
                Interior Painting Services
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your home's interior with our professional painting services. We deliver exceptional 
                quality and attention to detail that brings your vision to life.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Interior Painting</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Patriot Painting, we understand that your home's interior is your personal sanctuary. 
                Our experienced team uses only the finest materials and proven techniques to deliver stunning 
                results that enhance your living space and reflect your personal style.
              </p>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Whether you're looking to refresh a single room or transform your entire home, we provide 
                  comprehensive interior painting services that include thorough preparation, expert application, 
                  and meticulous finishing touches.
                </p>
                <p>
                  Our veteran-owned company takes pride in delivering military-grade precision and attention 
                  to detail in every project, ensuring your complete satisfaction with the final result.
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

      {/* Room Types */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rooms We Paint</h2>
            <p className="text-xl text-gray-600">
              No room is too big or small. We provide expert interior painting for every space in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomTypes.map((room, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#dd1c1c] rounded-full"></div>
                  <span className="text-gray-800 font-medium">{room}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Painting Process</h2>
            <p className="text-xl text-gray-600">
              We follow a proven process to ensure exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Free in-home consultation and color selection guidance" },
              { step: "2", title: "Preparation", description: "Thorough surface prep including filling, sanding, and priming" },
              { step: "3", title: "Protection", description: "Complete furniture and flooring protection setup" },
              { step: "4", title: "Painting", description: "Expert application with premium paints and tools" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#dd1c1c] to-red-700 text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a3161] to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Interior?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free quote today and see why Western New York trusts Patriot Painting.
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

export default InteriorPainting;