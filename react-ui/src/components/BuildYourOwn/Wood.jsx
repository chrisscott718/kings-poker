import React, {Component} from 'react';

import {SectionHeader} from './FormElements';

import woodMahogany from 'Images/wood-mahogany.jpg';
import woodCherry from 'Images/wood-cherry.jpg';
import woodWalnut from 'Images/wood-walnut.jpg';
import woodOak from 'Images/wood-oak.jpg';

export default class Wood extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e);
  }

  render(){
    const { woodType, woodStain } = this.props;
    return(
      <div>
        <SectionHeader
          title="Wood Style & Stain"
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
              <div className="wood-description">
                <p>Mahogany</p>
                {false &&
                  <StainSelector woodStain={woodStain} handleChange={this.handleChange} />
                }
              </div>
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
              <div className="wood-description">
                <p>Cherry</p>
                {false &&
                  <StainSelector woodStain={woodStain} handleChange={this.handleChange} />
                }
              </div>
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
              <div className="wood-description">
                <p>Walnut</p>
                {false &&
                  <StainSelector woodStain={woodStain} handleChange={this.handleChange} />
                }
              </div>
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
                <img src={woodOak} alt="Oak Wood" />
              </div>
              <div className="wood-description">
                <p>Oak</p>
                {false &&
                  <StainSelector woodStain={woodStain} handleChange={this.handleChange} />
                }
              </div>
            </label>
          </div>
        </fieldset>
      </div>
    );
  }
}

const StainSelector = ({handleChange, woodStain}) => (
    <div className="stain-options">
      <p>Stain Color</p>
      <div className="color-option">
        <input
          type="radio"
          id="mahoganyStain"
          name="woodStain"
          value="Mahogany Stain"
          checked={woodStain === "Mahogany Stain"}
          onChange={this.handleChange} />
        <label className="color-option-label bg-brown" htmlFor="mahoganyStain">
        </label>
        <span className="color-option-text">
          Mahogany
        </span>
      </div>
      <div className="color-option">
        <input
          type="radio"
          id="cherryStain"
          name="woodStain"
          value="Cherry Stain"
          checked={woodStain === "Cherry Stain"}
          onChange={this.handleChange} />
        <label className="color-option-label bg-cherry" htmlFor="cherryStain">
        </label>
        <span className="color-option-text">
          Cherry
        </span>
      </div>
      <div className="color-option">
        <input
          type="radio"
          id="ebonyStain"
          name="woodStain"
          value="Ebony Stain"
          checked={woodStain === "Ebony Stain"}
          onChange={this.handleChange} />
        <label className="color-option-label bg-black" htmlFor="ebonyStain">
        </label>
        <span className="color-option-text">
          Ebony
        </span>
      </div>
      <div className="color-option">
        <input
          type="radio"
          id="clearCoat"
          name="woodStain"
          value="Clear Coat"
          checked={woodStain === "Clear Coat"}
          onChange={this.handleChange} />
        <label className="color-option-label bg-clear" htmlFor="clearCoat">
        </label>
        <span className="color-option-text">
          Clear Coat
        </span>
      </div>
    </div>
);
