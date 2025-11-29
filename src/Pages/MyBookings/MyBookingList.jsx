import axios from "axios";
import { use, useState } from "react";
import Swal from "sweetalert2";
import BookedCard from "./BookedCard";


const MyBookingList = ({ myBookingPromise }) => {
    const initialBookings = use(myBookingPromise)
    const [bookedRooms, setBookedRooms] = useState(initialBookings);

    const handleCancelBooking = (id, disabledDates,customerId) => {

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
                            handleCancelBooking={handleCancelBooking}
                        // handleUpdateBooking={handleUpdateBooking}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingList;