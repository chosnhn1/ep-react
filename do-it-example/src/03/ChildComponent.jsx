/*
  passing prop values into child component:
  check difference btw string values and others (passing with curly braces)
*/

import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;

    return (
      <div>
        <span>boolean: {boolValue}</span>
        <span>number: {numValue}</span>
        <span>array: {arrayValue}</span>
        <span>object: {String(objValue)}</span>
        <span>node: {nodeValue}</span>
        <span>function: {String(funcValue)}</span>
      </div>
    );
  }
}

export default ChildComponent;