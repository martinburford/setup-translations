// React imports
import React from 'react';

// Other NPM imports
import PropTypes from 'prop-types';

const NestedComponent = ({ props }, { translate }) => (
    <ul>
        <li>{translate('test1')}</li>
        <li>{translate('test2')}</li>
        <li>{translate('test3')}</li>
    </ul>
);

NestedComponent.contextTypes = {
    translate: PropTypes.func.isRequired
};

export default NestedComponent;