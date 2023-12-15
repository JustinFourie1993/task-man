import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';

import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser()

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handlesignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/")
            setCurrentUser(null)
        } catch (err) {
            // console.log(err)
        }
    }
    const loggedInIcons = 
        <>
            <NavLink to="/tasks/create"
                className={styles.NavLink}
                activeClassName={styles.Active} >
                <i class="fa-solid fa-plus"></i>
                Add Task</NavLink>
            <NavLink to="/"
                className={styles.NavLink}
                onClick = {handlesignOut} >
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out</NavLink>
            </>;
    const loggedOutIcons =
        <>
            <NavLink to="/signin"
                className={styles.NavLink}
                activeClassName={styles.Active} >
                <i className="fa-solid fa-right-to-bracket">
                </i>Sign In</NavLink>
            <NavLink to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}>
                <i className="fa-solid fa-pen-to-square">
                </i>Sign Up</NavLink> </>;
    return (
        <Container>
            <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
                <NavLink to="/">
                    <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand></NavLink>
                <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} className={styles.dropdown} aria-controls="basic-navbar-nav" />
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