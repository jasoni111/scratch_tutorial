import React from "react";
import { Stack, Text } from "@fluentui/react";

type TableProps = {
  code: JSX.Element;
  result: JSX.Element;
};

const Table = (props: TableProps) => (
  <table style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>code</th>
        <th>expected result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.code}</td>
        <td>{props.result}</td>
      </tr>
    </tbody>
  </table>
);

const BR = () => <Stack style={{ height: "40px" }}></Stack>;

type TitleProps = { title: string };
const Title = (props: TitleProps) => (
  <Text variant={"xLargePlus"}>{props.title}</Text>
);

export { Table, BR, Title };
