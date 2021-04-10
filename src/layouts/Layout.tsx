import React, {useState, useEffect, useCallback} from 'react';
import {  Container } from "react-bootstrap";


export const Layout = (props: any) => {

    return (

        //all props that is passed will propogate as children 
        <Container>
            {props.children}
        </Container>

    );
};