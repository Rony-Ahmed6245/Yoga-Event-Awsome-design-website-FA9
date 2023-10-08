import { useEffect, useState } from "react";
import ServiceCard from "../serviceCrad/ServiceCard";



const Services = () => {
    const [servicesData, setServiceData] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceData(data))


    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="my-10 text-center  ">
                <div className="flex justify-center">
                    <img className="" src={'https://i.ibb.co/GVYkfDx/Screenshot-2023-10-07-041440.png'} alt="" />
                </div>
                <h1 className="text-4xl font-bold">OUR SERVICES</h1>
                <p className="text-lg text-gray-500 mt-5">Pellentesque aliquet sed magna consequat venenatis. Ut fermentum viverra <br />  porta. Nullam dui odio, tempus ut porttitor non, dignissim vel felis. Vestibulum convallis eu eros sit amet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;