import React from "react";
import { Stack } from "@fluentui/react";

import { BR, Title } from "../../utils";
import codeEvent from "./codeEvent.png";

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

        <img src={codeEvent} alt={codeEvent} />
        <iframe
          src="https://scratch.mit.edu/projects/458248296/embed"
          allowTransparency={true}
          width="485"
          height="402"
          frameBorder="0"
          scrolling="no"
          title="AddOil"
        ></iframe>
      </ul>
      <Title title={"Try it yourself:"} />
      <ol>
        <li>
          <ul>
            <li> display "you win" when you have destroied all blocks.</li>
            <li>display "you lose" when the ball drop below your bouncepad.</li>
            <li>
              Testing is kind of hard. Add a button such that you can switch
              between playing manually and automatically.
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              When the game start, it takes some time for the clone action to
              complete. With the use of event, can you make sure the
              initalization is complete before the ball starts moving?
            </li>

            <li>
              The game is kind of simple currently. Try adding multiple levels
              where you level up when you destroy all blocks.
              <ol>
                <li>your ball should move faster after level up</li>
                <li>generate an additional layer of sprites per level.</li>
                <li>Display "you win!" after clearing all levels.</li>
              </ol>
            </li>

            <li>
              Also implement a life system. You lose one life when the ball fall
              below. Display "you lose!" after losing all life.
            </li>
          </ul>
        </li>
        <li>
          Anything you can think of! Maybe add some sound or stage transition
          effect, or adding some beautiful background?
        </li>
      </ol>
      Demo:
      <iframe
        src="https://scratch.mit.edu/projects/458211215/embed"
        allowTransparency={true}
        width="485"
        height="402"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <BR />
    </Stack>
  );
};

export { Event };
