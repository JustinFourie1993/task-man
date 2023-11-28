import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {
    return (
        <container>
            <Navbar className={styles.NavBar} expand="md" fixed="top">
                <NavLink to="/">
                    <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand></NavLink>
                <Navbar.Toggle className={styles.dropdown} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink exact to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active}>
                            <i className="fa-solid fa-house-user">
                            </i>Home</NavLink>
                        <NavLink to="/signin"
                            className={styles.NavLink}
                            activeClassName={styles.Active} >
                            <i className="fa-solid fa-right-to-bracket">
                            </i>Sign In</NavLink>
                        <NavLink to="/signup"
                            className={styles.NavLink}
                            activeClassName={styles.Active} >
                            <i className="fa-solid fa-pen-to-square">
                            </i>Sign Up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </container>
    );
};

export default NavBar;