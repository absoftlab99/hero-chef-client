import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const timestamp = Date.now();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const fullImage = form.img.value;
        const thumbnail = form.thumbnail.value;
        const description = form.details.value;
        const price = form.price.value;
    
        const newService = {
            name: title,
            img: fullImage,
            thumbnail: thumbnail,
            details: description,
            price: price,
            timestamp: timestamp,
        };
    
        fetch("https://service-review-server-six.vercel.app/services", {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(newService),
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.acknowledged) {
            toast.success('Service Added Successfully', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            form.reset();
        }
    });
};
    return (
        <div className='mt-5 pt-5'>
            <div className="row container mx-auto">
            <h1 className='text-center ff-poppins fw-bold'>Add <span className='text-info ff-mono fw-bolder'>New</span> Service</h1>
                <hr className='w-50 m-auto border-info'></hr>
                <div className="">
                <Form onSubmit={handleSubmit} className='w-50 m-auto pt-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Title</Form.Label>
                        <Form.Control name='name' type="text" placeholder="service title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Image Link</Form.Label>
                        <Form.Control name='img' type="text" placeholder="full image" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Thumbnail Link</Form.Label>
                        <Form.Control name='thumbnail' type="text" placeholder="thumbnail image" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Description</Form.Label>
                        <Form.Control as='textarea' name='details' type="text" placeholder="description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name='price' type="text" placeholder="price" />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        <FaPlus></FaPlus> Add Service
                    </Button>
                </Form>`
                </div>
            </div>
        </div>
    );
};

export default AddService;