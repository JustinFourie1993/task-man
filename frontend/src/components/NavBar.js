import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <container>
            <Navbar className={styles.NavBar} expand="md" fixed="top">
                <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
                <Navbar.Toggle className={styles.dropdown} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link ><i className="fa-solid fa-house-user"></i>Home</Nav.Link>
                        <Nav.Link ><i className="fa-solid fa-right-to-bracket"></i>Sign In</Nav.Link>
                        <Nav.Link ><i className="fa-solid fa-pen-to-square"></i>Sign Up</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </container>
    );
};

export default NavBar;