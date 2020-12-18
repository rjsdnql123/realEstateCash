import React from "react";
import MapPhoto from "./containers/MapPhoto";
import ListBox from "./containers/ListBox";
import Headers from "./containers/Headers";
import styled from "styled-components";

function App() {
  return (
    <Rootcomponent>
      <Headers></Headers>
      <TopComponent>
        <MapPhoto></MapPhoto>
        <ListBox></ListBox>
      </TopComponent>
    </Rootcomponent>
  );
}

const TopComponent = styled.div`
  display: flex;
`;
const Rootcomponent = styled.div`
  margin-left: 250px;
  margin-right: 250px;
`;
export default App;
