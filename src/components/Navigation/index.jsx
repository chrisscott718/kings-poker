import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './style.scss';

import logo from 'Images/logo-h.png';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <div className="nav-brand">
              <NavLink to="/">
                <img width="250" src={logo} alt="Kings Poker Tables | Luxury Custom Poker Tables"/>
              </NavLink>
            </div>
            <div className="nav-content">
              <div className="nav">
                <ul className="nav-links">
                  <li className="nav-link">
                    <NavLink to="/buildyourown">
                      Build A Table
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="nav-number">
                <a className="c-gold t-bold td-none t-md" href="tel:1-800-897-1189">800-897-1189</a>
              </div>
            </div>
          </div>


        </div>
      </nav>
    );
  }
}
