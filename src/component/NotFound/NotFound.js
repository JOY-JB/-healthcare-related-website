import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/error-404.png"

const NotFound = () => {
    return (
        <div className="container">
            <img src={img} className="w-75" />
            <br />
            <Link to="/home">
                <button className="btn btn-primary px-4">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;