import React from "react";
import "./Issue.css";
export const IssueType = () => {
  return (
    <div className="btn-container">
        <label className="IssueToggleLabels">Urgent</label>
      <label className="switch">
        <input type="checkbox" /> <div></div>
      </label>
      <label className="IssueToggleLabels">Typical</label>

    </div>
  );
};
