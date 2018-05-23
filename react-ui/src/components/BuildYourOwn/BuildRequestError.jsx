import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from 'Shared/Button';

export default class BuildRequestError extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
          <div className="col"></div>
            <div className="col-md-8 ta-center">
              <h2 className="mb4">Oops!</h2>
              <p className="t-md mb4">
                Something went wrong in processing your request. Please call us at <strong>1-800-897-1189</strong>
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
