import React from "react";
import styled from "styled-components";
import { ListBoxProps, ResultListType } from "../modules/type";
import { Table } from "reactstrap";

function ListBox({ resultList }: ListBoxProps) {
  console.log(resultList);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>지역명</th>
          <th>아파트</th>
          <th>면적</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {resultList.length === 0 ? (
          <td>지역을 선택해 주세요</td>
        ) : (
          resultList.map((x: ResultListType, index: number) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{x.법정동}</td>
                <td>{x.아파트}</td>
                <td>{x.전용면적}</td>
                <td>{x.거래금액} 만원</td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}

const ASD = styled.div`
  width: 300px;
`;

export default ListBox;

// const Example = (props) => {
//   return (

//   );
// }

// export default Example;
