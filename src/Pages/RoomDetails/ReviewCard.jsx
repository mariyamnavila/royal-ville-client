import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";

const ReviewCard = ({review}) => {
    const {profilePicture,username,timestamp,rating,comment} = review;
    return (
        <div className="border border-primary/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <img className="h-12 w-12 rounded-full mr-4" src={profilePicture} alt="" />
                <div>
                    <p className="font-semibold">{username}</p>
                    <p className="text-base-300">{new Date(timestamp).toLocaleString()}</p>
                </div>
            </div>
            <p className="text-info">{comment}</p>
            <div className="mt-3 flex justify-end items-end">
                <Rating readonly={true}
                    initialRating={rating}
                    // emptySymbol={<span className="text-gray-300 text-xl">&#9733;</span>}
                    // fullSymbol={<span className="text-primary text-xl">&#9733;</span>}
                    emptySymbol={<GoStar className="text-xl text-base-200" />}
                    fullSymbol={<GoStarFill className='text-xl text-primary' />}
                />
                {/* {console.log(new Date(review.timestamp).toLocaleString())} */}
            </div>
        </div>
    );
};

export default ReviewCard;