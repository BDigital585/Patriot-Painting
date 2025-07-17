import { Link } from "wouter";
import { ArrowLeft, Home, CheckCircle, Phone, Shield, Droplets, Sun } from "lucide-react";
import Header from "@/components/Header";

const ExteriorPainting = () => {
  const features = [
    "Complete exterior surface preparation",
    "Weather-resistant premium paints",
    "Pressure washing before painting",
    "Detailed trim and siding work",
    "Caulking and sealing services",
    "Comprehensive cleanup and disposal"
  ];

  const surfaces = [
    "Wood siding and trim",
    "Vinyl and aluminum siding",
    "Stucco and masonry",
    "Decks and porches",
    "Fences and railings",
    "Garage doors and shutters"
  ];

  const benefits = [
    { icon: <Shield className="w-8 h-8" />, title: "Weather Protection", description: "Protect your home from harsh Western NY weather conditions" },
    { icon: <Droplets className="w-8 h-8" />, title: "Moisture Resistance", description: "Prevent water damage and extend your home's lifespan" },
    { icon: <Sun className="w-8 h-8" />, title: "UV Protection", description: "Guard against sun damage and color fading" }
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0a3161]/10 to-blue-800/10 text-[#0a3161] mb-6">
                <Home className="w-10 h-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0a3161] to-[#dd1c1c] bg-clip-text text-transparent">
                Exterior Painting Services
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Enhance your home's curb appeal and protect your investment with our professional 
                exterior painting services designed to withstand Western New York's challenging climate.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Exterior Painting</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your home's exterior faces the elements year-round. Our expert exterior painting services 
                not only beautify your property but provide essential protection against Western New York's 
                harsh winters, humid summers, and everything in between.
              </p>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  We use only the highest quality exterior paints and primers specifically chosen for 
                  durability and longevity in our local climate. Our thorough preparation process ensures 
                  optimal paint adhesion and a finish that will look great for years to come.
                </p>
                <p>
                  As a veteran-owned business, we bring military precision to every project, ensuring 
                  your home's exterior not only looks exceptional but stands up to the test of time.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Exterior Painting Matters</h2>
            <p className="text-xl text-gray-600">
              Quality exterior painting is an investment in your home's protection and value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0a3161]/10 to-blue-800/10 text-[#0a3161] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces We Paint */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Exterior Surfaces We Paint</h2>
            <p className="text-xl text-gray-600">
              We have experience with all types of exterior surfaces and materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaces.map((surface, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0a3161] rounded-full"></div>
                  <span className="text-gray-800 font-medium">{surface}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Exterior Painting Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach ensures lasting results and maximum protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Inspection", description: "Thorough assessment of all exterior surfaces" },
              { step: "2", title: "Pressure Wash", description: "Deep cleaning to remove dirt, mildew, and debris" },
              { step: "3", title: "Preparation", description: "Scraping, sanding, and priming as needed" },
              { step: "4", title: "Protection", description: "Covering landscaping and outdoor furniture" },
              { step: "5", title: "Application", description: "Expert painting with premium exterior coatings" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0a3161] to-blue-700 text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#dd1c1c] to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Home's Exterior</h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us today for a free estimate on your exterior painting project.
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

export default ExteriorPainting;