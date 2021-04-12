import React from 'react';

import { Navbar, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft ,faHome, faAppleAlt, faFont,faAddressCard } from '@fortawesome/free-solid-svg-icons';


export const Navigation = (props: any) => {

return (

    <Navbar className="navbar">
        <ul className="navbar-nav">
        
        <li className="logo">
        <Nav.Link className= "nav-link " href="/"> 
            <FontAwesomeIcon icon={faChevronLeft} size= "2x" />
            <span className="logo-text">Portfolio</span>   
        </Nav.Link>
        </li>

        <li className="nav-item">
        <Nav.Link className= "nav-link" href="/">
            <FontAwesomeIcon icon={faHome} size= "2x" />
            <span className="link-text">Home</span>
        </Nav.Link>
        </li>


        <li className="nav-item">
        <Nav.Link className= "nav-link" href="/pomodoro">
            <FontAwesomeIcon  icon={faAppleAlt} size= "2x" />
            <span className="link-text">Pomodoro</span>
        </Nav.Link>
        </li>

        <li className="nav-item">
        <Nav.Link className= "nav-link" href="/about">
            <FontAwesomeIcon  icon={faFont} size= "2x" />
            <span className="link-text">About</span>
        </Nav.Link>
        </li>

        <li className="nav-item">
        <Nav.Link className= "nav-link" href="/contact">
            <FontAwesomeIcon  icon={faAddressCard} size= "2x" />
            <span className="link-text">Contact</span>
        </Nav.Link>
        </li>

        </ul>


    </Navbar>


);


}


