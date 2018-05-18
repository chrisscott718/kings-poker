import React, {Component} from 'react';

import {SectionHeader} from './FormElements';

import pedClaw from 'Images/pedestal-claw.svg';
import pedReed from 'Images/pedestal-reed.svg';
import pedExecutive from 'Images/pedestal-executive.svg';
import pedRound from 'Images/pedestal-steelround.svg';

export default class Pedestal extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e);
  }
  render(){
    const { value } = this.props;
    return(
      <div>
        <SectionHeader
          title="Pedestal Style"
          subtitle="Choose your pedestal style" />
        <fieldset>
          <div className="tile-container">
            <div className="tile">
              <input
                type="radio"
                id="reed"
                name="pedestalStyle"
                value="Reed"
                checked={value === "Reed"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="reed">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={pedReed} alt="Wood Classic Style Pedestal"/>
                  <p className="label-title">Reed</p>
                  <p className="label-subtitle">Classic simple style, solid wood</p>
                </div>
              </label>
            </div>
            <div className="tile">
              <input
                type="radio"
                id="lux"
                name="pedestalStyle"
                value="Lux"
                checked={value === "Lux"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="lux">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={pedExecutive} alt="Wood Lux Style Pedestal"/>
                  <p className="label-title">Lux</p>
                  <p className="label-subtitle">Modern, solid wood</p>
                </div>
              </label>
            </div>
            <div className="tile">
              <input
                type="radio"
                id="claw"
                name="pedestalStyle"
                value="Claw"
                checked={value === "Claw"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="claw">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={pedClaw} alt="Wood Elegant Classic Style Pedestal"/>
                  <p className="label-title">Claw</p>
                  <p className="label-subtitle">Classic & Elegant, solid wood</p>
                </div>
              </label>
            </div>
            <div className="tile">
              <input
                type="radio"
                id="steelRound"
                name="pedestalStyle"
                value="Steel Round"
                checked={value === "Steel Round"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="steelRound">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={pedRound} alt="Round Stainless Steel Pedestal"/>
                  <p className="label-title">Steel Round</p>
                  <p className="label-subtitle">Clean & simple, stainless steel</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
