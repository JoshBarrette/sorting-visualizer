import React from "react";
import "./MainWindow.css";
import Visualizer from "./Visualizer";

/*
  <window div>
    <header for settings />
    <viewer>
      <rectangle />
    </viewer>
  </window div>

  Hold the arrays and state for algorithms in this class.
*/

export default function MainWindow() {
  const [rectangles, setRectangles] = React.useState([200, 600, 300])
  const [hackRender, setHackRender] = React.useState(true);
  var delay = 10;

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    delay = parseInt(newValue);
  };

  const handleNumRectsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value);
    if (newValue < 3) {
      return;
    }

    let arr = new Array<number>();
    for (let i = 0; i < newValue; i++) {
      arr[i] = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
    }
    setRectangles(arr);
  };

  const reRollRects = () => {
    let arr = new Array<number>();
    for (let i = 0; i < rectangles.length; i++) {
      arr[i] = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
    }
    setRectangles(arr);
  }

  const bubbleSort = async () => {
    let i, j;
    let n = rectangles.length;
    let swapped;

    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (rectangles[j] > rectangles[j + 1]) {
          let temp;
          temp = rectangles[j];
          rectangles[j] = rectangles[j + 1];
          rectangles[j + 1] = temp;
          swapped = true;
        }
      }

      if (swapped == false)
        break;
    }

    setHackRender(!hackRender);
  }

  return (
    <div className="MainWindow">
      <div className="Controls">
        <label htmlFor="speed" id="speedLabel">Delay in ms:</label>
        <input defaultValue={10} type="number" id="speed" onChange={handleSpeedChange} />

        <label htmlFor="numRects" id="speedLabel">Number of rectangles:</label>
        <input defaultValue={3} type="number" id="numRects" onChange={handleNumRectsChange} />

        <button onClick={reRollRects}>randomize values</button>
        <button onClick={bubbleSort}>bubble sort</button>
        <button onClick={() => setHackRender(!hackRender)}>re-render</button>
      </div>

      <Visualizer rectangles={rectangles} />
    </div>
  )
}
