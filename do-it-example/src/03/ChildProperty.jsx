import React, { Component } from 'react';

export class ChildProperty extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default ChildProperty;