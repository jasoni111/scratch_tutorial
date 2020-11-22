import React from "react";
import { Stack } from "@fluentui/react";
import "./App.css";

import { FirstProject } from "./components/firstProject";
import { Coordinate } from "./components/coordinate";
import { DirectionAndMove } from "./components/directionAndMove";
import { CollisionAndMomentum } from "./components/collisionsAndMomentum";
import { ForLoop } from "./components/forLoop";
import { Clone } from "./components/clone";
import { Event } from "./components/event";
import { Variable } from "./components/variable";

function App() {
  return (
    <Stack className="App" horizontalAlign="center">
      <Stack style={{ width: "1000px" }}>
        <FirstProject />
        <Coordinate />
        <DirectionAndMove />
        <CollisionAndMomentum />
        <ForLoop />
        <Clone />
        <Event />
        <Variable />
      </Stack>
    </Stack>
  );
}

export default App;
