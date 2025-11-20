import Marquee from "react-fast-marquee";
import { MdArrowOutward, MdOutlineBedroomChild } from "react-icons/md";
import journal1 from '../../assets/newsletterBg.jpg';
import journal2 from '../../assets/Reason1.jpg';
import journal3 from '../../assets/Reason2.jpg';
import { GoArrowRight } from "react-icons/go";

const Journal = () => {
    return (
        <div>
            <div >
                <Marquee pauseOnHover={true} speed={100} className="pt-4 pb-12">
                    <h1 className="text-[#b99d75] text-8xl flex mr-6 "><MdOutlineBedroomChild className='mr-6' /> Luxury hotel & Resort</h1>
                    <h1 className="text-[#b99d75] text-8xl flex mr-6 "><MdOutlineBedroomChild className='mr-6' /> Luxury hotel & Resort</h1>
                    <h1 className="text-[#b99d75] text-8xl flex mr-6 "><MdOutlineBedroomChild className='mr-6' /> Luxury hotel & Resort</h1>
                    <h1 className="text-[#b99d75] text-8xl flex mr-6 "><MdOutlineBedroomChild className='mr-6' /> Luxury hotel & Resort</h1>
                </Marquee>
            </div>
            <div className="bg-[#f8eeda] py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-6">
                    <div className="space-y-2.5 md:w-4/5">
                        <p className="text-primary text-xl">our Guide to Luxury Travel</p>
                        <h3 className="text-neutral text-5xl elegant font-bold ">From Our Journal: Travel Tips, Stories & More</h3>
                    </div>
                    <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-black mr-3 py-7 px-7 hover:text-success">
                        <span className="absolute inset-0 bg-neutral transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350 "></span>
                        <span className="relative z-10 flex items-center">Book Today <MdArrowOutward className="text-xl ml-3" /></span>
                    </button>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                    {/* grid-1 */}
                    <div className="col-span-2 row-span-4 border border-primary rounded-xl p-7">
                        <div>
                            <div className="flex gap-3 text-xs items-center">
                                <p className="bg-primary px-4 py-1 rounded-full font-medium text-[14px]">02 Apr 2021</p>
                                <p >Comments (03)</p>
                            </div>
                            <h4 className="hover:text-primary transition duration-500 ease-in-out text-2xl mt-4 mb-7">
                                Inside tales of serene escapes, crafted from stays that linger long after checkout.
                            </h4>
                            <div className="flex items-center group">
                                <p className="group-hover:text-primary transition duration-500 ease-in-out text-xs mr-2">Read More</p>
                                <div className="rounded-full border border-base-200 group-hover:bg-primary p-1 transition duration-500 ease-in-out">
                                    <GoArrowRight className="text-[14px]" />
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-hidden rounded-xl mt-5">
                            <img className="w-full lg:h-[300px] hover:scale-115 transform transition duration-300 object-cover" src={journal1} alt="" />
                        </div>
                    </div>
                    {/* grid-2 */}
                    <div className="col-span-2 row-span-2 border border-primary rounded-xl px-7 py-7  flex flex-col md:flex-row items-center gap-4">
                        <div className=" overflow-hidden rounded-xl">
                            <img className="h-fit md:h-full w-full md:w-[300px] hover:scale-115 transform transition duration-300 object-cover" src={journal2} alt="" />
                        </div>
                        <div>
                            <div className="flex gap-3 text-xs items-center">
                                <p className="bg-primary px-4 py-1 rounded-full font-medium text-[14px]">02 Apr 2021</p>
                                <p >Comments (03)</p>
                            </div>
                            <h4 className="hover:text-primary transition duration-500 ease-in-out text-2xl mt-4 mb-7">
                                Inside tales of serene escapes, crafted from stays that linger long after checkout.
                            </h4>
                            <div className="flex items-center group">
                                <p className="group-hover:text-primary transition duration-500 ease-in-out text-xs mr-2">Read More</p>
                                <div className="rounded-full border border-base-200 group-hover:bg-primary p-1 transition duration-500 ease-in-out">
                                    <GoArrowRight className="text-[14px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* grid-3 */}
                    <div className="col-span-2 row-span-2 border border-primary rounded-xl px-7 py-7 flex flex-col md:flex-row items-center gap-4">
                        <div className=" overflow-hidden rounded-xl">
                            <img className="h-fit md:h-full w-full md:w-[300px] hover:scale-115 transform transition duration-300 object-cover" src={journal3} alt="" />
                        </div>
                        <div>
                            <div className="flex gap-3 text-xs items-center">
                                <p className="bg-primary px-4 py-1 rounded-full font-medium text-[14px]">02 Apr 2021</p>
                                <p >Comments (03)</p>
                            </div>
                            <h4 className="hover:text-primary transition duration-500 ease-in-out text-2xl mt-4 mb-7">
                                Inside tales of serene escapes, crafted from stays that linger long after checkout.
                            </h4>
                            <div className="flex items-center group">
                                <p className="group-hover:text-primary transition duration-500 ease-in-out text-xs mr-2">Read More</p>
                                <div className="rounded-full border border-base-200 group-hover:bg-primary p-1 transition duration-500 ease-in-out">
                                    <GoArrowRight className="text-[14px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journal;