import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail('');
  };

  const footerLinks = {
    company: [
      { name: 'Home', path: 'home' },
      { name: 'About Us', path: 'about' },
      { name: 'Services', path: 'services' },
      { name: 'Contact', path: 'contact' },
    ],
    services: [
      { name: 'Freight Forwarding', path: 'services' },
      { name: 'Supply Chain', path: 'services' },
      { name: 'Container Clearance', path: 'services' },
      { name: 'Warehouse', path: 'services' },
    ],
    support: [
      { name: 'Help Center', path: 'contact' },
      { name: 'Track Shipment', path: 'contact' },
      { name: 'Get Quote', path: 'contact' },
      { name: 'FAQ', path: 'contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-2">Subscribe for Newsletter</h3>
              <p className="text-gray-400">Get the latest updates and offers</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubscribe}
              className="flex gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-white placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <Send size={20} />
                <span>Subscribe</span>
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TF</span>
                </div>
                <span className="text-2xl font-bold">
                  TITAN<span className="text-orange-600">FREIGHT</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted logistics partner delivering efficient and secure container transport solutions across Sydney and beyond since 2008.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} className="text-orange-600" />
                  <span>+61 2 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} className="text-orange-600" />
                  <span>info@titanfreight.com.au</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} className="text-orange-600" />
                  <span>123 Transport Way, Sydney NSW 2000</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Titan Freight. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
