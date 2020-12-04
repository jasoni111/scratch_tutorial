import React from "react";
import { Stack, Image, Text } from "@fluentui/react";

import { BR, Title, CloneAnimation } from "../../utils";

const ImgCloneWithoutSignal = () => (
  <Image
    src={require("./clone_without_signal.png").default}
    alt="./clone_without_signal.png"
  />
);

const ImgCodeCloneC = () => (
  <Image src={require("./codeCloneC.png").default} alt="./codeCloneC.png" />
);

const ImgCloneCodeEng = () => (
  <Image
    style={{ width: "150px" }}
    src={require("./clone_code_eng.png").default}
    alt="./clone_code_eng.png"
  />
);

const ImgCloneCodeChin = () => (
  <Image
    style={{ width: "100px" }}
    src={require("./clone_code_chin.png").default}
    alt="./clone_code_chin.png"
  />
);

const Clone = () => {
  return (
    <Stack>
      <Title title={"Clone"} />
      <Title title={"複製"} />

      <BR />
      <Stack horizontal>
        <Stack>
          <Text>
            Clone is not an usual way to create object in most programming
            language but it is useful in scratch to create copies of the same
            object.
            <br />
            現時多數編程語言並不使用複製來創建物件，但是項功能在Scratch內十分方便。
          </Text>
          <BR />
          <Stack horizontal verticalAlign="end">
            <Text>When a clone is created, it will run the code under </Text>
            <ImgCloneCodeEng />
          </Stack>
          <Stack horizontal verticalAlign="end">
            <Text>當複製物件創建時，它會執行</Text>
            <ImgCloneCodeChin />
            <Text>下的劇本。</Text>
          </Stack>
          <BR />
          <Text>
            All clones are deleted when stop flag is pressed. There can only
            have 300 clones at max.
            <br />
            Here, using nested for loop and clone, you can create the desired
            amount of sprites without manual copy.
          </Text>
          <BR />
          <Text>
            在這遊戲中，透過使用For 循環及複製，你可以重複創建特定數量的角色。
            <br />
            當停止按鈕按下時，所有複製物件都會被刪除。同時間最多只能有300個複製物件。
          </Text>
        </Stack>
        <ImgCloneWithoutSignal />
        <ImgCodeCloneC />
      </Stack>
      <BR />
    </Stack>
  );
};

export { Clone };
