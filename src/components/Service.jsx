import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/services")
        .then(res =>  res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className="ui-container mt-[140px] ">
            <p className="text-[#FF3811] text-xl text-center">Service</p>
            <h2 className="text-center text-[40px] my-2 font-bold">Our Service Area</h2>
            <p className="text-center mb-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            {/* service */}
           <section className="grid md:grid-cols-3 gap-5 mb-10">
            {
                services.map(service => <ServiceCard key={service._id} service={service}/>)
            }
           </section>
        </section>
    );
};

export default Service;