import { motion } from "motion/react";
import { 
  Target, 
  Eye, 
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every delivery handled with meticulous attention to detail and care"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable service you can count on every time"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your needs and satisfaction are at the heart of everything we do"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Optimized routes and processes for fast, effective delivery"
    }
  ];

  const milestones = [
    { year: "2009", title: "Company Founded", description: "TitanFreight established in Sydney" },
    { year: "2012", title: "Fleet Expansion", description: "Doubled our fleet with modern sideloaders" },
    { year: "2016", title: "Interstate Service", description: "Launched comprehensive interstate routes" },
    { year: "2020", title: "Digital Tracking", description: "Introduced real-time GPS tracking" },
    { year: "2024", title: "500+ Monthly", description: "Reached milestone of 500+ monthly deliveries" }
  ];

  const stats = [
    { value: "15+", label: "Years of Excellence", icon: TrendingUp },
    { value: "50+", label: "Expert Drivers", icon: Users },
    { value: "500+", label: "Monthly Deliveries", icon: Award },
    { value: "100%", label: "Client Satisfaction", icon: CheckCircle2 }
  ];

  const team = [
    {
      name: "Michael Chen",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1728039190626-ceea378d0419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbG9naXN0aWNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwMDAwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Sarah Williams",
      role: "Fleet Manager",
      image: "https://images.unsplash.com/photo-1728039190626-ceea378d0419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbG9naXN0aWNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwMDAwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "David Thompson",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1728039190626-ceea378d0419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbG9naXN0aWNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwMDAwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                <span className="text-orange-300 font-medium">Our Story</span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-orange-500">TitanFreight</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Over 15 years of excellence in container transport across Sydney Metro
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white shadow-xl border border-gray-100"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Journey</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2009, TitanFreight has grown from a small local operation to become 
                  one of Sydney's most trusted container transport providers. Our journey has been 
                  driven by a commitment to excellence and customer satisfaction.
                </p>
                <p>
                  We specialize in providing efficient and secure container transport solutions, 
                  with a particular focus on sideloader services and live unloads. Our modern fleet 
                  and team of qualified drivers ensure that every delivery is handled with precision and care.
                </p>
                <p>
                  Today, we proudly serve the entire Sydney Metro area and beyond, handling over 
                  500 deliveries monthly while maintaining our commitment to quality and reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBzeWRuZXklMjBwb3J0fGVufDF8fHx8MTc3MDAwMDgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Container Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide the most efficient, secure, and reliable container transport services 
                in Sydney Metro, ensuring every client receives exceptional service and value through 
                our modern fleet and dedicated team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Australia's leading container transport provider, recognized for innovation, 
                reliability, and customer satisfaction. We aim to set new standards in the logistics 
                industry through continuous improvement and technology adoption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Core Values</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="text-orange-500">Milestones</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-orange-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                      <div className="text-orange-500 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the TitanFreight difference - reliable, efficient, and customer-focused service
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-shadow"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
