import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://service-review-server-six.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className='pt-5'>
            <div className="row container mx-auto">
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;