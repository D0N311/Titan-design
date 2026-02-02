import { motion } from "motion/react";
import { 
  Package, 
  Truck, 
  Clock, 
  MapPin, 
  CheckCircle2,
  Shield,
  Zap,
  Target,
  Users,
  Award,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const mainServices = [
    {
      icon: Package,
      title: "Container Transport",
      description: "Comprehensive container transport solutions for both full and partial loads across the Sydney Metro area.",
      features: [
        "20ft and 40ft container handling",
        "Full and partial load options",
        "Door-to-door delivery",
        "Express services available",
        "Temperature-controlled options"
      ],
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1735047970672-2d83d2850d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGNvbnRhaW5lciUyMHBvcnR8ZW58MXx8fHwxNzcwMDAwNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Truck,
      title: "Sideloader Services",
      description: "Specialized sideloader equipment for precise ground-level container delivery with minimal site requirements.",
      features: [
        "Ground-level delivery",
        "Minimal space requirements",
        "No crane needed",
        "Quick turnaround times",
        "Suitable for tight spaces"
      ],
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjb250YWluZXIlMjB0cnVjayUyMGhpZ2h3YXl8ZW58MXx8fHwxNzcwMDAwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Clock,
      title: "Live Unloads",
      description: "Real-time unloading services ensuring minimal waiting time and maximum operational efficiency.",
      features: [
        "On-site unloading supervision",
        "Real-time progress tracking",
        "Minimal waiting time",
        "Efficient cargo handling",
        "Same-day service available"
      ],
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1759272548470-d0686d071036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwcGluZyUyMGxvZ2lzdGljcyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzAwMDA3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: MapPin,
      title: "General Cartage & Interstate",
      description: "Comprehensive general cartage services covering local and interstate routes with our modern fleet.",
      features: [
        "Sydney Metro coverage",
        "Interstate transport",
        "Regular scheduled runs",
        "Flexible routing options",
        "Dedicated customer support"
      ],
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1753579167765-d88ba3719f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cnVjayUyMGZsZWV0JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzcwMDAwNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage for complete peace of mind"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient routes and scheduling for quick turnaround"
    },
    {
      icon: Target,
      title: "Precision Handling",
      description: "Careful handling with attention to every detail"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified drivers with years of experience"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Consistently high standards across all operations"
    },
    {
      icon: TrendingUp,
      title: "Reliable Fleet",
      description: "Modern, well-maintained vehicles for dependability"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full">
                <span className="text-orange-300 font-medium">What We Offer</span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive container transport solutions designed to meet all your logistics needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className={`absolute top-6 left-6 p-4 rounded-xl bg-gradient-to-br ${service.color}`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-orange-500">Services</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your specific requirements and receive a tailored quote
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-shadow"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
