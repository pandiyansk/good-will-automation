import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRY_SOLUTIONS, BRAND_PARTNERS, CORE_VALUES, FEATURED_PRODUCTS, CATALOGUE_URL } from '../constants';
import Icon from '../components/Icon';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <section className="bg-brand-blue text-white">
        
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
            <div className="max-w-3xl mx-auto">
                <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  ★ Trusted Industrial Automation Partner
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                  GOODWILL AUTOMATION & SERVICE
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-6">
                  Leading the Charge in Energy & Automation Solutions
                </h2>
                <p className="mb-8 text-white/90">
                  We offer advanced automation products including AC Drives, PLCs, HMIs, Servo Systems, and complete energy solutions tailored for modern industries.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/products" className="bg-white text-brand-blue font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Get Started</span>
                    <Icon name="arrowRight" className="w-5 h-5"/>
                  </Link>
                  <a href={CATALOGUE_URL} download="Goodwill-Automation-And-Service-Catalogue.pdf" className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center space-x-2">
                    <Icon name="download" className="w-5 h-5"/>
                    <span>Download Catalogue</span>
                  </a>
                </div>
            </div>
        </div>
      </section> */}

      <section className="relative text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* 🔹 Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="./public/bg_video/v1.mp4" type="video/mp4" />
          </video>
          {/* 🔹 Overlay tint for opacity */}
          <div className="absolute inset-0 bg-brand-blue/80" />
        </div>

        {/* 🔹 Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 backdrop-blur-sm border border-white/10">
              ★ Trusted Industrial Automation Partner
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              GOODWILL AUTOMATION & SERVICE
            </h1>

            <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-200">
              Leading the Charge in Energy & Automation Solutions
            </h2>

            <p className="mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              We offer advanced automation products including AC Drives, PLCs, HMIs,
              Servo Systems, and complete energy solutions tailored for modern
              industries.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/products" className="bg-white text-brand-blue font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Get Started</span>
                    <Icon name="arrowRight" className="w-5 h-5"/>
              </Link>

              <a
                href={CATALOGUE_URL}
                download="Goodwill-Automation-And-Service-Catalogue.pdf"
                className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              >
                <Icon name="download" download="Goodwill-Automation-And-Service-Catalogue.pdf" className="w-5 h-5" />
                <span>Download Catalogue</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-xl p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 flex items-center justify-center space-x-4">
                      <Icon name="automation" className="w-10 h-10 text-brand-blue"/>
                      <h3 className="text-xl font-semibold text-brand-text">Automation</h3>
                  </div>
                  <div className="p-4 flex items-center justify-center space-x-4 md:border-x">
                      <Icon name="bearings" className="w-10 h-10 text-brand-blue"/>
                      <h3 className="text-xl font-semibold text-brand-text">Bearings</h3>
                  </div>
                  <div className="p-4 flex items-center justify-center space-x-4">
                      <Icon name="pneumatics" className="w-10 h-10 text-brand-blue"/>
                      <h3 className="text-xl font-semibold text-brand-text">Pneumatics</h3>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-24 bg-brand-bg-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Industry Solutions</h2>
          <p className="max-w-3xl mx-auto text-brand-text-light mb-12">
            Comprehensive industrial solutions across multiple verticals, engineered for excellence and built for the future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRY_SOLUTIONS.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left transform hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${solution.iconBgColor}`}>
                  <Icon name={solution.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{solution.title}</h3>
                <p className="text-brand-text-light mb-4">{solution.description}</p>
                <a href="#" className="font-semibold text-brand-blue hover:text-brand-blue-dark flex items-center space-x-2 group">
                  <span>Explore Solutions</span>
                  <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                </a>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-white border-2 border-brand-blue text-brand-blue font-bold py-3 px-8 rounded-md hover:bg-brand-blue hover:text-white transition-all duration-300">
            View All Industries
          </button>
        </div>
      </section>
      
      {/* Trusted Brand Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Trusted Brand Partners</h2>
            <p className="max-w-3xl mx-auto text-brand-text-light mb-12">
              We partner with world-class manufacturers to deliver the finest industrial solutions and components to our customers.
            </p>
          </div>
          <div 
            className="relative w-full overflow-x-hidden group"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
              {/* Duplicate the partners for a seamless loop */}
              {[...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-full">
                        <img src={brand.logo} alt={brand.name} className="h-12 mb-4 object-contain"/>
                        <h4 className="font-semibold text-brand-dark">{brand.name}</h4>
                        <p className="text-sm text-brand-text-light">{brand.description}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-brand-dark text-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="max-w-3xl mx-auto text-gray-300 mb-12">
                Driving industrial transformation through innovation, sustainability, and unwavering commitment to excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {CORE_VALUES.map((value, index) => (
                      <div key={index} className="bg-gray-800 p-8 rounded-lg text-left flex flex-col">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${value.iconBgColor}`}>
                            <Icon name={value.icon} className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                          <p className="text-gray-400 flex-grow">{value.description}</p>
                          <div className={`text-sm font-semibold px-3 py-1 rounded-full mt-6 self-start ${value.tagColor}`}>
                              {value.tag}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Featured Product Lines Section */}
      <section className="py-24 bg-brand-bg-light">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Featured Product Lines</h2>
              <p className="max-w-3xl mx-auto text-brand-text-light mb-12">
                  Discover our comprehensive range of industrial automation and precision engineering solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {FEATURED_PRODUCTS.map((product, index) => (
                      <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left transform hover:-translate-y-2">
                          <h3 className="text-xl font-bold text-brand-dark mb-2">{product.title}</h3>
                          <p className="text-brand-text-light mb-4 text-sm">{product.description}</p>
                          <ul className="space-y-2 mb-6">
                              {product.features.map(feature => (
                                  <li key={feature} className="flex items-center text-sm">
                                      <div className="w-4 h-4 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mr-3 flex-shrink-0">
                                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                      </div>
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                          <a href="#" className="font-semibold text-brand-blue hover:text-brand-blue-dark flex items-center space-x-2 group">
                            <span>Learn More</span>
                            <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                          </a>
                      </div>
                  ))}
              </div>
              <button className="mt-12 bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue-dark transition-all duration-300">
                  View All Products
              </button>
          </div>
      </section>

       {/* Trusted Partner Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2">
                    <span className="inline-block bg-blue-100 text-brand-blue text-sm font-semibold px-4 py-1 rounded-full mb-4">
                        Leading Automation Provider
                    </span>
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Your Trusted Industrial Automation Partner</h2>
                    <p className="text-brand-text-light leading-relaxed mb-6">
                      At Goodwill Automation and Service, we aim to play a vital role in the global supply chain through on-time delivery, cutting-edge technology, and uncompromising quality.
                    </p>
                     <p className="text-brand-text-light leading-relaxed mb-8">
                      We offer a wide range of advanced automation products, including AC Drives, PLCs, HMIs, Servo Systems, and Simotion Controllers, tailored to meet the evolving needs of modern industries.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center mb-8">
                        <div>
                            <p className="text-4xl font-bold text-brand-blue">5+</p>
                            <p className="text-brand-text-light">Expert Team</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-brand-blue">100+</p>
                            <p className="text-brand-text-light">Happy Clients</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-brand-blue">1000+</p>
                            <p className="text-brand-text-light">Product Lines</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/about" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue-dark transition-all duration-300">About Our Company</Link>
                        <Link to="/contact" className="bg-white border-2 border-gray-300 text-brand-text font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300">Get in Touch</Link>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="bg-brand-bg-light p-10 rounded-xl text-center max-w-sm">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                            <Icon name="award" className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">Industry Recognition</h3>
                        <p className="text-brand-text-light">
                            Recognized as a leading industrial automation solutions provider with ISO certifications and industry awards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;