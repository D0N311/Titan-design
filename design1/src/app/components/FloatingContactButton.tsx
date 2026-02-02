import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { Link } from "react-router";

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const contactOptions = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      action: () => (window.location.href = "tel:1300TITAN"),
      delay: 0.1,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      action: () => (window.location.href = "mailto:info@titanfreight.com.au"),
      delay: 0.15,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          {/* Contact Options */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-20 right-0 space-y-3"
              >
                {contactOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: option.delay }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    onClick={option.action}
                    className="flex items-center space-x-3 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="w-10 h-10 bg-[#FB8B24] rounded-full flex items-center justify-center text-white">
                      {option.icon}
                    </div>
                    <span className="text-[#0A2463] font-semibold pr-2">
                      {option.label}
                    </span>
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      className="flex items-center space-x-3 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow group w-full"
                    >
                      <div className="w-10 h-10 bg-[#0A2463] rounded-full flex items-center justify-center text-white">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="text-[#0A2463] font-semibold pr-2">
                        Get Quote
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white transition-colors ${
              isOpen ? "bg-red-500" : "bg-[#FB8B24]"
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
