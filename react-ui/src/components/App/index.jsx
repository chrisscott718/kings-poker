import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "../../styles/index.scss";

import Home from "../Home";
import Gallery from "../Gallery";
import BuildYourOwn from "../BuildYourOwn";
import BuildSuccess from "../BuildYourOwn/BuildSuccess";
import BuildRequestError from "../BuildYourOwn/BuildRequestError";
import Navigation from "../Navigation";
import { Contact } from "../Contact";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/buildyourown' component={BuildYourOwn} />
            <Route exact path='/byosuccess' component={BuildSuccess} />
            <Route exact path='/builderror' component={BuildRequestError} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}
