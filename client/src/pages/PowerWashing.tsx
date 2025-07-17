import { Link } from "wouter";
import { ArrowLeft, Waves, CheckCircle, Phone, Zap, Home, Car } from "lucide-react";
import Header from "@/components/Header";

const PowerWashing = () => {
  const features = [
    "High-pressure cleaning equipment",
    "Eco-friendly cleaning solutions",
    "Adjustable pressure settings",
    "Complete surface restoration",
    "Mold and mildew removal",
    "Professional equipment and expertise"
  ];

  const surfaces = [
    "House siding and exteriors",
    "Driveways and walkways",
    "Decks and patios",
    "Fences and railings",
    "Parking areas and garages",
    "Commercial building exteriors"
  ];

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Deep Cleaning", description: "Remove years of built-up dirt, grime, and stains" },
    { icon: <Home className="w-8 h-8" />, title: "Curb Appeal", description: "Instantly improve your property's appearance and value" },
    { icon: <Car className="w-8 h-8" />, title: "Surface Protection", description: "Prevent damage from mold, mildew, and contaminants" }
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
                <Waves className="w-10 h-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0a3161] to-[#dd1c1c] bg-clip-text text-transparent">
                Power Washing Services
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Restore your surfaces to like-new condition with our professional power washing services. 
                We remove years of dirt, grime, and stains safely and effectively.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Power Washing</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Power washing is more than just spraying water. Our professional-grade equipment and 
                experienced techniques safely remove dirt, mold, mildew, and stains while protecting 
                your surfaces from damage.
              </p>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  We understand that different surfaces require different approaches. Our team adjusts 
                  pressure settings and uses appropriate cleaning solutions to ensure optimal results 
                  without causing damage to delicate materials.
                </p>
                <p>
                  Regular power washing not only improves appearance but also helps maintain your 
                  property's value and can extend the life of painted and stained surfaces.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Professional Power Washing</h2>
            <p className="text-xl text-gray-600">
              Power washing provides immediate and long-term benefits for your property.
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

      {/* Surfaces We Clean */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Surfaces We Power Wash</h2>
            <p className="text-xl text-gray-600">
              We safely clean a wide variety of surfaces with the right pressure and technique.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Power Washing Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach ensures thorough cleaning without surface damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inspection", description: "Assess surface conditions and identify problem areas" },
              { step: "2", title: "Preparation", description: "Protect plants and apply cleaning solutions as needed" },
              { step: "3", title: "Washing", description: "Use appropriate pressure settings for each surface type" },
              { step: "4", title: "Final Rinse", description: "Complete thorough rinse and inspect results" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0a3161] to-blue-700 text-white font-bold text-lg mb-4">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#dd1c1c] to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Surfaces?</h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free estimate for power washing services that will make your property look like new.
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

export default PowerWashing;