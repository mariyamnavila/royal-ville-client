import { Link, useLoaderData, useNavigate } from "react-router-dom";
import bed from '../../assets/bed.png';
import availableSVG from '../../assets/svg/available.svg';
import unavailableSVG from '../../assets/svg/unavailable.svg';
import { MdPersonAddAlt1 } from "react-icons/md";
import AnimatedTextSimple from "../../Components/AnimatedTextSimple";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io";
import { use, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import axios from "axios";

const RoomDetails = () => {

    const [selectedDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const { user } = use(AuthContext);
    const room = useLoaderData();
    const navigate = useNavigate();
    const { _id,
        roomName,
        image,
        pricePerNight,
        features,
        description,
        guestCapacity,
        bedType,
        availability,
        reviews,
        disabledDates } = room;

        const mainDisabledDates = disabledDates.map(dateStr => new Date(dateStr));

    const latestReviews = reviews ? [...reviews].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) : [];

    const handleBookNow = () => {
        if (!user) {
            navigate('/login');
        }
        else {
            document.getElementById(`my_modal_${_id}`).showModal()
        }
        // Further booking logic can be added here
    }

    const getDatesInRange = (startDate, endDate) => {
        const dates = [];
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate)); // store as Date object
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };


    const handleConfirmBooking = () => {
        const bookedDates = getDatesInRange(selectedDate, endDate);

        const updatedDisabledDates = [...(disabledDates || []), ...bookedDates];

        const bookingDetails = {
            customer_email: user.email,
            customer_name: user.displayName,
            checkInDate: selectedDate,
            checkOutDate: endDate,
            availability: 'unavailable',
            disabledDates: updatedDisabledDates,
        };
        axios.patch(`http://localhost:3000/rooms/${_id}`, bookingDetails)
            .then(response => {
                console.log('Booking successful:', response.data);
                Swal.fire({
                    icon: "success",
                    title: "Booked!",
                    text: "Your room has been booked",
                    showConfirmButton: false,
                    timer: 1500,
                    topLayer: true,
                })
            })
            .catch(error => {
                console.error('Error booking the room:', error);
            });
        // Logic to confirm booking can be added here

        console.log(selectedDate, endDate);
    }

console.log(disabledDates);
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
            <div className="max-w-6xl mx-auto overflow-hidden rounded-lg">
                <img className="w-full h-[470px] object-cover rounded-lg hover:scale-115 transform transition duration-450" src={image} alt="" />
            </div>
            <div className="">
                <div className="flex justify-center items-center gap-5 mt-10 mb-6">
                    <img className="w-8" src={bed} alt="" />
                    <p className="">{bedType}</p>
                </div>
                <p className="text-center mx-auto text-info mb-10 md:w-2/3">{description}</p>
                <button onClick={() => handleBookNow()} className="btn relative block mx-auto overflow-hidden group bg-primary border border-primary text-white mb-14">
                    <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                    <span className="relative z-10">Book Now</span>
                </button>
                {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                {/* modal content start */}
                <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box space-y-2">
                        <div>
                            <img className="w-full h-[300px] object-cover relative top-5 rounded-lg" src={image} alt="" />
                        </div>
                        <h3 className="font-semibold text-xl mt-8 text-center">Booking for <span className="text-primary">{roomName}</span></h3>
                        <p className="text-info text-[14px] text-center">{description}</p>
                        <p className="text-info text-center">Price: <span className="font-medium">{pricePerNight}$/night</span></p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <div>
                                <p className="text-info mb-2 font-semibold">Check In Date</p>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={setStartDate}
                                    selectsStart
                                    startDate={selectedDate}
                                    endDate={endDate}
                                    excludeDates={mainDisabledDates}
                                    minDate={new Date()}
                                    className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-primary"
                                />
                            </div>
                            <div>
                                <p className="text-info mb-2 font-semibold">Check Out Date</p>
                                <DatePicker
                                    selected={endDate}
                                    onChange={setEndDate}
                                    selectsEnd
                                    startDate={selectedDate}
                                    endDate={endDate}
                                    minDate={selectedDate}
                                    excludeDates={mainDisabledDates}
                                    className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="modal-action w-full mt-3 mb-3 h-[50px]">
                            <form method="dialog" className="w-full">
                                {/* if there is a button in form, it will close the modal */}
                                {/* <button className="btn">Close</button> */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <button onClick={() => {
                                    handleConfirmBooking();
                                }}
                                    className="btn relative block mx-auto overflow-hidden group bg-primary border border-primary text-white mb-14 w-full mt-3">
                                    <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                                    <span className="relative z-10">Confirm</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
                {/* modal content end */}
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
                <div className="p-12  border-2 border-secondary ">
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
                            modules={[Navigation, Autoplay]}
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
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: true,
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