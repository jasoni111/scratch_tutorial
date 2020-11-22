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
      <BR />
      <ImgCloneWithoutSignal />
      <BR />
      <Stack>TODO: explain for loop and clone</Stack>
      <BR />
    </Stack>
  );
};

export { Clone };
