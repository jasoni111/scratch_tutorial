import React from "react";
import { Stack, Image } from "@fluentui/react";

import { BR, Title, CloneAnimation } from "../../utils";

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
        Clone is not an usual way to create object in most programming language
        but is useful in scratch to create copies of the same object.
        <ul>
          <li>
            When a clone is created, it will run the code under (insert image of
            when clone created)
          </li>
          <li>All clones are deleted when stop is pressed</li>
          <li>There can only 300 clones at once</li>
        </ul>
        Here, using nested for loop and clone, you may create the desired amount
        of sprites without menuly copying each of them. Try to create the
        following:(TODO: a flying ball that destroy stuff on the path)
      </Stack>
      <BR />

      <iframe
        src="https://scratch.mit.edu/projects/455579061/embed"
        allowTransparency={true}
        width="485"
        height="402"
        frameBorder="0"
        scrolling="no"
      ></iframe>

      {/* <CloneAnimation /> */}
    </Stack>
  );
};

export { Clone };
