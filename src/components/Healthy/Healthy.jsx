

const Healthy = () => {
    return (
        <div className="flower-bg w-full ">
            <div className="max-w-7xl mx-auto my-10">
                <div>
                    <div className="mt-20 text-center ">
                        <div className="flex justify-center">
                            <img className="" src={'https://i.ibb.co/GVYkfDx/Screenshot-2023-10-07-041440.png'} alt="" />
                        </div>
                        <h1 className="text-4xl font-bold">LIVE HEALTHY LIFE</h1>
                        <p className="text-lg text-gray-500 mt-5">Pellentesque aliquet sed magna consequat venenatis. Ut fermentum viverra <br />  porta. Nullam dui odio, tempus ut porttitor non, dignissim vel felis. Vestibulum convallis eu eros sit amet</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 -z-10 mt-10">
                        <div className="  bg-[#DC2C5C] rounded-lg px-14 py-10 text-white md:col-span-3 ">
                            <h5 className="text-3xl font-bold pb-3">THE LARGEST SALE STARTING THIS WEEK</h5>
                            <hr />
                            <h1 className="font-bold text4xl md:text-6xl py-3">25% OFF</h1>
                            <hr />
                            <h4>
                                llentesque aliquet sed magna consequat venenatis. Ut fermentum viverra porta. Nullam dui
                            </h4>
                            <button className="bg-white text-gray-400 outline-none mt-5 hover:text-white hover:bg-[#FFBFA3] transition duration-300 delay-150 hover:delay-300	 rounded-full py-2 px-4 text-md">View All Collections</button>

                        </div>
                        <div className="  bg-[#DC2C5C] rounded-lg px-14 py-10 text-white md:col-span-2">
                            <h5 className="text-3xl font-bold pb-3">THE LARGEST SALE STARTING THIS WEEK</h5>
                            <hr />
                            <h1 className="font-bold text4xl md:text-6xl py-3">25% OFF</h1>
                            <hr />
                            <h4>
                                llentesque aliquet sed magna consequat venenatis. Ut fermentum viverra porta. Nullam dui
                            </h4>
                            <button className="bg-white text-gray-500 outline-none mt-5 hover:text-white hover:bg-[#FFBFA3] transition duration-300 delay-150 hover:delay-300	 rounded-full py-2 px-4 text-md">View All Collections</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Healthy;