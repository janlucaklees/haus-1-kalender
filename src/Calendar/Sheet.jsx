import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { hexColor } from '../custom-prop-types.js';


const pageOuterDimensions = {
  width: 210,
  height: 297,
  padding: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  }
};

const pageDimensions = Object.assign({}, pageOuterDimensions, {
  canvas: getPageInnerDimensions( pageOuterDimensions ),
});

const styles = {
  '@global': {
    '@page': {
      margin: 0,
      size: `${ pageDimensions.width }mm ${ pageDimensions.height }mm`,
    },
  },
  page: {
    width: `${ pageDimensions.width }rem`,
    height: `${ pageDimensions.height }rem`,

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
      width: '100vw',
      height: '100vh',
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
      top: `${ pageDimensions.padding.top }rem`,
      right: `${ pageDimensions.padding.right }rem`,
      bottom: `${ pageDimensions.padding.bottom }rem`,
      left: `${ pageDimensions.padding.left }rem`,
    },
  }
}

class Sheet extends React.PureComponent {
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

Sheet.propTypes = {
  backgroundPrintColor: hexColor,
}

export default injectSheet( styles )( Sheet );


function getPageInnerDimensions( page ) {
  return {
    width: page.width - page.padding.left - page.padding.right,
    height: page.height - page.padding.top - page.padding.bottom,
  }
}

export { pageDimensions };
