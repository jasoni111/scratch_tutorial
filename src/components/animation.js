import React, { useState, useEffect } from "react"


function MoveAnimation(props) {
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






export default MoveAnimation;