import React from 'react';

const AboutUs = () => {
    return (
        <div className="container pb-5">
            <h5>About Us</h5>
            <h1 className="text-warning bg-secondary rounded-pill d-inline-block px-5">WHO WE ARE</h1>

            <div className="row py-5 d-flex justify-content-around">
                <div className="col-lg-6">
                    <h2>Our Story</h2>
                    <p>
                        koshrot Gym and Fitness was founded in 2002 as a family owned and operated business. The Gym and Fitness founders didn’t want it to be just another gym equipment retailer - they wanted to be the best in the industry and set their minds to doing so! Since its birth, Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers having helped over 50,000 customers live longer, happier and healthier lives.
                    </p>
                </div>
                <div className="col-lg-6">
                    <h2>What We Do</h2>
                    <p>
                        We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;