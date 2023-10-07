

const Subscribe = () => {
    return (
        <div className="bg-[#ED0B5A]">
            <div className="max-w-7xl mx-auto px-2 md:px-2 lg:px-2">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2 py-24">
                    <div className="text-center py-4 md:ml-3 col-span-2 lg:ml-0 md:text-left text-white">
                        <h1>Pellentesque aliquet sed magna</h1>
                        <h1 className="text-4xl font-bold">SUBSCRIBE US</h1>
                    </div>
                    <div className="flex justify-center md:justify-end items-center col-span-4 jus">
                        <input className="py-4 pr-12 md:pr-24 lg:pr-96 px-4 rounded-l-full " placeholder="Your Email Address" type="text" />
                        <button className="bg-white px-4 py-4 border-l-2 font-semibold rounded-r-full">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;