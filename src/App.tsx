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
  @media only screen and (max-width: 1224px) {
    flex-direction: column;
  }
`;
const Rootcomponent = styled.div`
  margin-left: 250px;
  margin-right: 250px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
  }
`;
export default App;
