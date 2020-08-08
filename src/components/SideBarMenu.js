import React from "react";
import ReactDOM from "react-dom";
import "./SideBarMenu.css";

const SideBarMenu = (props) => {
  return ReactDOM.createPortal(
    <button onClick={props.toggleSideBar}>
      <img
        src={require("../static/menu_open.svg")}
        alt="Menu Open icon"
        className="menu-open"
      />
    </button>,
    document.querySelector("#menu")
  );
};

export default SideBarMenu;
