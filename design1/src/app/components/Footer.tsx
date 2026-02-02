import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2463] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-3xl font-bold">TITAN</span>
              <span className="text-xs tracking-[0.3em] text-[#FB8B24]">
                FREIGHT
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Efficient and secure container transport solutions for Sydney Metro area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#FB8B24] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#FB8B24] transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#FB8B24] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#FB8B24] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Container Transport</li>
              <li>Sideloader Services</li>
              <li>Live Unloads</li>
              <li>Interstate Routes</li>
              <li>General Cartage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#FB8B24] mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Sydney Metro Area, NSW, Australia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#FB8B24] flex-shrink-0" />
                <span className="text-sm text-gray-300">1300 TITAN</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#FB8B24] flex-shrink-0" />
                <span className="text-sm text-gray-300">info@titanfreight.com.au</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-[#FB8B24] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-[#FB8B24] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-[#FB8B24] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-[#FB8B24] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Titan Freight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
