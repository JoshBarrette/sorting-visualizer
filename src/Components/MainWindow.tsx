import React, { ReactEventHandler } from "react";
import "./MainWindow.css";
import Visualizer from "./Visualizer";

/*
  <window div>
    <header for settings />
    <viewer />
  </window div>

  Hold the arrays and state for algorithms in this class.
*/

type mainWindowProps = {
  children: JSX.Element
}

export default function MainWindow() {
  const [rangeValue, setRangeValue] = React.useState("5");

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setRangeValue(newValue);
  };
  
  return (
    <div className="MainWindow">
      <div className="Controls">
        <form>
          <label htmlFor="speed" id="speedLabel">Delay in seconds: {parseInt(rangeValue)/2}</label>
          <input type="range" defaultValue="5" min="0" max="10" id="speed" onChange={handleRangeChange} />
        </form>
      </div>
      <Visualizer />
    </div>
  )
}
