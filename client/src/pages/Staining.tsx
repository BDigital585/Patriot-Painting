import { Link } from "wouter";
import { ArrowLeft, Droplet, CheckCircle, Phone, Palette, TreePine, Sparkles } from "lucide-react";
import Header from "@/components/Header";

const Staining = () => {
  const features = [
    "Wood surface assessment and preparation",
    "Premium stain selection consultation",
    "Complete sanding and cleaning",
    "Professional application techniques",
    "Weather-resistant protective finishes",
    "Clean-up and proper disposal"
  ];

  const woodTypes = [
    "Cedar decks and siding",
    "Pressure-treated lumber",
    "Hardwood furniture and trim",
    "Pine and oak surfaces",
    "Composite decking",
    "Log home exteriors"
  ];

  const benefits = [
    { icon: <Palette className="w-8 h-8" />, title: "Enhanced Beauty", description: "Bring out the natural grain and character of your wood" },
    { icon: <TreePine className="w-8 h-8" />, title: "Wood Protection", description: "Protect against moisture, UV rays, and insect damage" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Long-Lasting", description: "Quality stains that maintain their beauty for years" }
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
                <Droplet className="w-10 h-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0a3161] to-[#dd1c1c] bg-clip-text text-transparent">
                Professional Staining Services
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Enhance and protect your wood surfaces with our expert staining services. We bring out 
                the natural beauty of wood while providing long-lasting protection.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Wood Staining</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Wood staining is both an art and a science. Our experienced team knows how to prepare 
                different wood types and select the perfect stain to enhance natural beauty while 
                providing maximum protection against the elements.
              </p>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Whether you're looking to restore weathered decking, enhance new construction, or 
                  refresh interior woodwork, we use premium stains and proven techniques to deliver 
                  results that exceed your expectations.
                </p>
                <p>
                  Our attention to detail and commitment to quality ensures your wood surfaces will 
                  look beautiful and remain protected for years to come.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Professional Staining</h2>
            <p className="text-xl text-gray-600">
              Professional staining provides both aesthetic and protective benefits for your wood surfaces.
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

      {/* Wood Types */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wood Types We Stain</h2>
            <p className="text-xl text-gray-600">
              We have experience staining all types of wood surfaces, from decks to furniture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {woodTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#dd1c1c] rounded-full"></div>
                  <span className="text-gray-800 font-medium">{type}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Staining Process</h2>
            <p className="text-xl text-gray-600">
              Proper preparation and application are key to long-lasting, beautiful results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Evaluate wood condition and recommend the best stain type" },
              { step: "2", title: "Preparation", description: "Clean, sand, and prep all surfaces for optimal stain penetration" },
              { step: "3", title: "Application", description: "Apply stain using professional techniques for even coverage" },
              { step: "4", title: "Protection", description: "Apply protective topcoat if needed for maximum durability" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Wood Surfaces?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us for a free consultation and see how professional staining can transform your space.
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

export default Staining;