import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import offer1 from '../../assets/offer1.jpg';
import offer2 from '../../assets/offer2.jpg';
import offer3 from '../../assets/offer3.jpg';

const SpecialOffer = () => {

    const handleOffer = () => {
        document.getElementById('my_modal_2').showModal()
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="pl-7 space-y-2.5 pb-10 bg-success z-20 relative">
                <p className="text-primary text-xl">Committed to Excellence</p>
                <h3 className="text-neutral text-5xl elegant font-bold">Get Our Special Offer</h3>
            </div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <DotLottieReact
                        src="https://lottie.host/44b4945f-c5d6-4631-880e-57d52c46ffbe/dukusQjtMK.lottie"
                        loop
                        autoplay
                    />
                    <h3 className="font-bold text-lg text-center">Congratulation!</h3>
                    <p className="py-4 text-center">You have got 40% discount</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-7 mb-20">
                <div className='relative'>
                    <img className='h-[350px] w-full object-cover' src={offer1} alt="" />
                    <div onClick={() => { handleOffer() }} className='absolute text-center py-[30px] px-20 rotate-270 top-[132px] -left-[135px] bg-white font-medium z-10 hover:bg-primary hover:link transition duration-500 ease-in-out'>
                        <p>Family Escape Package</p>
                    </div>
                    <div className='bg-primary px-20 py-1 absolute -rotate-45 top-5 z-0'>
                        <p>save 40%</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[350px] w-full object-cover' src={offer2} alt="" />
                    <div onClick={() => { handleOffer() }} className='absolute text-center py-[30px] px-[67px] rotate-270 top-[132px] -left-[135px] bg-white font-medium z-10 hover:bg-primary hover:link transition duration-500 ease-in-out '>
                        <p>Romantic Couple Package</p>
                    </div>
                    <div className='bg-primary px-20 py-1 absolute -rotate-45 top-5 z-0'>
                        <p>save 40%</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[350px] w-full object-cover' src={offer3} alt="" />
                    <div onClick={() => { handleOffer() }} className='absolute text-center py-[30px] px-[94px] rotate-270 top-[132px] -left-[135px] bg-white font-medium z-10 hover:bg-primary hover:link transition duration-500 ease-in-out'>
                        <p>Honeymoon Special</p>
                    </div>
                    <div className='bg-primary px-20 py-1 absolute -rotate-45 top-5 z-0'>
                        <p>save 40%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;