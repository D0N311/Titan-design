import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Container,
  Truck,
  MapPin,
  Package,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";

export function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Container className="w-12 h-12" />,
      title: "Full Container Loads (FCL)",
      description:
        "Complete container transport solutions for your full loads. Perfect for businesses with large shipments requiring dedicated container space.",
      features: [
        "20ft and 40ft containers available",
        "Door-to-door delivery",
        "Real-time GPS tracking",
        "Secure and sealed transport",
      ],
      image: "https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXJzJTIwb2NlYW58ZW58MXx8fHwxNzcwMDA3OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Less Than Container Load (LCL)",
      description:
        "Cost-effective partial container solutions for smaller shipments. Share container space and pay only for what you need.",
      features: [
        "Flexible volume options",
        "Consolidated shipping",
        "Regular departure schedules",
        "Competitive pricing",
      ],
      image: "https://images.unsplash.com/photo-1628097045676-97212b505372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwc2hpcHBpbmclMjBjb250YWluZXJ8ZW58MXx8fHwxNzcwMDA3OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Sideloader Services",
      description:
        "Specialized ground-level loading and unloading with our modern sideloader fleet. Ideal for sites without loading bays or limited access.",
      features: [
        "No crane required",
        "Ground-level access",
        "Precise positioning",
        "Minimal site disruption",
      ],
      image: "https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydCUyMGhpZ2h3YXl8ZW58MXx8fHwxNzcwMDA3OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Live Unload Services",
      description:
        "Expert handling and unloading at destination with experienced crew. We ensure your cargo is handled with care from truck to warehouse.",
      features: [
        "Professional unloading crew",
        "Careful cargo handling",
        "Documentation support",
        "Immediate issue resolution",
      ],
      image: "https://images.unsplash.com/photo-1536607278842-2e762f290252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwbG9hZGluZ3xlbnwxfHx8fDE3NzAwMDc5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Interstate Routes",
      description:
        "Comprehensive interstate transport connecting Sydney with major cities across Australia. Reliable schedules and competitive rates.",
      features: [
        "Sydney to Melbourne/Brisbane",
        "Regular departure times",
        "Express delivery options",
        "Interstate tracking",
      ],
      image: "https://images.unsplash.com/photo-1633614384570-bb3948f32a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjB0ZXJtaW5hbCUyMHBvcnR8ZW58MXx8fHwxNzcwMDA3OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "General Cartage",
      description:
        "Versatile transport solutions for various cargo types across Sydney Metro. From pallets to machinery, we handle it all.",
      features: [
        "Flexible vehicle options",
        "Local and regional delivery",
        "Same-day service available",
        "Specialized cargo handling",
      ],
      image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBtb2Rlcm58ZW58MXx8fHwxNzY5OTgzNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Request Quote",
      description: "Contact us with your shipment details and receive a competitive quote within hours.",
    },
    {
      step: "02",
      title: "Schedule Pickup",
      description: "Choose a convenient pickup time and we'll coordinate with your team.",
    },
    {
      step: "03",
      title: "Secure Transport",
      description: "Your cargo is loaded securely and transported with real-time tracking.",
    },
    {
      step: "04",
      title: "Safe Delivery",
      description: "Professional delivery with documentation and proof of delivery.",
    },
  ];

  const faqs = [
    {
      question: "What areas do you service?",
      answer:
        "We primarily service the Sydney Metro area with full container and partial load services. Our interstate routes connect Sydney with Melbourne, Brisbane, and other major Australian cities.",
    },
    {
      question: "Do you provide real-time tracking?",
      answer:
        "Yes, all our vehicles are equipped with GPS tracking. You'll receive updates throughout the journey and can track your shipment in real-time through our customer portal.",
    },
    {
      question: "What types of containers can you transport?",
      answer:
        "We handle both 20ft and 40ft containers for FCL shipments. For LCL, we accommodate various cargo sizes and can provide detailed specifications based on your requirements.",
    },
    {
      question: "How do sideloader services work?",
      answer:
        "Our sideloaders can load and unload containers at ground level without requiring cranes or loading bays. This is perfect for sites with limited access or space constraints.",
    },
    {
      question: "Are your services insured?",
      answer:
        "Yes, all our transport services include comprehensive insurance coverage. We can provide additional coverage options based on your cargo value and requirements.",
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633614384570-bb3948f32a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjB0ZXJtaW5hbCUyMHBvcnR8ZW58MXx8fHwxNzcwMDA3OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-[#FB8B24]/20 backdrop-blur-sm border border-[#FB8B24]/30 rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="text-[#FB8B24]"> Logistics Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From full container loads to specialized sideloader services, we
              offer complete transport solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3">
              Complete Transport Solutions
            </h2>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-[#FB8B24]/10 rounded-2xl flex items-center justify-center text-[#FB8B24] mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#0A2463] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FB8B24] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-[#FB8B24] text-white rounded-full font-semibold hover:bg-[#e87a15] transition-colors space-x-2"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/50 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3">
              Simple & Efficient Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-6xl font-bold text-[#FB8B24]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#FB8B24]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#0A2463]">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#FB8B24]" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a free quote and experience the Titan Freight
              difference
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#FB8B24] text-white rounded-full font-semibold hover:bg-[#e87a15] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 space-x-2"
            >
              <span>Get Your Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
