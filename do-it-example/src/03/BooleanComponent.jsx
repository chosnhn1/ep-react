import React, { Component } from 'react';

export class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? 'Get out and have some fun' : 'You have some jobs to do';
    return (
      <div className="message-container">{message}</div>
    );
  }
}

export default BooleanComponent;