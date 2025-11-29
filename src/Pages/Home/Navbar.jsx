import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/royal-ville-logo.png';
import { toast } from "sonner";
import avatar from '../../assets/UserAvatar.png';
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

    const { user, logOut, setLoading } = useAuth();
    const links = <>
        <li><NavLink to={'/'} className={'font-semibold text-[18px]'}>Home</NavLink></li>
        <li><NavLink to={'/allRooms'} className={'font-semibold text-[18px]'}>Rooms</NavLink></li>
        {
            user ? (
                <>
                    <li><NavLink to={'/myBookings'} className={'font-semibold text-[18px]'}>My Bookings</NavLink></li>
                </>
            ) : (
                <>
                </>
            )
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                toast.success('User successfully logged out')
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => setLoading(false))
    }

    const buttons = <>
        <div className="">
            {
                user ? (
                    <>
                        <div>
                            <img 
                            className='w-16 h-16 rounded-full mx-auto' 
                            src={user.photoURL || avatar} 
                            onError={(e) => (e.target.src = avatar)} 
                            alt={user.displayName} />
                        </div>
                        <p className='text-center text-2xl font-semibold text-primary mt-1'>{user.displayName}</p>
                        <p className="text-center text-info mt-1 mb-3">{user.email}</p>
                        <div className='text-center'>
                            <button onClick={() => handleLogOut()} className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-white w-full">
                                <span className="
                                    absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                                <span className="relative z-10">Log Out</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="mt-4">
                        <Link to={'/register'}>
                            <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-xl text-white mr-3">
                                <span className="
                                    absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-300 "></span>
                                <span className="relative z-10">Register</span>
                            </button>
                        </Link>
                        <Link to={'/login'}>
                            <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-xl text-white">
                                <span className="
                                    absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                                <span className="relative z-10">Login</span>
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    </>;

    return (
        <div className='max-w-7xl mx-auto' id='home'>
            <div className="navbar bg-base-100 shadow-sm drawer-end rounded-xl">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-100 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {buttons}
                        {links}
                    </div>
                </div>
                <div className="navbar-start">
                    <img className='w-[150px] ml-2' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <div className='lg:flex hidden'>
                                <div className="dropdown dropdown-end ">
                                    <div tabIndex={0} role="button" className="">
                                        <img 
                                        className='w-10 h-10 rounded-full mr-4' 
                                        src={user.photoURL || avatar} 
                                        onError={(e) => (e.target.src = avatar)} 
                                        alt={user.displayName} />
                                        </div>
                                    <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm ">
                                        <div>
                                            <img 
                                            className='w-16 h-16 rounded-full mx-auto' 
                                            src={user.photoURL || avatar} 
                                            onError={(e) => (e.target.src = avatar)} 
                                            alt={user.displayName} />
                                        </div>
                                        <p className='text-center text-2xl font-semibold text-primary mt-1'>{user.displayName}</p>
                                        <p className="text-center text-info mt-1 mb-3">{user.email}</p>
                                        <div className='text-center'>
                                            <button onClick={() => handleLogOut()} className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-white w-full">
                                                <span className="
                                    absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                                                <span className="relative z-10">Log Out</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='lg:block hidden '>
                                <Link to={'/register'}>
                                    <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-white mr-3">
                                        <span className="
                                    absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-300 "></span>
                                        <span className="relative z-10">Register</span>
                                    </button>
                                </Link>
                                <Link to={'/login'}>
                                    <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-white">
                                        <span className="
                                    absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                                        <span className="relative z-10">Login</span>
                                    </button>
                                </Link>
                            </div>
                        )
                    }
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;