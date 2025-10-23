import React from 'react';
import { FOUNDATION_PILLARS, CERTIFICATIONS } from '../constants';
import Icon from '../components/Icon';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* About Us Header */}
      <section className="bg-brand-bg-light py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">About Goodwill Industrial Solutions</h1>
          <p className="max-w-3xl mx-auto text-brand-text-light leading-relaxed">
            For over three decades, we've been at the forefront of industrial automation, helping manufacturers across India optimize their operations and achieve unprecedented levels of efficiency and productivity.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">Our Mission</h2>
            <div className="space-y-6 text-brand-text-light leading-relaxed">
              <p>
                At Goodwill Automation and Service, we aim to play a vital role in the global supply chain through on-time delivery, cutting-edge technology, and uncompromising quality.
              </p>
              <p>
                We offer a wide range of advanced automation products, including AC Drives, PLCs, HMIs, Servo Systems, and Simotion Controllers, tailored to meet the evolving needs of modern industries.
              </p>
              <p>
                As a global leader in industrial sensor technology, we specialize in Factory Automation, delivering flexible, application-specific solutions that ensure operational excellence.
              </p>
            </div>
            <div className="mt-10 text-center">
              <button className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue-dark transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>Partner With Us</span>
                <Icon name="arrowRight" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="py-20 bg-brand-bg-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Foundation</h2>
          <p className="max-w-2xl mx-auto text-brand-text-light mb-12">
            The principles that guide our every decision and action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {FOUNDATION_PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mb-6">
                  <Icon name={pillar.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">{pillar.title}</h3>
                <p className="text-brand-text-light text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications & Recognition Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12">Certifications & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mb-5">
                  <Icon name={cert.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark text-center">{cert.title}</h3>
                <p className="text-brand-text-light text-sm mt-1 text-center">{cert.description}</p>
                 {cert.subtitle && <p className="text-brand-text-light text-xs mt-1 text-center">{cert.subtitle}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;