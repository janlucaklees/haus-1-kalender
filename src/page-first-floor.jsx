import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';

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
  constructor( props ) {
    super( props );
    this.date = moment( [ this.props.year, this.props.monthIndex ] );
  }

  render() {
    let { classes, t } = this.props;

    // create days
    let days = new Array();
    for( let day = 1; day <= this.date.daysInMonth(); day++) {
      // make a copy of the months date object and set the correct day number on it.
      let date = this.date.clone();
      date.date( day );
      days.push(
        <Day date={ date } key={ date.format( 'YYYY-MM-DD' ) }>
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
                <span>{ this.date.format( '.MM' ) }</span>
                <span>{ t( 'month_names.' + this.date.month() ) }</span>
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

export default translate()( injectSheet( styles )( PageFirstFloor ) );
