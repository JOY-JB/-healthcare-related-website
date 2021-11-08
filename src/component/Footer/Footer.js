import React from 'react';
import { Button, Col, FormControl, InputGroup } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="bg-dark mt-auto">
            <div className="container pt-3 d-flex justify-content-between">
                <Col xs lg="4" className="footer-copyright text-white">
                    © 2021 Copyright: Koshrot Gym
                </Col>

                <Col xs lg="4">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter Your Email Here"
                            aria-label="Recipient's username"
                            aria-describedby="subscribe"
                        />
                        <Button variant="outline-warning" id="subscribe">
                            Subscribe
                        </Button>
                    </InputGroup>
                </Col>
            </div>
        </footer>
    );
};

export default Footer;