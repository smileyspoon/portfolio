import React, {useState, useEffect} from 'react';
import { Button } from "react-bootstrap";
// import { Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";

//documentation for Timer
//https://www.npmjs.com/package/tiny-timer
import Timer from 'tiny-timer';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';
import { TimerReact } from './TimerReact';


export const Pomodoro = (props: any) => {


  const {user} = props;
  const time = new Time (0,1,3);
  const time2 = new Time (0,1,3);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{


    if (user) {

      setIsLoading(false);

    }


    else  {

      setIsLoading(true);

    }

  });

    

  return (

    (isLoading) ?


    <Loading />

    :

    (
      <div className="app">

      <TimerReact time={time} />
      <TimerReact time={time2} />
      </div>

      
    )

  );
};