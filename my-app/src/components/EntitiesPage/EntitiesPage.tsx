import React from "react";
import { BrowserRouter } from "react-router-dom";
import EntitiesApi from "../../api/EntitiesApi";
import "./EntitiesPage.css";
import "../../api/ApiStyles.css";

const EntitiesPage = () => (
    <BrowserRouter>
      <div className="EntitiesPage">
        <h1>Entities</h1>
        <div className="EntitiesNav">
        
        </div >
        
        <EntitiesApi/>
        
      </div>
    </BrowserRouter>
  );
  
  export default EntitiesPage;
  