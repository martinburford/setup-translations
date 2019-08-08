// React imports
import React, { Component } from 'react';

// Other NPM imports
import PropTypes from 'prop-types';

class TranslationProvider extends Component {
  getChildContext(){
    return {
      translate: this.props.translate,
    };
  }

  render(){
    return React.Children.only(this.props.children);
  }
}

TranslationProvider.childContextTypes = {
  translate: PropTypes.func.isRequired
};

TranslationProvider.propTypes = {
  children: PropTypes.element.isRequired,
  translate: PropTypes.func.isRequired
};

export default TranslationProvider;