import React from "react";
import { Stack, Text } from "@fluentui/react";

import { BR, Title } from "../../utils";

const ForLoop = () => {
  return (
    <Stack>
      <>
        <BR />
        <Title title={"Second Section"} />
        <Title title={"第二環節"} />
        <BR />
        In this section, we will learn for loop and clone function to create the
        following:
        <br />
        在這個環節，我們將會學習For 循環以及複製功能以完成下列遊戲：
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
      <Title title={"For 循環和巢狀迴圈"} />
      <BR />
      <Stack>
        <Text>
          Different from a "forever loop", "for loop" only repeats for a fixed
          amount of time. It is useful when you want to run the same code
          repeatedly with different value each time.
          <br />
          與永久循環不同，For
          循環只會重複特定次數，你可以用它來重複某些方塊數次。
        </Text>
        <Text>
          Scratch named this block "repeat ()", but it is called "for loop"
          or "for do loop" in most programming languages.
          <br />
          Scratch將這類循環命名為“重複()次”，但在其他編程語言是For 循環。
        </Text>
        <Text>
          When you nest a loop inside another loop, you can handle
          multi-dimention data easily.
          <br />
          當你將循環放在另一個循環內時，你可以簡單地處理多位數據。
        </Text>
      </Stack>
    </Stack>
  );
};

export { ForLoop };
