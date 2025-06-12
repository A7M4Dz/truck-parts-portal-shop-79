
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const categories = [
    { key: "All", label: t('products.category.all') },
    { key: "Engine", label: t('products.category.engine') },
    { key: "Brake Parts", label: t('products.category.brake') },
    { key: "Transmission", label: t('products.category.transmission') }
  ];

  const products = [
    {
      id: 1,
      name: t('products.heavy.duty.engine'),
      category: "Engine",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center",
      description: t('products.engine.description'),
      price: t('products.contact.pricing'),
    },
    {
      id: 2,
      name: t('products.air.brake'),
      category: "Brake Parts",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop&crop=center",
      description: t('products.brake.description'),
      price: t('products.contact.pricing'),
    },
    {
      id: 3,
      name: t('products.transmission.gearbox'),
      category: "Transmission",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&crop=center",
      description: t('products.transmission.description'),
      price: t('products.contact.pricing'),
    },
    {
      id: 4,
      name: t('products.drive.shaft'),
      category: "Transmission",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      description: t('products.drive.description'),
      price: t('products.contact.pricing'),
    },
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="section-padding bg-white relative" id="products">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-3 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
            {t('products.title')} <span className="text-gradient">{t('products.title.highlight')}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('products.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slideIn">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.key
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl"
                  : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-blue-600 border border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card overflow-hidden group transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 font-heading">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                  <button className="btn-primary text-sm py-3 px-6">
                    {t('products.view.details')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
