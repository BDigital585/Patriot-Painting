import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import gallery images for display in the carousel
const images = Array.from({ length: 7 }, (_, i) => `/gallery/p${i + 1}.JPG`);

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    // Start autoplay
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-8 mt-16 mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Recent Projects</h2>
      <div className="overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 pl-4 pr-4" key={index}>
              <div className="relative pb-[60%] h-0 overflow-hidden rounded-xl shadow-md">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src={src}
                  alt={`Patriot Painting project ${index + 1}`}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent py-2 px-4">
                  <span className="text-white text-sm font-semibold drop-shadow-md">Project {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute top-1/2 left-4 md:left-8 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-all border border-gray-200"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#dd1c1c]" />
      </button>
      
      <button
        className="absolute top-1/2 right-4 md:right-8 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-all border border-gray-200"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#dd1c1c]" />
      </button>
      
      <div className="flex justify-center mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1.5 transition-all ${
              index === selectedIndex ? 'bg-[#dd1c1c] scale-110' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;