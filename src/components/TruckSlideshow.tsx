
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TruckSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/360531dc-e9c5-4d78-9d06-90c9a2f09e3c.png",
      brand: "IVECO",
      model: "S-Way",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    },
    {
      id: 2,
      image: "/lovable-uploads/cfcf206d-1264-4859-8df3-97e1e5901c4d.png",
      brand: "IVECO",
      model: "Stralis",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    },
    {
      id: 3,
      image: "/lovable-uploads/920a47f4-3dfc-433b-b63e-8437913aa106.png",
      brand: "ZF",
      model: "PowerLine",
      title: "ZF Transmission Systems",
      subtitle: "Advanced Engineering Solutions"
    },
    {
      id: 4,
      image: "/lovable-uploads/87c582d4-8154-4465-b42e-b7f382738800.png",
      brand: "IVECO",
      model: "S-Way Electric",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const scrollToLocation = () => {
    const element = document.querySelector("#location");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuotation = () => {
    const element = document.querySelector("#quotation");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-max">
              <div className="max-w-3xl animate-fadeInUp px-4 sm:px-6">
                <div className="text-blue-300 text-base sm:text-lg md:text-xl font-semibold mb-3 tracking-wide">
                  <span className="bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm border border-blue-400/30">
                    {slide.brand} {slide.model}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl">
                  <span className="bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm block w-fit">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 font-light drop-shadow-lg">
                  <span className="bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm inline-block">
                    {slide.subtitle}
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button 
                    onClick={scrollToLocation}
                    className="btn-primary text-sm md:text-base px-6 py-3 md:px-8 md:py-4 min-h-[48px] shadow-2xl font-medium transform hover:scale-105 transition-all duration-200"
                  >
                    Our Location
                  </button>
                  <button 
                    onClick={scrollToQuotation}
                    className="btn-secondary text-sm md:text-base px-6 py-3 md:px-8 md:py-4 min-h-[48px] shadow-2xl font-medium transform hover:scale-105 transition-all duration-200"
                  >
                    {t('hero.get.quote')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/60 backdrop-blur-sm hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] shadow-2xl border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/60 backdrop-blur-sm hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] shadow-2xl border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute left-2 md:left-6 bottom-20 md:bottom-24 w-12 h-12 md:w-14 md:h-14 bg-black/60 backdrop-blur-sm hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl border border-white/20"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center shadow-2xl ${
              index === currentSlide 
                ? 'w-12 h-4 bg-blue-400 scale-110' 
                : 'w-4 h-4 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Brand Badge */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/60 backdrop-blur-sm rounded-xl p-3 md:p-4 text-white shadow-2xl border border-white/20">
        <div className="text-xl md:text-3xl font-bold text-blue-300">{slides[currentSlide].brand}</div>
        <div className="text-sm md:text-base text-gray-200">{slides[currentSlide].model}</div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        ></div>
      </div>
    </div>
  );
};

export default TruckSlideshow;
