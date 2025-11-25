import { MdArrowOutward } from "react-icons/md";
import AnimatedText from "../../Components/AnimatedText";


const Banner = () => {
    return (
        <div className="bg-[url('./assets/banner.jpg')] bg-center bg-cover">
            <div className="bg-linear-to-b from-black to-[#0000008e]">
                <div className="pt-[200px] pb-[260px] max-w-7xl mx-auto">
                    <h5 className="text-white text-2xl elegant">Discover refined comfort in an elegant space.</h5>
                    <AnimatedText
                        text={'Comfort Awaits'}
                        className="text-white text-7xl elegant mt-9"
                    />
                    <AnimatedText
                        text={'Reserve Your Room Now'}
                        className="text-white text-7xl elegant mb-9"
                        delay={0.3}
                    />
                    <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-black mr-3 py-7 px-7">
                        <span className="absolute inset-0 bg-[#FAF7F2] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350 "></span>
                        <span className="relative z-10 flex items-center">Book Today <MdArrowOutward className="text-xl ml-3" /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;