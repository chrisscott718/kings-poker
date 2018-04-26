import React, {Component} from 'react';

import {Button} from 'Shared/Button';

import vinyl from 'Images/armrest-vinyl.png';
import leather from 'Images/armrest-leather.png';


export const SectionHeader = ({title, subtitle}) => (
  <div className="byo-header ta-center">
    <h2 className="mb4">{title}</h2>
    <p className="t-muted t-md t-light">{subtitle}</p>
  </div>
);

export class TableDetails extends Component {
  render(){
    const { handleChange, prev, next, state } = this.props;
    return(
      <div>
        <SectionHeader
          title="The Details"
          subtitle="More custom options available upon request" />
        <fieldset>
          <div className="form-slim">
            <div className="form-row-h">
              <div className="form-row-title">
                <h3>Fabric Color</h3>
              </div>
              <div className="form-row-content">
                <div className="fabric-picker">
                  <div className="color-option">
                    <input
                      type="radio"
                      id="black"
                      name="fabricColor"
                      value="Black"
                      checked={state.fabricColor === "Black"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-black" htmlFor="black">
                    </label>
                    <span className="color-option-text">
                      Black
                    </span>
                  </div>
                  <div className="color-option">
                    <input
                      type="radio"
                      id="burgundy"
                      name="fabricColor"
                      value="Burgundy"
                      checked={state.fabricColor === "Burgundy"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-burgundy" htmlFor="burgundy">
                    </label>
                    <span className="color-option-text">
                      Burgundy
                    </span>
                  </div>
                  <div className="color-option">
                    <input
                      type="radio"
                      id="brown"
                      name="fabricColor"
                      value="Brown"
                      checked={state.fabricColor === "Brown"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-brown" htmlFor="brown">
                    </label>
                    <span className="color-option-text">
                      Brown
                    </span>
                  </div>
                  <div className="color-option">
                    <input
                      type="radio"
                      id="green"
                      name="fabricColor"
                      value="Green"
                      checked={state.fabricColor === "Green"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-green" htmlFor="green">
                    </label>
                    <span className="color-option-text">
                      Green
                    </span>
                  </div>
                  <div className="color-option">
                    <input
                      type="radio"
                      id="blue"
                      name="fabricColor"
                      value="Blue"
                      checked={state.fabricColor === "Blue"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-blue" htmlFor="blue">
                    </label>
                    <span className="color-option-text">
                      Blue
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row-h">
              <div className="form-row-title">
                <h3>Metal Accents</h3>
              </div>
              <div className="form-row-content">
                <div className="fabric-picker">
                  <div className="color-option">
                    <input
                      type="radio"
                      id="brass"
                      name="metalAccent"
                      value="Brass"
                      checked={state.metalAccent === "Brass"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-brass" htmlFor="brass">
                    </label>
                    <span className="color-option-text">
                      Brass
                    </span>
                  </div>
                  <div className="color-option">
                    <input
                      type="radio"
                      id="steel"
                      name="metalAccent"
                      value="Steel"
                      checked={state.metalAccent === "Steel"}
                      onChange={handleChange} />
                    <label className="color-option-label bg-steel" htmlFor="steel">
                    </label>
                    <span className="color-option-text">
                      Steel
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row-h">
              <div className="form-row-title">
                <h3>Arm Rest</h3>
              </div>
              <div className="form-row-content">
                <input
                  type="radio"
                  id="leather"
                  name="armRest"
                  value="Genuine Leather"
                  checked={state.armRest === "Genuine Leather" }
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="leather">
                  <div className="sm-img-wrapper">
                    <img src={leather} className="i-round" alt="Premium genuine leather for the most comfortable arm rests on any table." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">Genuine Leather</p>
                    <p className="t-sm t-muted">Custom stitched leather arm rests for the most comfortable table you've ever felt.</p>
                  </div>
                </label>

                <input
                  type="radio"
                  id="vinyl"
                  name="armRest"
                  value="Vinyl"
                  checked={state.armRest === "Vinyl" }
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="vinyl">
                  <div className="sm-img-wrapper">
                    <img src={vinyl} className="i-round" alt="Top of the line vinyl arm rests." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">Premium Vinyl</p>
                    <p className="t-sm t-muted">The best vinyl you can put on any table stitched to fit perfectly.</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-row-h">
              <div className="form-row-title">
                <h3>Dining Top</h3>
              </div>
              <div className="form-row-content">
                <div className="dining-top">
                  <input
                    type="checkbox"
                    name="includeDiningTop"
                    id="includeDiningTop"
                    checked={state.includeDiningTop}
                    onChange={handleChange} />
                  <label htmlFor="includeDiningTop" className="checkbox">
                    <div className="checkbox-indicator"></div>
                    <div>
                      <p>Include Dining Top?</p>
                      <span className="t-muted t-sm">Convert your poker table to your dining table with ease.</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="ta-center">
          <Button className="mb4" onClick={next}>Continue</Button>
          <span className="simple-link d-block" onClick={prev}>Go Back</span>
        </div>
      </div>
    );
  }
}

export class QuoteSubmissionForm extends Component {
  render(){
    const { handleChange, prev, state } = this.props;
    return(
      <div>
        <SectionHeader
          title="Where do we send your quote?"
          subtitle="Please fill out the form below and we'll send you the details of your quote" />
        <fieldset>
          <div className="quote-form">
            <input
              type="text"
              required
              autoFocus
              name="name"
              value={state.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your name*" />
            <input
              type="email"
              required
              className="form-control"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email address*" />
            <input
              type="text"
              className="form-control"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              placeholder="Phone number" />
            <textarea
              className="form-control"
              rows="3"
              name="message"
              value={state.message}
              onChange={handleChange}
              placeholder="What else should we know?">
            </textarea>
          </div>
          <div className="ta-center">
            <Button className="mb4" type="submit">Send My Quote</Button>
            <span className="simple-link d-block" onClick={prev}>Go Back</span>
          </div>
        </fieldset>
      </div>
    );
  }
}
