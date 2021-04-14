import React, {useState, useEffect, useCallback} from 'react';
import { Button } from "react-bootstrap";
// import { Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";

//documentation for Timer
//https://www.npmjs.com/package/tiny-timer
import Timer from 'tiny-timer';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';


export const Pomodoro = (props: any) => {


  const {user} = props;



  const defaultTimer = new Timer ();

  const [isLoading, setIsLoading] = useState(true);
  const [timerDisplay, setTimerDisplay] = useState(0);
  const [newTimer, setNewTimer ] = useState(defaultTimer);


  

  //test
  //should return {h: 2, m: 1, s: 5}
  // const timeHMS = new Time(0,0,0,7265000);
  // console.log(timeHMS.convertToHMS());

  const start=(timer: Timer, time: Time) => {
    timer.start(time.convertToSeconds());
  }

  const pause = (timer: Timer) => {
    timer.pause();
  
  }
  const stop = (timer: Timer) => {
    timer.stop();
  }

  const resume = (timer: Timer) => {
    timer.resume();
  }


  useEffect(()=>{


    if (user) {

      setIsLoading(false);

      

      
      //create function for each of this so it shows up on the website
      //need to end timer on refresh
      

      // timer.on('tick', (ms) =>  console.log(Math.round(ms/1000)));
      







    

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

        <span>{timerDisplay}</span>

        <Button onClick= {()=> {

        
          const timer = new Timer ({interval: 1000});
          const time = new Time (0,1,3);
          
          timer.on('tick', (ms) =>  setTimerDisplay(Math.round(ms/1000)));
          timer.on('done', () => console.log('done!'))
          timer.on('statusChanged', (status) => console.log('status:', status))
          setNewTimer(timer);


          start(timer, time);

        }}
        
        
        >New Clock</Button>

      <Button onClick= {()=> {stop(newTimer); }}>Stop</Button>

      <Button onClick= {()=> {pause(newTimer);}}>Pause</Button>

      <Button onClick= {()=> {resume(newTimer);}}>Resume</Button>


      </div>

      
    )

  );
};