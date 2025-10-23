import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_QUICK_LINKS } from '../constants';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
                <div className="bg-brand-blue text-white rounded-md p-2 font-bold text-xl">G</div>
                <span className="text-xl font-bold">Goodwill<br/>
                <span className="text-sm font-normal text-gray-400 -mt-1 block">Industrial Solutions</span>
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of industrial automation solutions, bearings, and mechatronics systems. Innovating an extraordinary future with cutting-edge technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-blue"><Icon name="whatsapp" className="w-5 h-5" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-blue"><Icon name="instagram" className="w-5 h-5" /></a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-brand-blue"><Icon name="email" className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map(link => (
                <li key={link.name}>
                  {link.name === 'Download Catalogue' ? (
                    <a href={link.path} download="Goodwill-Automation-And-Service-Catalogue.pdf" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <NavLink to={link.path} className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
                <li>
                  <NavLink to="/contact" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Contact Us</NavLink>
                </li>
            </ul>
          </div>

          {/* Column 3: Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Icon name="mapPin" className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="phone" className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="email" className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-8 mb-4">Newsletter</h3>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-gray-700 w-full rounded-l-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <button type="submit" className="bg-brand-blue rounded-r-md px-4 py-2 font-semibold hover:bg-brand-blue-dark transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Goodwill Automation & Service — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;