import diningArea from '../../assets/diningArea.jpg';
import swimmingPool from '../../assets/swimmingPool.jpg';
import fitnessCenter from '../../assets/fitnessCenter.jpg';
import spa from '../../assets/spa.jpg';
import playArea from '../../assets/playArea.jpg';

const Places = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-2.5">
                <p className="text-primary text-xl">Moments That Make Memories</p>
                <h3 className="text-neutral text-5xl md:w-4/5 mx-auto elegant font-bold">We're Dedicated To Providing You Unforgettable Experience. Whether You're Here For Business Or Leisure.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5 mx-7 mb-20">
                <div className='bg-white p-3 rounded-xl'>
                    <img className=' h-60 object-cover rounded-xl' src={diningArea} alt="" />
                    <div>
                        <p className='text-center mt-2.5 font-medium'>Dining Area</p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-xl'>
                    <img className=' h-60 object-cover rounded-xl' src={swimmingPool} alt="" />
                    <div>
                        <p className='text-center mt-2.5 font-medium'>Swimming Pool</p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-xl'>
                    <img className=' h-60 object-cover rounded-xl' src={fitnessCenter} alt="" />
                    <div>
                        <p className='text-center mt-2.5 font-medium'>Fitness Center</p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-xl'>
                    <img className=' h-60 object-cover rounded-xl' src={spa} alt="" />
                    <div>
                        <p className='text-center mt-2.5 font-medium'>Spa</p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-xl'>
                    <img className=' h-60 object-cover rounded-xl' src={playArea} alt="" />
                    <div>
                        <p className='text-center mt-2.5 font-medium'>Play Area</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Places;