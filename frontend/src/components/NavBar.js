import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { CurrentUserContext } from '../App';

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons =
        <>
            <NavLink to="/signin"
                className={styles.NavLink}
                activeClassName={styles.Active} >
                <i className="fa-solid fa-right-to-bracket">
                </i>Sign In</NavLink>
            <NavLink to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active} >
                <i className="fa-solid fa-pen-to-square">
                </i>Sign Up</NavLink> </>;
    return (
        <Container>
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
                            </i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;