import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Loader from "../Pages/Loader/Loader";
import Rooms from '../Pages/Rooms/Rooms';
import MyBookings from "../Pages/MyBookings/MyBookings";
import useAuth from "../hooks/useAuth";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/rooms/top-rated'),
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: '/allRooms',
                Component: Rooms,
                loader: () => fetch(`http://localhost:3000/rooms`),
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: '/myBookings',
                Component: MyBookings,
            },
            {
                path: '/rooms/:id',
                Component: RoomDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/rooms/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
        ]
    },
]);
