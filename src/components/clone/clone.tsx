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
    src={require("./clone_code_eng.png").default}
    alt="./clone_code_eng.png"
  />
);

const ImgCloneCodeChin = () => (
  <Image
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
      <ImgCloneWithoutSignal />
      <ImgCodeCloneC />
      <BR />
      <Stack>
        <Text>
          Clone is not an usual way to create object in most programming
          language but it is useful in scratch to create copies of the same
          object.
          <br />
          現時多數編程語言並不使用複製來創建物件，但是項功能在Scratch內十分方便。
        </Text>
        <Text>
          When a clone is created, it will run the code under{" "}
          <ImgCloneCodeEng />
          <br />
          當複製物件創建時，它會執行
          <ImgCloneCodeChin />
          下的劇本。
        </Text>
        <Text>
          All clones are deleted when stop flag is pressed. There can only have
          300 clones at max.
          <br />
          當停止按鈕按下時，所有複製物件都會被刪除。同時間最多只能有300個複製物件。
        </Text>
        <Text>
          Here, using nested for loop and clone, you can create the desired
          amount of sprites without manual copy.
          <br />
          在這遊戲中，透過使用For 循環及複製，你可以重複創建特定數量的角色。
        </Text>
      </Stack>
      <BR />

      {/* <CloneAnimation /> */}
    </Stack>
  );
};

export { Clone };
