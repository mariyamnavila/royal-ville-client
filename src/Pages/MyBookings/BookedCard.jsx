import { MdOutlineBedroomChild, MdOutlineDescription, MdOutlineReviews } from "react-icons/md";
import { TbHomeCancel } from "react-icons/tb";
import { MdOutlineUpdate } from "react-icons/md";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";
import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";

const BookedCard = ({ room, handleCancelBooking, handleUpdateBooking, handleReview }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const maxLength = 180;
    const { user } = useAuth();
    const { _id: roomId, roomName, description, pricePerNight, image, disabledDates, customersDetails } = room;

    const userBookingInfo = customersDetails?.find(details => details.customer_email === user.email) || {};

    const { _id: customerId, checkInDate, checkOutDate, specificBookedDates } = userBookingInfo

    const [selectedDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    if (checkInDate && !selectedDate) {
        setStartDate(new Date(checkInDate));
    }
    if (checkOutDate && !endDate) {
        setEndDate(new Date(checkOutDate));
    }


    const mainDisabledDates = disabledDates?.map(dateStr => new Date(dateStr));
    const bookedDates = specificBookedDates?.map(dateStr => new Date(dateStr));
    const removeBookedDatesFromDisabled = mainDisabledDates?.filter(date =>
        !bookedDates?.some(bookedDate => bookedDate.getTime() === date.getTime())
    );

    // console.log(mainDisabledDates);
    // console.log(bookedDates);
    // console.log(removeBookedDatesFromDisabled);

    return (
        <div className="p-5 flex flex-col-reverse md:flex-row justify-evenly items-stretch border border-base-200 rounded-lg hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col grow">
                <h2 className="text-2xl font-bold mt-1 mb-4 flex items-center gap-2 text-[#ab8132]"><MdOutlineBedroomChild /> {roomName}</h2>
                <p className="text-base-300 mb-4 w-5/6 flex"> {description}</p>
                <p className="text-lg font-semibold text-info">Price : {pricePerNight}$/Night</p>
                <button
                    onClick={() => document.getElementById(`my_updateModal_${roomId}`).showModal()}
                    className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white mt-4 w-fit flex gap-2 items-center">
                    <MdOutlineUpdate className="text-xl" />
                    Update Booking Date
                </button>
                {/* update modal content start */}
                <dialog id={`my_updateModal_${roomId}`} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box space-y-3">
                        <div>
                            <img className="w-full h-[300px] object-cover relative top-5 rounded-lg" src={image} alt="" />
                        </div>
                        <h3 className="font-semibold text-xl text-center mt-8">Update booking date for <br /> <span className="text-primary">{roomName}</span></h3>
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
                                    excludeDates={removeBookedDatesFromDisabled}
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
                                    excludeDates={removeBookedDatesFromDisabled}
                                    className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="modal-action w-full mt-3 mb-3 h-[50px]">
                            <form method="dialog" className="w-full">
                                {/* if there is a button in form, it will close the modal */}
                                {/* <button className="btn">Close</button> */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <button
                                    onClick={() => handleUpdateBooking(roomId, selectedDate, endDate, removeBookedDatesFromDisabled, customerId)}
                                    className="btn relative block mx-auto overflow-hidden group bg-primary border border-primary text-white mb-14 w-full mt-3">
                                    <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                                    <span className="relative z-10">Update</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
                {/* update modal content end */}
                <button
                    onClick={() => document.getElementById(`my_reviewModal_${roomId}`).showModal()}
                    className="btn btn-outline border-2 border-[#658fde] text-[#658fde] hover:bg-[#658fde] hover:text-white mt-4 w-fit flex gap-2 items-center ">
                    <MdOutlineReviews className="text-xl" />
                    Give Review
                </button>
                {/* give review modal content start */}
                <dialog id={`my_reviewModal_${roomId}`} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box space-y-3">
                        <h3 className="font-semibold text-xl text-center mt-8">Give review for <br /> <span className="text-primary">{roomName}</span></h3>
                        {/* <p className="text-info text-[14px] text-center">{description}</p>
                        <p className="text-info text-center">Price: <span className="font-medium">{pricePerNight}$/night</span></p> */}
                        <form onSubmit={(e) => handleReview(e, rating, roomId, user.photoURL)}>
                            <fieldset className="w-full">
                                <label className="px-1 text-lg text-info">Name</label>
                                <input readOnly value={user.displayName || ''} type="text" name="username" placeholder="" className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-primary mt-2 mb-2 text-black" />
                            </fieldset>
                            <fieldset className="w-full">
                                <label className="px-1 text-lg text-info">Comment</label>
                                <input
                                    type="text" onChange={(e) => setComment(e.target.value)}
                                    maxLength={maxLength}
                                    name="comment"
                                    placeholder="Your comment"
                                    className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-primary bg-white mt-2 mb-2" 
                                    required/>
                            </fieldset>
                            <div className="text-right text-sm text-gray-500 mt-1">
                                {comment.length} / {maxLength} characters
                            </div>
                            <fieldset className="w-full flex flex-col">
                                <label className="px-1 text-lg text-info">Rating</label>
                                <div className="flex gap-2">
                                    <Rating
                                        className="mt-2"
                                        emptySymbol={<GoStar className="text-2xl text-base-200" />}
                                        fullSymbol={<GoStarFill className='text-2xl text-primary' />}
                                        fractions={4}
                                        onChange={(value) => setRating(value)}
                                    />
                                </div>
                            </fieldset>
                            <button
                                type="submit"
                                className="btn relative block mx-auto overflow-hidden group bg-primary border border-primary text-white w-full mt-3">
                                <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                                <span className="relative z-10">Submit Review</span>
                            </button>
                        </form>
                        <div className="modal-action mt-0">
                            <form method="dialog" className="w-full">
                                {/* if there is a button in form, it will close the modal */}
                                {/* <button className="btn">Close</button> */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                {/* give review modal content end */}
                <button
                    onClick={() => handleCancelBooking(roomId, removeBookedDatesFromDisabled, customerId)}
                    className="btn btn-outline border-2 border-accent hover:bg-accent hover:text-white text-accent mt-4 w-fit flex gap-2 items-center">
                    <TbHomeCancel className="text-xl" />
                    Cancel
                </button>
            </div>
            <div className="shrink-0 md:w-1/4">
                <img src={image} alt={roomName} className="w-full h-full object-cover rounded-lg " />
            </div>
        </div>
    );
};

export default BookedCard;