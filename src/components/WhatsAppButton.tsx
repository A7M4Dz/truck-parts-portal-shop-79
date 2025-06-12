
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = "+966504106845";
  
  const handleWhatsAppClick = () => {
    const message = t('whatsapp.message');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 md:p-6 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50 min-h-[56px] min-w-[56px] md:min-h-[64px] md:min-w-[64px]"
      aria-label={t('whatsapp.aria.label')}
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppButton;
