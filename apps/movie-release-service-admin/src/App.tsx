import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReleaseInfoList } from "./releaseInfo/ReleaseInfoList";
import { ReleaseInfoCreate } from "./releaseInfo/ReleaseInfoCreate";
import { ReleaseInfoEdit } from "./releaseInfo/ReleaseInfoEdit";
import { ReleaseInfoShow } from "./releaseInfo/ReleaseInfoShow";
import { MovieRequestList } from "./movieRequest/MovieRequestList";
import { MovieRequestCreate } from "./movieRequest/MovieRequestCreate";
import { MovieRequestEdit } from "./movieRequest/MovieRequestEdit";
import { MovieRequestShow } from "./movieRequest/MovieRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MovieReleaseService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ReleaseInfo"
          list={ReleaseInfoList}
          edit={ReleaseInfoEdit}
          create={ReleaseInfoCreate}
          show={ReleaseInfoShow}
        />
        <Resource
          name="MovieRequest"
          list={MovieRequestList}
          edit={MovieRequestEdit}
          create={MovieRequestCreate}
          show={MovieRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
