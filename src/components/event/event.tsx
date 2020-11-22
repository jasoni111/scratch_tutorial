import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";

const Event = () => {
  return (
    <Stack>
      <Title title={"Event"} />
      <Title title={"事件"} />
      <BR />
      <Stack>TODO: explain "when clone start" and custom event</Stack>
      <BR />
    </Stack>
  );
};

export { Event };
