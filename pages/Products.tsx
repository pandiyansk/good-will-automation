import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_MENU_BRANDS } from '../constants';
import { DeltaProduct, NavBrand } from '../types';

// Component for the innermost accordion level (showing product models/details)
const ProductAccordionItem: React.FC<{
  product: DeltaProduct;
  isOpen: boolean;
  onClick: () => void;
}> = ({ product, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm">
      <button
        onClick={onClick}
        className="w-full p-6 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <div className="flex items-center text-left">
          <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mr-6 hidden sm:block flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-brand-dark">{product.name}</h3>
            <p className="text-brand-text-light">{product.fullName}</p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 text-brand-blue transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden`}
      >
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          {product.description && (
            <p className="text-brand-text-light mb-6">{product.description}</p>
          )}
          {product.models && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.models.map(model => (
                <li key={model} className="text-brand-text bg-white border border-gray-200 rounded-md p-3 text-sm">
                  {model}
                </li>
              ))}
            </ul>
          )}
          {product.subCategories && (
            <div className="space-y-6">
              {product.subCategories.map(subCategory => (
                <div key={subCategory.title}>
                  <h4 className="font-semibold text-brand-dark mb-2 text-lg">{subCategory.title}</h4>
                  <ul className="space-y-2 text-brand-text-light">
                    {subCategory.items.map(item => (
                      <li key={item} className="flex items-start">
                         <span className="text-brand-blue mr-2 mt-1">&#8226;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// Component for the brand-level accordion
const BrandAccordionItem: React.FC<{
  brand: NavBrand;
  isOpen: boolean;
  onClick: () => void;
}> = ({ brand, isOpen, onClick }) => {
  const [openProductIndex, setOpenProductIndex] = useState<number | null>(0);

  const handleProductToggle = (index: number) => {
    setOpenProductIndex(openProductIndex === index ? null : index);
  };

  useEffect(() => {
    // Keep the first product open when a new brand is opened, but don't re-open if user closed it.
    if (isOpen && openProductIndex === null) {
      // setOpenProductIndex(0); // You can uncomment this to always open the first product
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-6 shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full p-6 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <div className="flex items-center text-left">
          <img src={brand.logo} alt={`${brand.name} Logo`} className="h-12 object-contain mr-4 md:mr-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{brand.name}</h2>
        </div>
        <svg
          className={`w-8 h-8 text-brand-blue transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px]' : 'max-h-0'} overflow-hidden`}
      >
        <div className="p-4 sm:p-6 bg-brand-bg-light border-t border-gray-200">
          {brand.products.map((product, index) => (
            <ProductAccordionItem
              key={product.name}
              product={product}
              isOpen={openProductIndex === index}
              onClick={() => handleProductToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const Products: React.FC = () => {
  const [openBrandId, setOpenBrandId] = useState<string | null>(null);
  const location = useLocation();
  const brandRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Open the first brand by default on initial load if no hash is present
  useEffect(() => {
    if (!location.hash && NAV_MENU_BRANDS.length > 0) {
      setOpenBrandId(NAV_MENU_BRANDS[0].id);
    }
  }, []);

  // Handle opening brand and scrolling based on URL hash changes (from header nav)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && brandRefs.current[hash]) {
      setOpenBrandId(hash);
      setTimeout(() => {
        brandRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  const handleBrandToggle = (brandId: string) => {
    setOpenBrandId(openBrandId === brandId ? null : brandId);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-brand-bg-light py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Products & Brands</h1>
          <p className="max-w-3xl mx-auto text-brand-text-light">
            We offer a wide range of high-quality industrial automation products from the world's leading manufacturers. Explore our catalog by brand.
          </p>
        </div>
      </section>

      {/* Main Content: Nested Accordions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {NAV_MENU_BRANDS.map((brand) => (
              // FIX: The ref callback should not return a value. Changed to a block statement to ensure a void return, resolving the type error.
              <div key={brand.id} id={brand.id} ref={el => { brandRefs.current[brand.id] = el; }}>
                <BrandAccordionItem 
                  brand={brand}
                  isOpen={openBrandId === brand.id}
                  onClick={() => handleBrandToggle(brand.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;