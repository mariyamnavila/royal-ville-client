import { IoStar } from "react-icons/io5";


const WhyLoveUsCard = ({ card }) => {
    const { image, text, name, position } = card
    return (
        <div 
        className='flex flex-col md:flex-row p-8 items-center border-11 border-white rounded-2xl mx-7 gap-10 mb-6 bg-success'
        >
            <img className='rounded-xl w-full md:w-60 md:h-[313px] object-cover' src={image} alt="" />
            <div>
                <p className='text-2xl font-light'>{text}</p>
                <div className='flex flex-col md:flex-row items-center justify-between lg:mt-14 md:mt-5 mt-5'>
                    <div className='flex flex-col'>
                        <h5 className='text-2xl font-medium'>{name}</h5>
                        <p className='text-info'>{position}</p>
                    </div>
                    <div className='flex bg-white py-3 gap-2 rounded-full px-5'>
                        <IoStar className='text-primary' />
                        <IoStar className='text-primary' />
                        <IoStar className='text-primary' />
                        <IoStar className='text-primary' />
                        <IoStar className='text-primary' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyLoveUsCard;