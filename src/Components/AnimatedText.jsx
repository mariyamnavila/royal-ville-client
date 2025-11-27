import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "", delay = 0, stagger = 0.05, wordStagger = 0.1 }) => {
    // Parent container variants (for the whole block of text)
    const container = {
        hidden: {},
        visible: {
            transition: {
                // Adjust how words are staggered within the main container
                staggerChildren: wordStagger,
                delayChildren: delay
            }
        },
    };

    // Word container variants (for each individual word)
    const wordContainer = {
        hidden: {},
        visible: {
            transition: {
                // Adjust how letters are staggered within each word
                staggerChildren: stagger,
            }
        },
    };

    // Each letter variant
    const letter = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.3 } },
    };

    // Split text into words, then map over them
    return (
        <motion.h2
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            // animates every time in view
            viewport={{ once: false, amount: 0.3 }}
        >
            {text.split(" ").map((word, wordIndex) => (
                // Use a motion div as a container for each word with a right margin for spacing
                <motion.div
                    key={wordIndex}
                    variants={wordContainer}
                    className="inline-block mr-2 mb-1" // Added mr-2 for spacing and overflow-hidden for cleaner entrance
                >
                    {/* Split each word into characters */}
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={letter}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            ))}
        </motion.h2>
    );
};

export default AnimatedText;
