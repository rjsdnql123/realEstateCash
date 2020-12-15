import React from "react";
import styled from "styled-components";
import imgA from "../../src/imgA.png";
import { HeaderProps } from "../modules/type";

function Headers({ clickMap }: HeaderProps) {
  console.log();
  return (
    <DDD>
      <ASD src={imgA}></ASD>
      {/* <SSS>{}</SSS> */}
      {clickMap}
    </DDD>
  );
}

const ASD = styled.img`
  height: 100px;
`;
const SSS = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const DDD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;

export default Headers;
