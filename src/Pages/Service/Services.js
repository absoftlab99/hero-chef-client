import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useTitle from '../../Hooks/useTitle';
import Service from './Service';

const Services = () => {
    useTitle('Services')
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
                <h1 className='text-center ff-poppins fw-bold'>My <span className='text-info ff-mono fw-bolder'>Food</span> Services List</h1>
                <p className="text-center px-5">
                Here you will find amazing food service, <br></br>order now without delay to taste these amazing dishes.
                </p>
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