import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import WithPrintableBackground from './WithPrintableBackground.jsx';
import { hexColor } from '../custom-prop-types.js';


const pageOuterDimensions = {
  width: 210,
  height: 297,
  padding: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  },
};

const borderWidth = 1;

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

    // apparently this border fixes render bugs in ff (like what?!)
    borderWidth: `${ borderWidth }rem`,
    borderStyle: 'solid',
    borderColor: props => props.backgroundPrintColor,

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
  foreground: {
    padding: {
      top: `${ pageDimensions.padding.top }rem`,
      right: `${ pageDimensions.padding.right }rem`,
      bottom: `${ pageDimensions.padding.bottom }rem`,
      left: `${ pageDimensions.padding.left }rem`,
    },
    margin: {
      top: `${ - borderWidth }rem`,
      right: `${ - borderWidth }rem`,
      bottom: `${ - borderWidth }rem`,
      left: `${ - borderWidth }rem`,
    },
  }
}

class Sheet extends React.PureComponent {
  render() {
    let { classes, className, backgroundPrintColor } = this.props;
    return (
      <div className={ classNames( classes.page, className ) }>
        <WithPrintableBackground
          backgroundColor={ backgroundPrintColor }
          className={ classes.foreground }>
          { this.props.children }
        </WithPrintableBackground>
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
