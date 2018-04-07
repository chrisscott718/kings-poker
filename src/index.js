import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './styles/index.scss';

import App from './components/App';
import BuildYourOwn from './components/BuildYourOwn';
import Navigation from './components/Navigation';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
      <div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/buildyourown" component={BuildYourOwn} />
          </Switch>
        </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
