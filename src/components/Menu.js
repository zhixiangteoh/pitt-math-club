import React from "react";
import SideBar from "react-fixed-sidebar";
import MenuButton from "./MenuButton";
import "./Menu.css";

class Menu extends React.Component {
  toggleSideBar = (event) => {
    // use our 'ref' to the sidebar component
    // to open it
    this.sidebar.toggle();
  };

  onTouch = (event) => {
    this.sidebar.handleTouch(event);
  };

  render() {
    return (
      <div onTouchMove={this.onTouch}>
        <button onClick={this.toggleSideBar}>
          <img
            src={require("../static/menu_open.svg")}
            alt="Menu Open icon"
            className="menu-open"
          />
        </button>
        <SideBar
          ref={(sidebar) => (this.sidebar = sidebar)}
          className="side-bar"
        >
          <MenuButton
            imgSrc={require("../static/home.svg")}
            link="/"
            width="100px"
            height="100px"
          />
          <MenuButton
            imgSrc={require("../static/meetings.svg")}
            link="/meetings"
            width="100px"
            height="100px"
          />
          <MenuButton
            imgSrc={require("../static/membership.svg")}
            link="/membership"
            width="100px"
            height="100px"
          />
          <MenuButton
            imgSrc={require("../static/resources.svg")}
            link="/resources"
            width="100px"
            height="100px"
          />
          <MenuButton
            imgSrc={require("../static/courses.svg")}
            link="/courses"
            width="100px"
            height="100px"
          />
        </SideBar>
      </div>
    );
  }
}

export default Menu;
