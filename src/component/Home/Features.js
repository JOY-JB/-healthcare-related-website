import React from 'react';
import { Card } from 'react-bootstrap';

const Features = () => {
    return (
        <div className="container py-5">
            <h5>Awsome Features</h5>
            <h1 className="text-warning bg-secondary rounded-pill d-inline-block px-5">WHY CHOOSE US</h1>

            <div className="d-flex justify-content-around py-5">
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header><i className="fas fa-dumbbell"></i></Card.Header>
                    <Card.Body>
                        <Card.Title>PRO EQUIPMENT</Card.Title>
                        <Card.Text>
                            If you are looking for the best deal possible on commercial fitness equipment you have come to the right place.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header><i class="far fa-clock"></i></Card.Header>
                    <Card.Body>
                        <Card.Title>FLEXIBLE TIME</Card.Title>
                        <Card.Text>
                            Say goodbye to clock setup stress. You'll never worry again that you didn't set the gym time properly.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header><i class="fas fa-heartbeat"></i></Card.Header>
                    <Card.Body>
                        <Card.Title>CARDIO FIRST</Card.Title>
                        <Card.Text>
                            Doing light cardio can prepare the muscles for the physical work of lifting weights and can increase blood flow to the large muscle groups you’ll be using.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Features;