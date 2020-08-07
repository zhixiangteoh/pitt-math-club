import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import MenuButton from "./MenuButton";

const Meetings = () => {
  return (
    <div style={{ fontSize: "60px", color: "white" }}>
      Meetings
      <Link to="/directory#directory-menu">Click me</Link>
      <div className="ui left fixed vertical icon menu">
        <MenuButton
          imgSrc={require("../static/meetings.svg")}
          imgAlt="Meetings button"
          text="meetings"
          link="/directory#directory-menu"
        />
      </div>
    </div>
  );
};

export default Meetings;
