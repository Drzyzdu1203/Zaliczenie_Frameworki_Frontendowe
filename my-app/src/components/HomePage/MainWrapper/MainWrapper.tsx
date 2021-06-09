import React from "react";
import "./MainWrapper.css";
import LatestPublications from "./LatestPublications/LatestPublications";
import Workspaces from "./Workspaces/Workpaces";
import Resume from "./ResumeYourWork/Resume";

const MainWrapper = () => (
  <div className= "MainWrapper">
    <LatestPublications />
    <Workspaces />
    <Resume />
  </div>
);

export default MainWrapper;
