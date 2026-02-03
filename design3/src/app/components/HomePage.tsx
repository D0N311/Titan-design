import { motion } from "motion/react";
import {
  ArrowRight,
  Package,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Truck,
  MapPin,
} from "lucide-react";
import myImage from "@/assets/Titan+Freight+TF-image-sWOvgOOFk1g.webp";
interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroImage =
    "https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwcGluZyUyMHBvcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzcwMDA2OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080";
  const warehouseImage =
    "https://images.unsplash.com/photo-1768796373360-95d80c5830fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMDY5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const truckImage =
    "https://images.unsplash.com/photo-1765140308975-c61d0850dd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjB0cmFuc3BvcnQlMjBkZWxpdmVyeXxlbnwxfHx8fDE3NzAwMDY5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const containersImage =
    "https://images.unsplash.com/photo-1760566050127-d8c22131df32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGNvbnRhaW5lcnMlMjBzdGFja2VkJTIwcG9ydHxlbnwxfHx8fDE3NzAwMDY5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const forkliftImage =
    "https://images.unsplash.com/photo-1768796372629-a4e7db99e474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMG9wZXJhdGlvbnN8ZW58MXx8fHwxNzcwMDA2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080";
  const containerYardImage =
    "https://images.unsplash.com/photo-1769144256227-5185141c3aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjB5YXJkJTIwYWVyaWFsfGVufDF8fHx8MTc3MDAwNjkwNXww&ixlib=rb-4.1.0&q=80&w=1080";

  const showcaseItems = [
    {
      image: truckImage,
      title: "Interstate Transport",
      badge: "New",
    },
    {
      image: containersImage,
      title: "Container Solutions",
      badge: "Popular",
    },
    {
      image: forkliftImage,
      title: "Warehouse Services",
      badge: "Featured",
    },
  ];

  const clients = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    },
    {
      name: "DHL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/200px-DHL_Logo.svg.png",
    },
  ];

  const services = [
    {
      title: "Freight Forwarding",
      description:
        "Comprehensive freight forwarding solutions tailored to your business needs. We handle all aspects of your shipment from pickup to final delivery, ensuring seamless logistics across Sydney and beyond.",
      image: heroImage,
      features: [
        "Door-to-door delivery",
        "Real-time tracking",
        "Customs clearance",
        "Competitive rates",
      ],
    },
    {
      title: "Supply Chain Management",
      description:
        "Optimize your supply chain with our expert management services. From inventory control to distribution planning, we ensure your goods move efficiently and cost-effectively.",
      image: containerYardImage,
      features: [
        "Inventory management",
        "Route optimization",
        "Cost reduction",
        "Performance analytics",
      ],
    },
    {
      title: "Container Clearance",
      description:
        "Fast and efficient container clearance services. Our experienced team handles all documentation and compliance requirements, getting your cargo moving without delays.",
      image: containersImage,
      features: [
        "Quick processing",
        "Documentation support",
        "Compliance expertise",
        "24/7 availability",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager, Tech Solutions Co.",
      content:
        "Titan Freight has been instrumental in streamlining our logistics. Their reliability and professionalism are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Supply Chain Director, Retail Group",
      content:
        "Outstanding service every time. The team goes above and beyond to ensure our shipments arrive on schedule.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Coordinator, Manufacturing Inc.",
      content:
        "Their attention to detail and customer service excellence sets them apart from other freight companies.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1M+", label: "Deliveries Made" },
    { value: "8K+", label: "Happy Customers" },
    { value: "50K+", label: "Containers Moved" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={myImage}
            alt="Container Shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              RELIABLE LOGISTICS FOR GROWING BRANDS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Efficient and secure container transport solutions across Sydney
              and beyond
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => onNavigate("contact")}
              className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Logistics. Where Your World Moves Seamlessly with
              Expert Logistics
            </h2>
          </motion.div>

          {/* Showcase Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to serve some of Australia's biggest names in retail,
              logistics, and commerce.
            </p>
          </motion.div>

          {/* Static Logo Grid */}
          <div className="flex justify-center items-center gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-64 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={warehouseImage}
            alt="Warehouse"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              There are a Logistics create,
              <br />
              Sustainable. Work.
            </h2>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-orange-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate("services")}
                  className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Clients' <span className="text-orange-600">Testimonials</span>
              . Every Shipment to a Prove Worldwide
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-orange-500 fill-orange-500"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <div className="grid md:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative py-24 overflow-hidden bg-orange-600"
        >
          <div className="relative z-10 max-w-xl mx-auto px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Streamline Your Logistics
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get started with efficient container transport solutions today
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative py-24 overflow-hidden bg-gray-900"
        >
          <div className="relative z-10 max-w-xl mx-auto px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Drive Without Limits</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our team of qualified drivers and grow your career
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
