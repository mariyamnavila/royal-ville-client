import Banner from "./Banner";
import Journal from "./Journal";
import Map from "./Map";
import Newsletter from "./Newsletter";
import Places from "./Places";
import Reasons from "./Reasons";
import Select from "./Select";
import Service from "./Service";
import SpecialOffer from "./SpecialOffer";
import Stats from "./Stats";
import TopRooms from "./TopRooms";
import WhyLoveUs from "./WhyLoveUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Select></Select>
            <Places></Places>
            <Map></Map>
            <TopRooms></TopRooms>
            <SpecialOffer></SpecialOffer>
            <Service></Service>
            <Stats></Stats>
            <Reasons></Reasons>
            <Newsletter></Newsletter>
            <WhyLoveUs></WhyLoveUs>
            <Journal></Journal>
        </div>
    );
};

export default Home;