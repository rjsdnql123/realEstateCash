import React from "react";
import styled from "styled-components";
import { ListBoxProps, ResultListType } from "../modules/type";

function ListBox({ resultList }: ListBoxProps) {
  return (
    <ASD>
      {resultList.map((x: ResultListType, index: number) => {
        return <div key={index}>{x.아파트 + x.법정동}</div>;
      })}
    </ASD>
  );
}

const ASD = styled.div`
  width: 300px;
`;

export default ListBox;
