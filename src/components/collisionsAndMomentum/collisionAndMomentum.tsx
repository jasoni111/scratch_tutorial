import React from "react";
import { Stack, Image, Text } from "@fluentui/react";

import { HorizontalBounce, BR, Title } from "../../utils";

const ImgCodeBall = () => (
  <Image
    height="450px"
    src={require("./codeBall.png").default}
    alt="./codeBall.png"
  />
);

const ImgCodeSprite = () => (
  <Image
    height="450px"
    src={require("./codeSprite.png").default}
    alt="./codeSprite.png"
  />
);

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
      <Title title={"Collisions: Bouncing Balls"} />
      <Title title={"碰撞：彈跳球"} />
      <BR />
      <Stack horizontal>
        <Text style={{ width: "700px" }}>
          In the diagram, light ray PO strikes a vertical mirror at point O, and
          the reflected ray is OQ. By projecting an imaginary line through point
          O perpendicular to the mirror, known as the normal, we can measure the
          angle of incidence, θi, and the angle of reflection, θr. The law of
          reflection states that θi = θr, or in other words, the angle of
          incidence equals the angle of reflection.
          <br />
          在圖中，光線PO於位置O擊中一塊垂直的鏡面，放射的光線為OQ。透過延伸一條穿過O並垂直於鏡面的虛擬線，我們可以找到入射角θi及反射角θr。
          反射定律定義了θi等於θr，即入射角等於反射角。
        </Text>
        <ImgReflectionAngles />
      </Stack>

      <BR />

      <Stack horizontalAlign="center">
        <HorizontalBounce />
      </Stack>

      <BR />

      <Text>
        Bouncing is not that easy to handle for a beginner. However, it is
        easier when we only have to consider bouncing on a horizontal and
        vertical plane.
        <br />
        設計一個擬真的反彈機制對初學者來說十分困難，但我們可以將之分為垂直及平面來處理。
      </Text>

      <BR />

      <Stack horizontalAlign="center">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ball 球</th>
              <th>Sprite 角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{<ImgCodeBall />}</td>
              <td>{<ImgCodeSprite />}</td>
            </tr>
          </tbody>
        </table>
      </Stack>

      <BR />

      <Stack horizontal>
        <Stack style={{ width: "500px" }}>
          {" "}
          <Text>
            When bouncing on a horizontal plane, the equation we use is setting
            the direction to (180-θ). Geometrically, this means that the sprite
            starts from facing downward, and start rotating anit-colckwise the
            original angle(the outer arrow). In the figure above, x-axis acts as
            the normal to the surface and the dotted arrow shows the reflected
            direction.
            <br />
            Try to work out what equation we can use for a vertical bounce!
            <br />
            By detecting different colors, we can know if the ball bouncing off
            a vertical surface or a horizontal surface.
            <br />
            Note: Scratch is not actually running all scripts at the same time
            so the collision may be buggy sometimes. You may yield some
            unexpected results if the delay before the clone deletion or the
            order of ball moving changed.
          </Text>
          <BR />
          <Text>
            在水平面上彈跳時，我們使用的方程式是將方向設置為（180-θ）。
            從幾何學上講，這意味著角色又面向下開始，然後反方向旋轉（外箭頭）。
            在上圖中，x軸用作表面的法線，點箭頭表示反射方向。
            <br />
            試試找到垂直跳動方程式！
            <br />
            通過檢測不同的顏色，我們可以知道球是從垂直表面還是從水平表面彈起。
            <br />
            注意：Scratch並沒有同時運行所有劇本，因此 有時碰撞會有bug。
            如果克隆刪除之前的延遲或球順序改變了，這可能會導致一些意想不到的結果。
          </Text>
        </Stack>
        <iframe
          src="https://scratch.mit.edu/projects/455640703/embed"
          allowTransparency={true}
          width="485"
          height="402"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </Stack>

      <BR />
    </Stack>
  );
};

export { CollisionAndMomentum };
