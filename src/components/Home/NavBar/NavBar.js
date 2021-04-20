import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../img/logo.png';

const NavBar = () => {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="mr-5" href="/">Home</Nav.Link>
                    <Nav.Link className="mr-5" href="#services">Services</Nav.Link>
                    <Nav.Link className="mr-5" href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link className="mr-5" href="#reviews">Reviews</Nav.Link>
                    <Nav.Link className="mr-5" href="#about">About</Nav.Link>
                    <Nav.Link className="mr-5" href="#contact">Contact</Nav.Link>
                    <Nav.Link className="mr-5" href="/login">Log In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;