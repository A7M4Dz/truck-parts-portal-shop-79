
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileText } from "lucide-react";

const QuotationSection = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [partsNeeded, setPartsNeeded] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    console.log("Quotation request:", { email, partsNeeded });
    
    // Reset form
    setEmail("");
    setPartsNeeded("");
    setIsSubmitting(false);
    
    // Show success message
    alert(t('quotation.success'));
  };

  return (
    <section id="quotation" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp px-4">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-heading ${language === 'ar' ? 'leading-relaxed' : ''}`}>
            {t('quotation.title')} <span className="text-gradient">{t('quotation.title.highlight')}</span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 md:mb-8"></div>
          <p className={`text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}>
            {t('quotation.description')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
              <CardTitle className={`text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('quotation.form.title')}
              </CardTitle>
              <p className={`text-gray-600 text-base md:text-lg ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t('quotation.form.subtitle')}
              </p>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className={`flex items-center text-sm font-semibold text-gray-700 mb-2 ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                    <Mail className={`w-4 h-4 flex-shrink-0 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t('quotation.form.email.label')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('quotation.form.email.placeholder')}
                    required
                    className={`h-12 md:h-14 text-base ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="parts" className={`flex items-center text-sm font-semibold text-gray-700 mb-2 ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                    <FileText className={`w-4 h-4 flex-shrink-0 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t('quotation.form.parts.label')}
                  </label>
                  <Textarea
                    id="parts"
                    value={partsNeeded}
                    onChange={(e) => setPartsNeeded(e.target.value)}
                    placeholder={t('quotation.form.parts.placeholder')}
                    required
                    rows={6}
                    className={`text-base resize-none ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 min-h-[44px] ${language === 'ar' ? 'font-arabic' : ''}`}
                >
                  {isSubmitting 
                    ? t('quotation.form.submitting')
                    : t('quotation.form.submit')
                  }
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuotationSection;
