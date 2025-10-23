import React from 'react';
import { INDUSTRIES_SERVED } from '../constants';
import Icon from '../components/Icon';

const Industries: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-brand-bg-light py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Industries We Serve</h1>
          <p className="max-w-3xl mx-auto text-brand-text-light">
            Delivering specialized automation and energy solutions across diverse industries with over 30 years of expertise and innovation.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIES_SERVED.map((industry) => (
              <div key={industry.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon name={industry.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{industry.title}</h3>
                <p className="text-brand-text-light text-sm mb-4 flex-grow">{industry.description}</p>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Key Applications:</h4>
                  <ul className="space-y-2">
                    {industry.keyApplications.map((app) => (
                      <li key={app} className="flex items-start text-sm text-brand-text-light">
                        <span className="text-brand-blue mr-2 mt-1">&#8226;</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-8">
            Let our experts help you find the perfect automation and energy solutions for your specific industry needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-brand-blue font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-all duration-300">
              Contact Our Experts
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white/20 transition-all duration-300">
              Find Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
