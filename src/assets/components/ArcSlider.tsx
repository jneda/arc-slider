import { useState } from "react";

export default function ArcSlider({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  const [hovered, setHovered] = useState(false);

  const style = {
    stroke: hovered ? "gold" : "hotpink",
    strokeWidth: "2rem",
    fill: "none",
  };

  const dotColor = hovered ? "black" : "linen";

  return (
    <>
      <svg height={height} width={width}>
        <path
          d={`M${width * 0.9} ${height} A${height * 0.4} ${
            height * 0.4
          } 0 0 0 ${width * 0.1} ${height}`}
          style={style}
          onMouseOver={() => setHovered(true)}
          onTouchStart={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          onTouchEnd={() => setHovered(false)}
        />
        <g>
          <circle cx={width * 0.9} cy={height} r="1rem" fill={dotColor} />
          <circle cx={width * 0.1} cy={height} r="1rem" fill={dotColor} />
          {/* <circle cx={width * 0.5} cy={height * 0.6} r="1rem" fill={dotColor} /> */}
        </g>
      </svg>
    </>
  );
}
