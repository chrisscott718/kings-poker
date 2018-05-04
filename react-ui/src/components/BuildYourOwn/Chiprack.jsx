import React, {Component} from 'react';

import {SectionHeader} from './FormElements';

import chiprackSolid from 'Images/chiprack-solid.svg';
import chiprackGrooved from 'Images/chiprack-grooved.svg';
import chiprackNone from 'Images/chiprack-none.svg';

import cupStd from 'Images/cupholder-standard.svg';
import cupOvs from 'Images/cupholder-oversized.svg';

export default class Chiprack extends Component {
  render(){
    const { handleChange, chipRack, cupHolders } = this.props;
    return(
      <div>
        <SectionHeader
          title="Customize your Chiprack"
          subtitle="How will your chips stack up?" />
        <fieldset>
          <div className="form-slim">
            <div className="form-row-h">
              <div className="form-row-title">
                <h3>Chiprack</h3>
              </div>
              <div className="form-row-content">
                <input
                  type="radio"
                  id="grooved"
                  name="chipRack"
                  value="Grooved"
                  checked={chipRack === "Grooved" }
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="grooved">
                  <div className="sm-img-wrapper">
                    <img src={chiprackGrooved} alt="Two rows of grooves, great for laying chips on their side." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">Grooved Chiprack</p>
                    <p className="t-sm t-muted">Two grooves to lay all your chips down on their side.</p>
                  </div>
                </label>

                <input
                  type="radio"
                  id="solid"
                  name="chipRack"
                  value="Solid"
                  checked={chipRack === "Solid" }
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="solid">
                  <div className="sm-img-wrapper">
                    <img src={chiprackSolid} alt="Solid chiprack style, great for stacking chips." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">Solid Chiprack</p>
                    <p className="t-sm t-muted">Flat solid chiprack runs around the entire table. Great for stacking chips.</p>
                  </div>
                </label>

                <input
                  type="radio"
                  id="noChiprack"
                  name="chipRack"
                  value="None"
                  checked={chipRack === "None" }
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="noChiprack">
                  <div className="sm-img-wrapper">
                    <img src={chiprackNone} alt="No chiprack. We'll run playing surface up to the armrest." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">No Chiprack</p>
                    <p className="t-sm t-muted">We'll run the playing surface up to the armrest. You can still get cupholders!</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-row-h">
              <div className="form-row-title">
                <h3>Cupholders</h3>
              </div>
              <div className="form-row-content">
                <input
                  type="radio"
                  id="cupholderStandard"
                  name="cupHolders"
                  value="Standard Cupholders"
                  checked={cupHolders === "Standard Cupholders"}
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="cupholderStandard">
                  <div className="sm-img-wrapper">
                    <img src={cupStd} alt="Standard premium metal cupholders. Most bottles, cups and cans will fit." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">Premium Metal Cupholders</p>
                    <p className="t-sm t-muted">Full metal cupholders. Fits most bottles, cups and cans.</p>
                  </div>
                </label>

                <input
                  type="radio"
                  id="cupholderOversized"
                  name="cupHolders"
                  value="Oversized Cupholders"
                  checked={cupHolders === "Oversized Cupholders"}
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="cupholderOversized">
                  <div className="sm-img-wrapper">
                    <img src={cupOvs} alt="Standard stainless steel cupholders. Most bottles, cups and cans will fit." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">Oversized Metal Cupholders</p>
                    <p className="t-sm t-muted">These cupholders are extra large for the extra large drinks in your life.</p>
                  </div>
                </label>

                <input
                  type="radio"
                  id="noCups"
                  name="cupHolders"
                  value="No Cupholders"
                  checked={cupHolders === "No Cupholders"}
                  onChange={handleChange} />
                <label className="sm-img-checkbox" htmlFor="noCups">
                  <div className="sm-img-wrapper">
                    <img src={chiprackNone} alt="No chiprack. We'll run playing surface up to the armrest." />
                  </div>
                  <div className="sm-checkbox-content">
                    <p className="t-bold mb2">No Cupholders</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
