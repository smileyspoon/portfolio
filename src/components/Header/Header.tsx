import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header =(props: any) => {


    return (

        <Navbar>


                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                </Navbar.Collapse>

        </Navbar>


    );

}