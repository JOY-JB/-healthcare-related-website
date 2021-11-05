import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignin } = useAuth();
    return (
        <div>
            <h1>This is login page</h1>

            <button onClick={googleSignin} className="btn btn-warning">Login with Gmail</button>
            <br />
            <p>Not Member yet? <Link to="/register">click here to Register</Link></p>
        </div>
    );
};

export default Login;