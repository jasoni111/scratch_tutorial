import React from "react";
import { Stack, Text } from "@fluentui/react";

import { BR, Title, SubTitle } from "../../utils";

const Variable = () => {
  return (
    <Stack>
      <Title title={"Challenging Tasks"} />
      <Title title={"挑戰任務"} />
      <BR />
      <SubTitle subTitle={"Variable"} />
      <SubTitle subTitle={"變量"} />
      <Text>
        Variable is like a location that stores some information, with a given
        symbolic name. Variable is used when we want to repeatedly use the value
        again, and the stored value may be changed over time or event. The x and
        y property of sprite are examples of the variable you used before.
        <br />
        變量是一個存儲信息的位置，有自己的名稱。
        當我們需要重複使用某個數值，並需要在特定時候修改，例如角色的x和y屬性，我們便可以使用變量。
      </Text>
      <Text>
        While variable is commonly used to store numbers like score and year,
        any other type of information can be stored in a variable. The concept
        of variable is commonly used in computer science and mathematics.
        <br />
        儘管變量通常用於存儲分數和年份等數字，但其他類型的信息也可以存儲在變量中。
        變量的概念通常在計算機科學和數學中使用。
      </Text>
      <Text>
        Under the variable tab, press "make a variable" to create a variable. As
        an example, please name it "scores". If the variable is not shown on the
        top left-hand corner, use the show variable() block to display the
        value.
        <br />
        在變量頁面下，按“創建變量”以創建變量。 例如，將其命名為“分數”。
        如果該變量未顯示在左上角，請使用show variable（）塊顯示該值。
      </Text>
      <Text>
        Set your score to 0 at the start of your game.
        <br />
        將遊戲開始時的分數設置為0。
      </Text>
      <Text>
        Use the change score by () block, you can increase the score when the
        ball destroys a block.
        <br />
        使用（）方塊，你可以在球破壞一個磚塊時增加得分。
      </Text>
      <BR />
    </Stack>
  );
};

export { Variable };
