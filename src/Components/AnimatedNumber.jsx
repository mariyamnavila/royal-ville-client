import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ n }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (val) => Math.floor(val));

  useEffect(() => {
    const controls = animate(motionVal, n, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [n,motionVal]);

  return <motion.div ref={ref}>{rounded}</motion.div>;
};

export default AnimatedNumber