import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import myImage from "@/assets/Titan+Freight+TF-image-sWOvgOOFk1g.webp";
import {
  Truck,
  Container,
  MapPin,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/pexels-daniel-peterson-286671848-13112845.jpg";
import homeImage from "@/assets/pexels-pat-whelen-2913248-5615436.jpg";
import { TestimonialsCarousel } from "@/app/components/TestimonialsCarousel";

export function HomePage() {
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const whyUsInView = useInView(whyUsRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const services = [
    {
      icon: <Container className="w-12 h-12" />,
      title: "Container Transport",
      description:
        "Full and partial container loads delivered with precision across Sydney Metro area.",
      image:
        "https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXJzJTIwb2NlYW58ZW58MXx8fHwxNzcwMDA3OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Sideloader Services",
      description:
        "Ground-level delivery solutions with modern sideloader technology for safe and efficient loading.",
      image:
        "https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydCUyMGhpZ2h3YXl8ZW58MXx8fHwxNzcwMDA3OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Live Unloads",
      description:
        "Expert live unload services ensuring your cargo is handled with care from start to finish.",
      image:
        "https://images.unsplash.com/photo-1536607278842-2e762f290252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwbG9hZGluZ3xlbnwxfHx8fDE3NzAwMDc5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "General Cartage",
      description:
        "Comprehensive transport solutions for local and interstate routes with qualified drivers.",
      image:
        "https://images.unsplash.com/photo-1628097045676-97212b505372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwc2hpcHBpbmclMjBjb250YWluZXJ8ZW58MXx8fHwxNzcwMDA3OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const stats = [
    { number: "500+", label: "Deliveries Monthly" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "24/7", label: "Customer Support" },
  ];

  const features = [
    {
      icon: <Clock />,
      title: "Timely Delivery",
      text: "On-schedule every time",
    },
    {
      icon: <Shield />,
      title: "Secure Transport",
      text: "Fully insured cargo",
    },
    {
      icon: <Award />,
      title: "Qualified Drivers",
      text: "Expert professionals",
    },
    { icon: <Container />, title: "Modern Fleet", text: "Latest equipment" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${myImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/95 via-[#0A2463]/85 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-[#FB8B24]/20 backdrop-blur-sm border border-[#FB8B24]/30 rounded-full text-sm font-medium">
                Sydney's Trusted Logistics Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Precision in{" "}
              <span className="text-[#FB8B24] relative inline-block">
                Every Shipment
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-2 left-0 right-0 h-1 bg-[#FB8B24] origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Efficient and secure container transport solutions for both full
              and partial loads. Specializing in sideloader services and live
              unloads across Sydney Metro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-[#FB8B24] text-white rounded-full font-semibold hover:bg-[#e87a15] transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#0A2463] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
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
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3 mb-4">
              Logistics Solutions That
              <br />
              Move You Forward
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive transport services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#FB8B24] font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                whyUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
                Why Choose Titan Freight
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3 mb-6">
                Excellence in Every Mile
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over 15 years of experience serving Sydney Metro, we've
                built our reputation on reliability, safety, and customer
                satisfaction. Our modern fleet and qualified drivers ensure your
                cargo arrives on time, every time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      whyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FB8B24]/10 rounded-lg flex items-center justify-center text-[#FB8B24]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2463] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                whyUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={homeImage} className="w-full h-96  object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2463]/30 to-transparent" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={whyUsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-[#FB8B24] text-white p-8 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold mb-1">98%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              Customer Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with
              Titan Freight
            </p>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-20 overflow-hidden bg-[#0A2463]"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBtb2Rlcm58ZW58MXx8fHwxNzY5OTgzNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote today and experience the Titan Freight difference
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#FB8B24] text-white rounded-full font-semibold hover:bg-[#e87a15] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 space-x-2"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
