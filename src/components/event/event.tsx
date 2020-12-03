import React from "react";
import { Stack, Text } from "@fluentui/react";

import { BR, Title } from "../../utils";
import codeEvent from "./codeEvent.png";

const Event = () => {
  return (
    <Stack>
      <Title title={"Event"} />
      <Title title={"事件"} />
      <BR />
      <Text>
        When flag clicked and when clone start is some example of built-in
        events. Scratch allows us to create custom events for better control
        flow.
        <br />
        點擊開始旗和開始克隆都是內置事件的例子。
        Scratch允許我們創建自定義事件以更好地控制流程。
      </Text>
      <Text>
        Use the "broadcast (event)" block to trigger an event.
        <br />
        使用“廣播（事件）”方塊觸發事件。
      </Text>
      <Text>
        When any sprite broadcast (event), code under "when I receive(event)"
        will run.
        <br />
        當任何角色廣播（事件）時，“當我接收（事件）”下的代碼將運行。
      </Text>
      <Text>
        "Broadcast (event) and wait" will wait until all triggered events end
        before continuing
        <br />
        “廣播（事件）並等待”會等到所有觸發的事件結束後再繼續
      </Text>
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
      <BR />
      <Title title={"Try it yourself:"} />
      <Title title={"試一下:"} />
      <ol>
        <li>
          <ul>
            <li>
              Display "you win" when you have destroied all blocks.
              摧毀所有方塊後，顯示“你贏了”。
            </li>
            <li>
              Display "you lose" when the ball drop below your bounce pad.
              當球降到彈跳板下方時顯示“你輸了”
            </li>
            <li>
              Testing is kind of hard. Add a button such that you can switch
              between playing manually and automatically. <br />
              測試有點困難。 添加一個按鈕，以便你可以切換手動和自動播放之間。
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              When the game start, it takes some time for the clone action to
              complete. With the use of the event, can you make sure the
              initialization is complete before the ball starts moving?
              <br /> 遊戲開始時，複製動作需要一些時間才能完成。
              你能否使用該事件，以確保初始化在球開始移動前完成？
            </li>

            <li>
              The game is kind of simple currently. Try adding multiple levels
              where you level up when you destroy all blocks.
              <br />
              遊戲目前很簡單，嘗試添加不同級別。
              <ol>
                <li>
                  Your ball should move faster after level up.
                  升級後，您的球應該移動得更快。
                </li>
                <li>
                  Generate an additional layer of sprites per level.
                  每級生成一個額外的角色。
                </li>
                <li>
                  Display "you win!" after clearing all levels.
                  在完成所有級別後顯示“你贏了！”。
                </li>
              </ol>
            </li>

            <li>
              Also implement a life system. You lose one life when the ball
              falls below. Display "you lose!" after losing all life.
              <br />
              設計一個計算生命系統，當球跌落到下方時，你將失去一條命。當你用盡所有生命時，顯示“你輸了！”。
            </li>
          </ul>
        </li>
        <li>
          Anything you can think of! Maybe add some sound or stage transition
          the effect, or adding some beautiful background?
          <br />
          加上你能想到的任何東西！ 你可以加上一些聲音或舞台過渡
          效果，或者是一些漂亮的背景。
        </li>
      </ol>
      Demo: 示範：
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
