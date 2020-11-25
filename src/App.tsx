import React from "react";
import { Stack } from "@fluentui/react";
import "./App.css";

import { TODO } from "./components/toDo"
import { FirstProject } from "./components/firstProject";
import { Coordinate } from "./components/coordinate";
import { DirectionAndMove } from "./components/directionAndMove";
import { CollisionAndMomentum } from "./components/collisionsAndMomentum";
import { ForLoop } from "./components/forLoop";
import { Clone } from "./components/clone";
import { Event } from "./components/event";
import { Variable } from "./components/variable";
import {MultipleScripts} from "./components/multipleScripts"

function App() {
  return (
    <Stack className="App" horizontalAlign="center">
      <Stack style={{ width: "1000px" }}>
        <TODO/>
        <FirstProject />
        <Coordinate />
        <DirectionAndMove />
        <MultipleScripts/>
        
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
