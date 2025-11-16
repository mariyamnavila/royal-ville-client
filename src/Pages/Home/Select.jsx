import { useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";


const Select = () => {
    const [outDate, setOutDate] = useState('')
    const [inDate, setInDate] = useState('')
    const handleDateIn = (e) => {
        e.preventDefault();
        const dateIn = e.target.dateIn.value;
        setInDate(dateIn)
    }
    const handleDateOut = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        setOutDate(date)
    }

    return (
        <div className="max-w-5xl mx-auto bg-white py-7 px-5 rounded-xl flex flex-col md:flex-row items-center md:justify-evenly space-y-3 md:space-y-0 relative -top-14">
            <div className="flex items-center">
                <FaRegCalendar className="text-xl mr-3" />
                <div>
                    <p className="text-xs text-base-300">Select Date</p>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center my-1 gap-2 text-[14px] mt-2.5">{inDate ? inDate : 'Check In'}  <IoMdArrowDropdown /></div>
                        <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <form onSubmit={handleDateIn}>
                                <input type="date" name="dateIn" className="input" />
                                <button className="btn mt-2 w-full">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-base-200 hidden md:block w-px h-12"></div>
            <div className="flex items-center">
                <FaRegCalendar className="text-xl mr-3" />
                <div>
                    <p className="text-xs text-base-300">Select Date</p>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center my-1 gap-2 text-[14px] mt-2.5">{outDate ? outDate : 'Check out'}  <IoMdArrowDropdown /></div>
                        <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <form onSubmit={handleDateOut}>
                                <input type="date" name="date" className="input" />
                                <button className="btn mt-2 w-full">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-base-200 hidden md:block w-px h-12"></div>
            <div className="flex items-center">
                <LiaBedSolid className="text-2xl mr-3" />
                <div>
                    <p className="text-xs text-base-300">Select Rooms</p>
                    <select defaultValue="Rooms" className="select border-none pl-0 outline-0 shadow-none">
                        <option>Rooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
            <div className="border border-base-200 hidden md:block w-px h-12"></div>
            <div className="flex items-center">
                <IoPersonOutline className="text-xl mr-3" />
                <div>
                    <p className="text-xs text-base-300">Person Per Room</p>
                    <select defaultValue="Guests" className="select border-none m-0 pt-0 pl-0 outline-0 shadow-none">
                        <option>Guests</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
            <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-white mr-3">
                <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-300 "></span>
                <span className="relative z-10">Explore Now</span>
            </button>
        </div>
    );
};

export default Select;