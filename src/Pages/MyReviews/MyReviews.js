import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { FaHeart, FaTrash, FaRegEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import useTitle from "../../Hooks/useTitle";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState({});
    const [givenStar, setGivenStar] = useState(0);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    useTitle('My Reviews')

    const handleClose = () => {
        setShow(false);
        setReview({});
        setGivenStar(0);
    };

    const handleShow = (id) => {
        setShow(true);
        fetch(`https://service-review-server-six.vercel.app/reviews/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setReview(data);
            setGivenStar(data.star);
        });
    };

    useEffect(() => {
        fetch(
        `https://service-review-server-six.vercel.app/reviews?email=${user?.email}`
        )
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
        "Are you sure, you want to Delete this Review?"
        );
        if (proceed) {
        console.log("deleted");
        fetch(`https://service-review-server-six.vercel.app/reviews/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.deletedCount > 0) {
                const leftReviews = reviews.filter((review) => review._id !== id);
                setReviews(leftReviews);
                toast.error('Review Deleted Successfully', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            console.log(data);
            });
        }
    };

    const handleReviewUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.review.value;
        const id = form.id.value;

        const editData = {
        reviewText: text,
        star: givenStar,
        };

        fetch(`https://service-review-server-six.vercel.app/reviews/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(editData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
            toast.success('Review Update Successfully', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            handleClose();
            navigate("/my-reviews");
            }
        });
    };
    return (
        <div className="mt-5 pt-5" style={{ minHeight: "80vh" }}>
        <div className="row container m-auto">
        <h1 className='text-center ff-poppins fw-bold mb-4'>My <span className='text-info ff-mono fw-bolder'>Amazing</span> All Reviews</h1>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th width="5%" className="text-center">
                    Sl
                </th>
                <th width="30%" className="text-center">
                    Product Name
                </th>
                <th width="45%" className="text-center">
                    Review
                </th>
                <th width="10%" className="text-center">
                    Rating
                </th>
                <th width="10%" className="text-center">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                {reviews.map((review, sl) => (
                <tr key={review._id}>
                    <td className="text-center">{sl + 1}</td>
                    <td className="text-start">{review.productTitle}</td>
                    <td className="text-start">{review.reviewText}</td>
                    <td className="text-center">
                    {review.star} 
                    <FaHeart className="mb-1 text-danger ps-1"></FaHeart>
                    </td>
                    <td className="text-center">
                    <Button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleShow(review._id)}
                    >
                        <FaRegEdit></FaRegEdit>
                    </Button>
                    <Button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(review._id)}
                    >
                        <FaTrash></FaTrash>
                    </Button>
                    </td>
                </tr>
                ))}
                {reviews.length <= 0 ? (
                <tr>
                    <td className={`text-center`} colSpan={5}>
                    No reviews ware added
                    </td>
                </tr>
                ) : (
                ""
                )}
            </tbody>
            </Table>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
            <Form onSubmit={handleReviewUpdate}>
                <Form.Group className="mb-3">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                    name="review"
                    defaultValue={review.reviewText}
                    as="textarea"
                    placeholder="Write your review about this service"
                />
                <input type="hidden" name="id" defaultValue={review._id} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Your Rating {givenStar}</Form.Label>
                <div>
                    <a
                    href
                    onMouseEnter={() => setGivenStar(1)}
                    className={`btn btn-lg p-0 m-0 ${
                        givenStar >= 1 ? "text-danger" : ""
                    }`}
                    >
                    <FaHeart></FaHeart>
                    </a>
                    <a
                    href
                    onMouseEnter={() => setGivenStar(2)}
                    className={`btn btn-lg p-0 m-0 ${
                        givenStar >= 2 ? "text-danger" : ""
                    }`}
                    >
                    <FaHeart></FaHeart>
                    </a>
                    <a
                    href
                    onMouseEnter={() => setGivenStar(3)}
                    className={`btn btn-lg p-0 m-0 ${
                        givenStar >= 3 ? "text-danger" : ""
                    }`}
                    >
                    <FaHeart></FaHeart>
                    </a>
                    <a
                    href
                    onMouseEnter={() => setGivenStar(4)}
                    className={`btn btn-lg p-0 m-0 ${
                        givenStar >= 4 ? "text-danger" : ""
                    }`}
                    >
                    <FaHeart></FaHeart>
                    </a>
                    <a
                    href
                    onMouseEnter={() => setGivenStar(5)}
                    className={`btn btn-lg p-0 m-0 ${
                        givenStar >= 5 ? "text-danger" : ""
                    }`}
                    >
                    <FaHeart></FaHeart>
                    </a>
                </div>
                </Form.Group>
                <div>
                <Button variant="danger" className="me-2" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="info" type="submit">
                    Post Review
                </Button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default MyReviews;