import React from "react";
import { Stack, Text } from "@fluentui/react";

type TProps = {
  element: JSX.Element | String;
};
const Th = (props: TProps) => (
  <th style={{ textAlign: "center", verticalAlign: "middle" }}>
    {props.element}
  </th>
);
const Td = (props: TProps) => (
  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
    {props.element}
  </td>
);

type TableProps = {
  code: JSX.Element;
  result: JSX.Element;
};

const Table = (props: TableProps) => (
  <table style={{ width: "100%" }}>
    <thead>
      <tr>
        <Th element="Code 劇本" />
        <Th element="Expected result 預期結果" />
      </tr>
    </thead>
    <tbody>
      <tr>
        <Td element={props.code} />
        <Td element={props.result} />
      </tr>
    </tbody>
  </table>
);

const BR = () => <Stack style={{ height: "40px" }}></Stack>;

type TitleProps = { title: string };
const Title = (props: TitleProps) => (
  <Text variant={"xLargePlus"}>{props.title}</Text>
);

type SubTitleProps = { subTitle: string };
const SubTitle = (props: SubTitleProps) => (
  <Text variant={"xLarge"}>{props.subTitle}</Text>
);

export { Table, BR, Title, SubTitle, Td };
