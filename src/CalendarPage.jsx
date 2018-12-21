import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';

import Page from './page.jsx';

import styles from './styles.js';


const calendarPageOptionSyle = {
  cell: {
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: '1mm',
  },
  label: {
    fontSize: '4.5mm',
  },
}
const _CalendarOption = injectSheet( calendarPageOptionSyle )( ( { classes, label, description } ) => (
  <th className={ classes.cell }>
    <h2 className={ classes.label }>{ label }</h2>
    <span>{ description }</span>
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
  constructor( props ) {
    super( props );
    this.date = moment( [ this.props.year, this.props.monthIndex ] );
    this.numberOfOptions = this.props.children.length;
  }

  render() {
    let { classes, t, className } = this.props;

    // generate cells for each option one
    let cells = this.props.children.map( ( child ) => {
      return <td className={ classes.cell } key={ child.props.label }></td>;
    } );

    // create days
    let days = new Array();
    for( let day = 1; day <= this.date.daysInMonth(); day++) {
      // make a copy of the months date object and set the correct day number on it.
      let date = this.date.clone();
      date.date( day );
      days.push(
        <CalendarDay date={ date } key={ date.format( 'YYYY-MM-DD' ) }>
          { cells }
        </CalendarDay>
      );
    }

    return (
      <Page className={ className }>
        <table className={ classes.table }>
          <thead>
            <tr>
              <td className={ classes.colDate }></td>
              <td className={ classes.colDayName }></td>
            </tr>
            <tr>
              <th className={ classes.rowMonthHeader } colSpan={ 2 + this.numberOfOptions }>
                <h1 className={ classes.monthHeader }>
                  <span className={ classes.monthNumber }>
                    { this.date.format( '.MM.YYYY' ) }
                  </span>
                  <span className={ classes.monthName }>
                    { t( 'month_names.' + this.date.month() ) }
                    { this.date.format( ' YYYY' ) }
                  </span>
                </h1>
              </th>
            </tr>
            <tr className={ classes.rowHeader }>
              <th className={ classes.floorLabel } colSpan={2} >
                <h2 className={ classes.optionLabel }>
                  { t( 'floors.ground.abbrev_label' ) }
                </h2>
              </th>
              { this.props.children }
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
