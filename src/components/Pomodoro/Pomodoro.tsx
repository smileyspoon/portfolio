import React, {useState, useEffect, useCallback} from 'react';
import { Button } from "react-bootstrap";
// import { Row, Col, Form, Button, InputGroup, Card, Image, Carousel, Container } from "react-bootstrap";

//documentation for Timer
//https://www.npmjs.com/package/tiny-timer
import Timer from 'tiny-timer';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';
import { TimerReact } from './TimerReact';
import { debug } from 'node:console';




export const Pomodoro = (props: any) => {

  
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

  const [isLoading, setIsLoading] = useState(true);
  const [newPomodoro, setNewPomodoro] = useState(pomodoro);


//using useCallback so this only happens when something happens newPomodoro but
//never any other time when website rerenders
  const addNewTime = useCallback(()=>{

      const newTime = new Time (0,0,0);

      //setting up new array and putting all items into tempPomo from newPromodoro so 
      //react knows something new happened
      const tempPomo = [...newPomodoro];


      tempPomo.push(
        {
          timerName: "New Timer",
          time: newTime
        }
  
      );

      return tempPomo;
  
  
  },[newPomodoro]);
  

  
  




  useEffect(()=>{


    if (pomodoro) {

      setIsLoading(false);
      
    }


    else  {

      setIsLoading(true);

    }

  },[newPomodoro]);

    

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
        
        newPomodoro.map((t: any, index: number)=>{

          return <TimerReact time={t.time} key={index} timerName = {t.timerName}/>
         
        })
      }

        <Button
          onClick={()=>{
              
              setNewPomodoro(addNewTime());
              // console.log(pomodoro);
              // console.log(newPomodoro);
              
            }
          }
        >
          Add New Clock
        </Button>


      </div>

      

      
    )

  );
};