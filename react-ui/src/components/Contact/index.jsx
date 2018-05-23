import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {sendMail} from '../../api';

import './style.scss';

import roundimg from 'Images/table-round2.png';

import {Button} from 'Shared/Button';
import {Footer} from 'Shared/Footer';

class _Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      phone: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      ...this.state,
      type: 'contactRequest',
    };

    sendMail(data)
    .then( res => {
      if(res.status === 200)
        this.props.history.push('/byosuccess');
      else
        this.props.history.push('/builderror');
    })
    .catch( err => this.props.history.push('/builderror'));
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 contact-img">
              <img src={roundimg} alt="Kings Poker | Custom Round Table" className="i-fluid br-3"/>
            </div>
            <div className="col-lg-5 col-md-6 contact-form">
              <form onSubmit={this.handleSubmit}>
                <h2 className="mb2">Send Us A Message</h2>
                <p className="t-muted mb4">We'll get back to you shortly</p>
                <div>
                  <input
                    type="text"
                    required
                    autoFocus
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Your name*" />
                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email address*" />
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    placeholder="Phone number" />
                  <textarea
                    className="form-control"
                    rows="3"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="What else should we know?"></textarea>
                </div>
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

export const Contact = withRouter(_Contact);
