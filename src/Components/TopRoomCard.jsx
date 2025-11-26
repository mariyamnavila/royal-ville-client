import { Link } from "react-router-dom";


const TopRoomCard = ({ room }) => {
    const { roomName, image, description, pricePerNight } = room;
    return (
        <div className="p-6 flex flex-col border border-primary/60 rounded-lg hover:shadow-md transform transition duration-300 hover:-translate-y-1">
            <div>
                <img className="w-full h-[250px] object-cover rounded-lg" src={image} alt="" />
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-bold mt-4 text-center text-primary">{roomName}</h3>
                <p className="my-2 text-base-300 text-[14px]">{description}</p>
                <p className="text-lg text-accent mb-3 font-extrabold">
                    <span className="text-info font-semibold">Price: </span>
                    {pricePerNight}$/Night
                </p>
                <Link to={`/rooms/${room._id}`}>
                    <button className="btn relative w-full overflow-hidden group bg-primary border border-primary text-white">
                        <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                        <span className="relative z-10">Book Now</span>
                    </button>
                </Link>
                {/* <div className="flex items-center justify-between mt-2">
                    <p className="text-accent text-[14px]"><span className="font-medium">Price:</span> {pricePerNight}$/Per Night</p>
                    <Link to={`/rooms/${room._id}`}>
                        <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-white btn-sm">
                            <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                            <span className="relative z-10">Book Now</span>
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default TopRoomCard;