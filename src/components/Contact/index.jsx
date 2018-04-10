import React, { Component } from 'react';

import './style.scss';

import roundimg from 'Images/table-round2.png';

import {Button} from 'Shared/Button';
import {Footer} from 'Shared/Footer';

export default class Contact extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 contact-img">
              <img src={roundimg} alt="Kings Poker | Custom Round Table" className="i-fluid br-3"/>
            </div>
            <div className="col-lg-5 col-md-6 contact-form">
              <form onSubmit={(e) => {e.preventDefault(); console.log("Submitted form");}}>
                <h2 className="mb2">Send Us A Message</h2>
                <p className="t-muted mb4">We'll get back to you shortly</p>
                <br/>
                <input autoFocus className="form-control" type="text" required placeholder="Your name*"/>
                <input className="form-control" type="email" required placeholder="Email address*"/>
                <input className="form-control" type="text" placeholder="Phone number"/>
                <textarea className="form-control" type="text" rows="3" placeholder="What can we help you with?"></textarea>
                <Button type="submit">Send Message</Button>
              </form>
              {/* <div className="contact-info">
                <h5 className="t-md mb4">Questions, comments, ideas? We'd love to hear from you.</h5>
                <p className="t-muted t-sm mb2">phone number</p>
                <p className="t-md mb4"><a className="c-black" href="tel:1-800-897-1189">1-800-897-1189</a></p>
                <p className="t-muted t-sm mb2">email</p>
                <p className="t-md"><a className="c-black" href="mailto:jason@kingspokertables.com?Subject=Poker%20Table%20Inquery" target="_top">jason@kingspokertables.com</a></p>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
