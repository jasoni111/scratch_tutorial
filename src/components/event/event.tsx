import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";

const Event = () => {
  return (
    <Stack>
      <Title title={"Event"} />
      <Title title={"事件"} />
      <BR />
      <Stack>
        When flag clicked and when clone start are some example of built in
        events. Scratch allow us to create custom events for better control
        flow.abs
      </Stack>
      <ul>
        <li>Use "broadcast (event)" block to trigger a event</li>
        <li>
          When any sprite procast (event), code under "when I receive(event)"
          will run
        </li>
        <li>
          "broadcast (event) and wait" will wait untill all trigered events ends
          before continue
        </li>
      </ul>
      <Stack>Try it yourself:</Stack>

      <ul>
        <li>
          When the game start, it takes some time for the clone action to
          complete. With the use of event, can you make sure the initalization
          is complete before the ball starts moving?
        </li>

        <li>
          The game is kind of simple currently. Try adding multiple levels where
          you level up when you destroy all blocks. The level will reset, but
          your ball should move faster and you should generate an additional
          layer of sprites to destory. Display "you win!" after clearing all
          levels.
        </li>
        <li>
          Also implement a life system. You lose one life when the ball fall
          below. Display "you lose!" after losing all life.
        </li>
      </ul>

      <BR />
    </Stack>
  );
};

export { Event };
