import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";

const TODO = () => {
  return (
    <Stack>
      <Title title={"toDo"} />
      <Stack>TODO: Change Icon & page name</Stack>
      <BR />
    </Stack>
  );
};

export { TODO };
