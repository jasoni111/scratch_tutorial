import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";

const Variable = () => {
  return (
    <Stack>
      <>
        <Title title={"Challenging Tasks"} />
        <BR />
      </>
      <Title title={"Variable"} />
      <Title title={"變量"} />
      <BR />
      <Stack>
        Variable is like a location that store some information, with a given
        symbolic name. Variable is used when we want to repeatedly use the value
        again, and the stored value may be changed over time or event. The x and
        y property of sprite are example of variable you used before.
      </Stack>
      <Stack>
        While variable is commonly used to store number like score and year, any
        other type of information can be stored in a variable. The conecpt of
        variable is commonly used in computer science and mathematics.
        <ul>
          <li>
            under the variable tab, press "make a variable" to create a
            variable. As a example, please name it "scores". If the variable is
            not shown on the top left hand corner, use the show variable() block
            to display the value.
          </li>
          <li>set your score to 0 at the start of your game.</li>
          <li>
            Use the change score by () block, you can increse the score when the
            ball destroy a block.
          </li>
        </ul>
      </Stack>
      <BR />
    </Stack>
  );
};

export { Variable };
