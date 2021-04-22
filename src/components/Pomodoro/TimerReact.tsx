import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import Timer from 'tiny-timer';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';

export const TimerReact = (props: any)=> {

    const {time, timerName} = props;

    const [isLoading, setIsLoading] = useState(true);
    
    const [newTimer, setNewTimer] = useState(Object);
    const [newTimerName, setTimerName] = useState("");
    const [timerDisplay, setTimerDisplay] = useState(0);
    
    
    

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
      timer.on('done', () => console.log('done!'))
      timer.on('statusChanged', (status) => console.log('status:', status))
      timer.on('tick', (ms) =>  setTimerDisplay( Math.round(ms/1000)));

      return timer;

    }

    debugger;
    
    
  
    useEffect(()=>{
  
  
      if (time) {
  
        setIsLoading(false);
        setTimerName(timerName);
        
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
        <Card className ="pomodoro_timer_react">
          <div className = "timer_name">{newTimerName}</div>
  
          <div className = "timer_display">{timerDisplay}</div>
  
          <Button className = "button" onClick= {()=> {
  
            setNewTimer(createNewTimer("New Timer"));

          }}
          
          
          >New Clock</Button>

        
        <Button className = "button" onClick= {()=> {start(newTimer, time);}}>Start</Button>

        <Button className = "button" onClick= {()=> {stop(newTimer);}}>Stop</Button>
  
        <Button className = "button" onClick= {()=> {pause(newTimer);}}>Pause</Button>
  
        <Button className = "button" onClick= {()=> {resume(newTimer);}}>Resume</Button>
  
        <Button className = "button" onClick = {()=> {console.log(newTimer)}}>Console Log </Button>
  
  
        </Card>
  
        
      )
  
    );



}