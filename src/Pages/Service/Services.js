import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [loader, setLoader] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://service-review-server-six.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoader(false)
        });
    },[])
    return (
        <div className='pt-5'>
            <div className="row container mx-auto">
                {
                    loader? <div className="text-center w-100 align-items-center">
                    <Spinner animation="border" variant="info" /></div> :
                    ''
                }
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