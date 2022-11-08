import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const service = ({service}) => {
    const {name, img, details, price, _id} = service;
    return (
        <div className='col-4 mb-3'>
            <Card className='border border-info border-opacity-50'>
                <Card.Img variant="top" height={231} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {details.slice(0, 100)} ...
                    </Card.Text>
                    <p className='text-dark'>Price: <b>{price} BDT</b></p>
                    <Link to={`/details/${_id}`}><Button variant="info">Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default service;