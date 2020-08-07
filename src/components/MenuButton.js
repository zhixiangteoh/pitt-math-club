import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./MenuButton.css";

const MenuButton = (props) => {
  return (
    <div>
      <div className="button-box-container">
        <Link to={`${props.link}`}>
          <div className="button-box">
            <img src={props.imgSrc} alt={props.imgAlt} />
          </div>
          <h1 className="button-box-text">{props.text}</h1>
        </Link>
      </div>
    </div>
  );
};

export default MenuButton;
