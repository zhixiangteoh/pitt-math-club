import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./MenuButton.css";

const MenuButton = (props) => {
  return (
    <div className="button-box-container">
      <Link to={`${props.link}`}>
        <div
          className="button-box"
          style={{ width: props.width, height: props.height }}
        >
          <img src={props.imgSrc} alt={`${props.link} button`} />
        </div>
        <div className="button-box-text">{props.text}</div>
      </Link>
    </div>
  );
};

export default MenuButton;
