import React from "react";
import { BrowserRouter } from "react-router-dom";
import EntitiesApi from "../../api/EntitiesApi";
import "./EntitiesPage.css";

const EntitiesPage = () => (
    <BrowserRouter>
      <div className="EntitiesPage">
        <h1>Entities</h1>
        <div className="EntitiesNav">
          <button>All...</button>
          <div> | Sort | </div>
          <div> Filters | </div>
          <div></div>
          <div> Share |</div>
        </div>
        <EntitiesApi/>
      </div>
    </BrowserRouter>
  );
  
  export default EntitiesPage;
  