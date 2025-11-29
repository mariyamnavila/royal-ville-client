import axios from "axios";

export const myBookingPromise = (email) => {
    return axios.get(`http://localhost:3000/rooms?email=${email}`)
        .then(res => res.data);
};