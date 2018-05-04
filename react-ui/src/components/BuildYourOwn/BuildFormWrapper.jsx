import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import {Button} from 'Shared/Button';

import {
  TableDetails,
  QuoteSubmissionForm,
} from './FormElements';
import TableShape from './TableShape';
import Pedestal from './Pedestal';
import Chiprack from './Chiprack';
import Wood from './Wood';

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
    this.props.history.push('/byosuccess');
  }

  render() {
    const { step, next, prev } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormTransition inProp={step === 1}>
          <TableShape
            value={this.state.tableShape}
            handleChange={this.handleChange}
          />
        </FormTransition>
        <FormTransition inProp={step === 2}>
          <Pedestal
            value={this.state.pedestalStyle}
            handleChange={this.handleChange}
          />
        </FormTransition>
        <FormTransition inProp={step === 3}>
          <Chiprack
            chipRack={this.state.chipRack}
            cupHolders={this.state.cupHolders}
            handleChange={this.handleChange}
          />
        </FormTransition>
        <FormTransition inProp={step === 4}>
          <Wood
            woodType={this.state.woodType}
            woodStain={this.state.woodStain}
            handleChange={this.handleChange}
          />
        </FormTransition>
        <FormTransition inProp={step === 5}>
          <TableDetails
            state={this.state}
            handleChange={this.handleChange}
          />
        </FormTransition>
        <FormTransition inProp={step === 6}>
          <QuoteSubmissionForm
            state={this.state}
            prev={prev}
            handleChange={this.handleChange}
          />
        </FormTransition>
        {step !== 6 &&
          <div className="ta-center">
            <Button className="next-btn" onClick={next}>Next Step</Button>
            <Button className="prev-btn" onClick={prev} disabled={step === 1}>Go Back</Button>
          </div>
        }
      </form>
    );
  }
}

const FormTransition = ({children, inProp}) => (
  <Transition in={inProp} timeout={400} unmountOnExit>
    {state => (
      <div className={`form form-${state}`}>
        {children}
      </div>
    )}
  </Transition>
);

export const BuildFormWrapper = withRouter(_BuildFormWrapper);
