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
    </Stack>
  );
};

export { FirstProject };
