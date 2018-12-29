import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';
import classNames from 'classnames';

import Page, { pageDimensions } from './Page.jsx';

import styles from './styles.js';
import { hexColor } from './custom-prop-types.js';


const calendarPageOptionSyles = {
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
const _CalendarOption = injectSheet( calendarPageOptionSyles )( ( { classes, label, description } ) => (
  <th className={ classes.cell }>
    <h2 className={ classes.label }>{ label }</h2>
    <span className={ classes.description }>{ description }</span>
  </th>
));
class CalendarOption extends React.PureComponent {
  render() {
    return React.createElement( _CalendarOption, this.props, null );
  }
}
CalendarOption.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const borderWidth = 0.2;
const cell = {
  border: {
    width: `${ borderWidth }rem`,
    style: 'solid',
    color: 'black',
  }
};
const rowHeaderHeight = 12;
const rowOptionsHeight = 12;
const rowDayHeight = ( pageDimensions.canvas.height - rowHeaderHeight - rowOptionsHeight ) / 31;
const rowDayInnerHeight = rowDayHeight - 2 * borderWidth;
const dayFontSizeScale = 0.55;
const calendarPageSyles = {
  table: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
  },
  colDate: {
    width: '9rem',
    textAlign: 'right',
  },
  colDayName: {
    width: '10.3rem',
  },
  rowHeader: {
    height: `${ rowHeaderHeight }rem`,
  },
  header: {
    position: 'relative',
    paddingTop: '0rem',
    paddingLeft: '6rem',
  },
  headerMonthNumber: {
    position: 'absolute',
    top: '-27rem',
    left: '-8rem',

    fontSize: '37rem',
    fontWeight: 'bold',

    opacity: 0.05,
    display: 'none',
  },
  headerMonthName: {
    fontSize: '8rem',
    fontWeight: 'bold',
  },
  rowOptions: {
    height: `${ rowOptionsHeight }rem`,
  },
  option: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    fontSize: '5rem',
  },
  cell: {
    extend: [ cell ],
  }
}
class CalendarPage extends React.PureComponent {
  render() {
    let { classes, t, className, label, year, monthIndex, children, backgroundPrintColor } = this.props;

    let date = moment( [ year, monthIndex ] );
    let numberOfOptions = children.length;

    // generate cells for each option one
    let cells = children.map( ( child ) => {
      return <td className={ classes.cell } key={ child.props.label }></td>;
    } );

    // create days
    let days = new Array();
    for( let day = 1; day <= date.daysInMonth(); day++) {
      // make a copy of the months date object and set the correct day number on it.
      let dayDate = date.clone();
      dayDate.date( day );
      days.push(
        <CalendarDay date={ dayDate } key={ dayDate.format( 'YYYY-MM-DD' ) }>
          { cells }
        </CalendarDay>
      );
    }

    return (
      <Page className={ className } backgroundPrintColor={ backgroundPrintColor }>
        <table className={ classes.table }>
          <thead>
            <tr>
              <td className={ classes.colDate }></td>
              <td className={ classes.colDayName }></td>
            </tr>
            <tr className={ classes.rowHeader }>
              <th className={ classes.header } colSpan={ 2 + numberOfOptions }>
                <h1>
                  <span className={ classes.headerMonthNumber }>
                    { date.format( '.MM.YYYY' ) }
                  </span>
                  <span className={ classes.headerMonthName }>
                    { t( 'month_names.' + date.month() ) }
                    { date.format( ' YYYY' ) }
                  </span>
                </h1>
              </th>
            </tr>
            <tr className={ classes.rowOptions }>
              <th className={ classes.option } colSpan={2} >
                <h2>
                  { label }
                </h2>
              </th>
              { children }
            </tr>
          </thead>
          <tbody>
            { days }
          </tbody>
        </table>
      </Page>
    );
  }
}

CalendarPage.propTypes = {
  year: PropTypes.number.isRequired,
  monthIndex: PropTypes.number.isRequired,
  children: PropTypes.arrayOf( PropTypes.shape( { type: PropTypes.oneOf( [ CalendarOption ] ) } ) ).isRequired,
  backgroundPrintColor: hexColor,
};

export default translate()( injectSheet( calendarPageSyles )( CalendarPage ) );

const cellDay = {
  verticalAlign: 'middle',
};
const calendarDayStyles = {
  rowDay: {
    height: `${ rowDayHeight }rem`,
    fontSize:  `${ rowDayInnerHeight * dayFontSizeScale }rem`,
    backgroundColor: '#fff',
  },
  rowDay_6: {
    backgroundColor: '#f7f8fb',
  },
  rowDay_0: {
    backgroundColor: '#eff0f2',
  },
  cellDayDate: {
    extend: [ cell, cellDay ],
    borderRightWidth: 0,
    paddingRight: 0,
    textAlign: 'right',
  },
  cellDayName: {
    extend: [ cell, cellDay ],
    borderLeftWidth: 0,
    paddingLeft: `${ rowDayHeight * dayFontSizeScale * 0.15 }rem`,
  },
};
class _CalendarDay extends React.PureComponent {
  render() {
    let { classes, date } = this.props;
    return (
      <tr className={ `${classes[ 'rowDay_' + date.day() ]} ${classes.rowDay}` }>
        <td className={ classes.cellDayDate }>
          { date.format( 'DD' ) }.
        </td>
        <td className={ classes.cellDayName }>
          { this.props.t( 'day_names.' + date.day() + '.abbrev' ) }
        </td>
        { this.props.children }
      </tr>
    );
  }
}
_CalendarDay.propTypes = {
  date: PropTypes.instanceOf( moment ).isRequired,
}
const CalendarDay = translate()( injectSheet( calendarDayStyles )( _CalendarDay ) );

export { CalendarOption };
