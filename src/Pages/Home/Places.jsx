import diningArea from '../../assets/diningArea.jpg';
import swimmingPool from '../../assets/swimmingPool.jpg';
import fitnessCenter from '../../assets/fitnessCenter.jpg';
import spa from '../../assets/spa.jpg';
import playArea from '../../assets/playArea.jpg';

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedTextSimple from '../../Components/AnimatedTextSimple';
import AnimatedText from '../../Components/AnimatedText';

const Places = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            if (isInView) {
                controls.start("animate");
            } else {
                controls.start("initial");  // re-animate when scrolling back
            }
        }
    }, [isInView, controls])

    const cardVariants = {
        initial: (i) => ({
            opacity: 0,
            scale: 0.4,
            x: 0,
            y: 0,
            rotate: (i - 2) * 20, // small rotations so stacked cards look like petals
        }),
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.45,
                duration: 3
            }
        }
    };

    const cards = [
        { img: diningArea, label: "Dining Area" },
        { img: swimmingPool, label: "Swimming Pool" },
        { img: fitnessCenter, label: "Fitness Center" },
        { img: spa, label: "Spa" },
        { img: playArea, label: "Play Area" },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-2.5">
                <div className="text-primary text-xl"><AnimatedTextSimple>Moments That Make Memories</AnimatedTextSimple></div>
                <AnimatedText
                    text={"We're Dedicated To Providing You Unforgettable Experience. Whether You're Here For Business Or Leisure."}
                    className="text-neutral text-5xl md:w-2/3 mx-auto elegant font-bold"
                />
                {/* <h3 className="text-neutral text-5xl md:w-4/5 mx-auto elegant font-bold">We're Dedicated To Providing You Unforgettable Experience. Whether You're Here For Business Or Leisure.</h3> */}
            </div>
            <div
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5 mx-7 mb-20 relative "
            >
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={window.innerWidth >= 1024 ? cardVariants : {}}
                        initial="initial"
                        animate={controls}
                        className="bg-white p-3 rounded-xl relative"
                    >
                        <img className="h-60 object-cover rounded-xl" src={card.img} />
                        <p className="text-center mt-2.5 font-medium">{card.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Places;