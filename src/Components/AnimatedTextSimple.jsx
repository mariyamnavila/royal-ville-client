// AnimatedTextSimple.jsx
import { motion } from "framer-motion";

export default function AnimatedTextSimple({ children, delay = 0, yOffset = 40 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            style={{ display: "inline-block" }}
        >
            {children}
        </motion.div>
    );
}
