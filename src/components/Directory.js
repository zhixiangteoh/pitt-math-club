import React from "react";
import "semantic-ui-less/semantic.less";
import "./Directory.css";
import MenuButton from "./MenuButton";

class Directory extends React.Component {
  onWheel = (event) => {
    console.log(event);

    if (event.deltaY < 0 && window.pageYOffset === 0)
      this.props.history.push("/");
  };

  render() {
    return (
      <div onWheel={this.onWheel}>
        <img
          ref={this.logoRef}
          src={require("../static/pittmath_logo.svg")}
          alt="Pitt Math Club logo"
          className="math-club-logo"
        />

        <div id="directory-menu" className="ui center aligned container">
          <div className="row">
            <div className="welcome-to-text">Welcome to</div>
            <div className="pitt-math-club-text">Pitt MATH CLUB</div>
          </div>
        </div>
        <div className="ui two column centered grid">
          <div className="six column centered row">
            <div className="column">
              <MenuButton
                imgSrc={require("../static/meetings.svg")}
                text="meetings"
                link="/meetings"
              />
            </div>
            <div className="column">
              <MenuButton
                imgSrc={require("../static/membership.svg")}
                text="membership"
                link="/membership"
              />
            </div>
          </div>
          <div className="six column centered row">
            <div className="column">
              <MenuButton
                imgSrc={require("../static/resources.svg")}
                text="resources"
                link="/resources"
              />
            </div>
            <div className="column">
              <MenuButton
                imgSrc={require("../static/courses.svg")}
                text="courses"
                link="/courses"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
