import { Circles } from "react-loader-spinner";


const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Circles
                height="100"
                width="100"
                color="#D6A23F"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;