import React, {useState, useEffect, useCallback} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Navigation = (props: any) => {

return (

    <Navbar>
        <Nav.Link href="/">
            <span>
            Home
            </span>
        </Nav.Link>

        <Nav.Link href="/pomodoro">
            <span>
            Pomodoro
            </span>
        </Nav.Link>

        <Nav.Link href="/about">
            <span>
            About
            </span>
        </Nav.Link>

        <Nav.Link href="/contact">
            <span>
            Contact
            </span>
        </Nav.Link>


    </Navbar>


);


}

