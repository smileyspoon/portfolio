import React, {useState, useEffect, useCallback} from 'react';
import { Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";


import {Loading} from '../Loading/Loading';



const useTimeInput = (item: any, timer: any, pause: any) => {

    const [isLoading, setIsLoading] = useState(true);
    const [newItem, setItem] =useState(item);


    




    useEffect (() => {

        

        if (item) {

        
        setIsLoading(false);


        }

        else {

            setIsLoading(true);

        }

    },[item]);


    const TimeInput = ()=> (

        (isLoading) ?

        <Loading />

        :


        <label>
        {item.type}:
        <input
        type="type"

        value={newItem.t}

        onClick={() => {
            pause(timer);
        }}

        onChange={(e: any) => {

            newItem.t=e.target.value;

            setItem(newItem);    
            
        }}


        />
    </label>


    );
    

    return [newItem,TimeInput, setItem];
};

export default useTimeInput;