import logo from './logo.svg';
import React, { useState } from "react"
import { render } from 'react-dom'
import './App.css';
import { Header } from './components/Header';
import { MoveAnimation, CoordinateAnimation, HorizontalBounce } from "./components/animation"





function table(code, result) {
  return (
    <table style={{ width: "100%" }}>
      <tr>
        <th>code</th>
        <th>expected result</th>
      </tr>
      <tr>
        <td>
          {code}
        </td>
        <td>
          {result}
        </td>
      </tr>
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <div className="col-xs-10 col-xs-offset-1">
        <Header />
      </div>
      <a href="https://scratch.mit.edu/">
        <img src={require("./icons/scratch.svg").default} className="Scratch-logo" />
      </a>

      <h1>Your first Scratch program</h1>
      <HorizontalBounce></HorizontalBounce>

      <div><img src={require("./icons/Create.png").default} /></div>
      <div>
        create
      </div>

      {table(<img src={require('./code/code01.png').default} />,
        <MoveAnimation x={0} y={11} ></MoveAnimation>
      )}

      <div>
        TODO: explain when flag clicked
    </div>
      <div>
        TODO: explain forever
    </div>

      <h2>coordinate, direction and motion</h2>

      <div>TODO:explain coordinate</div>
      {table(<img src={require('./code/code02.png').default} />,
        <CoordinateAnimation />
      )}

      {table(<img src={require('./code/code03.png').default} />,
        <div>
          <img src={require('./icons/ScratchCat.png').default} />
          <div>TODO: animation</div>
        </div>

      )}

      <div>TODO:explaon directon and move </div>
      <img src={require("./icons/Direction_Diagram.png").default} />

      <h2>Collisions and Momentum: Bouncing Balls</h2>

      <div>TODO: ontouching.. </div>
      <div>TODO: explain angle of incident  </div>

      <h2>For loop</h2>

      <h2>event</h2>

      <h2>variable</h2>

    </div>
  );
}

export default App;
