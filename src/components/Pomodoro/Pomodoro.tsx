import React, {useState, useEffect, useCallback} from 'react';
// import { Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";
import Timer from 'tiny-timer';


import { Loading } from '../Loading/Loading';


export const Pomodoro = (props: any) => {

  const {user} = props;


  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{


    if (user) {

      setIsLoading(false);

      const timer = new Timer()


      timer.on('tick', (ms) => console.log('tick', ms))


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

      </div>
    )

  );
};