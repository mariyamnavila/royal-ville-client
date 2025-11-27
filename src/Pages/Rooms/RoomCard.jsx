import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {
    const { roomName, image, description, reviews } = room;

    return (
        <Link to={`/rooms/${room._id}`}>
            <div className=" p-6 flex flex-col border border-primary/60 rounded-lg hover:shadow-md transform transition duration-300 hover:-translate-y-1">
                <div className="overflow-hidden rounded-lg">
                    <img className="w-full h-[250px] object-cover rounded-lg hover:scale-115 transform transition duration-350" src={image} alt="" />
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold mt-4 text-center text-primary">{roomName}</h3>
                    <p className="my-2 text-base-300 text-[14px]">{description}</p>
                    <div className="flex justify-between items-center pt-2">
                        <p className="text-info">Total Reviews: {reviews?.length}</p>
                        <p className="text-lg font-semibold text-[#deb465]">${room.pricePerNight} / night</p>
                    </div>
                    {/* <button className="btn relative overflow-hidden group bg-primary border border-primary text-white mt-2 w-full">
                        <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-350"></span>
                        <span className="relative z-10">Book Now</span>
                    </button> */}
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;