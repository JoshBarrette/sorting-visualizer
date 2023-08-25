import "./Rectangle.css";

type rectangleProps = {
  height: number;
}

export default function Rectangle(props: rectangleProps) {
  const rectangleHeight: React.CSSProperties = {
    height: props.height
  };
  
  return (
    <div className="Rectangle">
      <p id="value" style={rectangleHeight}>{props.height}</p>
    </div>
  )
}