import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ n }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });

  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (val) => Math.floor(val));

  useEffect(() => {
    let controls;

    if (isInView) {
      // 👇 animate 0 → n when visible
      controls = animate(motionVal, n, {
        duration: 2,
        ease: "easeOut",
      });
    } else {
      // 👇 reset to 0 when invisible (so it can restart next time)
      motionVal.set(0);
    }

    return () => controls?.stop();
  }, [isInView, n, motionVal]);

  return <motion.div ref={ref}>{rounded}</motion.div>;
};

export default AnimatedNumber;
