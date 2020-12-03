import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";

const ForLoop = () => {
  return (
    <Stack>
      <>
        <hr />
        <Title title={"Second Section"} />
        <BR />
        In this section, we will learn for loop and clone function to create the
        following:
        <iframe
          src="https://scratch.mit.edu/projects/455579061/embed"
          allowTransparency={true}
          width="485"
          height="402"
          frameBorder="0"
          scrolling="no"
          title="forloop and nested for"
        ></iframe>
      </>
      <Title title={"For Loop and Nested Loop"} />
      <Title title={"循環"} />
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
