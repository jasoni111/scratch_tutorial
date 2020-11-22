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
      <Title title={"方向和移動"} />

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

          <Stack horizontal verticalAlign="end">
            每一個Scratch角色都有自己的方向。當方塊 <ImgMove />{" "}
            執行時，該角色會沿著內部方向移動方塊指定
          </Stack>

          <Stack>
            的步數。一開始，每個角色的內部方向都為90度，即右方。當角度增加時，角色會順時鐘轉動；當角度減少時，角色會逆時鐘轉動。
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
