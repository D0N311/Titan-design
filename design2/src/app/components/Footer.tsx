import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Titan<span className="text-orange-500">Freight</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering efficient and secure container transport solutions
              across Sydney Metro area with precision and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" },
                { path: "/privacy", label: "Privacy Policy" },
                { path: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Container Transport</li>
              <li>Sideloader Services</li>
              <li>Live Unloads</li>
              <li>General Cartage</li>
              <li>Interstate Routes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-orange-500 flex-shrink-0" />
                <span>Sydney Metro Area, NSW</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+61234567890"
                  className="hover:text-orange-500 transition-colors"
                >
                  +61 2 3456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@titanfreight.com.au"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@titanfreight.com.au
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 TitanFreight. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-orange-500 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
