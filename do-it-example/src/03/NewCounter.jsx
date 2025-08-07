import React, { Component } from 'react';

export class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.increaseCount = this.increaseCount.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      count,
      newCount: count === state.count ? state.newCount : count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({ newCount: newCount + 1}));
  }


  render() {
    return (
      <div>
        newCount: {this.state.newCount}
        <button onClick={this.increaseCount}> +1 </button>
      </div>
    );
  }
}

export default NewCounter;