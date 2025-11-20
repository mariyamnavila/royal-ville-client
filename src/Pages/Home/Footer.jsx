import { CiFacebook, CiInstagram, CiLocationArrow1, CiTwitter } from 'react-icons/ci';
import logo from '../../assets/royal-ville-logo.png';
import { FaDribbble, FaYoutube } from 'react-icons/fa';
import AnimatedText from '../../Components/AnimatedText';

const Footer = () => {
    return (
        <div className="bg-[#1D1B1B]">
            <div className="max-w-7xl mx-auto">
                <div className="text-white text-center pt-24 pb-16 text-6xl md:text-7xl elegant">
                    <AnimatedText
                    text={'Book Your Dream Stay.'}
                    />
                    <AnimatedText
                    text={'In Royal Ville'}
                    />
                    {/* <h1></h1>
                    <h1></h1> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6  gap-7 border-y border-[#25262a]">
                    <div className="col-span-3 pr-0 md:pr-16 border-r border-[#25262a] pt-10">
                        <h4 className="text-4xl text-white">Get news & update <br /> about us today</h4>
                        <div className="grid grid-cols-3 gap-1.5 mt-7 mb-4">
                            <input type="text" placeholder="Email..." className="input col-span-2 w-full py-7" />
                            <button className="btn relative overflow-hidden group bg-primary border border-primary text-xl text-black mr-3 py-7 ">
                                <span className="
                                    absolute inset-0 bg-[#FAF7F2] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-400 "></span>
                                <span className="relative z-10 flex items-center">Sign Up <CiLocationArrow1  className='ml-2 font-bold'/></span>
                            </button>
                        </div>
                        <p className="text-white">By subscribing, you’re accept <span className="link text-primary hover:text-white transition duration-500 ease-in-out">Privacy Policy</span></p>
                    </div>
                    <div className="lg:col-span-1 col-span-3 text-white pt-10 ml-4 pb-16">
                        <h4 className="text-2xl mb-7">Our Division</h4>
                        <div className="space-y-3">
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Store Directory</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Top Hotel Room</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Quick Links</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Important Links</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Insights</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Knowledge Center</p>
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-3 text-white pt-10 ml-4">
                        <h4 className="text-2xl mb-7">My account</h4>
                        <div className="space-y-3">
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Contact Us</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">FAQ Page</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Get in Touch</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Global Network</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Support 24/7</p>
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-3 text-white pt-10 ml-4">
                        <h4 className="text-2xl mb-7">Service</h4>
                        <div className="space-y-3">
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Request a Freight</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Our Services</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">What We Do</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Abandonment Cart</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Shipments</p>
                            <p className="text-white hover:text-primary hover:link transition duration-500 ease-in-out">Pricing Flexibility</p>
                        </div>
                    </div>
                </div>
                <div>
                    <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
                        <aside className="grid-flow-col items-center">
                            <img className='bg-white p-2 w-[150px] ml-2 mt-3' src={logo} alt="" />
                        </aside>
                        <div className="flex text-2xl gap-7">
                            <CiFacebook className='text-white hover:text-primary hover:link transition duration-500 ease-in-out '/>
                            <CiTwitter className='text-white hover:text-primary hover:link transition duration-500 ease-in-out '/>
                            <CiInstagram className='text-white hover:text-primary hover:link transition duration-500 ease-in-out '/>
                            <FaYoutube className='text-white hover:text-primary hover:link transition duration-500 ease-in-out '/>
                            <FaDribbble className='text-white hover:text-primary hover:link transition duration-500 ease-in-out '/>
                        </div>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;