import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';

import Sheet from './Sheet.jsx';
import Option from './Option.jsx';
import Day, { Placeholder } from './Day.jsx';

import { hexColor } from '../custom-prop-types.js';


const calendarPageSyles = {
  table: {
    width: '100%',
    height: '100%',
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
    height: '12rem',
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
    height: '12rem',
  },
  option: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    fontSize: '5rem',
  },
}
class Page extends React.PureComponent {
  render() {
    let { classes, t, className, label, year, monthIndex, children, backgroundPrintColor } = this.props;

    let date = moment( [ year, monthIndex ] );
    let numberOfOptions = children.length;

    // create days
    let days = new Array();
    let day;
    for( day = 1; day <= date.daysInMonth(); day++) {
      let dayDate = date.clone().date( day );
      days.push(
        <Day
          date={ dayDate }
          numberOfOptions={ numberOfOptions }
          key={ dayDate.format( 'YYYY-MM-DD' ) } />
      );
    }

    for( day; day <= 31; day++ ) {
      let dayDate = date.clone().date( day );
      days.push(
        <Placeholder key={ dayDate.format( 'YYYY-MM-DD' ) } />
      );
    }

    return (
      <Sheet className={ className } backgroundPrintColor={ backgroundPrintColor }>
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
      </Sheet>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  monthIndex: PropTypes.number.isRequired,
  children: PropTypes.arrayOf( PropTypes.shape( { type: PropTypes.oneOf( [ Option ] ) } ) ).isRequired,
  backgroundPrintColor: hexColor,
};

export default translate()( injectSheet( calendarPageSyles )( Page ) );
