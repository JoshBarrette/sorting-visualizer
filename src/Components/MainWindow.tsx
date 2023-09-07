import React, { useEffect } from "react";
import "./MainWindow.css";
import Visualizer from "./Visualizer";

export default function MainWindow() {
  const [rectangles, setRectangles] = React.useState([200, 600, 300]);
  const [delay, setDelay] = React.useState(50);
  const [hackRender, setHackRender] = React.useState(true);
  const [shouldReRender, setShouldReRender] = React.useState(true);

  useEffect(() => { // thanks chat gpt
    if (shouldReRender) {
      const timeout = setTimeout(() => {
        setShouldReRender(false);
      }, 0);
      // this timeout needs to be here for the other one to work
      // even though this one has no effect on the amount of delay at all

      return () => clearTimeout(timeout);
    }
  }, [shouldReRender]);

  const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newDelay = parseInt(event.target.value);
    if (newDelay < 0) {
      setDelay(0);
    } else {
      setDelay(newDelay);
    }
  }

  const randomRectNum = () => {
    return Math.floor(Math.random() * (600 - 100 + 1)) + 100;
  }

  const handleNumRectsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value);
    if (newValue < 3) {
      return;
    }

    let arr = new Array<number>();
    for (let i = 0; i < newValue; i++) {
      arr[i] = randomRectNum();
    }
    setRectangles(arr);
  };

  const reRollRects = () => {
    let arr = new Array<number>();
    for (let i = 0; i < rectangles.length; i++) {
      arr[i] = randomRectNum();
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
          swap(j);
          if (delay > 0) {
            await new Promise((resolve) => {
              setTimeout(resolve, delay);
            });
          }
          swapped = true;
        }
      }

      if (swapped === false) {
        break;
      }
    }

    // Re-render just incase something messes up (like on a low delay).
    setShouldReRender(true);
  }

  const swap = (idx: number) => {
    let temp = rectangles[idx];
    rectangles[idx] = rectangles[idx + 1];
    rectangles[idx + 1] = temp;

    setShouldReRender(true);
  }

  return (
    <div className="MainWindow">
      <div className="Controls">
        <label htmlFor="delayCount">Delay in ms:</label>
        <input defaultValue={50} type="number" id="delayCount" onChange={handleDelayChange} />

        <label htmlFor="numRects">Number of rectangles:</label>
        <input defaultValue={3} type="number" id="numRects" onChange={handleNumRectsChange} />

        <button onClick={reRollRects}>randomize values</button>
        <button onClick={bubbleSort}>bubble sort</button>
        <button onClick={() => setHackRender(!hackRender)}>re-render</button>
      </div>

      <Visualizer rectangles={rectangles} />
    </div>
  )
}
