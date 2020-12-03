import React from "react";
import { Stack, Image, Text } from "@fluentui/react";

import { BR, Title, SubTitle } from "../../utils";
import ToDownload from "./ToDownload.svg";
import BouncePad from "./BouncePad.svg";

const ImgUpload = () => (
  <Image src={require("./upload.png").default} alt="./upload.png" />
);

const ImgResult = () => (
  <Image src={require("./result.png").default} alt="./result.png" width="40%" />
);

const ImgBall = () => (
  <Image src={require("./ball.png").default} alt="./ball.png" width="50%" />
);

const ImgCode01 = () => (
  <Image src={require("./code01.png").default} alt="./code01.png" />
);

const ImgCode02 = () => (
  <Image src={require("./code02.png").default} alt="./code02.png" />
);

const ImgCode03 = () => (
  <Image src={require("./code03.png").default} alt="./code03.png" />
);

const ImgCode01C = () => (
  <Image src={require("./code01C.png").default} alt="./code01C.png" />
);

const ImgCode02C = () => (
  <Image src={require("./code02C.png").default} alt="./code02C.png" />
);

const ImgCode03C = () => (
  <Image src={require("./code03C.png").default} alt="./code03C.png" />
);

const ImgColorPicker = () => (
  <Image src={require("./colorPick.png").default} alt="./colorPick.png" />
);

const ImgCostumes = () => (
  <Image
    src={require("./costumes.png").default}
    alt="./costumes.png"
    width="40%"
  />
);
const ImgCostumesC = () => (
  <Image
    src={require("./costumesC.png").default}
    alt="./costumesC.png"
    width="40%"
  />
);

const ImgBackDrop = () => (
  <img
    src={require("./BackDrop.png").default}
    alt="./BackDrop.png"
    height="50px"
  />
);

const ImgDownload = () => (
  <a href={ToDownload} download="violet.svg">
    <Image src={ToDownload} alt={ToDownload} width="20%" />
    Download
  </a>
);

const ImgSelect = () => (
  <Image src={require("./Select.png").default} alt="./Select.png" />
);

const ImgBouncePad = () => (
  <a href={BouncePad} download="BouncePad.svg">
    <Image src={BouncePad} alt={BouncePad} width="20%" />
    Download
  </a>
);

const ImgTouchingBouncePad = () => (
  <img
    src={require("./TouchingBouncingPad.png").default}
    alt="./TouchingBouncingPad.png"
    height="50px"
  />
);

const ImgTouchingColor = () => (
  <img
    src={require("./TouchingColor.png").default}
    alt="./TouchingColor.png"
    height="50px"
  />
);

const Embeded = () => (
  <iframe
    src="https://scratch.mit.edu/projects/455568047/embed"
    allowTransparency={true}
    width={485}
    height="402"
    frameBorder="0"
    scrolling="no"
  ></iframe>
);

const MultipleScripts = () => {
  return (
    <Stack>
      <Title title={"Using multiplescripts and colision"} />
      <Title title={"使用多個劇本及碰撞感應"} />
      <Stack>
        <SubTitle subTitle={"Create Ball sprite"} />
        <SubTitle subTitle={"創建球型角色"} />

        <Stack>
          <ImgCostumes />
          <ImgCostumesC />
          Go to the "costumes" tab. Remove the sprite of the cat and change it
          to a ball with a color you like.
          <br />
          轉到“造型”頁。 刪除貓的角色，並將其更改為有顏色的球。
          <ImgBall />
        </Stack>

        <SubTitle subTitle={"Create Bouncing pad sprite"} />
        <SubTitle subTitle={"創建板角色"} />
        <Stack>
          Next, we are going to import a new sprite.
          <br />
          然後，我們載入一個新角色。
          <ImgBouncePad />
          <ImgUpload />
          You should see that a sprite of bounce pad is added. Now repeat to add
          another bounce pad. You should see something like this:
          <br />
          你應可見到舞台上新加了一塊板形狀的角色，接下來新增另一塊板。然後，你的舞台便如下圖所示：
          <ImgResult />
        </Stack>
      </Stack>
      <SubTitle subTitle={"Create Bouncing pad sprite 2"} />
      <SubTitle subTitle={"創建板角色 2"} />
      <Text>
        <ImgSelect />
        Note that each sprite will have its own script. Click on the icons to
        swich between scripts.
        <br />
        注意每個角色都有自己的劇本。你可以按不同角色以瀏覽各自的劇本。
      </Text>
      <Text>
        <ImgTouchingBouncePad /> and
        <ImgTouchingColor />
        are the blocks that detect if the sprite is touching another sprite. We can
        use this to detect collision with another sprite and decide what action
        to do.
      </Text>
      <Text>
        {" "}
        <ImgTouchingBouncePad /> 和
        <ImgTouchingColor />
        是用來感應碰撞的方塊，我們可以用這些方塊來設置角色碰撞時要執行的動作。
      </Text>
      <Text>
        {" "}
        <ImgColorPicker />
        Use Color picker to select color 用選擇器來選擇顏色
      </Text>
      <Text>
        {" "}
        Sometimes you need to retrieve the status of other sprites. Using <ImgBackDrop />,
        you can get the x, y, direction, of other sprites.
      </Text>
      <Text>
        {" "}
        有時候你需要取得其他角色的狀態。你可以用
        <ImgBackDrop />
        來取得其他角色的X，Y座標，以及方向。
      </Text>{" "}
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ball 球</th>
            <th>BouncePad 板</th>
            <th>BouncePad2 板2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{<ImgCode01C />}</td>
            <td>{<ImgCode02C />}</td>
            <td>{<ImgCode03C />}</td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ball 球</th>
            <th>BouncePad 板</th>
            <th>BouncePad2 板2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{<ImgCode01 />}</td>
            <td>{<ImgCode02 />}</td>
            <td>{<ImgCode03 />}</td>
          </tr>
        </tbody>
      </table>
      Expected result:
      <br />
      預期結果
      <Embeded />
      Note that the bouncing effect is not that natural. We will tackle this
      later.
      <br />
      你應可留意到碰撞過程並不自然，我們會在其他章節解決這個問題。
      <Stack>
        <SubTitle subTitle={"Adding sprite for breakout"} />
        <SubTitle subTitle={"為本遊戲新增角色"} />
        Note that we are trying to create a game of breakout, not pong. Now
        remove BouncePad2, then download and add the following sprite:
        <br />
        本遊戲為打磚塊遊戲，並不是Pong，所以請刪除板2，並下載及導入以下的角色：
        <ImgDownload />
      </Stack>
      <BR />
    </Stack>
  );
};

export { MultipleScripts };
