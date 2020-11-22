import React from "react";
import { Stack, Image, Text } from "@fluentui/react";

import { MoveAnimation, Table, BR, Title } from "../../utils";

const ImgCreate = () => (
  <Image src={require("./Create.png").default} alt="./Create.png" />
);
const ImgCode1 = () => (
  <Image src={require("./code01.png").default} alt="./code01.png" />
);
const ImgWhenFlagClicked = () => (
  <Image
    src={require("./whenFlagClicked.svg").default}
    alt={"./whenFlagClicked.svg"}
    style={{ height: "50px" }}
  />
);
const ImgFlag = () => (
  <Image
    src={require("./flag.svg").default}
    width="30px"
    height="30px"
    alt="./flag.svg"
  />
);
const ImgForever = () => (
  <Image
    src={require("./forever.svg").default}
    alt={"./forever.svg"}
    style={{ height: "50px" }}
  />
);

const FirstProject = () => {
  return (
    <Stack horizontalAlign="start">
      <Title title={"Your first Scratch project"} />
      <Title title={"你第一個Scratch專案"} />

      <BR />

      <Stack>
        <ImgCreate />
        <Text>
          Go to{" "}
          <a href="https://scratch.mit.edu/" rel="noreferrer" target="_blank">
            scratch
          </a>{" "}
          and press "Create" to start you first Scratch project
        </Text>
        <Text>
          前往{" "}
          <a href="https://scratch.mit.edu/" rel="noreferrer" target="_blank">
            scratch
          </a>{" "}
          ，然後按 ”創建“ 以開始你第一個Scratch專案
        </Text>
      </Stack>

      <BR />

      <Stack style={{ width: "100%" }}>
        <Table code={<ImgCode1 />} result={<MoveAnimation x={0} y={11} />} />
      </Stack>

      <BR />

      <Stack horizontal verticalAlign="end">
        <ImgWhenFlagClicked />
        can be found in "Events", and
        <ImgForever /> can be found in "Control". Drag and drop the above blocks
      </Stack>

      <Stack horizontal verticalAlign="end">
        on the left and press the
        <ImgFlag />
        to run it. When
        <ImgFlag />
        is pressed, everything under the
        <ImgWhenFlagClicked />
        block will be ran.
      </Stack>

      <Stack horizontal verticalAlign="end">
        <ImgForever />
        is a control block that runs code inside of it indefinitely.
      </Stack>

      <Stack horizontal verticalAlign="end">
        This is commonly used to create a infintie loop and keep updating
        things.
      </Stack>

      <BR />

      <Stack horizontal verticalAlign="end">
        <ImgWhenFlagClicked /> 可以在 “事件” 部分找到，而
        <ImgForever /> 可以在 “控制” 部分找到。按左方圖像拖放上述方塊，
      </Stack>

      <Stack horizontal verticalAlign="end">
        然後按
        <ImgFlag />
        以執行該程序。當
        <ImgFlag />
        按下時，Scratch會執行
        <ImgWhenFlagClicked />
        下方的方塊。
      </Stack>

      <Stack horizontal verticalAlign="end">
        <ImgForever />
        是一個控制方塊，它會不停執行包裹著的方塊，常用來創建一個無限循環以及更新物件。
      </Stack>

      <BR />
    </Stack>
  );
};

export { FirstProject };
