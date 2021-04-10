import React, {useState, useEffect, useCallback} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft ,faHome, faAppleAlt, faFont,faAddressCard } from '@fortawesome/free-solid-svg-icons';

export const Navigation = (props: any) => {

return (

    <Navbar className="navbar">
        <Nav.Link className= "nav-link logo" href="/"> 
            <FontAwesomeIcon icon={faChevronLeft} size= "2x" />
            <span className="link-text">Portfolio</span>   
        </Nav.Link>

        <Nav.Link className= "nav-link" href="/">
            <FontAwesomeIcon className="nav-item" icon={faHome} size= "2x" />
            <span className="link-text">Home</span>
        </Nav.Link>

        <Nav.Link className= "nav-link" href="/pomodoro">
            <FontAwesomeIcon className="nav-item" icon={faAppleAlt} size= "2x" />
            <span className="link-text">Pomodoro</span>
        </Nav.Link>

        <Nav.Link className= "nav-link" href="/about">
            <FontAwesomeIcon className="nav-item" icon={faFont} size= "2x" />
            <span className="link-text">About</span>
        </Nav.Link>

        <Nav.Link className= "nav-link" href="/contact">
            <FontAwesomeIcon className="nav-item" icon={faAddressCard} size= "2x" />
            <span className="link-text">Contact</span>
        </Nav.Link>


    </Navbar>


);


}

