import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstbanner from "../../images/banner/firstbanner.jpg"
import secondbanner from "../../images/banner/secondbanner.jpg"

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstbanner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>WELCOME TO THE KOSHROT GYM</h1>
                        <h5>Check out our gym club to achive your fitness goal and keep your physical and mental wellness in tip-top shape.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondbanner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>LET'S KEEP MOVIN’</h1>
                        <h5>We want our members to gym confidently, therefore, members, guests and PF Team Members should adhere to state/local mask requirements.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;