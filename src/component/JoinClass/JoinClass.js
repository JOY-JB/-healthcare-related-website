import React from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';

const JoinClass = () => {
    const services = useService()
    console.log(services);
    const { classId } = useParams();
    return (
        <div className="d-flex justify-content-center">
            <h1>Join Now </h1>
        </div>
    );
};

export default JoinClass;