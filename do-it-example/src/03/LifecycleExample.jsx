import React, { Component } from 'react';

export class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps called');
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor called');
  }

  componentDidMount() {
    console.log('componentDidMount called');
    this.setState({
      updated: true
    });
    this.forceUpdate();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }
  
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate called');
    return {};
  }
  
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate called');
    return false;
  }

  render() {
    console.log('render called');
    return null;
  }
}

export default LifecycleExample;