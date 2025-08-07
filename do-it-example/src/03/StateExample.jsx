import React, { Component } from 'react'

export class StateExample extends Component {
  constructor(props) {
    super(props);

    // defining state of this component
    // ## important note: Component SHOULD initiailze their used state in constructor
    this.state = {
      loading: true,
      formData: 'no data',
    };
    // binding
    this.handleData = this.handleData.bind(this);

    // when the component made: call handleData after 4s
    setTimeout(this.handleData, 4000);
  }

  // handleData will 1. add data 2. switch loading state to false 3. log
  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    // ## important note: change a value in state you SHOULD use setState() method rather than change the value of state directly;
    // cause React should handle (re-render) the change of state
    this.setState({
      loading: false,
      formData: data + formData,
    });

    console.log('loading value', this.state.loading);
  }

  // also note that if you pass function into setState method as arg, you can skip the step reading past state, which can be useful in certain scenarios
  otherHandleData(data) {
    this.setState(prevState => ({
      loading: false,
      formData: data + prevState.formData
    }));
  }

  render() {
    return (
      <div>
        <span>Loading...: {String(this.state.loading)}</span>
        <span>Result: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;