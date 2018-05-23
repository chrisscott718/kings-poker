import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import '../../styles/index.scss';

import Home from '../Home';
import About from '../About';
import BuildYourOwn from '../BuildYourOwn';
import BuildSuccess from '../BuildYourOwn/BuildSuccess';
import BuildRequestError from '../BuildYourOwn/BuildRequestError';
import Navigation from '../Navigation';
import {Contact} from '../Contact';

export default class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/buildyourown" component={BuildYourOwn} />
              <Route exact path="/byosuccess" component={BuildSuccess} />
              <Route exact path="/builderror" component={BuildRequestError} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
      </Router>
    );
  }
}
