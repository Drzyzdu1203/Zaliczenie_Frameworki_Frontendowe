import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import LeftMenu from "./components/HomePage/LeftMenu/LeftMenu";
import MainWrapper from "./components/HomePage/MainWrapper/MainWrapper";
import TopNav from "./components/HomePage/TopNav/TopNav";
import ProfilPage from "./components/ProfilPage/ProfilPage";
import TestPage from "./components/TestPage/TestPage";
import ClientContract from "./components/WorkspacesPage/ClientContract";
import EntitiesPage from "./components/EntitiesPage/EntitiesPage";
import Corporate from "./components/WorkspacesPage/Corporate";


const App = () => (
  <BrowserRouter>
    <>
      <TopNav />
      <LeftMenu />
      <Route exact path="/" component={MainWrapper} />
      <Route path="/workspaces/client_contract" component={ClientContract} />
      <Route path="/workspaces/corporate" component={Corporate} />
      <Route path="/profil" component={ProfilPage} />
      <Route path="/test" component={TestPage} />
      <Route path="/entities" component={EntitiesPage} />
    </>
  </BrowserRouter>
);

export default App;
