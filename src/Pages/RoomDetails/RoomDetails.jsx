import { Link, useLoaderData } from "react-router-dom";
import bed from '../../assets/bed.png';
import availableSVG from '../../assets/svg/available.svg';
import unavailableSVG from '../../assets/svg/unavailable.svg';
import { MdPersonAddAlt1 } from "react-icons/md";
import AnimatedTextSimple from "../../Components/AnimatedTextSimple";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io";

const RoomDetails = () => {
    const room = useLoaderData();
    const { roomName,
        image,
        pricePerNight,
        features,
        description,
        guestCapacity,
        bedType,
        availability,
        reviews } = room;

    const latestReviews = reviews ? [...reviews].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) : [];
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-16 space-y-4">
                <h5 className="text-lg">ROOM DETAILS OF</h5>
                <div className="text-primary text-4xl font-bold">
                    <AnimatedTextSimple>
                        {roomName}
                    </AnimatedTextSimple>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <img className="w-full h-[470px] object-cover rounded-lg" src={image} alt="" />
            </div>
            <div className="">
                <div className="flex justify-center items-center gap-5 mt-10 mb-6">
                    <img className="w-8" src={bed} alt="" />
                    <p className="">{bedType}</p>
                </div>
                <p className="text-center mx-auto text-info mb-10 md:w-2/3">{description}</p>
                <button className="btn relative block mx-auto overflow-hidden group bg-primary border border-primary text-white mb-14">
                    <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                    <span className="relative z-10">Book Now</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:mb-28">
                <div className="bg-secondary p-12 space-y-4">
                    <p className="text-3xl font-semibold mb-7">Features</p>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full"></span>
                            <p>{feature}</p>
                        </div>
                    ))}
                    <div className="pt-3 mb-3">
                        <p className="text-3xl font-semibold mb-3 ">Guest Capacity</p>
                        <p className="mb-4 flex items-center"><MdPersonAddAlt1 className="text-2xl mr-2" /> {guestCapacity} Guests</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold pt-3 mb-3">Availability</p>
                        <p className="flex items-center">
                            <img src={availability === 'available' ? availableSVG : unavailableSVG} className="w-5 mr-2" />
                            {availability}
                        </p>
                    </div>
                    <div className="pt-3 text-3xl">
                        <p><span className=" font-semibold">Price: </span>{pricePerNight}$/Night</p>
                    </div>
                </div>
                <div className="p-12  border border-primary/50 ">
                    <p className="text-3xl font-semibold mb-9">Any Questions</p>
                    <div className="space-y-6 bg-success">
                        <div className="relative overflow-visible w-full">
                            <input type="text" id="name" placeholder="" className="peer w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-primary transition-all" />
                            <label htmlFor="name" className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-success px-1">Name</label>
                        </div>
                        <div className="relative overflow-visible w-full">
                            <input type="text" id="number" placeholder="" className="peer w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-primary transition-all" />
                            <label htmlFor="number" className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-success px-1">Phone Number</label>
                        </div>
                        <div className="relative overflow-visible w-full">
                            <input type="text" id="email" placeholder="" className="peer w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-primary transition-all" required />
                            <label htmlFor="email" className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-success px-1">Email</label>
                        </div>
                        <div className="relative overflow-visible w-full">
                            <textarea id="message" className="peer w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-primary transition-all" placeholder=""></textarea>
                            <label htmlFor="message" className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-success px-1">Message</label>
                        </div>
                        <button className="btn relative overflow-hidden group bg-primary border border-primary text-white mb-14">
                            <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                            <span className="relative z-10">Send Message</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="relative">
                    <p className="text-4xl font-semibold mb-9">Reviews</p>
                    <div className="">
                        {/* Custom Prev Button */}
                        <button
                            className="swiper-button-prev-custom absolute right-14 top-0 w-10 h-10 flex justify-center items-center rounded-full bg-primary backdrop-blur"
                        >
                            <IoIosArrowBack />
                        </button>

                        {/* Custom Next Button */}
                        <button
                            className="swiper-button-next-custom absolute right-2 top-0 w-10 h-10 flex justify-center items-center rounded-full bg-primary backdrop-blur"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>
                <div className="mx-1">
                    {reviews && reviews.length > 0 ? (
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".swiper-button-prev-custom",
                                nextEl: ".swiper-button-next-custom",
                            }}
                            onInit={(swiper) => {
                                // IMPORTANT: re-init navigation after custom elements exist
                                swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
                                swiper.params.navigation.nextEl = ".swiper-button-next-custom";
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            loop={true}
                            className="mySwiper"
                        >
                            {latestReviews?.map((review, index) => (
                                <SwiperSlide key={index} >
                                    <ReviewCard review={review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <p className="text-center text-base-300 min-h-screen items-center justify-center">No reviews available.</p>
                    )}
                </div>
                <Link to={'/'}>
                    <button className="btn relative overflow-hidden group bg-primary border border-primary text-white mb-14 mt-10">
                        <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                        <span className="relative z-10 flex items-center"> <IoIosArrowRoundBack className="text-2xl mr-3" />Back to Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RoomDetails;