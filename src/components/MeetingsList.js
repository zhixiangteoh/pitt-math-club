import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import "./MeetingsList.css";

const MeetingsList = (props) => {
  const renderList = (list) => {
    return _.map(list, (item) => {
      return (
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i class="icon">
              <img src={require(`../static/${item.imgSrc}`)} alt="" />
            </i>
            <h2>{item.title}</h2>
            <p className="description">
              <div className="ui two column centered grid">
                <div
                  className="twelve wide column"
                  style={{ textAlign: "center" }}
                >
                  {item.description}
                </div>
                <div className="four column centered row">
                  <div className="column" style={{ textAlign: "center" }}>
                    {item.location}
                  </div>
                  <div className="column" style={{ textAlign: "center" }}>
                    {item.time}
                  </div>
                </div>
              </div>
            </p>
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
    </div>
  );
};

export default MeetingsList;
