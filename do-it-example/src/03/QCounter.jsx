import React, { Component } from 'react';

export class QCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(count => ({count: count + 1}));
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <span><button onClick={this.increaseCount}>Add 1</button></span>
      </div>
    );
  }
}

export default QCounter;