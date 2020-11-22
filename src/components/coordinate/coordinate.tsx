import React from "react";
import { Stack, Image } from "@fluentui/react";

import {
  CoordinateAnimation,
  FollowMouse,
  Table,
  BR,
  Title,
} from "../../utils";

const ImgCode2 = () => (
  <Image src={require("./code02.png").default} alt="./code02.png" />
);
const ImgCode3 = () => (
  <Image src={require("./code03.png").default} alt="./code03.png" />
);

const Coordinate = () => {
  return (
    <Stack horizontalAlign="start">
      <Title title={"Coordinate"} />
      <Title title={"座標"} />

      <BR />

      <Table code={<ImgCode2 />} result={<CoordinateAnimation />} />

      <BR />

      <Stack>
        Each point in the grid have a pair of x-y coordinate. x-coordinate
        corrspond to the horizontal position while y-coordinate corrspond to the
        vertical postion of an object.
      </Stack>

      <Stack>
        格中每一個點都是一個XY座標。X座標對應水平位置，Y座標對應垂直位置。
      </Stack>

      <BR />

      <Table code={<ImgCode3 />} result={<FollowMouse />} />

      <BR />

      <Stack>
        Try to move your mouse within this webpage. You will find that the cat
        is following your mouse horizontaly. This is because you set its x-asix
        position to the x-position of your mouse.
      </Stack>

      <Stack>
        嘗試在網頁中移動你的滑鼠。你會發現圖中的貓會在水平方向上與你的滑鼠一齊移動，這是因為它的X座標一直與滑鼠的X座標相同。
      </Stack>

      <BR />
    </Stack>
  );
};

export { Coordinate };
