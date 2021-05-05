import React, {useState, useEffect} from 'react';
// import { Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";


import {Loading} from '../Loading/Loading';



const useTimeInput = (item: any, timer: any, pause: any, key: any) => {

    const [isLoading, setIsLoading] = useState(true);
    const [newItem, setItem] =useState(item);
    const [changeIndicator, setChangeIndicator] =useState(false);


    




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
        type="number"
        key={`${item.type}-${key}`}

        value={newItem.t}
        autoFocus={true}

        onClick={() => {
            pause(timer);
        }}

        onChange={(e: any) => {

            item.t=e.target.value;

            setItem(item);    

            //need to have some back and forth with this
            setChangeIndicator(true);
            console.log(item);
            
        }}


        />
    </label>


    );
    

    return [newItem,TimeInput, setItem];
};

export default useTimeInput;