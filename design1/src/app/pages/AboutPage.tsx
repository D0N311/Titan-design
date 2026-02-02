import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";

export function AboutPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const missionInView = useInView(missionRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Reliability",
      description:
        "We deliver on our promises, every single time. Your cargo is our commitment.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description:
        "Industry-leading safety standards ensure your goods are protected throughout transit.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Care",
      description:
        "Your success is our success. We go above and beyond to exceed expectations.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Continuous improvement and innovation drive our service quality.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Foundation",
      description:
        "Titan Freight established with a vision to revolutionize container transport in Sydney.",
    },
    {
      year: "2014",
      title: "Fleet Expansion",
      description:
        "Invested in modern sideloader technology and expanded our vehicle fleet.",
    },
    {
      year: "2018",
      title: "Interstate Services",
      description:
        "Extended operations to cover interstate routes across Australia.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Recognized as Sydney's premier logistics partner with 500+ monthly deliveries.",
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
              About Titan Freight
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Trust Through
              <span className="text-[#FB8B24]"> Exceptional Service</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              For over 15 years, we've been Sydney's trusted partner in
              logistics, delivering excellence with every shipment and building
              lasting relationships with our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0A2463] to-[#1e3a8a] p-10 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FB8B24]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FB8B24] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-200 leading-relaxed">
                  To provide efficient, secure, and reliable container transport
                  solutions that empower businesses to thrive. We are committed
                  to delivering exceptional service through precision, safety,
                  and innovation in every shipment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#FB8B24] to-[#e87a15] p-10 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-white/90 leading-relaxed">
                  To be recognized as Australia's premier logistics partner,
                  setting industry standards for quality, reliability, and
                  customer satisfaction. We envision a future where our
                  innovative solutions drive success for businesses nationwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              Our Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#FB8B24]/10 rounded-xl flex items-center justify-center text-[#FB8B24] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3">
              15 Years of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#FB8B24]/20 md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-20 flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-80 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FB8B24]/20 hover:border-[#FB8B24] transition-colors duration-300`}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#FB8B24] text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {item.year.slice(-2)}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A2463]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute top-6 left-4 md:left-1/2 w-4 h-4 bg-[#FB8B24] rounded-full md:-translate-x-1/2 border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#FB8B24] font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mt-3 mb-6">
                Driven by Passionate Professionals
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our success is built on the expertise and dedication of our
                qualified drivers and logistics professionals. Every team member
                is committed to delivering excellence and ensuring your cargo
                reaches its destination safely and on time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FB8B24]" />
                  <span className="text-gray-700">
                    Licensed and certified drivers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FB8B24]" />
                  <span className="text-gray-700">
                    Continuous training programs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FB8B24]" />
                  <span className="text-gray-700">
                    24/7 customer support team
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXJzJTIwb2NlYW58ZW58MXx8fHwxNzcwMDA3OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Shield(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
