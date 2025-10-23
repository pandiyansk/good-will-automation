import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import Icon from '../components/Icon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/myznqajq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-brand-bg-light py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-brand-text-light">
            We'd love to hear from you. Whether you have a question about our products, need assistance,
            or just want to connect, please feel free to get in touch with our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Info & Map */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Get In Touch</h2>
                <div className="space-y-6 text-brand-text-light">
                  <div className="flex items-start space-x-4">
                    <Icon name="mapPin" className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <p>{CONTACT_INFO.address}</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="phone" className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <p>{CONTACT_INFO.phone}</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="email" className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <p>{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="mt-8 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.966955099042!2d77.82500061481269!3d12.98188169085885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6da2f85496c1%3A0x6b77c3763f350c7c!2sNethaji%20Rd%2C%20Hosur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1628884969245!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-12 bg-gray-50/50">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue-dark transition-colors duration-300 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <p className="text-green-600 font-medium mt-4 text-center">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600 font-medium mt-4 text-center">
                      ❌ Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
