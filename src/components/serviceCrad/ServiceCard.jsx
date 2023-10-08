import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    console.log(service);
    const {title, img, dsc , id} = service || {}
    return (
        <div>
            
            <div className=" shadow-md  border-t-8 hover:border-t-[#ED0B5A]  ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-gray-500">{title}</h2>
                    <p className="text-md text-gray-400 font-semibold text-justify ">{dsc} <Link to={`/serviceDetail/${id}`} className="text-[#ED0B5A] underline font-bold">See Details.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;