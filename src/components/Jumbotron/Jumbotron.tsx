import React, {useState, useEffect, useCallback} from 'react';
import { Jumbotron as Jumbo, Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";
// import styled from 'styled-components';
import boatImage from '../../assets/pomodoro.jpg'


export const Jumbotron = (props: any) => {


    const [isLoading, setIsLoading] = useState(true);

    

    return (

        <React.Fragment>
        <Jumbo fluid={true}> </Jumbo>
        <Container className="jumbotron">
            <h1> Welcome </h1>
            <p>
                Bitches!
            </p>

        </Container>

        </React.Fragment>
        




    );
};