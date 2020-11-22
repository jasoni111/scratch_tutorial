import React from "react";
import { Stack, Image } from "@fluentui/react";

import { RotateAnimation, BR, Title, Table } from "../../utils";

const ImgMove = () => (
  <Image
    src={require("./move.svg").default}
    alt="./move.svg"
    style={{ height: "50px" }}
  />
);
const ImgDirectionDiagram = () => (
  <Image
    src={require("./Direction_Diagram.png").default}
    alt="./Direction_Diagram.png"
  />
);
const ImgChangeDir = () => (
  <Image src={require("./changeDir.svg").default} alt="./changeDir.svg" />
);

const DirectionAndMove = () => {
  return (
    <Stack>
      <Title title={"Direction and move"} />

      <BR />

      <Stack horizontal>
        <Stack>
          <Stack horizontal verticalAlign="end">
            Every sprite in Scratch have an internal direction. When the block
            <ImgMove /> is executed,
          </Stack>

          <Stack>
            the sprite will move towards its internal direction for the amount
            of steps specified in the block. By default, every sprite points
            toward 90deg which means that they move to the right by default.
            When the angle increases, the sprite rotate clockwise.When the angle
            decrease, the sprite rotate anti-clockwise.
          </Stack>
        </Stack>

        <Stack>
          <ImgDirectionDiagram />
        </Stack>
      </Stack>

      <BR />

      <Table
        code={<ImgChangeDir />}
        result={<RotateAnimation clockwise={true} />}
      />

      <BR />
    </Stack>
  );
};

export { DirectionAndMove };
