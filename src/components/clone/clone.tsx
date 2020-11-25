import React from "react";
import { Stack, Image } from "@fluentui/react";

import { BR, Title } from "../../utils";

const ImgCloneWithoutSignal = () => (
  <Image
    src={require("./clone_without_signal.png").default}
    alt="./clone_without_signal.png"
  />
);

const Clone = () => {
  return (
    <Stack>
      <Title title={"Clone"} />
      <Title title={"複製"} />
      <BR />
      <ImgCloneWithoutSignal />
      <BR />
      <Stack>
        Clone is not an usual programming but is useful in scratch to create
        copies of the same object. When a clone is created, it will run the code
        under (insert image of when clone created). clone are deleted when stop
        is pressed. There can only 300 clones at once. Here, using nested for
        loop and clone, you may create the desired amount of sprites without
        menuly copying each of them.
      </Stack>
      <BR />
    </Stack>
  );
};

export { Clone };
