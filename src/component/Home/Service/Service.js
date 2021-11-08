import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, service_name, description, img, price, total_joined } = service;
    return (
        <div>
            <Col className="h-100">
                <Card className="h-100">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{service_name}</Card.Title>
                        <Card.Text className="text-justify py-3">{description}</Card.Text>
                        <div className="d-flex mt-auto justify-content-between">
                            <Card.Text> <h5> Total joined : {total_joined}</h5></Card.Text>
                            <Card.Text><h5>Price : ${price}</h5></Card.Text>
                        </div>
                        <Link to={`/joinclass/${id}`} className="mt-auto">
                            <button className="btn btn-secondary text-white">Join Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;