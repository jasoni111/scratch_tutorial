import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import {
  MoveAnimation,
  CoordinateAnimation,
  HorizontalBounce,
  FollowMouse,
  RotateAnimation,
} from "./components/animation";
import whenFlagClicked from "./code/whenFlagClicked.svg";
import forever from "./code/forever.svg";
import move from "./code/move.svg";
import changeDir from "./code/changeDir.svg";
import reflectionAngles from "./icons/Reflection_angles.svg";
import cloneWithoutSignal from "./code/clone_without_signal.png";

// https://scratchblocks.github.io <- use this to generate block

function table(code, result) {
  return (
    <table style={{ width: "100%" }}>
      <tr>
        <th>code</th>
        <th>expected result</th>
      </tr>
      <tr>
        <td>{code}</td>
        <td>{result}</td>
      </tr>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <div className="col-xs-10 col-xs-offset-1">
        <Header />
      </div>
      <a href="https://scratch.mit.edu/" rel="noreferrer" target="_blank">
        <img
          src={require("./icons/scratch.svg").default}
          alt="./icons/scratch.svg"
          className="Scratch-logo"
        />
        <div> Link </div>
      </a>
      <div>
        sample code fore dev.{" "}
        <a
          href="https://scratch.mit.edu/projects/451584119/"
          rel="noreferrer"
          target="_black"
        >
          https://scratch.mit.edu/projects/451584119/ AAA
        </a>
      </div>
      <h1>Your first Scratch project</h1>
      <div>
        <img
          src={require("./icons/Create.png").default}
          alt="./icons/Create.png"
        />
      </div>
      <div>
        Go to{" "}
        <a href="https://scratch.mit.edu/" rel="noreferrer" target="_blank">
          scratch
        </a>{" "}
        and press "Create" to start you first Scratch project
      </div>
      {table(
        <div>
          <img
            src={require("./code/code01.png").default}
            alt="./code/code01.png"
          />
        </div>,
        <MoveAnimation x={0} y={11}></MoveAnimation>
      )}
      <div>
        <img src={whenFlagClicked} alt={whenFlagClicked} /> can be found in
        "Events",
        <br />
        and <img src={forever} alt={forever} /> can be found in "Control"
        <br />
        Drag and drop the above blocks on the left and press the
        <img
          src={require("./icons/flag.svg").default}
          width="30"
          height="30"
          alt="./icons/flag.svg"
        />
        to run it. When{" "}
        <img
          src={require("./icons/flag.svg").default}
          width="30"
          height="30"
          alt="./icons/flag.svg"
        />{" "}
        is pressed, everything under the
        {<img src={whenFlagClicked} alt={whenFlagClicked} />} block will be ran.
        <br />
        {<img src={forever} alt={forever} />} is a control block that runs code
        inside of it indefinitely. This is commonly used to create a infintie
        loop and keep updating things.
      </div>
      <h2>coordinate</h2>
      {table(
        <img
          src={require("./code/code02.png").default}
          alt="./code/code02.png"
        />,
        <CoordinateAnimation />
      )}
      <div>
        Each point in the grid have a pair of x-y coordinate. x-coordinate
        corrspond to the horizontal position while y-coordinate corrspond to the
        vertical postion of an object.
      </div>
      {table(
        <img
          src={require("./code/code03.png").default}
          alt="./code/code03.png"
        />,
        <FollowMouse />
      )}
      <div>
        Try to move your mouse within this webpage. You will find that the cat
        is following your mouse horizontaly. This is because you set its x-asix
        position to the x-position of your mouse.
      </div>
      <h2>Direction and move</h2>
      <div>
        every sprite in Scratch have an internal direction. When the blcok
        <img src={move} alt={move} /> is executed, the sprite will move towards
        its internal direction for the amount of steps specified in the block.
        By default, every sprite points toward 90deg which means that they move
        to the right by default. When the angle increases, the sprite rotate
        clockwise.When the angle decrease, the sprite rotate anti-clockwise.
      </div>
      <img
        src={require("./icons/Direction_Diagram.png").default}
        alt="./icons/Direction_Diagram.png"
      />
      {table(
        <img src={changeDir} alt={changeDir} />,
        <RotateAnimation clockwise={true} />
      )}
      <h2>Collisions and Momentum: Bouncing Balls</h2>
      <img src={reflectionAngles} alt={reflectionAngles} />
      {/* TODO: make this to easy to read */}
      <div>
        /* TODO: make this to easy to read */ In the diagram, a light ray PO
        strikes a vertical mirror at point O, and the reflected ray is OQ. By
        projecting an imaginary line through point O perpendicular to the
        mirror, known as the normal, we can measure the angle of incidence, θi
        and the angle of reflection, θr. The law of reflection states that θi =
        θr, or in other words, the angle of incidence equals the angle of
        reflection.
      </div>

      <HorizontalBounce></HorizontalBounce>
      <div>
        bouncing is not that easy to handle for a beginer. However, it is easier
        when we only hace to consider bouncing on a horizontal and vertical
        plane.
        <br />
        {/* TODO: more explaination */}
        When bouncing on a horizontal plane, the equation we use is setting the
        direction to (180-θ). Geometrically, this means that the sprite starts
        from facing doward, and start rotating anit-colckwise the original
        angle(the outer arrow). TODO: more explaination
      </div>

      <div>TODO: ontouching.. </div>
      <div>TODO: explain angle of incident </div>
      <h2>For loop</h2>
      <h2>Clone</h2>
      <img src={cloneWithoutSignal} alt={cloneWithoutSignal}></img>
      <div>TODO: explain for loop and clone</div>

      <h2>event</h2>
      <div>TODO: explain "when clone start" and custom event</div>

      <h2>variable</h2>
      <div>TODO: explain variable</div>
    </div>
  );
}

export default App;
