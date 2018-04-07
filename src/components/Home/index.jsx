import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './style.scss';

import headerImage from '../../images/home-table.png'

import {Button} from 'Shared/Button';

export default class Home extends Component {
  render() {
    return (
      <main className="wrapper d-flex f-a-center f-j-center ta-center">
        <div className="header-content">
          <h1 className="mb4 mt0">Redefine your Poker Experience</h1>
          <p className="lead">Custom Luxury Poker Tables Built to Perfection</p>
          <span className="seperator"></span>
          <Button className="mb4">
            <NavLink to="/buildyourown">
              Build Your Own
            </NavLink>
          </Button>
          <div className="call-us">
            <p className="t-sm t-muted mb1">or talk to a real person</p>
            <a className="c-gold t-bold td-none t-md" href="tel:1-800-897-1189">800-897-1189</a>
          </div>
        </div>
        <img src={headerImage} alt="Kings Poker Table Round" className="header-img"/>
      </main>
    );
  }
}
