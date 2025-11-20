import Banner from "./Banner";
import Journal from "./Journal";
import Newsletter from "./Newsletter";
import Places from "./Places";
import Reasons from "./Reasons";
import Select from "./Select";
import Service from "./Service";
import SpecialOffer from "./SpecialOffer";
import Stats from "./Stats";
import WhyLoveUs from "./WhyLoveUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Select></Select>
            <Places></Places>
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