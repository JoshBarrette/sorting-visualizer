import "./Visualizer.css";

type rectangleProps = {
  height: number;
}

type visualizerProps = {
  maxHeight?: number,
  minHeight?: number,
  rectangles: number[]
}

function Rectangle(props: rectangleProps) {
  let rectangleStyle: React.CSSProperties = {
    height: props.height
  };
  
  return (
    <div className="Rectangle">
      <p id="value" style={rectangleStyle}>{props.height}</p>
    </div>
  )
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