import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Subtle stars and stripes background */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdHJpcGVzIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTAgMCBMIDEwMCAwIEwgMTAwIDIwIEwgMCAyMCBaIiBmaWxsPSIjZGQxYzFjIj48L3BhdGg+PHBhdGggZD0iTTAgMjAgTCAxMDAgMjAgTCAxMDAgNDAgTCAwIDQwIFoiIGZpbGw9IndoaXRlIj48L3BhdGg+PHBhdGggZD0iTTAgNDAgTCAxMDAgNDAgTCAxMDAgNjAgTCAwIDYwIFoiIGZpbGw9IiNkZDFjMWMiPjwvcGF0aD48cGF0aCBkPSJNMCA2MCBMIDEwMCA2MCBMIDI0MCA4MCBMICA4MCAZIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDgwIEwgMTAwIDgwIEwgMTAwIDEwMCBMIDAgMTAwIFoiIGZpbGw9IiNkZDFjMWMiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Logo centered at the top */}
        <div className="flex justify-center mb-8">
          <img 
            src="/Patriot Painting.png" 
            alt="Patriot Painting Logo" 
            className="h-32 md:h-40 w-auto"
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Proudly Painting <span className="text-[#dd1c1c]">Western New York</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            Veteran-level Precision. All-American Craftsmanship.
          </p>
          
          {/* Stars decoration */}
          <div className="flex justify-center my-6">
            <div className="flex space-x-1">
              <Star className="h-6 w-6 fill-[#0a3161] text-[#0a3161]" />
              <Star className="h-6 w-6 fill-[#dd1c1c] text-[#dd1c1c]" />
              <Star className="h-6 w-6 fill-[#0a3161] text-[#0a3161]" />
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="px-8 py-6 text-lg font-bold rounded-lg bg-[#dd1c1c] hover:bg-[#b71c1c] text-white"
            >
              Request a Free Quote
            </Button>
          </div>
        </div>

        {/* American-themed imagery */}
        <div className="mt-12 relative">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-1 bg-blue-50 p-4 rounded-lg border border-[#0a3161] shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#0a3161] rounded-full flex items-center justify-center text-white mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Quality Guaranteed</h3>
                <p className="text-sm mt-2">Every project completed with excellence and attention to detail</p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 bg-red-50 p-4 rounded-lg border border-[#dd1c1c] shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#dd1c1c] rounded-full flex items-center justify-center text-white mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Locally Owned</h3>
                <p className="text-sm mt-2">Proudly serving Western New York communities since 2010</p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 bg-blue-50 p-4 rounded-lg border border-[#0a3161] shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#0a3161] rounded-full flex items-center justify-center text-white mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">On-Time Service</h3>
                <p className="text-sm mt-2">Professional, punctual, and efficient from start to finish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
