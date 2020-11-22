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

      <BR />

      <Table code={<ImgCode2 />} result={<CoordinateAnimation />} />

      <BR />

      <Stack>
        Each point in the grid have a pair of x-y coordinate. x-coordinate
        corrspond to the horizontal position while y-coordinate corrspond to the
        vertical postion of an object.
      </Stack>

      <BR />

      <Table code={<ImgCode3 />} result={<FollowMouse />} />

      <BR />

      <Stack>
        Try to move your mouse within this webpage. You will find that the cat
        is following your mouse horizontaly. This is because you set its x-asix
        position to the x-position of your mouse.
      </Stack>

      <BR />
    </Stack>
  );
};

export { Coordinate };
