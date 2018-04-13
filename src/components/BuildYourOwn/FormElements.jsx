import React, {Component} from 'react';

import {Button} from 'Shared/Button';

import woodMahogany from 'Images/wood-mahogany.jpg';
import woodCherry from 'Images/wood-cherry.jpg';
import woodWalnut from 'Images/wood-walnut.jpg';

export const SectionHeader = ({title, subtitle}) => (
  <div className="byo-header ta-center">
    <h2 className="mb4">{title}</h2>
    <p className="t-muted t-md t-light">{subtitle}</p>
  </div>
);


export class WoodOptions extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e);
    setTimeout(this.props.next, 600);
  }

  render(){
    const { prev, next, woodType, woodStain } = this.props;
    return(
      <div>
        <SectionHeader
          title="Wood Style and Stain"
          subtitle="Custom staining options are available" />
        <fieldset>

          <div className="wood-style-wrapper">
            <input
              type="radio"
              id="mahogany"
              name="woodType"
              value="Mahogany"
              checked={woodType === "Mahogany"}
              onChange={this.handleChange} />
            <label className="wood-type-check" htmlFor="mahogany">
              <div className="wood-img">
                <img src={woodMahogany} alt="Mahogany Wood" />
              </div>
              <p className="t-bold">Mahogany</p>
            </label>

            <input
              type="radio"
              id="cherry"
              name="woodType"
              value="Cherry"
              checked={woodType === "Cherry"}
              onChange={this.handleChange} />
            <label className="wood-type-check" htmlFor="cherry">
              <div className="wood-img">
                <img src={woodCherry} alt="Cherry Wood" />
              </div>
              <p className="t-bold">Cherry</p>
            </label>

            <input
              type="radio"
              id="walnut"
              name="woodType"
              value="Walnut"
              checked={woodType === "Walnut"}
              onChange={this.handleChange} />
            <label className="wood-type-check" htmlFor="walnut">
              <div className="wood-img">
                <img src={woodWalnut} alt="Walnut Wood" />
              </div>
              <p className="t-bold">Walnut</p>
            </label>

            <input
              type="radio"
              id="oak"
              name="woodType"
              value="Oak"
              checked={woodType === "Oak"}
              onChange={this.handleChange} />
            <label className="wood-type-check" htmlFor="oak">
              <div className="wood-img">
                <img src={woodCherry} alt="Oak Wood" />
              </div>
              <p className="t-bold">Oak</p>
            </label>
          </div>
        </fieldset>
        <div className="ta-center">
          <Button className="mb4" onClick={next}>Next</Button>
          <span className="simple-link d-block" onClick={prev}>Prev Step</span>
        </div>
{/*
          <h3>Stain</h3>
          <input
            type="radio"
            id="mahoganyStain"
            name="woodStain"
            value="Mahogany Stain"
            onChange={handleChange} />
          <label htmlFor="mahoganyStain">Mahogany</label>

          <input
            type="radio"
            id="cherryStain"
            name="woodStain"
            value="Cherry Stain"
            onChange={handleChange} />
          <label htmlFor="cherryStain">Mahogany</label>

          <input
            type="radio"
            id="ebonyStain"
            name="woodStain"
            value="Ebony Stain"
            onChange={handleChange} />
          <label htmlFor="ebonyStain">Ebony</label>

          <input
            type="radio"
            id="clearCoat"
            name="woodStain"
            value="Clear Coat"
            onChange={handleChange} />
          <label htmlFor="clearCoat">Clear Coat</label> */}
      </div>
    );
  }
}

export class TableDetails extends Component {
  render(){
    const { handleChange, prev, next, state } = this.props;
    return(
      <div>
        <SectionHeader
          title="The Fine Details"
          subtitle="More custom options available upon request" />
        <fieldset>
          <h3>Fabric Color</h3>
          <input
            type="radio"
            id="black"
            name="fabricColor"
            value="Black"
            onChange={handleChange} />
          <label htmlFor="black">Black</label>

          <input
            type="radio"
            id="burgundy"
            name="fabricColor"
            value="Burgundy"
            onChange={handleChange} />
          <label htmlFor="burgundy">Burgundy</label>

          <input
            type="radio"
            id="brow"
            name="fabricColor"
            value="Brown"
            onChange={handleChange} />
          <label htmlFor="brow">Brown</label>

          <input
            type="radio"
            id="green"
            name="fabricColor"
            value="Green"
            onChange={handleChange} />
          <label htmlFor="green">Green</label>
          <input
            type="radio"
            id="blue"
            name="fabricColor"
            value="Blue"
            onChange={handleChange} />
          <label htmlFor="blue">Blue</label>
        </fieldset>

        <fieldset>
          <h3>Metal Accent Color</h3>
          <input
            type="radio"
            id="brass"
            name="metalAccent"
            value="Brass"
            onChange={handleChange} />
          <label htmlFor="brass">Brass</label>

          <input
            type="radio"
            id="steel"
            name="metalAccent"
            value="Steel"
            onChange={handleChange} />
          <label htmlFor="steel">Steel</label>
        </fieldset>

        <fieldset>
          <h3>Arm Rest Fabric</h3>
          <input
            type="radio"
            id="vinyl"
            name="armRest"
            value="Vinyl"
            onChange={handleChange} />
          <label htmlFor="vinyl">Vinyl</label>

          <input
            type="radio"
            id="leather"
            name="armRest"
            value="Genuine Leather"
            onChange={handleChange} />
          <label htmlFor="leather">Genuine Leather</label>
        </fieldset>
        <fieldset>
          <h3>Dining top</h3>
          <label>
            Include Dining Top?
            <input
              type="checkbox"
              name="includeDiningTop"
              checked={state.includeDiningTop}
              onChange={handleChange} />
          </label>
        </fieldset>
        <Button onClick={prev}>Go Back</Button>
        <Button onClick={next}>Continue</Button>
      </div>
    );
  }
}

export class QuoteSubmissionForm extends Component {
  render(){
    const { handleChange, prev, next, state } = this.props;
    return(
      <div>
        <SectionHeader
          title="Where do we send your quote?"
          subtitle="Please fill out the form below and we'll send you the details of your quote" />
        <fieldset>
          <input type="text" required className="form-control" placeholder="Your name" />
          <input type="email" required className="form-control" placeholder="Email address" />
          <input type="text" className="form-control" placeholder="Phone number" />
          <textarea className="form-control" rows="3" placeholder="What else should we know?"></textarea>
          Captcha here
        </fieldset>
        <Button type="submit">Send my Quote</Button>
        <Button onClick={prev}>Go Back</Button>
        <Button onClick={next}>Continue</Button>
      </div>
    );
  }
}
