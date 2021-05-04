import React, { useState, useEffect, useCallback } from "react";
import { Card, Button, Form, FormControl } from 'react-bootstrap';
import Timer from 'tiny-timer';
import _ from 'lodash';

import { Time } from './Time';
import { Loading } from '../Loading/Loading';

export const TimerReact = (props: any) => {

  const { time, timerName } = props;



  const [isLoading, setIsLoading] = useState(true);


  //have this just before newTimer so I can use it in it's useState
  const createNewTimer = () => {


    const timer = new Timer({ interval: 1000 });

    //when timer is done with countdown will reset the button config
    timer.on('done', () => { 
      console.log('done!'); 
      setStart(true); 
      setPause(false); 
      setResume(false) 
    });


    //when timer is running will reset the button config
    timer.on('statusChanged', (status) => {
      console.log('status:', status); if (status === 'running') {
        setStart(false);
        setPause(true);

      }
    });


    //on every 'tick' will convert ms to hours, minutes, seconds
    timer.on('tick', (ms) => {

      const tempTime = new Time(0,0,0, ms);
      const {h, m, s} = tempTime.convertToHMS();

      setHours(h);
      setMinutes(m);
      setSeconds(s);

    });

    return timer;

  }

  //I starts off with an new timer class instance.  I tried putting in Object and it does work, but not cleanly
  //will always operate on the Object first, so better to pass in an actuall timer
  const [newTime, setNewTime] =useState(time);
  const [newTimer, setNewTimer] = useState(createNewTimer());
  const [newTimerName, setTimerName] = useState("");
  // const [timerDisplay, setTimerDisplay] = useState(0);

  //controls showing of buttons
  const [showStart, setStart] = useState(true);
  const [showPause, setPause] = useState(false);
  const [showResume, setResume] = useState(false);

  //controls timer display input boxes
  const [hours, setHours] = useState(newTime.getH());
  const [minutes, setMinutes] = useState(newTime.getM());
  const [seconds, setSeconds] = useState(newTime.getS());





  const start = (timer: Timer, time: Time) => {


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


  // const timeOnChange= (type: string, t: number) => {

  //   setPause(false);
  //   setResume(false);
  //   setStart(true);

  //   if (type ==='hour') {

  //     setHours(t);

  //   }

  //   else if (type ==='minute') {

  //     setMinutes(t);

  //   }

  //   else if (type === 'second') {

  //     setSeconds(t);

  //   }

  //   else  {

  //     console.log('invalid timeOnClick type');

  //   }

  //   const tempTime = new Time(hours, minutes, seconds);

  //   const tempTimer = createNewTimer();


  //   console.log(tempTime);
  //   return {tempTimer, tempTime};
    
  // }

  const timeOnChange= (type: string, t: number) => {

    setPause(false);
    setResume(false);
    setStart(true);

    if (type ==='hour') {

      setHours(t);

    }

    else if (type ==='minute') {

      setMinutes(t);

    }

    else if (type === 'second') {

      setSeconds(t);

    }

    else  {

      console.log('invalid timeOnClick type');

    }

    const tempTime = new Time(hours, minutes, seconds);

    console.log(tempTime);
    return {tempTime};
    
  }


  useEffect(() => {


    if (time) {

      setIsLoading(false);

      setTimerName(timerName);

    }


    else {

      setIsLoading(true);

    }

  });





  return (


    (isLoading) ?


      <Loading />

      :

      (


        <Card className="pomodoro_timer_react">


          <div className="timer_name">{newTimerName}</div>



          <label>
            Hour:
              <input
              type="type"

              value={hours}

              onClick={() => {
                pause(newTimer);
              }}

              onChange={(e: any) => {

                const {tempTime} = timeOnChange('hour', e.target.value);

                setNewTime(tempTime);
                
              }}


            />
          </label>

          <label>
            Minute:
              <input
              type="type"

              value={minutes}

              onClick={() => {
                pause(newTimer);
              }}

              onChange={(e: any) => {
                const {tempTime} =timeOnChange('minute', e.target.value);
                setNewTime(tempTime);

              }}


            />
          </label>

          <label>
            Seconds:
              <input
              type="type"

              value={seconds}

              onClick={() => {
                pause(newTimer);
              }}

              onChange={(e:any) => {

                const {tempTime} = timeOnChange('second', e.target.value);
                
                setNewTime(tempTime);
              }}


            />
          </label>


          {/* RESET */}
          <Button className="button" onClick={() => {


            console.log(newTimer instanceof Timer);

            //need to check if it is newTimer, otherwise there are times when it is an empty object for some reason
            //if empty, will error out that stop function does not exist 
            if (newTimer instanceof Timer) {

              stop(newTimer);

            }

            setNewTimer(createNewTimer());
            setStart(true);
            setResume(false);
            setPause(false);

          }}>Reset</Button>

          {

            //START
            showStart ?
              <Button className="button" onClick={() => {


                //similar to above.  if newTimer is Timer instance will not create a new timer
                if (!(newTimer instanceof Timer)) {

                  setNewTimer(createNewTimer());

                }
                else {

                  stop(newTimer);
                  start(newTimer, newTime);
                }


              }}>Start</Button>

              :

              <div></div>
          }


          {
            showPause ?
              <Button className="button" onClick={() => {

                pause(newTimer);
                setPause(false);
                setResume(true);
              }}>Pause</Button>

              :

              <div></div>

          }


          {

            showResume ?
              <Button className="button" onClick={() => {
                resume(newTimer);
                setResume(false);
                setPause(true);
              }}>Resume</Button>

              :

              <div></div>

          }

          {/* console log printout for debug */}
          {/* <Button className="button" onClick={() => { console.log(newTimer) }}>Console Log </Button> */}

        </Card>
      )
  );
}


