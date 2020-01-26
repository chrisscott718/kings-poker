import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

import background from "Images/tables-1.jpg";

import { Button } from "Shared/Button";
import About from "../About";

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className='wrapper d-flex f-j-center f-a-center'>
          <section className='header-content'>
            <h1 className='mb4 mt0'>Redefine your Poker Experience</h1>
            <p className='lead'>
              Custom Luxury Poker Tables Built to Perfection
            </p>
            <span className='seperator'></span>
            <div className='byo-call-wrapper d-flex f-a-center'>
              <NavLink to='/buildyourown'>
                <Button className='mb4'>Build Your Own</Button>
              </NavLink>
              <div className='call-us'>
                <p className='t-sm t-muted mb1'>or talk to a real person</p>
                <a
                  className='c-gold t-bold td-none t-md'
                  href='tel:1-800-897-1189'
                >
                  800-897-1189
                </a>
              </div>
            </div>
          </section>
          <img
            className='background-img'
            src={background}
            alt='Poker Table Background'
          />
        </main>
        <section className='about-section'>
          <About />
        </section>
      </div>
    );
  }
}
