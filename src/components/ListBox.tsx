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
        {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}

        {resultList.map((x: ResultListType, index: number) => {
          return (
            <tr>
              <th scope="row">{index}</th>
              <td>{x.법정동}</td>
              <td>{x.아파트}</td>
              <td>{x.전용면적}</td>
              <td>{x.거래금액} 만원</td>
            </tr>
          );
        })}
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
