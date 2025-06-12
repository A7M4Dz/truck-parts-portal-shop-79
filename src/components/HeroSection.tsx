
import TruckSlideshow from "./TruckSlideshow";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative">
      <TruckSlideshow />
      
      {/* Trust indicators overlay */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center p-6 bg-white/20 backdrop-blur-md border-white/30">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-200 font-medium">{t('hero.years.experience')}</div>
          </div>
          <div className="card text-center p-6 bg-white/20 backdrop-blur-md border-white/30">
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-200 font-medium">{t('hero.parts.available')}</div>
          </div>
          <div className="card text-center p-6 bg-white/20 backdrop-blur-md border-white/30">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-200 font-medium">{t('hero.customer.support')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
