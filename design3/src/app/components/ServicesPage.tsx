import { motion } from 'motion/react';
import { Truck, Package, MapPin, Clock, Shield, CheckCircle, ArrowRight, Container, Boxes } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const heroImage = 'https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwcGluZyUyMHBvcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzcwMDA2OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080';
  const warehouseImage = 'https://images.unsplash.com/photo-1768796373360-95d80c5830fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMDY5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080';
  const truckImage = 'https://images.unsplash.com/photo-1765140308975-c61d0850dd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjB0cmFuc3BvcnQlMjBkZWxpdmVyeXxlbnwxfHx8fDE3NzAwMDY5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080';
  const containersImage = 'https://images.unsplash.com/photo-1760566050127-d8c22131df32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGNvbnRhaW5lcnMlMjBzdGFja2VkJTIwcG9ydHxlbnwxfHx8fDE3NzAwMDY5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080';
  const forkliftImage = 'https://images.unsplash.com/photo-1768796372629-a4e7db99e474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMG9wZXJhdGlvbnN8ZW58MXx8fHwxNzcwMDA2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080';
  const containerYardImage = 'https://images.unsplash.com/photo-1769144256227-5185141c3aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjB5YXJkJTIwYWVyaWFsfGVufDF8fHx8MTc3MDAwNjkwNXww&ixlib=rb-4.1.0&q=80&w=1080';

  const mainServices = [
    {
      icon: Container,
      title: 'Sideloader Container Services',
      description: 'Specialized ground-level container loading and unloading with precision delivery. Our sideloaders can access tight spaces and deliver containers without the need for overhead clearance.',
      image: containersImage,
      features: [
        'Ground-level access for easy loading',
        'No crane required for delivery',
        'Precise container positioning',
        'Ideal for tight spaces and locations',
      ],
    },
    {
      icon: Truck,
      title: 'Full Container Load (FCL)',
      description: 'Complete container transport for your exclusive use. Perfect for large shipments that fill an entire container, providing maximum security and efficiency for your cargo.',
      image: heroImage,
      features: [
        'Exclusive container use',
        'Maximum cargo security',
        'Direct delivery to destination',
        'Cost-effective for bulk shipments',
      ],
    },
    {
      icon: Boxes,
      title: 'Less Than Container Load (LCL)',
      description: 'Share container space with other shipments for smaller loads. Perfect for businesses that don\'t need a full container, reducing costs while maintaining quality service.',
      image: containerYardImage,
      features: [
        'Cost-effective for small loads',
        'Flexible scheduling options',
        'Shared container space',
        'No minimum quantity required',
      ],
    },
    {
      icon: Clock,
      title: 'Live Unload Services',
      description: 'Real-time tracking and immediate unloading operations. Our professional team stays with your shipment throughout the entire unloading process to ensure efficiency and care.',
      image: forkliftImage,
      features: [
        'Real-time shipment monitoring',
        'Immediate unloading upon arrival',
        'Professional cargo handling',
        'Time-sensitive delivery options',
      ],
    },
    {
      icon: MapPin,
      title: 'General Cartage',
      description: 'Comprehensive freight solutions for all your transport needs. From palletized goods to oversized cargo, we handle everything with expertise and care.',
      image: truckImage,
      features: [
        'Versatile cargo handling',
        'Local and interstate routes',
        'Palletized goods transport',
        'Flexible scheduling',
      ],
    },
    {
      icon: Package,
      title: 'Interstate Transport',
      description: 'Reliable long-distance freight services connecting Sydney to major cities across Australia. Our modern fleet ensures your cargo arrives safely and on schedule.',
      image: warehouseImage,
      features: [
        'Nationwide coverage network',
        'Modern, well-maintained fleet',
        'Regular scheduled services',
        'Express delivery options',
      ],
    },
  ];

  const serviceFeatures = [
    { icon: Shield, title: 'Fully Insured', description: 'Comprehensive cargo insurance' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance' },
    { icon: CheckCircle, title: 'Quality Assured', description: 'ISO certified operations' },
    { icon: Truck, title: 'Modern Fleet', description: 'Latest equipment & technology' },
  ];

  const coverage = [
    'Sydney Metro',
    'Newcastle',
    'Wollongong',
    'Central Coast',
    'Melbourne',
    'Brisbane',
    'Adelaide',
    'Canberra',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Services"
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
              Our <span className="text-orange-600">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Comprehensive container transport and logistics solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              What We <span className="text-orange-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional transport solutions for every logistics need
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="text-orange-600 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-orange-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality and reliability in every delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Service <span className="text-orange-600">Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver across Sydney and major cities throughout Australia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverage.map((location, index) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              >
                <MapPin className="text-orange-600 flex-shrink-0" size={24} />
                <span className="font-semibold text-lg">{location}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="text-orange-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple and efficient process from quote to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request Quote', description: 'Tell us your shipping needs' },
              { step: '02', title: 'Get Pricing', description: 'Receive competitive rates' },
              { step: '03', title: 'Schedule Pickup', description: 'Choose date and time' },
              { step: '04', title: 'Track & Deliver', description: 'Monitor in real-time' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden bg-orange-600 rounded-3xl p-12 md:p-16 text-center">
            <div className="relative z-10">
              <Package className="text-white mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free quote and experience the Titan Freight difference
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us Now</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
