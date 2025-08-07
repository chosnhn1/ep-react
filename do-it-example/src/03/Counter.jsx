import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1}));
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.increaseCount}> +1 </button>
      </div>
    )
  }
}

export default Counter;