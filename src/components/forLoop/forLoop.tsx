import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";

const ForLoop = () => {
  return (
    <Stack>
      <Title title={"For Loop and Nested Loop"} />
      <Title title={"無限循環"} />
      <BR />
      <Stack>
        <ul>
          <li>
            Different from a "forever loop", "for loop" only repeats a fixed
            amount of time. It is useful when you want to run the same code
            repeatedly with different value each time
          </li>
          <li>
            Scratch calls this block code "repeat ()", but it is called "for
            loop" or "for do loop" in most programming languages by convension.
          </li>
          <li>
            When you nest a loop inside another loop, you can handle
            multi-dimention data easily.
          </li>
        </ul>
      </Stack>
    </Stack>
  );
};

export { ForLoop };
