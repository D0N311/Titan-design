import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const heroImage = 'https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwcGluZyUyMHBvcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzcwMDA2OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+61 2 1234 5678',
      subInfo: 'Mon-Fri: 7am-7pm',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@titanfreight.com.au',
      subInfo: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Transport Way',
      subInfo: 'Sydney NSW 2000, Australia',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Monday - Friday: 7am - 7pm',
      subInfo: 'Saturday: 8am - 4pm',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Get In <span className="text-orange-600">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Have a question or need a quote? We're here to help. Reach out and let's discuss your transport needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{item.info}</p>
                <p className="text-gray-600 text-sm">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Request a <span className="text-orange-600">Free Quote</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours with a competitive quote tailored to your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Fast Response Time</div>
                    <div className="text-gray-600">We aim to respond within 2 hours during business hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Competitive Pricing</div>
                    <div className="text-gray-600">Get the best rates for your container transport needs</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">No Obligation</div>
                    <div className="text-gray-600">Free quotes with no commitment required</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="p-8 bg-gray-50 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                      placeholder="+61 4XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="sideloader">Sideloader Services</option>
                      <option value="fcl">Full Container Load (FCL)</option>
                      <option value="lcl">Less Than Container Load (LCL)</option>
                      <option value="live-unload">Live Unload Services</option>
                      <option value="general-cartage">General Cartage</option>
                      <option value="interstate">Interstate Transport</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your transport needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Find <span className="text-orange-600">Our Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our Sydney headquarters or reach out online
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-orange-600 mx-auto mb-4" size={64} />
                <div className="text-2xl font-bold text-gray-800 mb-2">Titan Freight Headquarters</div>
                <div className="text-gray-600 text-lg">123 Transport Way, Sydney NSW 2000</div>
                <div className="text-gray-600">Australia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What areas do you service?',
                answer: 'We primarily service the Sydney Metro area, including Newcastle, Wollongong, and the Central Coast. We also provide interstate transport to major cities including Melbourne, Brisbane, Adelaide, and Canberra.',
              },
              {
                question: 'How quickly can you respond to a booking?',
                answer: 'We can typically accommodate bookings within 24-48 hours. For urgent requests, we offer expedited services - contact us directly to discuss your timeline.',
              },
              {
                question: 'Do you provide insurance coverage?',
                answer: 'Yes, all our services include comprehensive cargo insurance. Your shipment is fully protected throughout the entire transport process.',
              },
              {
                question: 'Can I track my shipment?',
                answer: 'Absolutely! We provide real-time tracking for all shipments. You\'ll receive regular updates and can monitor your cargo\'s progress at any time.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 flex items-start">
                  <span className="text-orange-600 mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-6">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
