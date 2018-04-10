import React, {Component} from 'react';

export default class BuildFormWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableShape: '',
      totalCups: '',
    }
  }

  render() {
    const {
      step,
      next,
      prev
    } = this.props;
    return (
      <form onSubmit={(e) => {e.preventDefault(); console.log('formSubmitted')}}>
        <div>
          <SectionHeader
            title="Start Building Your Table"
            subtitle="Choose your options and we'll send you a quote" />
          <div className="byo-body">
            options here
          </div>
        </div>
      </form>
    );
  }
}

const SectionHeader = ({title, subtitle}) => (
  <div className="byo-header ta-center">
    <h2 className="mb4">{title}</h2>
    <p className="t-muted t-md t-light">{subtitle}</p>
  </div>
);
