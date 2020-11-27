import React, { useState, useEffect, useRef } from "react";
// import rd3 from 'react-d3-library'

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}

function AABB(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

// input: deg in normal form
function ClockWiseArrow(props) {
  let r = props.r;
  let startAngle = degToRad((props.startAngle + 360.0) % 360);
  let sweepAngle = degToRad((props.sweepAngle + 360.0) % 360);
  let endAngle = startAngle + sweepAngle;
  return (
    <g>
      <g>
        <path
          d={`M ${r * Math.cos(startAngle)} ${r * Math.sin(startAngle)} 
                        A ${r} ${r} 0 ${radToDeg(sweepAngle) > 180 ? 1 : 0} 1 ${
            r * Math.cos(endAngle)
          } ${r * Math.sin(endAngle)}`}
          stroke="#333"
          strokeWidth="5"
          fill="none"
          strokeOpacity="0.5"
        />
        <g
          transform={`translate( ${r * Math.cos(endAngle)} ${
            r * Math.sin(endAngle)
          } ) rotate (${90 + radToDeg(endAngle)}  ) `}
        >
          <path
            d="M0,0 V25 L25,0  L0,-25 Z"
            fill="darkblue"
            fillOpacity={0.5}
          />
        </g>
      </g>
    </g>
  );
}

function AntiWiseArrow(props) {
  let r = props.r;
  let startAngle = degToRad((props.startAngle + 360.0) % 360);
  let sweepAngle = degToRad((props.sweepAngle + 360.0) % 360);
  let endAngle = startAngle - sweepAngle;
  return (
    <g>
      <g>
        <path
          d={`M ${r * Math.cos(startAngle)} ${r * Math.sin(startAngle)} 
                        A ${r} ${r} 0 ${radToDeg(sweepAngle) > 180 ? 1 : 0} 0 ${
            r * Math.cos(endAngle)
          } ${r * Math.sin(endAngle)}`}
          stroke="#333"
          strokeWidth="5"
          fill="none"
          strokeOpacity="0.5"
        />
      </g>
      <g
        transform={`translate( ${r * Math.cos(endAngle)} ${
          r * Math.sin(endAngle)
        } ) rotate (${270 + radToDeg(endAngle)}  ) `}
      >
        <path d="M0,0 V25 L25,0  L0,-25 Z" fill="darkblue" fillOpacity={0.5} />
      </g>
    </g>
  );
}

function Arrow(props) {
  let x1 = props.x1;
  let y1 = props.y1;
  let x2 = props.x2;
  let y2 = props.y2;
  let opacity = props.opacity ? props.opacity : 1;
  let p = props.strokeDasharray ? (
    <path
      d={`M ${x1} ${y1} L ${x2} ${y2}`}
      stroke="#333"
      strokeWidth="5"
      fill="none"
      strokeOpacity={opacity}
      strokeDasharray={10}
    />
  ) : (
    <path
      d={`M ${x1} ${y1} L ${x2} ${y2}`}
      stroke="#333"
      strokeWidth="5"
      fill="none"
      strokeOpacity={opacity}
    />
  );

  return (
    <g>
      {p}
      <g
        transform={`translate(${x2} ${y2}) rotate(${radToDeg(
          Math.atan2(y2 - y1, x2 - x1)
        )}) `}
      >
        <path d="M0,0 V30 L30,0  L0,-30 Z" fill="red" fillOpacity={opacity} />
      </g>
    </g>
  );
}

function XYGrid() {
  return (
    <g>
      <line
        x1="-500"
        y1="0"
        x2="500"
        y2="0"
        style={{ stroke: " rgb(0, 0, 0)", strokeWidth: 2 }}
      />
      <line
        x1="-0"
        y1="-500"
        x2="0"
        y2="500"
        style={{ stroke: "rgb(0, 0, 0)", strokeWidth: 2 }}
      />
    </g>
  );
}

function BoundingBox() {
  return (
    <rect
      style={{
        width: "1000",
        height: "1000",
        strokeWidth: "10",
        stroke: "black",
        fill: "transparent",
      }}
    />
  );
}

export function MoveAnimation(props) {
  const [state, SetState] = useState({ x: props.x, y: props.y, count: 0 });

  useEffect(() => {
    function update() {
      SetState((prevState) => {
        return {
          x: prevState.x + 20 < 800 ? prevState.x + 10 : 0,
          y: prevState.y,
          count: prevState.count + 1,
        };
      });
    }
    const interval = setInterval(update, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg viewBox="0 0 1000 1000" width="400px" height="400px">
      <BoundingBox />
      <image
        href={require("./ScratchCat.png").default}
        style={{
          height: "200px",
          width: "200px",
          x: String(state.x),
          y: String(400),
        }}
      />
    </svg>
  );
}

export function CoordinateAnimation(props) {
  const [state, SetState] = useState({ x: 300, y: 300, count: 0 });

  useEffect(() => {
    function update() {
      SetState((prevState) => {
        return {
          x: prevState.count % 2 ? prevState.x : -prevState.x,
          y: (prevState.count + 1) % 2 ? prevState.y : -prevState.y,
          count: (prevState.count + 1) % 4,
        };
      });
    }
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <svg viewBox="0 0 1000 1000" width="400px" height="400px">
        <BoundingBox />

        <image
          href={require("./ScratchCat.png").default}
          style={{
            height: "200px",
            width: "200px",
            x: String(400 + state.x),
            y: String(400 + state.y),
          }}
        />

        <line
          x1="0"
          y1="500"
          x2="1000"
          y2="500"
          style={{ stroke: " rgb(0, 0, 0)", strokeWidth: 2 }}
        />
        <line
          x1="500"
          y1="0"
          x2="500"
          y2="1000"
          style={{ stroke: "rgb(0, 0, 0)", strokeWidth: 2 }}
        />
        <text x="500" y="50" fontSize="50">
          (x:0,y:180)
        </text>
        <text x="500" y="980" fontSize="50">
          (x:0,y:-180)
        </text>
        <text x="500" y="490" fontSize="50">
          (x:0,y:0)
        </text>
        <text x="0" y="490" fontSize="50">
          (x:-240,y:0)
        </text>
        <text x="770" y="490" fontSize="50">
          (x:240,y:0)
        </text>
      </svg>
    </div>
  );
}

function scratchDegToRealRad(scratchDeg) {
  return degToRad(scratchDeg - 90);
}

export function RotateAnimation(props) {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    scratchDeg: 90,
    count: 0,
  });

  useEffect(() => {
    function update() {
      setState((prevState) => {
        if (prevState.count) {
          return {
            x: prevState.x,
            y: prevState.y,
            scratchDeg: (prevState.scratchDeg + 60) % 360,
            count: !prevState.count,
          };
        } else {
          return {
            x:
              prevState.x +
              Math.cos(scratchDegToRealRad(prevState.scratchDeg)) * 300,
            y:
              prevState.y +
              Math.sin(scratchDegToRealRad(prevState.scratchDeg)) * 300,
            scratchDeg: prevState.scratchDeg,
            count: !prevState.count,
          };
        }
      });
    }
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <svg viewBox="0 0 1000 1000" width="400px" height="400px">
        <BoundingBox />

        <text transform="translate(500 270)" fontSize={70}>
          {state.scratchDeg} deg
        </text>
        <g transform="translate (500 500)">
          <ClockWiseArrow
            r={150}
            startAngle={-90}
            sweepAngle={state.scratchDeg - 10}
          />
          <Arrow
            x1={0}
            y1={0}
            x2={200 * Math.cos(scratchDegToRealRad(state.scratchDeg))}
            y2={200 * Math.sin(scratchDegToRealRad(state.scratchDeg))}
          />
          <XYGrid />
        </g>
      </svg>

      <svg viewBox="0 0 1000 1000" width="400px" height="400px">
        <BoundingBox />

        <g
          transform={`translate(${state.x} ${
            state.y
          }) translate(300,300) rotate(${
            state.scratchDeg - 90
          }) translate(-100,-100)`}
        >
          <image
            href={require("./ScratchCat.png").default}
            style={{
              height: "200px",
              width: "200px",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

export function HorizontalBounce() {
  const initAngle = 165;
  const moveSpeed = 4;
  const [state, setState] = useState({
    x: 500,
    y: 500,
    count: 1,
    angle: degToRad(initAngle - 90),
    displayangle: initAngle,
  });

  useEffect(() => {
    function update() {
      setState((prevState) => {
        let r = 50;
        let rect1 = new Rect(prevState.x - r / 2, prevState.y - r / 2, r, r);
        let rect2 = new Rect(0, 890, 1000, 30);
        let rect3 = new Rect(0, 110, 1000, 30);

        let count = prevState.count;
        if (AABB(rect1, rect2) || AABB(rect1, rect3)) {
          count *= -1;
        }
        if (
          prevState.x > 1000 ||
          prevState.y > 1000 ||
          prevState.x < 0 ||
          prevState.y < 0
        ) {
          return {
            x: 500,
            y: 500,
            count: 1,
            angle: degToRad(prevState.displayangle - 90),
            displayangle: prevState.displayangle,
          };
        }
        return {
          x: prevState.x + Math.cos(prevState.angle * count) * moveSpeed,
          y: prevState.y + Math.sin(prevState.angle * count) * moveSpeed,
          count: count,
          angle: degToRad(prevState.displayangle - 90),
          displayangle: prevState.displayangle,
        };
      });
    }
    const interval = setInterval(update, 10);
    return () => clearInterval(interval);
  }, []);

  let onChange = (e) => {
    setState((prevState) => {
      return {
        x: 500,
        y: 500,
        count: 1,
        angle: degToRad(e.target.value - 90),
        displayangle: Number(e.target.value),
      };
    });
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="359"
        defaultValue={state.displayangle}
        className="slider"
        id="myRange"
        onChange={onChange}
      ></input>
      <div>{`${state.displayangle}deg`} </div>
      <svg viewBox="0 0 1000 1000" width="400px" height="400px">
        <BoundingBox />

        <g transform="translate (500 500)">
          <ClockWiseArrow
            r={150}
            startAngle={-90}
            sweepAngle={state.displayangle - 10}
          />
          <AntiWiseArrow
            r={250}
            startAngle={90}
            sweepAngle={state.displayangle - 6}
          />
          <Arrow
            x1={
              state.count > 0
                ? 300 * Math.cos(scratchDegToRealRad(180 + state.displayangle))
                : 300 * Math.cos(scratchDegToRealRad(-state.displayangle))
            }
            y1={
              state.count > 0
                ? 300 * Math.sin(scratchDegToRealRad(180 + state.displayangle))
                : 300 * Math.sin(scratchDegToRealRad(-state.displayangle))
            }
            x2={
              state.count > 0
                ? 300 * Math.cos(scratchDegToRealRad(state.displayangle))
                : 300 * Math.cos(scratchDegToRealRad(180 - state.displayangle))
            }
            y2={
              state.count > 0
                ? 300 * Math.sin(scratchDegToRealRad(state.displayangle))
                : 300 * Math.sin(scratchDegToRealRad(180 - state.displayangle))
            }
          />
          <Arrow
            x1={0}
            y1={0}
            x2={
              state.count < 0
                ? 300 * Math.cos(scratchDegToRealRad(state.displayangle))
                : 300 * Math.cos(scratchDegToRealRad(180 - state.displayangle))
            }
            y2={
              state.count < 0
                ? 300 * Math.sin(scratchDegToRealRad(state.displayangle))
                : 300 * Math.sin(scratchDegToRealRad(180 - state.displayangle))
            }
            opacity={0.5}
            strokeDasharray={1}
          />

          <XYGrid />
        </g>
      </svg>

      {/* bounding box */}
      <svg viewBox="0 0 1000 1000" width="400px" height="400px">
        <rect
          style={{
            width: "1000",
            height: "1000",
            strokeWidth: "10",
            stroke: "black",
            fill: "transparent",
          }}
        />
        {/* bouncing ball */}
        <circle cx={state.x} cy={state.y} r="50" style={{ fill: "red" }} />

        {/* Two horizontal bar */}
        <rect
          width="1000px"
          height="30px"
          x="0"
          y="890"
          style={{ fill: "green" }}
        />
        <rect
          width="1000px"
          height="30px"
          x="0"
          y="110"
          style={{ fill: "green" }}
        />
      </svg>
    </div>
  );
}

export function FollowMouse() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  // const div_blcok = useRef(null);

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  const [state, setState] = useState({ x: 80, y: 80, width: 400, height: 400 });
  let measuredRef = useRef(null);

  const updatedFramePosition = () => {
    if (measuredRef.current !== null) {
      setState((prevState) => {
        let rect = measuredRef.current.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        };
      });
    }
  };

  useEffect(() => {
    let interval = setInterval(updatedFramePosition, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const clip = (x, min, max) => (x < min ? min : x > max ? max : x);

  return (
    <div>
      <svg
        viewBox="0 0 1000 1000"
        width="400px"
        height="400px"
        ref={measuredRef}
      >
        <rect
          style={{
            width: "1000px",
            height: "1000px",
            strokeWidth: "10",
            stroke: "black",
            fill: "transparent",
          }}
        ></rect>

        <g transform="translate(-100,-100)">
          <image
            href={require("./ScratchCat.png").default}
            style={{
              height: "200px",
              width: "200px",
              x: clip(
                ((mousePosition.x - state.x) / state.width) * 1000,
                0,
                1000
              ),
              y: 800,
              // y: clip((mousePosition.y - state.y) / state.height * 1000, 0, 1000)
            }}
          />
        </g>
      </svg>
    </div>
  );
}

export function CloneAnimation() {
  const [state, setState] = useState({
    x: -1,
    y: 0,
    rects: [],
    completeLoading: false,
  });
  useEffect(() => {
    function update() {
      // console.log("gg");
      setState((prevState) => {
        let x = prevState.x;
        let y = prevState.y;
        let rects = [...prevState.rects];
        if (x++ > 5) {
          x = 0;
          y++;
        }
        if (y < 5) {
          rects.push([x, y]);
        }

        return {
          x: x,
          y: y,
          rects: rects,
        };
      });
    }
    let interval = setInterval(update, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // let rendered ret = [];

  return (
    <div>
      {state.text}
      <svg viewBox="0 0 1000 1000" width="400px" height="400px">
        <BoundingBox />
        {state.rects.map((items) => {
          let [x, y] = items;
          console.log(`${x}||${y}`);
          return (
            <rect
              x={20 + x * 135}
              y={20 + y * 45}
              width={125}
              height={40}
              strokeWidth={3}
              stroke="black"
              fill="aquamarine"
              key={`x:${x}y:${y}`}
            />
          );
        })}
      </svg>
    </div>
  );
}
