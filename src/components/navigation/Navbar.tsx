import React, {useState, useEffect, useCallback} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Navigation = (props: any) => {

return (

    <Navbar>
        <Nav.Link href="/">
            <span>
            Dashboard
            </span>
        </Nav.Link>
        <NavDropdown title="Listing" id="listing__dropdown">
                <NavDropdown.Item href="/listing/page">Listing Page</NavDropdown.Item>
                <NavDropdown.Item href="/listing/add">Add New Listing</NavDropdown.Item>
                    <NavDropdown.Item href="/listing/edit_delete">Edit or Delete Listing</NavDropdown.Item>
        </NavDropdown>

    </Navbar>


);


}

