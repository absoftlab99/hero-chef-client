import React from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(loading);
    if (loading) {
    <div className="text-center">
        Loading
        <Spinner animation="grow" variant="success" />
    </div>;
    return;
    }

    if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
    };

export default PrivateRoute;