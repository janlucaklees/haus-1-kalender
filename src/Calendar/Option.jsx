import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';


const optionStyles = {
  cell: {
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: '1rem',
  },
  label: {
    fontSize: '5.5rem',
  },
  description: {
    fontSize: '3.3rem',
    color: '#696d7f',
    fontFamily: "'Noto Serif', serif",
  },
}

const _Option = injectSheet( optionStyles )( ( { classes, label, description } ) => (
  <th className={ classes.cell }>
    <h2 className={ classes.label }>{ label }</h2>
    <span className={ classes.description }>{ description }</span>
  </th>
));

// this class is just a wrapper for easier type checking
class Option extends React.PureComponent {
  render() {
    return React.createElement( _Option, this.props, null );
  }
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Option;
