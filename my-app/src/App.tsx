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
import SupplierContract from "./components/WorkspacesPage/SupplierContract";
import GroupNotes from "./components/WorkspacesPage/GroupNotes";


const App = () => (
  <BrowserRouter>
    <>
      <TopNav />
      <LeftMenu />
      <Route exact path="/" component={MainWrapper} />
      <Route path="/client_contract" component={ClientContract} />
      <Route path="/supplier_contract" component={SupplierContract} />
      <Route path="/corporate" component={Corporate} />
      <Route path="/group_notes" component={GroupNotes} />
      <Route path="/test" component={TestPage} />
      <Route path="/entities" component={EntitiesPage} />
      <Route path="/profil" component={ProfilPage} />
    </>
  </BrowserRouter>
);

export default App;
