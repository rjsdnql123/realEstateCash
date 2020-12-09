import React from "react";
import axios from "axios";
import Logo from "./Logo";

function App() {
  axios
    .get(
      "/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?ServiceKey=87YrGK0UyFcOLZaxfCt%2BHGjiD%2F8YEe%2FqteSCkhcWh%2F3OXV4XpJtZUwFsnseKBSRc5etkQw6JtzeN86qGQQfFVQ%3D%3D&LAWD_CD=11110&DEAL_YMD=201512"
    )
    .then((Response) => {
      console.log(Response);
    })
    .catch((Error) => {
      console.log(Error);
    });

  return (
    <div>
      <Logo></Logo>
    </div>
  );
}

export default App;
