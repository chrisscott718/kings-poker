import React, { Component } from 'react';

import './style.scss';

import {BuildFormWrapper} from './BuildFormWrapper';
import {Footer} from 'Shared/Footer';

export default class BuildYourOwn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      intervalId: 0,
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  nextStep(){
    if(this.state.step < 6) {
      this.setState((prevState) => ({
        step: prevState.step + 1
      }));
      this.scrollToTop();
    }
  }

  prevStep(){
    if(this.state.step > 1) {
      this.setState((prevState) => ({
        step: prevState.step - 1
      }));
      this.scrollToTop();
    }
  }

  scrollStep() {
   if (window.pageYOffset === 0)
     clearInterval(this.state.intervalId);

   window.scroll(0, window.pageYOffset - 15);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, 10);
    this.setState({ intervalId: intervalId });
  }

  render() {
    const {step} = this.state;

    return (
      <div>
        <div className="byo-wrapper">
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col-md-10">
                <div className="byo-container">
                  <Steps step={step} />
                  <BuildFormWrapper
                    next={this.nextStep}
                    prev={this.prevStep}
                    step={step}
                  />
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const Steps = ({step}) => (
  <div className="byo-steps">
    <div className={`step ${step === 1 ? 'active' : ''}`}>Table</div>
    <div className={`step ${step === 2 ? 'active' : ''}`}>Pedestal</div>
    <div className={`step ${step === 3 ? 'active' : ''}`}>Chiprack</div>
    <div className={`step ${step === 4 ? 'active' : ''}`}>Wood</div>
    <div className={`step ${step === 5 ? 'active' : ''}`}>Details</div>
  </div>
);
