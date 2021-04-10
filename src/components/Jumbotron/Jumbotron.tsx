
import { debug } from 'node:console';
import React, {useState, useEffect, useCallback} from 'react';
import { Jumbotron as Jumbo, Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";
import {useLocation} from 'react-router-dom';
// import styled from 'styled-components';
import mainImage from '../../assets/pomodoro.jpg'


export const Jumbotron = (props: any) => {


    


    const [isLoading, setIsLoading] = useState(true);
    const [titleString, setTitle] =useState("");


        
    const title = () => {

        const ref = window.location.pathname;
        console.log(ref);
        debugger;
        
        if (ref === '/') {

            setTitle('Home');

        }

        else if (ref === '/pomodoro') {
            setTitle('Pomodoro');

        }

        else if (ref === '/about') {
            setTitle('About');
        }

        else if (ref === '/contact') {
            setTitle('Contact');

        }

        else {

            setTitle('Update Jumbotron');
            
        }
        
    }

    useEffect(()=>{

        title();

    });
    

    return (

        <React.Fragment>
        <Jumbo fluid={true} className="jumbotron">
       
        {/* <img src={mainImage} alt=""/> */}
        
        <p className="title">{titleString}
        </p>
         </Jumbo>


        </React.Fragment>
        




    );
};