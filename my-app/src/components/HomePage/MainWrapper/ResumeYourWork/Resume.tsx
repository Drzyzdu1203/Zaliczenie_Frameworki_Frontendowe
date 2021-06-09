import React from "react";
import "./Resume.css";
import ResumeApi from "../../../../api/ResumeApi";

const Resume = () => (
  <div className="Resume">
    <input
      className="SearchBar__Resume"
      type="text"
      placeholder="Filter by title..."
      id="DropdownInput"
    ></input>

    <p>Resume your work</p>

    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
    <div className="Res1">
      <ResumeApi />
    </div>
  </div>
);

export default Resume;
