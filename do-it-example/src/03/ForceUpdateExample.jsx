import React, { Component } from 'react';

export class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);

    // states
    this.loading = true;
    this.formData = 'no data';
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  
  handleData() {
    const data = 'new data';
    // mutate state: if you do not want to use setState, you can use forceUpdate() instead:
    // but this method will give you some performance constraint; use them carefully
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>Loading...: {String(this.loading)}</span>
        <span>Result: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;