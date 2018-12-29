import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { hexColor } from '../custom-prop-types.js';


const styles = {
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    objectFit: 'cover',
  },
  foreground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}

class WithPrintableBackground extends React.PureComponent {
  render() {
    let { classes, className, backgroundColor } = this.props;
    return (
      <>
        <img
          src={ `https://dummyimage.com/1x1/${ backgroundColor.substr( 1 ) }/${ backgroundColor.substr( 1 ) }.png` }
          className={ classes.background } />
        <div className={ classNames( classes.foreground, className ) }>
          { this.props.children }
        </div>
      </>
    );
  }
}

WithPrintableBackground.propTypes = {
  backgroundColor: hexColor,
}

export default injectSheet( styles )( WithPrintableBackground );
