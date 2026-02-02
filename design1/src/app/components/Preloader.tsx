import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#0A2463] flex items-center justify-center z-[9999]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-6xl md:text-7xl font-bold text-white">
                    TITAN
                  </span>
                  <div className="flex items-center justify-center mt-1">
                    <span className="text-sm tracking-[0.5em] text-[#FB8B24]">
                      FREIGHT
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="mt-12 flex justify-center space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-[#FB8B24] rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-400 text-sm"
            >
              Loading your logistics solution...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
