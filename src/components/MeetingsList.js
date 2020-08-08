import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import "./MeetingsList.css";

const MeetingsList = (props) => {
  const renderList = (list) => {
    return _.map(list, (item) => {
      return (
        <div key={item.title} className="ui placeholder segment">
          <div className="ui icon header">
            <i className="icon">
              <img src={require(`../static/${item.imgSrc}`)} alt="" />
            </i>
            <h2>{item.title}</h2>
            <div className="description">
              <div className="ui two column centered grid">
                <p
                  className="twelve wide column"
                  style={{ textAlign: "center" }}
                >
                  {item.description}
                </p>
                <div className="two column centered row">
                  <p className="column" style={{ textAlign: "center" }}>
                    {item.location}
                  </p>
                  <p className="column" style={{ textAlign: "center" }}>
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to={item.link} className="ui secondary button">
            Read More
          </Link>
        </div>
      );
    });
  };

  return (
    <div id={props.id}>
      <br />
      <h2 style={{ color: "#C6AC75" }}>{props.listHeading}</h2>
      <hr />
      {renderList(props.list)}
      <br />
    </div>
  );
};

export default MeetingsList;
