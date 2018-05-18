import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './style.scss';

import headerImage from 'Images/header-img.png';
import logo from 'Images/logo-center.png'

import {Button} from 'Shared/Button';
import {Footer} from 'Shared/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className="wrapper d-flex f-j-center f-a-center ta-center">
          <div className="header-content">
            <img width="125" src={logo} className="logo-mobile" alt="Kings Poker Tables | Luxury Custom Poker Tables"/>
            <h1 className="mb4 mt0">Redefine your Poker Experience</h1>
            <p className="lead">Custom Luxury Poker Tables Built to Perfection</p>
            <span className="seperator"></span>
            <NavLink to="/buildyourown">
              <Button className="mb4">Build Your Own</Button>
            </NavLink>
            <div className="call-us">
              <p className="t-sm t-muted mb1">or talk to a real person</p>
              <a className="c-gold t-bold td-none t-md" href="tel:1-800-897-1189">800-897-1189</a>
            </div>
          </div>
          <img src={headerImage} alt="Kings Poker Table Round" className="header-img"/>
        </main>
        <div className="home-footer">
          <Footer />
        </div>
      </div>

    );
  }
}
