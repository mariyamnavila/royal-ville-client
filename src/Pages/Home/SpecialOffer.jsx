import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import offer1 from '../../assets/offer1.jpg';
import offer2 from '../../assets/offer2.jpg';
import offer3 from '../../assets/offer3.jpg';

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from 'react';

const SpecialOffer = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    const handleOffer = () => {
        document.getElementById('my_modal_2').showModal()
    }

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            if (isInView) {
                controls.start("animate");
            } else {
                controls.start("initial");  // re-animate when scrolling back
            }
        }
    }, [isInView, controls])

    const divVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",       // ← smooth spring
                stiffness: 100,       // controls speed
                damping: 20,          // controls smoothness
                delay: i * 0.35       // stagger delay
            }
        })
    };

    const offers = [
        {
            img: offer1,
            label: "Family Escape Package",
            discount: "save 40%",
            textPadding: "px-20 py-[30px]",
            textRotate: "rotate-270",
            discountRotate: "-rotate-45",
            textTop: "top-[132px]",
            textLeft: "-left-[135px]",
            discountTop: "top-5"
        },
        {
            img: offer2,
            label: "Romantic Couple Package",
            discount: "save 40%",
            textPadding: "px-[67px] py-[30px]",
            textRotate: "rotate-270",
            discountRotate: "-rotate-45",
            textTop: "top-[132px]",
            textLeft: "-left-[135px]",
            discountTop: "top-5"
        },
        {
            img: offer3,
            label: "Honeymoon Special",
            discount: "save 40%",
            textPadding: "px-[94px] py-[30px]",
            textRotate: "rotate-270",
            discountRotate: "-rotate-45",
            textTop: "top-[132px]",
            textLeft: "-left-[135px]",
            discountTop: "top-5"
        }
    ];


    return (
        <div className="max-w-7xl mx-auto">
            <div className="pl-7 space-y-2.5 pb-10 bg-success">
                <p className="text-primary text-xl">Committed to Excellence</p>
                <h3 className="text-neutral text-5xl elegant font-bold">Get Our Special Offer</h3>
            </div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <DotLottieReact
                        src="https://lottie.host/44b4945f-c5d6-4631-880e-57d52c46ffbe/dukusQjtMK.lottie"
                        loop
                        autoplay
                    />
                    <h3 className="font-bold text-lg text-center">Congratulation!</h3>
                    <p className="py-4 text-center">You have got 40% discount</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-7 mb-20 z-30">
                {offers.map((offer, i) => (
                    <motion.div
                        key={i}
                        className="relative overflow-hidden"
                        custom={i}
                        variants={window.innerWidth >= 1024 ? divVariants : {}}
                        initial="initial"
                        animate={controls}
                    >
                        <img className="h-[350px] w-full object-cover " src={offer.img} alt="" />
                        <div
                            onClick={() => handleOffer()}
                            className={`absolute text-center ${offer.textPadding} ${offer.textRotate} ${offer.textTop} ${offer.textLeft} bg-white font-medium z-10 hover:bg-primary hover:link transition duration-500 ease-in-out`}
                        >
                            <p>{offer.label}</p>
                        </div>
                        <div className={`bg-primary px-20 py-1 absolute ${offer.discountRotate} ${offer.discountTop} z-0`}>
                            <p>{offer.discount}</p>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    );
};

export default SpecialOffer;