import React, { useState, useEffect } from "react"
// import rd3 from 'react-d3-library'

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
};

function radToDeg(rad) {
    return rad / (Math.PI / 180);
};

class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export function MoveAnimation(props) {
    const [state, SetState] = useState({ x: props.x, y: props.y, count: 0 });

    useEffect(() => {
        function update() {
            SetState(prevState => {
                return {
                    x: prevState.x + 20 < 800 ? prevState.x + 10 : 0,
                    y: prevState.y,
                    count: prevState.count + 1
                }
            })
        }
        const interval = setInterval(update, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <svg viewBox="0 0 1000 1000" width="400" height="400" >
                <rect style={{ width: "1000", height: "1000", strokeWidth: "10", stroke: "black", fill: "transparent" }}></rect>
                <image href={require('../icons/ScratchCat.png').default}
                    style={{ height: "200", width: "200", x: String(state.x), y: String(400) }} />
            </svg >
        </div>

    )
}

export function CoordinateAnimation(props) {
    const [state, SetState] = useState({ x: 300, y: 300, count: 0 });

    useEffect(() => {
        function update() {
            SetState(prevState => {
                return {
                    x: (prevState.count + 1) % 2 ? prevState.x : -prevState.x,
                    y: (prevState.count) % 2 ? prevState.y : -prevState.y,
                    count: (prevState.count + 1) % 4
                }
            })
        }
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <svg viewBox="0 0 1000 1000" width="400" height="400" >
                <rect style={{ width: "1000", height: "1000", strokeWidth: "10", stroke: "black", fill: "transparent" }}></rect>
                <image href={require('../icons/ScratchCat.png').default}
                    style={{ height: "200", width: "200", x: String(400 + state.x), y: String(400 + state.y) }} />
            </svg >
        </div>

    )
}



function AABB(rect1, rect2) {
    return (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y);
}

export function HorizontalBounce() {
    const init_angle = 120;
    const [state, setState] = useState({ x: 500, y: 500, count: 1, angle: degToRad(-90+init_angle), displayangle: init_angle });

    useEffect(() => {
        function update() {
            setState(prevState => {
                console.log(prevState.displayangle,degToRad(prevState.displayangle-90));
                // console.log("lul",degToRad(-90+120),p );


                let r = 50;
                let rect1 = new Rect(prevState.x - r / 2, prevState.y - r / 2, r, r);
                let rect2 = new Rect(0, 890, 1000, 30);
                let count = prevState.count;
                if (AABB(rect1, rect2)) {
                    count = -1;
                }
                if (prevState.x > 1000 || prevState.y > 1000 || prevState.x < 0 || prevState.y < 0) {
                    return {
                        x: 500,
                        y: 500,
                        count: 1,
                        angle: degToRad(prevState.displayangle-90),
                        displayangle: prevState.displayangle
                    }
                }
                return {
                    x: prevState.x + Math.cos(prevState.angle * count) * 4,
                    y: prevState.y + Math.sin(prevState.angle * count) * 4,
                    count: count,
                    angle: degToRad(prevState.displayangle-90),
                    displayangle: prevState.displayangle
                }
            })
        }
        const interval = setInterval(update, 10);
        return () => clearInterval(interval);
    }, []);

    let onChange = (e) => {
        setState(
            prevState => {
                
                return {
                    x: 500,
                    y: 500,
                    count: 1,
                    angle: degToRad(e.target.value-90),
                    displayangle: e.target.value
                }

            }
        )
    }

    return (
        <div>
            <input type="range" min="0" max="359" defaultValue={state.displayangle} class="slider" id="myRange" onChange={onChange} ></input>
            <div>{`${state.displayangle}deg`} </div>
            <svg viewBox="0 0 1000 1000" width="400" height="400" >
                <defs>
                    <marker id='head' orient={`${90 + radToDeg(state.angle)}deg`} markerWidth='20' markerHeight='20'
                        refX='0.1' refY='0' style={{ overflow: "visible" }}>
                        <path d='M0,0 V10 L10,0  L0,-10 Z' fill='darkblue' />
                    </marker>
                    <marker id='reverse-head' orient={`${270 - radToDeg(state.angle)}deg`} markerWidth='20' markerHeight='20'
                        refX='0.1' refY='0' style={{ overflow: "visible" }}>
                        <path d='M0,0 V10 L10,0  L0,-10 Z' fill='darkblue' />
                    </marker>
                </defs>

                <g transform="translate (500 500)">
                    {/* <path d={`M 0 -300 
                        A 300 300 0 0 1 ${300 * Math.cos(state.angle)} ${300 * Math.sin(state.angle)}`}
                        marker-end='url(#head)' stroke="#333" stroke-width="5" fill="none" /> */}

                    <path d={`M 0 -150 
                        A 150 150 0 ${state.displayangle>180?1:0} 1 ${150 * Math.cos(state.angle)} ${150 * Math.sin(state.angle)}`}
                        markerEnd='url(#head)' stroke="#333" strokeWidth="5" fill="none" />

                    <path d={`M 0 250  
                        A 250 250 0 ${state.displayangle>180?1:0} 0 ${250 * Math.cos(state.angle)} ${-250 * Math.sin(state.angle)}`}
                        markerEnd='url(#reverse-head)' stroke="#333" strokeWidth="5" fill="none" />

                    <line x1="-500" y1="0" x2="500" y2="0" style={{ stroke: " rgb(0, 0, 0)", strokeWidth: 2 }} />
                    <line x1="-0" y1="-500" x2="0" y2="500" style={{ stroke: "rgb(0, 0, 0)", strokeWidth: 2 }} />

                    {/* </path>
                    <path d="M10 215
                    L 110 215
                    A 1 2 0 0 1 310 215
                    L 540 215" marker-end='url(#head)' stroke="#333" fill="Crimson" stroke-width="3" fill-opacity="0.5" /> */}

                </g>
            </svg >

            <svg viewBox="0 0 1000 1000" width="400" height="400" >
                <rect style={{ width: "1000", height: "1000", strokeWidth: "10", stroke: "black", fill: "transparent" }}></rect>
                <circle cx={String(state.x)} cy={state.y} r="50" style={{ fill: "red" }}>
                </circle>
                <rect width="1000" height="30" x="0" y="890" style={{ fill: "green" }} />

            </svg >
        </div>

    )
}



// export MoveAnimation;
// export CoordinateAnimation;