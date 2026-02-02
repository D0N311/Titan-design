import { motion } from 'motion/react';
import { Award, Users, Target, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

export function AboutPage() {
  const heroImage = 'https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwcGluZyUyMHBvcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzcwMDA2OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080';
  const warehouseImage = 'https://images.unsplash.com/photo-1768796373360-95d80c5830fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMDY5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080';

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the security of your cargo above all else with comprehensive insurance and careful handling.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Reliability is our commitment. We ensure your shipments arrive exactly when promised.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction drives everything we do. We provide personalized service for every client.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every delivery, maintaining the highest industry standards.',
    },
  ];

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '1M+', label: 'Shipments Delivered' },
    { value: '8K+', label: 'Happy Customers' },
    { value: '100%', label: 'On-Time Delivery' },
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform container logistics' },
    { year: '2012', title: 'Fleet Expansion', description: 'Grew to 50+ vehicles serving the Sydney region' },
    { year: '2018', title: 'Interstate Operations', description: 'Expanded coverage to all major Australian cities' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as Sydney\'s premier logistics provider' },
  ];

  const features = [
    'Modern fleet with latest technology',
    'Qualified and experienced drivers',
    'Real-time tracking systems',
    'Comprehensive cargo insurance',
    '24/7 customer support',
    'Competitive pricing',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Titan Freight"
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
              About <span className="text-orange-600">Titan Freight</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Delivering excellence in container transport since 2008
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our Mission: <span className="text-orange-600">Connecting Businesses</span> Through Reliable Transport
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Titan Freight, we're committed to delivering efficient and secure container transport solutions. Our mission is to provide exceptional logistics services that help businesses thrive in the Sydney Metro area and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a modern fleet, qualified drivers, and cutting-edge technology, we ensure your cargo reaches its destination safely and on time, every time.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-orange-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={warehouseImage}
                  alt="Warehouse Operations"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
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
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-5xl font-bold text-orange-600 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Core <span className="text-orange-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-orange-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-5xl font-bold text-orange-600 mb-4">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Leadership <span className="text-orange-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts driving Titan Freight forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Michael Chen', role: 'CEO & Founder', experience: '20+ years in logistics' },
              { name: 'Sarah Williams', role: 'Operations Director', experience: 'Supply chain expert' },
              { name: 'David Thompson', role: 'Fleet Manager', experience: 'Vehicle optimization specialist' },
              { name: 'Emily Rodriguez', role: 'Customer Relations', experience: 'Client satisfaction leader' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
