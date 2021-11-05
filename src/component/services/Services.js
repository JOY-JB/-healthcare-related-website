import React from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>This is External Services page {serviceId}</h1>
        </div>
    );
};

export default Services;