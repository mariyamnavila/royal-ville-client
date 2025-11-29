import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import AnimatedText from "../../Components/AnimatedText";
import AnimatedTextSimple from "../../Components/AnimatedTextSimple";
import { myBookingPromise } from "../../api/myBookingApi";
import MyBookingList from "./MyBookingList";
import Loader from '../Loader/Loader';
const MyBookings = () => {
    const { user } = useAuth();

    // const handleUpdateBooking = (id,startDate,endDate) => {
    //     const bookedDates = getDatesInRange(startDate, endDate);
    //     // Future implementation for updating booking dates
    //     document.getElementById(`my_updateModal_${id}`).showModal()
    //     axios.patch(`http://localhost:3000/rooms/${id}`)
    //         .then(response => {
    //             // Handle response
    //         })
    //         .catch(error => {
    //             console.error('There was an error updating the booking!', error);
    //         });
    // }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-2.5 mt-12 mb-16">
                <div className="text-primary text-xl"><AnimatedTextSimple>Your Stays, Your Memories</AnimatedTextSimple></div>
                <AnimatedText
                    text={"Check all your booked rooms in one place. Relax, enjoy, and make every stay memorable."}
                    className="text-neutral text-5xl md:w-5/6 mx-auto elegant font-bold"
                />
            </div>
            <Suspense fallback={<Loader />}>
                <MyBookingList
                    myBookingPromise={myBookingPromise(user?.email)}
                >
                </MyBookingList>
            </Suspense>
        </div>
    );
};

export default MyBookings;