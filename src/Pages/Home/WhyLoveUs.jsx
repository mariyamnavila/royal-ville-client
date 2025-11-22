import { motion, useScroll, useTransform } from 'motion/react';
import whyLoveUs1 from '../../assets/whyLoveUs1.jpg';
import whyLoveUs2 from '../../assets/whyLoveUs2.jpg';
import whyLoveUs3 from '../../assets/whyLoveUs3.jpg';
import WhyLoveUsCard from '../../Components/WhyLoveUsCard';
import { useRef } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const arrayOfCardInfo = [
    {
        image: whyLoveUs1,
        text: '“Royal Ville gave us exactly what we needed. The rooms were calm and beautifully arranged, with every detail adding to the comfort. It felt refreshing, peaceful, and truly memorable—definitely a place we’d choose again.”',
        name: "Ariana Malik",
        position: 'Travel Photographer'
    },
    {
        image: whyLoveUs2,
        text: '“Our stay at Royal Ville was exceptional. The warm ambiance and elegant design made the space feel both cozy and luxurious. Everything was thoughtfully prepared, and we left already planning our next visit.”',
        name: "Daniel Lee",
        position: 'Hospitality Blogger'
    },
    {
        image: whyLoveUs3,
        text: '“Royal Ville exceeded our expectations. The soft lighting, clean layout, and little touches made the experience feel special. It was relaxing, inspiring, and the kind of stay we’d happily return to anytime.”',
        name: "Sophia Carter",
        position: 'Interior Designer'
    },
]


const WhyLoveUs = () => {
    const targetRef = useRef()
    const { size } = useWindowSize()


    const disableAnimation = size.width < 1024; // disable below laptop

    if (disableAnimation) {
        return (
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-2.5">
                    <p className="text-primary text-xl">Voices of Satisfaction</p>
                    <h3 className="text-neutral text-4xl elegant font-bold">Why Travelers Love Us</h3>
                </div>

                <div className="flex flex-col gap-10 mt-10">
                    {arrayOfCardInfo.map((card, index) => (
                        <WhyLoveUsCard key={index} card={card} />
                    ))}
                </div>
            </div>
        );
    }

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const viewportHeight = size.height;
    const cardScroll = viewportHeight;     // one card = one full screen scroll
    const headerHeight = viewportHeight * 0.6; // header scroll length

    // Header animation
    const headerScale = useTransform(
        scrollYProgress,
        [0, headerHeight / (headerHeight + cardScroll * arrayOfCardInfo.length)],
        [1, 0.75]
    );

    const headerOpacity = useTransform(
        scrollYProgress,
        [0, headerHeight / (headerHeight + cardScroll * arrayOfCardInfo.length)],
        [1, 0]
    );

    // const cardAnimations = arrayOfCardInfo.map((_, i) => {
    //     const start = (headerHeight + i * cardScroll) /
    //         (headerHeight + cardScroll * arrayOfCardInfo.length - 100);

    //     const end = (headerHeight + (i + 1) * cardScroll) /
    //         (headerHeight + cardScroll * arrayOfCardInfo.length - 100);

    //     return {
    //         scale: useTransform(scrollYProgress, [start, end], [1, 0.85]),
    //         opacity:
    //             i === arrayOfCardInfo.length - 1
    //                 ? useTransform(scrollYProgress, [start, end], [0, 1])
    //                 : useTransform(scrollYProgress, [start, end], [1, 0]),
    //     };
    // });


    return (
        <div ref={targetRef} className="max-w-7xl mx-auto relative">
            <motion.div
                style={{ scale: headerScale, opacity: headerOpacity }}
                // style={{ scale: animation[0].scale, opacity: animation[0].opacity }} 
                className=" text-center sticky top-0 space-y-2.5">
                <p className="text-primary text-xl">Voices of Satisfaction</p>
                <h3 className="text-neutral text-5xl elegant font-bold">Why Travelers Love Us</h3>
            </motion.div>
            <div className='flex flex-col mt-14 relative'>
                {arrayOfCardInfo.map((card, i) => {
                    // const isLast = i === arrayOfCardInfo.length - 1;
                    return (
                        <div
                            key={i}
                            className="sticky top-20 h-[400px] flex justify-center"
                            // style={{
                            //     scale: isLast ? 1 : cardAnimations[i].scale,   
                            //     opacity: cardAnimations[i].opacity,            
                            // }}
                        >
                            <WhyLoveUsCard card={card} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyLoveUs;