import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { hexColor } from './custom-prop-types.js';


const pageDimensions = {
  width: 210,
  height: 297,
  padding: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  }
};

const styles = {
  page: {
    width: `${ pageDimensions.width }mm`,
    height: `${ pageDimensions.height }mm`,



    position: 'relative',
    overflow: 'hidden',
    pageBreakAfter: 'always',

    backgroundColor: '#fff',
    boxShadow: '2px 2px 10px 0px #888',
    '-webkit-print-color-adjust': 'exact !important',

    fontFamily: "'Buenard', serif",

    '@media print': {
      margin: 0,
      boxShadow: 'none',
    }
  },
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

    padding: {
      top: `${ pageDimensions.padding.top }mm`,
      right: `${ pageDimensions.padding.right }mm`,
      bottom: `${ pageDimensions.padding.bottom }mm`,
      left: `${ pageDimensions.padding.left }mm`,
    },
  }
}

class Page extends React.PureComponent {
  render() {
    let { classes, className, backgroundPrintColor } = this.props;
    return (
      <div className={ classNames( classes.page, className ) }>
        <img
          src={ `https://dummyimage.com/1x1/${ backgroundPrintColor.substr( 1 ) }/${ backgroundPrintColor.substr( 1 ) }.png` }
          className={ classes.background } />
        <div className={ classes.foreground }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  backgroundPrintColor: hexColor,
}

export default injectSheet(styles)(Page);

export { pageDimensions };
