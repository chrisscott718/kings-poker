import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from 'Shared/Button';

export default class BuildSuccess extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
          <div className="col"></div>
            <div className="col-md-8 ta-center">
              <h2 className="mb4">Thank You!</h2>
              <p className="t-md t-light mb4">
                We have received your request and will get back to you shortly.
              </p>
              <NavLink to="/">
                <Button>Back Home</Button>
              </NavLink>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
