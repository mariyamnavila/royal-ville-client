import AnimatedTextSimple from '../../Components/AnimatedTextSimple';
import AnimatedText from '../../Components/AnimatedText';
import { toast } from 'sonner';
import { useLoaderData } from 'react-router-dom';
import RoomCard from './RoomCard';
import axios from 'axios';
import { useState } from 'react';

const Rooms = () => {
    const initialRooms = useLoaderData();
    const [rooms, setRooms] = useState(initialRooms);

    const handleFilter = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const { minPrice, maxPrice } = Object.fromEntries(formData.entries());
        if (!maxPrice) {
            toast.error("Max price is required.");
            return;
        }

        if (!minPrice) {
            toast.error("Min price is required.");
            return;
        }

        const MaxNumberRegex = /^\d{1,4}$/;
        const MinNumberRegex = /^\d{1,}$/;

        if (!MaxNumberRegex.test(maxPrice)) {
            toast.error('Please enter a valid max price with no more than 4 digits.');
            return;
        }

        if (!MinNumberRegex.test(minPrice)) {
            toast.error('Please enter a valid min price with at least 1 digit.');
            return;
        }

        const min = parseInt(minPrice);
        const max = parseInt(maxPrice);

        if (min >= max) {
            toast.error("Min price must be less than max price.");
            return;
        }

        axios.get(`http://localhost:3000/rooms?min=${min}&max=${max}`)
            .then(res => {
                // console.log(res.data);
                setRooms(res.data);
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to fetch filtered rooms.");
            })
            .finally(() => {
                toast.success("Rooms filtered successfully.");
            });
    }

    const handleSort = (type) => {
        if (type === 'asc') {
            axios.get(`http://localhost:3000/rooms?sort=asc`)
                .then(res => {
                    setRooms(res.data);
                })
                .catch(err => {
                    console.error(err);
                    toast.error("Failed to fetch sorted rooms.");
                })
                .finally(() => {
                    toast.success("Rooms sorted successfully.");
                });

        } else if (type === 'desc') {
            axios.get(`http://localhost:3000/rooms?sort=desc`)
                .then(res => {
                    setRooms(res.data);
                })
                .catch(err => {
                    console.error(err);
                    toast.error("Failed to fetch sorted rooms.");
                })
                .finally(() => {
                    toast.success("Rooms sorted successfully.");
                });
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-3 mt-10 mb-16">
                <div className="text-primary text-xl"><AnimatedTextSimple>Rooms Designed for You</AnimatedTextSimple></div>
                <AnimatedText
                    text={"From cozy retreats to luxurious suites, every room promises a stay you’ll cherish."}
                    className="text-neutral text-5xl md:w-2/3 mx-auto elegant font-bold"
                />
            </div>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>Rooms: {rooms?.length}</p>
                <div className=''>
                    <div className="dropdown dropdown-end">
                        <button role="button" tabIndex={0} className='btn bg-primary border border-primary mr-3 text-success'>Sort</button>
                        <div tabIndex="-1" className="dropdown-content top-12 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <div>
                                <p
                                    className='mb-2 btn w-full'
                                    onClick={() => { handleSort('asc'); }}
                                >Price: Low to High</p>
                                <p
                                    className='btn w-full'
                                    onClick={() => { handleSort('desc'); }}
                                >Price: High to Low</p>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <button role="button" tabIndex={0} className='btn bg-primary border border-primary text-success'>Filter by Price</button>
                        <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <form onSubmit={handleFilter}>
                                <input type="text" placeholder="Max price" name='maxPrice' className="input outline-none border focus:border-primary" />
                                <input type="text" placeholder="Min price" name='minPrice' className="input outline-none border focus:border-primary my-2" />
                                <button type='submit' className='btn w-full'>Filter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {
                rooms.length === 0
                    ?
                    <p className='flex justify-center items-center min-h-screen text-xl font-semibold'>No rooms available in this price range.</p>
                    :
                    <div className="grid auto-rows-fr lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 my-10">
                        {
                            rooms?.map((room, i) => <RoomCard key={i} room={room}></RoomCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Rooms;