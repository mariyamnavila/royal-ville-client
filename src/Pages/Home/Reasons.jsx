import { VscVerified } from 'react-icons/vsc';
import reason1 from '../../assets/Reason1.jpg';
import reason2 from '../../assets/Reason2.jpg';
import AnimatedTextSimple from '../../Components/AnimatedTextSimple';
import AnimatedText from '../../Components/AnimatedText';

const Reasons = () => {
    const arrayOfReasons = ['Unparalleled', 'Elegant Accommodations', 'Personalized Service', 'Advanced Technology', 'Gourmet Dining', 'Sustainable Practices', 'Wellness & Spa', 'Exclusive Packages', 'Advanced Technology', 'Safety & Cleanliness',]
    return (
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between'>
            <div className='relative flex ml-7 '>
                <img className='mb-12 w-[200px] md:w-fit mt-5' src={reason1} alt="" />
                <img className='absolute w-[200px] md:w-fit top-10 right-6 md:top-16 md:right-20 lg:top-36 lg:-right-30' src={reason2} alt="" />
            </div>
            <div className="space-y-3 lg:w-1/2 mx-7">
                <p className="text-primary text-xl"><AnimatedTextSimple>Sleep in Style and Serenity</AnimatedTextSimple></p>
                {/* <h3 ></h3> */}
                <AnimatedText
                    text={'Luxury, Location & Love Reasons To Stay With Us'}
                    className="text-neutral text-5xl elegant font-bold "
                />
                <p className="text-info mt-8 mb-14">Welcome to Royal Ville, your gateway to exceptional stays with premium comfort, modern amenities, and unmatched hospitality</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        arrayOfReasons.map(reason => <div className='bg-white rounded-full p-3 flex items-center gap-3 font-medium '>
                            <VscVerified className='text-primary text-3xl ml-2 font-bold' />
                            {reason}
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reasons;