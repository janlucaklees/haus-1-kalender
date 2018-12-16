import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import Page from './page.jsx';
import Day from './day.jsx';


const styles = {
  monthHeader: {
    backgroundColor: 'lightgreen',
  },
  table: {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    borderCollapse: 'collapse',
    '& th, td': {
      border: '1px solid black',
    }
  }
};


class PageFirstFloor extends React.PureComponent {
  render() {
    let { classes, t, year, monthIndex } = this.props;

    // creating the date for this month, using 0 as day number to get to the last day.
    // Because we use 0 as value for the day, we need to increement the month by one,
    // otherwise we will end up getting a date for the previous month.
    // We do all this, so we can find the amount of days in the month
    let date = new Date( year, monthIndex +1, 0 );
    let days_in_month = date.getDate();

    // create days
    let days = new Array();
    for( let day = 1; day <= days_in_month; day++) {
      days.push(
        <Day year={ year } monthIndex={ monthIndex } day={ day }  key={ monthIndex + '-' + day }>
          <td></td>
          <td></td>
          <td></td>
        </Day>
      );
    }

    return (
      <Page className={ classes.page }>

        <table className={ classes.table }>
          <thead className={ classes.monthHeader } >
            <tr>
              <th colSpan="2">
                <span>.{ ( monthIndex + 1).toString().padStart( 2, '0' ) }</span>
                <span>{ t( 'month_names.' + monthIndex ) }</span>
                <span>{ t( 'floors.first.abbrev_label' ) }</span>
              </th>
              <th>
                { t( 'floors.first.options.guest_room_1.label' ) }
              </th>
              <th >
                { t( 'floors.first.options.guest_room_2.label' ) }
              </th>
              <th>
                { t( 'floors.first.options.creative_room.label' ) }
              </th>
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

export default injectSheet(styles)( translate()(PageFirstFloor) );
