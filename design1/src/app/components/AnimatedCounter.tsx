import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}
