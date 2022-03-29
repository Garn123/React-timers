
import DigitalClock from "./components/DigitalClock";
import { useState } from 'react'
import "./main.scss";
import { StopWatch } from "./components/StopWatch";
import Countdown from "./components/CountDown";

function App() {
  const [showTime, setShowTime] = useState(true)
  return (
    <div className="App">
      <div className="selectors">
      <button className="time" onClick={() => setShowTime(true)}>Hora</button>
      <button className="stopWatch" onClick={() => setShowTime(false)}>Cronómetro</button>
      </div>
      {
        showTime ? (<DigitalClock/>) :
        (<StopWatch/>)
      }
      <Countdown/>
    </div>
  );
}

export default App;
