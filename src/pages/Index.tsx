
import Header from "@/components/Header";
import TruckSlideshow from "@/components/TruckSlideshow";
import BrandsSection from "@/components/BrandsSection";
import QuotationSection from "@/components/QuotationSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <TruckSlideshow />
        <BrandsSection />
        <QuotationSection />
        <MapSection />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
