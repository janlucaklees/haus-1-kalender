import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';
import classNames from 'classnames';

import WithPrintableBackground from './WithPrintableBackground.jsx';
import browser from '../browser.js';


const weekdayBackgroundColor = [
  '#eff0f2',
  '#ffffff',
  '#ffffff',
  '#ffffff',
  '#ffffff',
  '#ffffff',
  '#f7f8fb',
];

const calendarDayStyles = {
  rowDay: {
    fontSize: `4.4rem`,
    backgroundColor: '#fff',
  },
  sunday: { backgroundColor: weekdayBackgroundColor[ 0 ] },
  saturday: { backgroundColor: weekdayBackgroundColor[ 6 ] },
  cell: {
    borderWidth: '0.375rem',
    borderStyle: 'solid',
    borderColor: 'black',
    verticalAlign: 'middle',
    position: 'relative',
  },
  cellInner: {
    paddingTop: '1rem',
  },
  cellDayDate: {
    extend: 'cell',

    borderRightWidth: 0,
    paddingRight: 0,
    textAlign: 'right',
  },
  cellDayName: {
    extend: 'cell',

    borderLeftWidth: 0,
    paddingLeft: '0.66rem',
  },
};

class Day extends React.PureComponent {
  render() {
    let { classes, date, numberOfOptions } = this.props;

    // generate cells for each option one
    let cells = [];
    for( let i = 0; i < numberOfOptions; i++ ){
      cells.push(
        <td className={ classes.cell } key={ date.format( 'YYYY-MM-DD' ) + `_${ i }` }>
          { ["edge", "firefox"].includes( browser.name ) ?
            <>
              <WithPrintableBackground
                backgroundColor={ weekdayBackgroundColor[ date.day() ] }>
              </WithPrintableBackground>
              &nbsp;
            </> : <>
            </>
          }
        </td>
      );
    }

    let weekendHighlight = {};
    weekendHighlight[ classes.saturday ] = date.day() === 6;
    weekendHighlight[ classes.sunday ] = date.day() === 0;

    return (
      <tr className={ classNames( classes.rowDay, weekendHighlight ) }>
        <td className={ classes.cellDayDate }>
          { ["edge", "firefox"].includes( browser.name ) ?
            <>
              <WithPrintableBackground
                backgroundColor={ weekdayBackgroundColor[ date.day() ] }
                className={ classes.cellInner }>
                { date.format( 'DD' ) }.
              </WithPrintableBackground>
              &nbsp;
            </> : <>
              { date.format( 'DD' ) }.
            </>
          }
        </td>
        <td className={ classes.cellDayName }>
          { ["edge", "firefox"].includes( browser.name ) ?
            <>
              <WithPrintableBackground
                backgroundColor={ weekdayBackgroundColor[ date.day() ] }
                className={ classes.cellInner }>
                { this.props.t( 'day_names.' + date.day() + '.abbrev' ) }
              </WithPrintableBackground>
              &nbsp;
            </> : <>
              { this.props.t( 'day_names.' + date.day() + '.abbrev' ) }
            </>
          }
        </td>
        { cells }
      </tr>
    );
  }
}

Day.propTypes = {
  date: PropTypes.instanceOf( moment ).isRequired,
  numberOfOptions: PropTypes.number.isRequired,
}

export default translate()( injectSheet( calendarDayStyles )( Day ) );


const placeholderStyles = {
  rowPlaceholder: {
    visibility: 'hidden',
    opacity: 0,
  },
  cellPlaceholder: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: 'transparent',
  }
};

class _Placeholder extends React.PureComponent {
  render() {
    let { classes } = this.props;

    return (
      <tr className={ classNames( classes.rowDay, classes.rowPlaceholder ) }>
        <td className={ classNames( classes.cellDayDate, classes.cellPlaceholder ) }>
          &nbsp;
        </td>
        <td className={ classNames( classes.cellDayName, classes.cellPlaceholder ) }>
          &nbsp;
        </td>
      </tr>
    );
  }
}

const Placeholder = injectSheet( { ...calendarDayStyles, ...placeholderStyles } )( _Placeholder );

export { Placeholder };
