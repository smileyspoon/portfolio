import React, { useState, useEffect } from "react";
import { Card, Button, Form, FormControl } from 'react-bootstrap';
import Timer from 'tiny-timer';
import _ from 'lodash';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';

export const TimerReact = (props: any)=> {

    const {time, timerName} = props;
  


    const [isLoading, setIsLoading] = useState(true);


    const createNewTimer = () => {
  
      
      const timer = new Timer ({interval: 1000});
      timer.on('done', () => {console.log('done!'); setStart(true); setPause(false); setResume(false)});
      timer.on('statusChanged', (status) => {console.log('status:', status); if (status ==='running') {
        setStart(false);
        setPause(true);

      }});

      //need function that converts to h m s
      timer.on('tick', (ms) =>  setTimerDisplay( Math.round(ms/1000)));

      return timer;

    }

    const [newTimer, setNewTimer] = useState(createNewTimer());
    const [newTimerName, setTimerName] = useState("");
    const [timerDisplay, setTimerDisplay] = useState(0);
    const [showStart, setStart] = useState(true);
    const [showPause, setPause] =useState(false);
    const [showResume, setResume] = useState(false);
    
    
    
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
  
          {/* <div className = "timer_display">{timerDisplay}</div> */}

            <label>
              Hour:
              <input
                type="type"
                
                defaultValue = {time.getH()}
                
                value= {timerDisplay}
                
                onClick ={ ()=>{
                  pause(newTimer);
                }}

                onChange ={()=>{
                  
                }}


              />
            </label>

            <label>
              Minute:
              <input
                type="type"
                
                defaultValue = {time.getM()}
                
                value= {timerDisplay}
                
                onClick ={ ()=>{
                  pause(newTimer);
                }}

                onChange ={()=>{
                  
                }}


              />
            </label>

            <label>
              Seconds:
              <input
                type="type"
                
                defaultValue = {time.getS()}
                
                value= {timerDisplay}
                
                onClick ={ ()=>{
                  pause(newTimer);
                }}

                onChange ={()=>{
                  
                }}


              />
            </label>
        
        
          {/* RESET */}
          <Button className = "button" onClick= {()=> {

            
            console.log(newTimer instanceof Timer);

            if (newTimer instanceof Timer) {


              stop(newTimer); 

            }
            const temp = createNewTimer()

            setNewTimer(temp);
            setStart(true);
            setResume(false);
            setPause(false);
            
          
          
          }}>Reset</Button>

        {

          //START
          showStart ?
          <Button className = "button" onClick= {()=> {

            
            console.log(newTimer);

            if (!(newTimer instanceof Timer)) {
              const temp = createNewTimer()

              setNewTimer(temp);
              
            }
            else {
              
              stop(newTimer); 
              start(newTimer, time); 
            }
            console.log(newTimer);
            

          }}
  
          >Start</Button>

          :

        <div></div>
        }
        
        
        {
          showPause ?
          <Button className = "button" onClick= {()=> {pause(newTimer); setPause(false); setResume(true); }}>Pause</Button>

          :
          <div></div>

        }
        

        {

          showResume ?
          <Button className = "button" onClick= {()=> {resume(newTimer); setResume(false); setPause(true); }}>Resume</Button>

          :
          <div></div>

        }
  
        

          <Button className = "button" onClick = {()=> {console.log(newTimer)}}>Console Log </Button>



        

  
        
  
  
        </Card>
  
        
      )
  
    );



}