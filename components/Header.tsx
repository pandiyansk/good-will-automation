import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS, NAV_MENU_BRANDS, CONTACT_INFO, CATALOGUE_URL } from '../constants';
import { NavBrand } from '../types';
import Icon from './Icon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState<NavBrand | null>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    if (!activeBrand) {
      setActiveBrand(NAV_MENU_BRANDS[0]);
    }
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setActiveBrand(null);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-sm text-brand-text-light hidden md:block">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="phone" className="w-4 h-4" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="email" className="w-4 h-4" />
              <span>{CONTACT_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue"><Icon name="whatsapp" className="w-5 h-5" /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue"><Icon name="instagram" className="w-5 h-5" /></a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-blue"><Icon name="email" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
              {/* Logo Image replacing the "G" */}
              <img
                src="./pages/public/brand/Logo_nav.jpg"  // 🔹 update with your actual logo path
                alt="Goodwill Automation Logo"
                className="w-10 h-10 rounded-md object-contain bg-white p-1"
              />

              {/* Text Part */}
              <span className="text-xl font-bold text-brand-dark leading-tight">
                Goodwill<br />
                <span className="text-sm font-normal text-brand-text-light -mt-1 block">
                  Automation & Service
                </span>
              </span>
            </NavLink>


          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Products & Brands') {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-medium hover:text-brand-blue transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-brand-blue after:transition-transform after:duration-300 flex items-center gap-1 ${isActive || isDropdownOpen ? 'text-brand-blue after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`
                      }
                    >
                      <span>{link.name}</span>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </NavLink>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden flex animate-fade-in-down" style={{ minWidth: '700px' }}>
                        {/* Brands Column */}
                        <div className="w-1/3 bg-gray-50/70 border-r border-gray-200">
                          <div className="p-4 font-semibold text-brand-dark border-b border-gray-200">Explore by Brand</div>
                          <ul>
                            {NAV_MENU_BRANDS.map((brand) => (
                              <li key={brand.id}>
                                <Link 
                                  to={`/products#${brand.id}`}
                                  onMouseEnter={() => setActiveBrand(brand)}
                                  className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${activeBrand?.id === brand.id ? 'bg-blue-100 text-brand-blue font-semibold' : 'hover:bg-gray-100 text-brand-text'}`}
                                >
                                  <span>{brand.name}</span>
                                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Products Column */}
                        <div className="w-2/3 p-6">
                          {activeBrand && (
                            <div>
                              <Link to={`/products#${activeBrand.id}`} className="flex items-center gap-4 mb-6 group">
                                <img src={activeBrand.logo} alt={`${activeBrand.name} logo`} className="h-8 object-contain" />
                                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{activeBrand.name} Products</h3>
                              </Link>
                              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                                {activeBrand.products.map((product) => (
                                  <li key={product.name}>
                                    <span className="block text-sm text-brand-text-light">{product.name}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium hover:text-brand-blue transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-brand-blue after:transition-transform after:duration-300 ${isActive ? 'text-brand-blue after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href={CATALOGUE_URL} download="Goodwill-Automation-And-Service-Catalogue.pdf" className="bg-brand-blue text-white font-semibold py-2 px-5 rounded-md hover:bg-brand-blue-dark transition-colors duration-300">
              Get Catalogue
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mt-4 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 text-base rounded ${isActive ? 'bg-brand-blue text-white' : 'text-brand-dark hover:bg-gray-100'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t my-2"></div>
             <a href={CATALOGUE_URL} download="Goodwill-Automation-And-Service-Catalogue.pdf" className="bg-brand-blue text-white text-center font-semibold py-2 px-5 rounded-md hover:bg-brand-blue-dark transition-colors duration-300">
              Get Catalogue
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;