import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import history from "../history";

import Home from "./Home";
import Directory from "./Directory";
import Meetings from "./Meetings";
import Membership from "./Membership";
import Resources from "./Resources";
import Courses from "./Courses";

const App = () => {
  return (
    <div className="app">
      <HashRouter history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/directory" exact component={Directory} />
            <Route path="/meetings" exact component={Meetings} />
            <Route path="/membership" exact component={Membership} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/courses" exact component={Courses} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
