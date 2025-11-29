import axios from "axios";
import { use, useState } from "react";
import Swal from "sweetalert2";
import BookedCard from "./BookedCard";
import getDatesInRange from "../../Components/getDatesInRange";


const MyBookingList = ({ myBookingPromise }) => {
    const initialBookings = use(myBookingPromise)
    const [bookedRooms, setBookedRooms] = useState(initialBookings);

    const handleCancelBooking = (id, disabledDates, customerId) => {

        const afterCancelInfo = {
            availability: 'available',
            disabledDates: disabledDates,
            // customerDetails: customerDetails
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel booking!",
            cancelButtonText: "No, keep it",
        }).then((result) => {

            if (result.isConfirmed) {

                axios.patch(`http://localhost:3000/rooms/${id}`, afterCancelInfo)
                    .then(response => {

                        if (response.data.modifiedCount > 0) {
                            axios.delete(`http://localhost:3000/bookings/${customerId}`)
                                .then(res => {

                                    if (res.data.deletedCount > 0) {
                                        Swal.fire({
                                            title: "Canceled!",
                                            text: "Your booking has been canceled.",
                                            icon: "success"
                                        });
                                    }

                                })
                                .catch(error => {
                                    console.log(error);
                                })
                            const remainingRooms = bookedRooms.filter(room => room._id !== id);
                            setBookedRooms(remainingRooms);
                        }

                    })
                    .catch(error => {
                        console.log('There was an error cancelling the booking!', error);
                    });

            }
        });

    }

    const handleUpdateBooking = (id, startDate, endDate, removeBookedDatesFromDisabled, customerId) => {
        const bookedDates = getDatesInRange(startDate, endDate);

        const updatedDisabledDates = [...(removeBookedDatesFromDisabled || []), ...bookedDates];

        const updateUserDetails = {
            specificBookedDates: bookedDates,
            checkInDate: startDate,
            checkOutDate: endDate
        }

        const updateRoom = {
            availability: 'unavailable',
            disabledDates: updatedDisabledDates
        }

        // Future implementation for updating booking dates
        axios.patch(`http://localhost:3000/rooms/${id}`, updateRoom)
            .then(response => {
                // console.log(response.data);

                if (response.data.modifiedCount > 0) {

                    axios.patch(`http://localhost:3000/bookings/${customerId}`, updateUserDetails)
                        .then(res => {
                            // console.log("PATCH response:", res.data);

                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Date Updated",
                                    text: "Your booking date has been updated",
                                    showConfirmButton: false,
                                    timer: 1500,
                                    topLayer: true,
                                })
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.error('There was an error updating the booking!', error);
            });
    }

    const handleReview = (e, rating, roomId, profilePicture) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form);
        const { username, comment } = Object.fromEntries(formData.entries());
        const timestamp = new Date().toISOString().split('.')[0] + "Z";

        const reviewInfo = {
            roomId: roomId,
            username: username,
            profilePicture: profilePicture,
            rating: rating,
            comment: comment,
            timestamp: timestamp
        }

        axios.post('http://localhost:3000/reviews', reviewInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Review Submitted!",
                        text: "Your Review has been submitted",
                        showConfirmButton: false,
                        timer: 1500,
                        topLayer: true,
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })


        // const { userName, rating, comment, timestamp } = review;
        // console.log(review);
    }

    return (
        <div className="mb-20">
            {/* Booked rooms will be displayed here in the future */}
            {bookedRooms.length === 0 ? (
                <p className="text-center text-2xl flex justify-center items-center min-h-screen">You have no booked rooms.</p>
            ) : (
                <div className="flex flex-col gap-6 mx-7">
                    {bookedRooms?.map((room) => (
                        <BookedCard
                            key={room._id}
                            room={room}
                            handleUpdateBooking={handleUpdateBooking}
                            handleReview={handleReview}
                            handleCancelBooking={handleCancelBooking}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingList;