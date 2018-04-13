import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
  WoodOptions,
  TableDetails,
  QuoteSubmissionForm,
} from './FormElements';

import TableShape from './TableShape';
import Pedestal from './Pedestal';
import Chiprack from './Chiprack';

class _BuildFormWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableShape: '',
      pedestalStyle: '',
      chipRack: '',
      cupHolders: '',
      woodType: '',
      woodStain: '',
      fabricColor: '',
      metalAccent: '',
      armRest: '',
      includeDiningTop: false,
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
    this.props.history.push('/byosuccess');
  }

  render() {
    const { step } = this.props;

    let activeForm = null;

    switch (step) {
      case 1:
        activeForm = <TableShape {...this.props} value={this.state.tableShape} handleChange={this.handleChange} />
        break;
      case 2:
        activeForm = <Pedestal {...this.props} value={this.state.pedestalStyle} handleChange={this.handleChange} />
        break;
      case 3:
        activeForm = <Chiprack chipRack={this.state.chipRack} cupHolders={this.state.cupHolders} {...this.props} handleChange={this.handleChange} />
        break;
      case 4:
        activeForm = <WoodOptions woodType={this.state.woodType} woodStain={this.state.woodStain} {...this.props} handleChange={this.handleChange}/>
        break;
      case 5:
        activeForm = <TableDetails {...this.props} state={this.state} handleChange={this.handleChange} />
        break;
      case 6:
        activeForm = <QuoteSubmissionForm {...this.props} />
        break;
      default:
        activeForm = <TableShape {...this.props} handleChange={this.handleChange} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {activeForm}
      </form>
    );
  }
}

export const BuildFormWrapper = withRouter(_BuildFormWrapper);
