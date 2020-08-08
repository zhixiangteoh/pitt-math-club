import React from "react";
import Menu from "./Menu";
import { HashLink as Link } from "react-router-hash-link";
import { upcoming, past } from "../meetings";
import MeetingsList from "./MeetingsList";
import "./App.css";
import "./MeetingsList.css";

const Meetings = () => {
  return (
    <div>
      <Menu />
      <div className="ui container">
        <h1>MEETINGS</h1>
        <p style={{ color: "white" }}>
          Math Club’s main jam. Come attend weekly talks on interesting topics
          given by Pitt professors, upperclassmen, and external speakers!
        </p>
        <div className="buttons">
          <Link to="/meetings#past" className="ui secondary button">
            VIEW PAST TALKS
          </Link>
        </div>
        <MeetingsList
          id="upcoming"
          listHeading="UPCOMING TALKS"
          list={upcoming}
        />

        <MeetingsList id="past" listHeading="PAST TALKS" list={past} />
        <div className="buttons">
          <Link to="/meetings#upcoming" className="ui secondary button">
            VIEW UPCOMING TALKS
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Meetings;
