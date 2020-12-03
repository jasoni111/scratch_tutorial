import React from "react";
import { Stack, Image } from "@fluentui/react";

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
      <Stack>
        <SubTitle subTitle={"Create Ball sprite"} />

        <Stack>
          <ImgCostumes />
          <ImgCostumesC />
          Go to the "costumes" tab. Remove the sprite of the cat and change it
          to a ball with a color you like.
          <ImgBall />
        </Stack>

        <SubTitle subTitle={"Create Bouncing pad sprite"} />
        <Stack>
          Next, we are going to import a new sprite.
          <ImgBouncePad />
          <ImgUpload />
          You should see that a sprite of bounce pad is added. Now repeat to add
          another bounce pad. You should see something like this:
          <ImgResult />
        </Stack>
      </Stack>
      <SubTitle subTitle={"Create Bouncing pad sprite"} />
      <ul>
        <li>
          <ImgSelect />
          Note that each sprite will have its own script. Click on the icons to
          swich between scripts.
        </li>

        <li>
          <ImgTouchingBouncePad /> and
          <ImgTouchingColor />
          are the blocks that detect is the sprite touching another sprite. We
          can use this to detect collision with another sprite and decide what
          action to do.
        </li>
        <li>
          <ImgColorPicker />
          Use Color picker to select color
        </li>

        <li>
          <ImgBackDrop />
          Sometimes you need the status of other sprites. Using <ImgBackDrop />,
          you can gain the x, y, direction, of other sprites.
        </li>
      </ul>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ball</th>
            <th>BouncePad</th>
            <th>BouncePad2</th>
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
            <th>ball</th>
            <th>BouncePad</th>
            <th>BouncePad2</th>
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
      <Embeded />
      Note that the bouncing result is not that natural. We will tackle this
      later.
      <Stack>
        <SubTitle subTitle={"Adding sprite for breakout"} />
        Note that we are trying to create a game of breakout, not pong. Now
        remove BouncePad2, then download and add the following sprite:
        <ImgDownload />
      </Stack>
      <BR />
    </Stack>
  );
};

export { MultipleScripts };
