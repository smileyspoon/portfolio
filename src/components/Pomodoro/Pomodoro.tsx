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


  // const {pomodoro} = props;

  const time = new Time (0,0,8);
  const time2 = new Time (0,0,8);
  const pomodoro= 
    [
      {
        timerName: "Timer One",
        time: time
      },
      {
        timerName: "Timer Two",
        time: time2
      }
    ];


  const addNewTime = ()=>{

    const newTime = new Time (0,0,0);

    pomodoro.push(
      {
        timerName: "New Timer",
        time: newTime
      }

    )

    console.log(pomodoro);

  }

  
  

  
  

  const [isLoading, setIsLoading] = useState(true);
  const [newPomodoro, setNewPomodoro] = useState([]);


  useEffect(()=>{


    if (pomodoro) {

      setIsLoading(false);
      setNewPomodoro(newPomodoro);


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
      <div className="app pomodoro">

      {/* <TimerReact time={time} timerName = {"Timer One"}/>
      <br></br>
      <TimerReact time={time2} timerName = {"Timer Two"}/> */}

      {
        
        pomodoro.map((t: any, index: number)=>{

          return <TimerReact time={t.time} key={index} timerName = {t.timerName}/>
         
        })
      }

        <Button
          onClick={()=>{
              addNewTime();
              setNewPomodoro(newPomodoro);
              // console.log(pomodoro);

            }
          }
        >
          Add New Clock
        </Button>


      </div>

      

      
    )

  );
};