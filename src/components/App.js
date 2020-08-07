import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import history from "../history";

import Home from "./Home";
import Directory from "./Directory";
import Meetings from "./Meetings";

const App = () => {
  return (
    <div className="app">
      <HashRouter history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/directory" exact component={Directory} />
            <Route path="/meetings" exact component={Meetings} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
