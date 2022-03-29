import React, { useEffect, useState } from "react";

const DigitalClock = () => {
    const [clockState, setClockState] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        }, 1000);
    }, []);

  return (
    <div>
        <h2 className="clock">{clockState}</h2>
    </div>
  )
}

export default DigitalClock
