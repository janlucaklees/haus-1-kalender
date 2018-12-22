import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';
import classNames from 'classnames';

import Page from './page.jsx';

import styles from './styles.js';


const calendarPageOptionSyle = {
  cell: {
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: '1mm',
  },
  label: {
    fontSize: '5.5mm',
  },
  description: {
    fontSize: '3.3mm',
    color: '#696d7f',
    fontFamily: "'Noto Serif', serif",
  },
}
const _CalendarOption = injectSheet( calendarPageOptionSyle )( ( { classes, label, description } ) => (
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
export { CalendarOption };


class CalendarPage extends React.PureComponent {
  render() {
    let { classes, t, className, label, year, monthIndex, children } = this.props;

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
      <Page className={ classNames( className, classes.page ) }>
        <table className={ classes.table }>
          <thead>
            <tr>
              <td className={ classes.colDate }></td>
              <td className={ classes.colDayName }></td>
            </tr>
            <tr className={ classes.rowMonthHeader }>
              <th colSpan={ 2 + numberOfOptions }>
                <h1 className={ classes.monthHeader }>
                  <span className={ classes.monthNumber }>
                    { date.format( '.MM.YYYY' ) }
                  </span>
                  <span className={ classes.monthName }>
                    { t( 'month_names.' + date.month() ) }
                    { date.format( ' YYYY' ) }
                  </span>
                </h1>
              </th>
            </tr>
            <tr className={ classes.rowOptions }>
              <th className={ classes.floorLabel } colSpan={2} >
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
};

export default translate()( injectSheet( styles )( CalendarPage ) );


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
const CalendarDay = translate()( injectSheet( styles )( _CalendarDay ) );
