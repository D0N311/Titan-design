import { motion } from "motion/react";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#0A2463] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="inline-block"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-white">TITAN</span>
            <span className="text-sm tracking-[0.3em] text-[#FB8B24]">
              FREIGHT
            </span>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#FB8B24] rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
