/*
  Use properties given from upper component with this.props
  and also check old PropTypes works;
  modern React don't use PropTypes: https://18.react.dev/reference/react/Component#static-proptypes
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PropsComponent extends Component {
  render() {
    return (
      <div className='message-container'>
        {this.props.name}
      </div>
    );
  }
}

// typing props: depreciated, use TypeScript
// just see how it works
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;