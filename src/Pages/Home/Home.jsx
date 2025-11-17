import Banner from "./Banner";
import Places from "./Places";
import Select from "./Select";
import Service from "./Service";
import SpecialOffer from "./SpecialOffer";
import Stats from "./Stats";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Select></Select>
            <Places></Places>
            <SpecialOffer></SpecialOffer>
            <Service></Service>
            <Stats></Stats>
        </div>
    );
};

export default Home;