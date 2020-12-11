import React from "react";
import axios from "axios";
import Logo from "./containers/Logo";
import Juso from "./Juso";
import styled from "styled-components";

function App() {
  Juso();
  axios
    .get(
      "/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?ServiceKey=87YrGK0UyFcOLZaxfCt%2BHGjiD%2F8YEe%2FqteSCkhcWh%2F3OXV4XpJtZUwFsnseKBSRc5etkQw6JtzeN86qGQQfFVQ%3D%3D&LAWD_CD=11740&DEAL_YMD=201512"
    )
    .then((Response) => {
      console.log(Response);
    })
    .catch((Error) => {
      console.log(Error);
    });

  return (
    <ASD>
      <Logo></Logo>
      {/* <Icon></Icon> */}
    </ASD>
  );
}

const ASD = styled.div`
  position: relative;
`;
export default App;
