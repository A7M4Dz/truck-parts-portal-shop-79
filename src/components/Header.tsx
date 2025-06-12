
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), href: "#" },
    { name: t('nav.about'), href: "#brands" },
    { name: t('nav.products'), href: "#quotation" },
    { name: t('nav.branches'), href: "#location" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-xl border-b-2 border-blue-600 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-32 md:h-36">
          {/* Logo - Always on the left for both languages */}
          <div className="flex items-center order-1">
            <img 
              src="/lovable-uploads/f0209fbc-f8ca-4223-aeb5-786f4422f8a7.png" 
              alt="ALREEM Logo" 
              className="h-28 md:h-32 w-auto"
            />
          </div>

          {/* Desktop Navigation - Always in center */}
          <div className="hidden lg:flex items-center space-x-1 order-2">
            <nav className={`flex space-x-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-blue-50 relative group min-h-[44px] flex items-center"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Language Toggle & Mobile Menu - Always on the right */}
          <div className="flex items-center space-x-3 order-3">
            <LanguageToggle />
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200 shadow-lg rounded-b-xl">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-800 hover:text-blue-600 block px-4 py-3 text-base font-semibold transition-colors duration-200 rounded-lg hover:bg-blue-50 w-full text-left min-h-[44px]"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
