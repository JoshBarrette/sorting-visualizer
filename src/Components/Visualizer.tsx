import Rectangle from "./Rectangle";
import "./Visualizer.css";

type visualizerProps = {
  maxHeight?: number,
  minHeight?: number,
  rectangles: number[]
}

export default function Visualizer(props: visualizerProps) {
  return (
    <div className="Visualizer">
      <div id="window">
        {props.rectangles.map((height, key) => {
          return (
            <Rectangle height={height} key={key}/>
          )
        })}
      </div>
    </div>
  )
}