import React, { useState, useEffect } from 'react'

export const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        let interval = null;
    
        if (timer) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [timer]);

  return (
    <div className='stopwatch'>
        <div className='stopwatch__timer'>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="stopwatch__buttons">
            {!timer && time === 0 && (
            <button onClick={() => setTimer(true)}>Start</button>
            )}
            {timer && <button onClick={() => setTimer(false)}>Stop</button>}
            {!timer && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
            )}
            {!timer && time > 0 && (
            <button onClick={() => setTimer(true)}>Resume</button>
            )}
        </div>
    </div>
  )
}
