import React from "react";
import { FaHeart } from "react-icons/fa";

    const UserReview = ({ review }) => {
    const { customar, customarPhoto, reviewText, star, reviewTime } = review;

    const time = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(reviewTime);

    return (
        <div className="col-md-8 my-2 mt-5">
        <div className="d-flex">
            <div>
            <img
                width={"50px"}
                height={"50px"}
                className="rounded-circle"
                src={customarPhoto}
                alt=""
            />
            </div>
            <div className="ms-2">
            <h5 className="mb-0">
                {customar}{" "}
                <small className="text-danger">
                {star}
                <FaHeart className="mb-2 ms-1"></FaHeart>
                </small>
            </h5>
            <p className="p-0 m-0">{reviewText}</p>
            <small className="text-muted">Review at , {time}</small>
            </div>
        </div>
        <hr className="w-75 border border-info border-opacity-50"></hr>
        </div>
    );
};

export default UserReview;