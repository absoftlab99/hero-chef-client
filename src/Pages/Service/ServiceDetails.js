import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { BiDish, BiPaperPlane, } from "react-icons/bi";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../contexts/UserContext';
import { FaStar } from 'react-icons/fa';
import { toast } from "react-toastify";
import UserReview from './UserReview';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Service Details')
    const [givenStar, setGivenStar] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(true);
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    console.log(service);
    const {name, price, details, thumbnail, img, _id} = service;

    const timestamp = Date.now();

    const handlePostReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.review.value;
    const reviewData = {
        reviewText: text,
        star: givenStar,
        productId: _id,
        productTitle: name,
        customarEmail: user.email,
        customar: user.displayName,
        customarPhoto: user.photoURL,
        reviewTime: timestamp,
    };

    // https://service-review-server-six.vercel.app
    fetch("https://service-review-server-six.vercel.app/addreview", {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(reviewData),
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.acknowledged) {
            toast("Review Added Successfully");
            form.reset();
            setGivenStar(0);
            console.log(data);
            reviewData._id = data.insertedId;
            const newReviewData = [reviewData, ...reviews];
            setReviews(newReviewData);
        }
        });
    };
    useEffect(() => {
        fetch(`https://service-review-server-six.vercel.app/reviews?productId=${_id}`)
        .then((res) => res.json())
        .then((data) => {
        setReviews(data);
        setLoader(false);
        });
    }, [_id]);
    return (
        <div className='mb-5'>
            <div className='mt-5 pt-5 container row mx-auto'>
                <div className="col-9">
                    <div className="">
                        <h1 className='ff-poppins fw-bolder'>{name}</h1>
                        <p className='text-justify ff-poppins'>{details}</p>
                    </div>
                    <hr className='border-info'></hr>
                    
                    <div className="row">
                        <div className="col-md-8">
                        {user ? (
                            <Form onSubmit={handlePostReview}>
                            <h2>Share your review about this service</h2>
                            <hr className="border-primary" />
                            <Form.Group className="mb-3">
                                <Form.Label>Your Review</Form.Label>
                                <Form.Control
                                name="review"
                                as="textarea"
                                placeholder="Write your review about this service"
                                required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Rating {givenStar}</Form.Label>
                                <div>
                                <a href   
                                    onMouseEnter={() => setGivenStar(1)}
                                    className={`btn btn-lg p-0 m-0 ${
                                    givenStar >= 1 ? "text-warning" : ""
                                    }`}
                                >
                                    <FaStar></FaStar>
                                </a>
                                <a
                                    href
                                    onMouseEnter={() => setGivenStar(2)}
                                    className={`btn btn-lg p-0 m-0 ${
                                    givenStar >= 2 ? "text-warning" : ""
                                    }`}
                                >
                                    <FaStar></FaStar>
                                </a>
                                <a
                                    href
                                    onMouseEnter={() => setGivenStar(3)}
                                    className={`btn btn-lg p-0 m-0 ${
                                    givenStar >= 3 ? "text-warning" : ""
                                    }`}
                                >
                                    <FaStar></FaStar>
                                </a>
                                <a
                                    href
                                    onMouseEnter={() => setGivenStar(4)}
                                    className={`btn btn-lg p-0 m-0 ${
                                    givenStar >= 4 ? "text-warning" : ""
                                    }`}
                                >
                                    <FaStar></FaStar>
                                </a>
                                <a
                                    href
                                    onMouseEnter={() => setGivenStar(5)}
                                    className={`btn btn-lg p-0 m-0 ${
                                    givenStar >= 5 ? "text-warning" : ""
                                    }`}
                                >
                                    <FaStar></FaStar>
                                </a>
                                </div>
                            </Form.Group>
                            <Button variant="info" type="submit">
                                <BiPaperPlane></BiPaperPlane> Post Review
                            </Button>
                            </Form>
                        ) : (
                            <h2 className="text-left">
                            Please <Link to="/login">Login</Link> to add a review
                            </h2>
                        )}
                        </div>
                    </div>

                    {loader ? (
                    <div className="text-center my-5">
                        <Spinner animation="border" variant="primary" />{" "}
                        <h2>Loading Reviews</h2>
                    </div>
                    ) : (
                    ""
                    )}
                    {reviews.map((review) => (
                    <UserReview key={review._id} review={review}></UserReview>
                    ))}

                </div>
                <div className="col-3">
                    <PhotoProvider>
                    <PhotoView src={img}>
                        <img width={'100%'} className='img-fluid' src={thumbnail} alt="" />
                    </PhotoView>
                    </PhotoProvider>
                    <h5 className='pt-2'>{name}</h5>
                    <h3 className='ff-poppins fw-bold text-muted'>Price: {price} BDT</h3>
                    <Button variant='outline-info'><BiDish className='fs-4'></BiDish> Checkout</Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;