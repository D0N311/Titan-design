import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "BuildCo Construction",
    text: "Titan Freight has been our go-to logistics partner for 3 years. Their sideloader services are exceptional, and they always deliver on time.",
    rating: 5,
  },
  {
    name: "James Thompson",
    company: "Metro Imports Pty Ltd",
    text: "Outstanding service! The team handles our containers with such care and professionalism. Highly recommend for anyone needing reliable transport.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    company: "Coastal Manufacturing",
    text: "We've tried several logistics companies, but Titan Freight stands out. Their communication is excellent and pricing is competitive.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    company: "Sydney Wholesale Hub",
    text: "The live unload service saved us so much time and hassle. Professional crew and modern equipment. Will definitely use again!",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (currentIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="relative h-80 flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
              <Quote className="w-12 h-12 text-[#FB8B24] mb-6" />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0A2463] text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FB8B24] text-[#FB8B24]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0A2463] hover:bg-[#FB8B24] hover:text-white transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0A2463] hover:bg-[#FB8B24] hover:text-white transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-[#FB8B24] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
