import React from "react";
import MapPhoto from "./containers/MapPhoto";
import ListBox from "./containers/ListBox";
import Headers from "./containers/Headers";
import styled from "styled-components";

function App() {
  return (
    <ADS>
      <Headers></Headers>
      <TopComponent>
        <MapPhoto></MapPhoto>
        <ListBox></ListBox>
      </TopComponent>
    </ADS>
  );
}

const TopComponent = styled.div`
  display: flex;
  justify-content: center;
`;
const ADS = styled.div`
  justify-content: center;
`;
export default App;
