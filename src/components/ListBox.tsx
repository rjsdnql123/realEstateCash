import React from "react";
import styled from "styled-components";

function ListBox(props: any) {
  console.log(props);
  return (
    <ASD>
      {props.resultList.map((x: any, index: number) => {
        return <div>{x.아파트 + x.법정동}</div>;
      })}
    </ASD>
  );
}

const ASD = styled.div`
  width: 300px;
`;

export default ListBox;
