import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';



const Header = () => {
    const { user, logout } = useAuth();



    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand to="/home">Koshrot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="home/#services">Services</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <Navbar.Text>
                                {user?.displayName}
                            </Navbar.Text>

                            {
                                user.email ?
                                    <Button onClick={logout} variant="outline-secondary" className=" text-white ms-3">Logout</Button> :

                                    <Nav className="ps-3">
                                        <Nav.Link as={Link} className="btn btn-outline-secondary text-white px-3" to="/login">login</Nav.Link>
                                    </Nav>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;