import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

const ServiceCard = ({service}) => {
    const {_id, title, price, img} = service
    return (
        <article className="p-5 rounded border">
            <img className="h-[200px] w-full rounded-lg object-cover" src={img} alt={title} />
            <h2 className="text-[25px] my-4 font-bold">{title}</h2>
            <div className="text-[#FF3811] flex justify-between">
                <p>{price}</p>
                <Link to={`/service/${_id}`}><button><BiRightArrowAlt/></button></Link>
            </div>
        </article>
    );
};

export default ServiceCard;