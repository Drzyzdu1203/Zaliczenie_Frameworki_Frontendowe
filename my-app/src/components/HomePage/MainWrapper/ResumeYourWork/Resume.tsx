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
    {[...Array(10)].map((x, i) =>
    <ResumeApi key={i} />
  )}
    </div>
    
  </div>
);

export default Resume;
