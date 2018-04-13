import React, {Component} from 'react';

import {Button} from 'Shared/Button';
import {SectionHeader} from './FormElements';

import roundTable from 'Images/shape-round.svg';
import ellipsisTable from 'Images/shape-ellipsis.svg';
import ovalTable from 'Images/shape-oval.svg';
import octogonTable from 'Images/shape-octogon.svg';

export default class TableShape extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e);
    setTimeout(this.props.next, 600);
  }

  render(){
    const { value, next } = this.props;
    return(
      <div>
        <SectionHeader
          title="Start Building Your Table"
          subtitle="Choose your options and we'll send you a quote" />
        <fieldset>
          <div className="tile-container">
            <div className="tile">
              <input
                type="radio"
                id="tableRound"
                name="tableShape"
                value="Round"
                checked={value === "Round"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="tableRound">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={roundTable} alt="Round Table, Seats 6-8 Players"/>
                  <p className="label-title">Round</p>
                  <p className="label-subtitle">Can seat 6-8 players</p>
                </div>
              </label>
            </div>
            <div className="tile">
              <input
                type="radio"
                id="tableOval"
                name="tableShape"
                value="Oval"
                checked={value === "Oval"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="tableOval">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={ovalTable} alt="Oval Table, Seats 10-12 Players"/>
                  <p className="label-title">Oval</p>
                  <p className="label-subtitle">Can seat 10-12 players</p>
                </div>
              </label>
            </div>
            <div className="tile">
              <input
                type="radio"
                id="tableOctogon"
                name="tableShape"
                value="Octogon"
                checked={value === "Octogon"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="tableOctogon">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={octogonTable} alt="Octogon Table, Seats 6-8 Players"/>
                  <p className="label-title">Octogon</p>
                  <p className="label-subtitle">Can seat 10-14 players</p>
                </div>
              </label>
            </div>
            <div className="tile">
              <input
                type="radio"
                id="tableEllipsis"
                name="tableShape"
                value="Ellipsis"
                checked={value === "Ellipsis"}
                onChange={this.handleChange} />
              <label className="label-with-image" htmlFor="tableEllipsis">
                <div className="checkmark draw"></div>
                <div className="label-content">
                  <img src={ellipsisTable} alt="Ellipsis Table, Seats 8-10 Players"/>
                  <p className="label-title">Ellipsis</p>
                  <p className="label-subtitle">Can seat 10-14 players</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <div className="ta-center">
          {value &&
            <Button className="mb4" onClick={next}>Next</Button>
          }
        </div>
      </div>
    );
  }
}
