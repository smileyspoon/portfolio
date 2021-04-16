import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import Timer from 'tiny-timer';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';

export const TimerReact = (props: any)=> {
    const {time} = props;



    const timer = new Timer ({interval: 1000});
    const timerObject = {timerName: "", timer: timer, timerNum: 0};

    
  
    const [isLoading, setIsLoading] = useState(true);

    const [timerName, setTimerName] = useState("");
    const [timerDisplay, setTimerDisplay] = useState(0);
    const [newTimer, setNewTimer] =useState(timer);


  
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
  
    const createNewTimer = (timerName: string) => {
  
      
      const timer = new Timer ({interval: 1000});
      setNewTimer(timer);
      setTimerName(timerName);

      
      timer.on('done', () => console.log('done!'))
      timer.on('statusChanged', (status) => console.log('status:', status))
      timer.on('tick', (ms) =>  setTimerDisplay( Math.round(ms/1000)));

      

    }
  
  
    useEffect(()=>{
  
  
      if (time) {
  
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
        <Card>
  
          <span>{timerDisplay}</span>
  
          <Button onClick= {()=> {
  
            createNewTimer("New Timer");
            
            
            start(newTimer, time);
            
  
          }}
          
          
          >New Clock</Button>

        
        <Button onClick= {()=> {start(newTimer, time);}}>Start</Button>

        <Button onClick= {()=> {stop(newTimer);}}>Stop</Button>
  
        <Button onClick= {()=> {pause(newTimer);}}>Pause</Button>
  
        <Button onClick= {()=> {resume(newTimer);}}>Resume</Button>
  
        <Button onClick = {()=> {console.log(newTimer)}}>Console Log </Button>
  
  
        </Card>
  
        
      )
  
    );



}