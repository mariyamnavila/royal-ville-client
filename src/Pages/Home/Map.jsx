import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import AnimatedTextSimple from '../../Components/AnimatedTextSimple';
import AnimatedText from '../../Components/AnimatedText';

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});


const Map = () => {
    const position = [22.3569, 91.7832];
    return (
        <div className="max-w-7xl mx-auto pt-10">
            <div className="text-center space-y-2.5 mx-7">
                <div className="text-primary text-xl"><AnimatedTextSimple>Discover Your Stay in Chittagong</AnimatedTextSimple></div>
                <AnimatedText
                    text={"Find the perfect hotel location and explore nearby attractions with ease."}
                    className="text-neutral text-5xl md:w-2/3 mx-auto elegant font-bold"
                />
            </div>
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: "450px",}}
                className=" mt-10 mb-20 rounded-xl w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;