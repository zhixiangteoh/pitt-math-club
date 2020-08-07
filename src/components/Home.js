import React from "react";
import "semantic-ui-less/semantic.less";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: 100, translateX: 0 };
    this.logoRef = React.createRef();
  }

  onWheel = (event) => {
    const MAX_SCROLL = 300;

    if (window.pageYOffset <= MAX_SCROLL) {
      this.setState({
        width: 100 + window.pageYOffset,
        translateX: 0 - (25 / MAX_SCROLL) * window.pageYOffset,
      });
    } else {
      this.props.history.push("/directory");
    }
  };

  render() {
    return (
      <div onWheel={this.onWheel} className="home">
        {/* <img
        alt="Snoop Dogg"
        src={require("../static/snoop_dogg.jpg")}
        className="snoop_dogg"
      /> */}
        <div className="ui grid">
          <div className="row yellow">
            <div className="home-quote">
              "If you stop at general math, you're only going to make general
              math money."
            </div>
          </div>
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <div className="row">
            <div className="ui center aligned container">
              <img
                ref={this.logoRef}
                src={require("../static/pittmath_logo.svg")}
                alt="Pitt Math Club logo"
                style={{
                  width: `${this.state.width}%`,
                  transform: `translateX(${this.state.translateX}%)`,
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="ui center aligned container icons">
              <img
                src={require("../static/pitt_shield.png")}
                alt="University of Pittsburgh Shield"
                className="pitt-shield"
              />
              <br />
              <img
                src={require("../static/expand_more_icon.svg")}
                alt="Expand More icon"
                className="expand-more"
              />
            </div>
          </div>
          <div style={{ height: "20vh" }} />
        </div>
      </div>
    );
  }
}

export default Home;
