import AnimatedTextSimple from '../../Components/AnimatedTextSimple';
import AnimatedText from '../../Components/AnimatedText';
import { useLoaderData } from 'react-router-dom';
import TopRoomCard from '../../Components/TopRoomCard';

const TopRooms = () => {

    const topRatedRooms = useLoaderData();
    console.log(topRatedRooms);

    return (
        <div className="max-w-7xl mx-auto" id='top'>
            <div className="text-center space-y-2.5">
                <div className="text-primary text-xl"><AnimatedTextSimple>Top Stays, Unforgettable Moments</AnimatedTextSimple></div>
                <AnimatedText
                    text={"Our most-loved rooms, designed for comfort, style, and unforgettable stays."}
                    className="text-neutral text-5xl md:w-4/5 mx-auto elegant font-bold"
                />
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 mx-7">
                {
                    topRatedRooms?.map((room) => <TopRoomCard key={room._id} room={room} />)
                }
            </div>
        </div>
    );
};

export default TopRooms;