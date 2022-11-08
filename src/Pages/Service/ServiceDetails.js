import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const {name, img, price, details} = service;
    return (
        <div className='mt-5 pt-5 container row mx-auto'>
            <div className="col-9">
                details
            </div>
            <div className="col-3">
                side nave
            </div>
        </div>
    );
};

export default ServiceDetails;