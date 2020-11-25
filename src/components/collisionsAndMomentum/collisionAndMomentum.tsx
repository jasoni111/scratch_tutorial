import React from "react";
import { Stack, Image } from "@fluentui/react";

import { HorizontalBounce, BR, Title } from "../../utils";

const ImgReflectionAngles = () => (
  <Image
    src={require("./Reflection_angles.svg").default}
    height="20%"
    alt="./Reflection_angles.svg"
  />
);

const CollisionAndMomentum = () => {
  return (
    <Stack horizontalAlign="start">
      <Title title={"Collisions and Momentum: Bouncing Balls"} />

      <BR />

      <ImgReflectionAngles />

      {/* TODO: make this to easy to read */}
      <Stack>
        In the diagram, a light ray PO strikes a vertical mirror at point O, and
        the reflected ray is OQ. By projecting an imaginary line through point O
        perpendicular to the mirror, known as the normal, we can measure the
        angle of incidence, θi and the angle of reflection, θr. The law of
        reflection states that θi = θr, or in other words, the angle of
        incidence equals the angle of reflection.
      </Stack>

      <HorizontalBounce />

      <Stack>
        bouncing is not that easy to handle for a beginer. However, it is easier
        when we only hace to consider bouncing on a horizontal and vertical
        plane.
        <br />
        {/* TODO: more explaination */}
        When bouncing on a horizontal plane, the equation we use is setting the
        direction to (180-θ). Geometrically, this means that the sprite starts
        from facing doward, and start rotating anit-colckwise the original
        angle(the outer arrow). In the figure above, x-axis acts as the normal to the surface and the doted arrow shows the reflected direction.
      </Stack>

    </Stack>
  );
};

export { CollisionAndMomentum };
