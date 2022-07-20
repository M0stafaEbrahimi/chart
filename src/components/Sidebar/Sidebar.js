import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faCalculator,
//   faBell,
//   faNewspaper,
// } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineBars,
  AiOutlineAlert,
  AiOutlineCalculator,
} from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import QueryBuilder from "../queryBuilder/QueryBuilder";
import "./Sidebar.css";

function Sidebar() {
  const [selected, setselected] = useState("");
  const [showContent, setShowcontent] = useState(false);
  return (
    <aside>
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${
              selected === "bars" && showContent ? "active" : ""
            }`}
            onClick={() => {
              if (selected !== "bars") {
                setShowcontent(true);
                setselected("bars");
              } else {
                setShowcontent((prev) => !prev);
              }
            }}
          >
            <AiOutlineBars size={"30px"} />
          </div>
          <div
            className={`tab ${
              selected === "calculator" && showContent ? "active" : ""
            }`}
            onClick={() => {
              if (selected !== "calculator") {
                setShowcontent(true);
                setselected("calculator");
              } else {
                setShowcontent((prev) => !prev);
              }
            }}
          >
            <AiOutlineCalculator size={"30px"} />
          </div>
          <div
            className={`tab ${
              selected === "bell" && showContent ? "active" : ""
            }`}
            onClick={() => {
              if (selected !== "bell") {
                setShowcontent(true);
                setselected("bell");
              } else {
                setShowcontent((prev) => !prev);
              }
            }}
          >
            <AiOutlineAlert size={"30px"} />
          </div>
          <div
            className={`tab ${
              selected === "news" && showContent ? "active" : ""
            }`}
            onClick={() => {
              if (selected !== "news") {
                setShowcontent(true);
                setselected("news");
              } else {
                setShowcontent((prev) => !prev);
              }
            }}
          >
            <VscPreview size={"30px"} />
          </div>
        </div>
        {showContent && (
          <div className="content-container">
            <div className="content active">
              <QueryBuilder />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
