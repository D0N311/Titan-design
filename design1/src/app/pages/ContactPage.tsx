import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true });
  const infoInView = useInView(infoRef, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "1300 TITAN",
      subdetails: "Mon-Fri: 7am - 6pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@titanfreight.com.au",
      subdetails: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Sydney Metro Area",
      subdetails: "NSW, Australia",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 7:00 AM - 6:00 PM",
      subdetails: "Sat: 8:00 AM - 2:00 PM",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-[#0A2463] to-[#1e3a8a] text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633614384570-bb3948f32a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjB0ZXJtaW5hbCUyMHBvcnR8ZW58MXx8fHwxNzcwMDA3OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-bottom" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-[#FB8B24]/20 backdrop-blur-sm border border-[#FB8B24]/30 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start
              <span className="text-[#FB8B24]"> Your Journey</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to experience reliable logistics services? Contact us today
              for a free quote or to discuss your transport needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-[#0A2463] mb-2">
                  Request A Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you shortly
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll contact you
                      soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FB8B24] focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FB8B24] focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FB8B24] focus:outline-none transition-colors"
                          placeholder="0400 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FB8B24] focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FB8B24] focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="fcl">Full Container Load (FCL)</option>
                        <option value="lcl">
                          Less Than Container Load (LCL)
                        </option>
                        <option value="sideloader">Sideloader Services</option>
                        <option value="live-unload">Live Unload</option>
                        <option value="interstate">Interstate Routes</option>
                        <option value="general">General Cartage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FB8B24] focus:outline-none transition-colors resize-none"
                        placeholder="Please provide details about your shipment requirements..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-[#FB8B24] text-white rounded-lg font-semibold hover:bg-[#e87a15] transition-colors flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={
                infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FB8B24] rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A2463] mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-500">
                          {info.subdetails}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 bg-gradient-to-br from-[#0A2463] to-[#1e3a8a] p-8 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-3">Need Urgent Help?</h3>
                <p className="text-gray-200 mb-6">
                  Call us directly for immediate assistance with your shipment
                </p>
                <a
                  href="tel:1300TITAN"
                  className="inline-block w-full py-3 bg-[#FB8B24] text-white text-center rounded-lg font-semibold hover:bg-[#e87a15] transition-colors"
                >
                  Call Now: 1300 TITAN
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              Our Service Area
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3 mb-4">
              Serving Sydney Metro & Beyond
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive logistics services across Sydney Metro
              area with interstate routes to major Australian cities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-gray-200"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A2463]/10 to-[#FB8B24]/10">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FB8B24] mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                  Interactive map showing service area
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
