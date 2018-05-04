import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './style.scss';

import img1 from 'Images/table-round.png';
import img2 from 'Images/table-long.png';

import {Button} from 'Shared/Button';
import {Footer} from 'Shared/Footer';

export default class About extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-header">
                <h1>Uniquely Fabricated Gaming Tables</h1>
                <span className="v-line my4"></span>
              </div>
            </div>
            <div className="col-lg-5">
              <img className="i-fluid br-3" id="aboutHeaderImg" src={img1} alt="Kings Poker Tables | Round Table" />
            </div>
          </div>
          <div className="row f-a-center">
            <div className="col-md-7 about-img">
              <img className="i-fluid br-3" src={img2} alt="Kings Poker Tables | Oval Table" />
            </div>
            <div className="col-md-5 about-content">
              <h3 className="mb4">The Highest Quality Tables Around</h3>
              <p className="lh-2 ta-justify mb4 t-muted">
                Kings Poker manufactures uniquely fabricated
                gaming tables, which can be used for poker or
                dining. We produce superior products built to
                exact specifications, which set our tables
                apart from low quality, mass-produced gaming
                and poker tables.
              </p>
              <p className="lh-2 ta-justify mb4 t-muted">
                Using precision craftsmanship
                and flawless attention to detail, each table is
                hand-made to perfection and is sure to make you
                the envy of anyone who sees your custom,
                unparalleled table.

                Our tables are built with the whole family in mind.
                Not only do we construct the finest game tables
                in the world, but our tables come with an optional
                dining top, which fits securely over the table.
              </p>
            </div>
          </div>
          <div className="row ta-center about-footer">
            <div className="col"></div>
            <div className="col-md-6">
              <h3 className="mb4">Let us create your next gaming table</h3>
              <NavLink to="/buildyourown">
                <Button className="mb4">Build a Table</Button>
              </NavLink>
              <p className="t-sm t-muted mb1">or call us today</p>
              <a className="c-gold t-bold td-none t-md" href="tel:1-800-897-1189">800-897-1189</a>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
