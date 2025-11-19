

const Newsletter = () => {
    return (
        <div className="bg-[url('./assets/newsletterBg.jpg')] my-32 max-w-6xl mx-auto rounded-3xl bg-center bg-cover ">
            <div className="bg-linear-to-b from-black to-transparent text-white rounded-3xl py-32 flex flex-col justify-center items-center space-y-5">
                <h1 className="text-7xl text-center elegant font-medium">Get <span className="text-primary">20%</span>Off <br /> Your First Stay!</h1>
                <p className="lg:w-2/5 text-center">Join our newsletter, and we’ll send you a 20% discount for your first stay.</p>
                <div className="flex">
                    <input type="text" placeholder="name@email.com" className="input bg-transparent focus:outline-none focus:border-x-0 focus:border-t-0 text-white placeholder:text-white border-b border-b-white" />
                    <button className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] ml-3 text-neutral">
                        <span className="absolute inset-0 bg-success transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-300 "></span>
                        <span className="relative z-10">Explore Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;