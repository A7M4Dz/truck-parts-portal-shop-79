
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@alreem.sa';
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+966504106845";
    const message = t('whatsapp.message');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps?q=26.461526,50.013970', '_blank');
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16 px-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 md:mb-6 justify-start">
              <img 
                src="/lovable-uploads/f0209fbc-f8ca-4223-aeb5-786f4422f8a7.png" 
                alt="ALREEM Logo" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
              />
              <div className="text-left ml-3 md:ml-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 font-heading">
                  ALREEM
                </h3>
              </div>
            </div>
            <p className={`text-gray-300 mb-4 md:mb-6 lg:mb-8 max-w-md leading-relaxed text-sm sm:text-base md:text-lg ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}>
              {t('footer.description')}
            </p>
            <div className="flex space-x-3 md:space-x-4 justify-start">
              <button 
                onClick={handleEmailClick}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer min-h-[44px] min-w-[44px] shadow-lg"
                aria-label="Email us"
              >
                <Mail size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={handlePhoneClick}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer min-h-[44px] min-w-[44px] shadow-lg"
                aria-label="Call us on WhatsApp"
              >
                <Phone size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={handleMapClick}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer min-h-[44px] min-w-[44px] shadow-lg"
                aria-label="Find us on map"
              >
                <MapPin size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className={`text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-4 lg:mb-6 text-blue-400 font-heading ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.quick.links')}
            </h4>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
              <li><button onClick={() => scrollToSection("#brands")} className={`text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center justify-start text-left ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
              <li><button onClick={() => scrollToSection("#quotation")} className={`text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center justify-start text-left ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('nav.products')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
              <li><button onClick={() => scrollToSection("#location")} className={`text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center justify-start text-left ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('nav.branches')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
              <li><button onClick={() => scrollToSection("#contact")} className={`text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center justify-start text-left ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h4 className={`text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-4 lg:mb-6 text-blue-400 font-heading ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.contact.info')}
            </h4>
            <div className="space-y-2 md:space-y-3 lg:space-y-4 text-gray-300">
              <p className={`flex items-center text-sm sm:text-base md:text-lg justify-start ${language === 'ar' ? 'font-arabic' : ''}`}>
                <Mail className="text-blue-400 flex-shrink-0 mr-2 md:mr-3" size={16} /> 
                <span className="break-all">info@alreem.sa</span>
              </p>
              <p className={`flex items-center text-sm sm:text-base md:text-lg justify-start ${language === 'ar' ? 'font-arabic' : ''}`}>
                <Phone className="text-blue-400 flex-shrink-0 mr-2 md:mr-3" size={16} /> 
                <span>+966 504 106 845</span>
              </p>
              <p className={`flex items-center text-sm sm:text-base md:text-lg justify-start ${language === 'ar' ? 'font-arabic' : ''}`}>
                <MapPin className="text-blue-400 flex-shrink-0 mr-2 md:mr-3" size={16} /> 
                <span className={language === 'ar' ? 'font-arabic' : ''}>{t('map.address')}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 md:pt-6 lg:pt-8 text-center text-gray-400 px-4">
          <p className="text-sm sm:text-base md:text-lg">
            &copy; 2025 ALREEM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
