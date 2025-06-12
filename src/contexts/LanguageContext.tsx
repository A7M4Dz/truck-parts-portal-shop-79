import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Request Quote',
    'nav.branches': 'Our Locations',
    'nav.contact': 'Contact Us',
    'company.name': 'ALREEM',
    'company.tagline': 'Commercial Truck Parts',
    
    // Hero Section
    'hero.title': 'Premium Commercial',
    'hero.title.highlight': 'Truck Parts',
    'hero.description': 'Your trusted partner for genuine truck parts from leading manufacturers. Professional quality, competitive prices, fast delivery across Saudi Arabia.',
    'hero.browse.catalog': 'Browse Our Catalog',
    'hero.get.quote': 'Get Instant Quote',
    'hero.years.experience': '10+ Years Experience',
    'hero.parts.available': '5000+ Parts Available',
    'hero.customer.support': '24/7 Customer Support',
    
    // Slideshow
    'slideshow.iveco.title': 'Premium IVECO Parts',
    'slideshow.iveco.subtitle': 'Built for Performance',
    'slideshow.man.title': 'Reliable MAN Solutions',
    'slideshow.man.subtitle': 'Engineering Excellence',
    'slideshow.zf.title': 'ZF Transmission Systems',
    'slideshow.zf.subtitle': 'Advanced Technology',
    
    // Brands Section
    'brands.title': 'Authorized Dealer for',
    'brands.title.highlight': 'Leading Brands',
    'brands.description': 'We are proud authorized dealers for MAN, IVECO, and ZF - the world\'s most trusted commercial vehicle manufacturers',
    'brands.man.description': 'German truck and bus manufacturer known for engineering excellence',
    'brands.iveco.description': 'Italian commercial vehicle manufacturer with innovative solutions',
    'brands.zf.description': 'Leading transmission and mobility technology provider',
    
    // Map Section
    'map.title': 'Visit Our Store',
    'map.description': 'Find us at our location in Dammam for in-person consultations and immediate part availability',
    'map.address': 'Dammam, Saudi Arabia',
    'map.visit.description': 'Visit our showroom and warehouse for immediate parts availability and expert consultation.',
    'map.directions': 'Get Directions',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I\'m interested in your commercial truck parts.',
    'whatsapp.aria.label': 'Contact us on WhatsApp',
    
    // Footer
    'footer.description': 'Leading supplier of commercial truck parts in Saudi Arabia with over 10 years of experience. We provide quality OEM parts from MAN, IVECO, and ZF to keep your fleet running strong.',
    'footer.quick.links': 'Quick Links',
    'footer.contact.info': 'Contact Info',
    
    // Quotation
    'quotation.title': 'Request a',
    'quotation.title.highlight': 'Quotation',
    'quotation.description': 'Get a personalized quote for your truck parts needs. Simply provide your email and describe the parts you\'re looking for.',
    'quotation.form.title': 'Get Your Quote',
    'quotation.form.subtitle': 'Fill out the form below and we\'ll get back to you with a detailed quotation',
    'quotation.form.email.label': 'Email Address',
    'quotation.form.email.placeholder': 'Enter your email address',
    'quotation.form.parts.label': 'Parts Needed',
    'quotation.form.parts.placeholder': 'Describe the parts you need (brand, model, part numbers, quantities, etc.)',
    'quotation.form.submit': 'Submit',
    'quotation.form.submitting': 'Submitting...',
    'quotation.success': 'Your quotation request has been submitted successfully! We\'ll get back to you soon.'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'طلب عرض سعر',
    'nav.branches': 'مواقعنا',
    'nav.contact': 'اتصل بنا',
    'company.name': 'الريم',
    'company.tagline': 'قطع غيار الشاحنات التجارية',
    
    // Hero Section
    'hero.title': 'قطع غيار تجارية',
    'hero.title.highlight': 'عالية الجودة',
    'hero.description': 'شريكك الموثوق لقطع غيار الشاحنات الأصلية من الشركات المصنعة الرائدة. جودة مهنية، أسعار تنافسية، توصيل سريع في جميع أنحاء المملكة العربية السعودية.',
    'hero.browse.catalog': 'تصفح الكتالوج',
    'hero.get.quote': 'احصل على عرض سعر',
    'hero.years.experience': '10+ سنة خبرة',
    'hero.parts.available': '5000+ قطعة غيار متوفرة',
    'hero.customer.support': 'دعم العملاء 24/7',
    
    // Slideshow
    'slideshow.iveco.title': 'قطع غيار إيفيكو المتميزة',
    'slideshow.iveco.subtitle': 'مصممة للأداء المتميز',
    'slideshow.man.title': 'حلول مان الموثوقة',
    'slideshow.man.subtitle': 'تميز في الهندسة',
    'slideshow.zf.title': 'أنظمة نقل زد إف',
    'slideshow.zf.subtitle': 'تقنية متقدمة',
    
    // Brands Section
    'brands.title': 'وكيل معتمد لـ',
    'brands.title.highlight': 'العلامات الرائدة',
    'brands.description': 'نفخر بكوننا وكلاء معتمدين لمان وإيفيكو و زد إف - أكثر مصنعي المركبات التجارية موثوقية في العالم',
    'brands.man.description': 'شركة ألمانية لصناعة الشاحنات والحافلات معروفة بتميزها الهندسي',
    'brands.iveco.description': 'شركة إيطالية لصناعة المركبات التجارية مع حلول مبتكرة',
    'brands.zf.description': 'مزود رائد لتقنيات ناقل الحركة والنقل',
    
    // Map Section
    'map.title': 'زوروا متجرنا',
    'map.description': 'اعثروا علينا في موقعنا في الدمام للاستشارات الشخصية وتوفر القطع فوراً',
    'map.address': 'الدمام، المملكة العربية السعودية',
    'map.visit.description': 'زوروا صالة العرض والمستودع للحصول على القطع فوراً والاستشارة المتخصصة.',
    'map.directions': 'احصل على الاتجاهات',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بقطع غيار الشاحنات التجارية الخاصة بكم.',
    'whatsapp.aria.label': 'تواصل معنا عبر الواتساب',
    
    // Footer
    'footer.description': 'مورد رائد لقطع غيار الشاحنات التجارية في المملكة العربية السعودية مع أكثر من 10 سنوات من الخبرة. نوفر قطع غيار أصلية عالية الجودة من مان وإيفيكو و زد إف للحفاظ على قوة أسطولك.',
    'footer.quick.links': 'روابط سريعة',
    'footer.contact.info': 'معلومات الاتصال',
    
    // Quotation
    'quotation.title': 'طلب',
    'quotation.title.highlight': 'عرض سعر',
    'quotation.description': 'احصل على عرض سعر شخصي لاحتياجاتك من قطع غيار الشاحنات. ما عليك سوى تقديم بريدك الإلكتروني ووصف القطع التي تبحث عنها.',
    'quotation.form.title': 'احصل على عرض السعر',
    'quotation.form.subtitle': 'املأ النموذج أدناه وسنعود إليك بعرض سعر مفصل',
    'quotation.form.email.label': 'عنوان البريد الإلكتروني',
    'quotation.form.email.placeholder': 'أدخل عنوان بريدك الإلكتروني',
    'quotation.form.parts.label': 'القطع المطلوبة',
    'quotation.form.parts.placeholder': 'صف القطع التي تحتاجها (العلامة التجارية، الطراز، أرقام القطع، الكميات، إلخ)',
    'quotation.form.submit': 'إرسال',
    'quotation.form.submitting': 'جاري الإرسال...',
    'quotation.success': 'تم إرسال طلب عرض السعر بنجاح! سنعود إليك قريباً.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div 
        className={`${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`} 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
