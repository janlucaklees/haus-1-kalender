import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';

import Page from './page.jsx';
import Day from './day.jsx';

import styles from './styles.js';


class PageGroundFloor extends React.PureComponent {
  constructor( props ) {
    super( props );
    this.date = moment( [ this.props.year, this.props.monthIndex ] );
  }

  render() {
    let { classes, t, year, monthIndex } = this.props;

    // create days
    let days = new Array();
    for( let day = 1; day <= this.date.daysInMonth(); day++) {
      days.push(
        <Day year={ year } monthIndex={ monthIndex } day={ day } key={ monthIndex + '-' + day }>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
        </Day>
      );
    }

    return (
      <Page>
        <table className={ classes.table }>
          <thead>
            <tr>
              <td className={ classes.colDate }></td>
              <td className={ classes.colDayName }></td>
            </tr>
            <tr>
              <th className={ classes.rowMonthHeader } colSpan={7}>
                <h1 className={ classes.monthHeader }>
                  <span className={ classes.monthNumber }>
                    .{ ( monthIndex + 1).toString().padStart( 2, '0' ) }
                  </span>
                  <span className={ classes.monthName }>
                    { t( 'month_names.' + monthIndex ) }
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
              <th className={ classes.cellOption }>
                <h2 className={ classes.optionLabel }>
                  { t( 'floors.ground.options.at_forenoon.label' ) }
                </h2>
                <span>
                  { t( 'floors.ground.options.at_forenoon.description' ) }
                </span>
              </th>
              <th className={ classes.cellOption }>
                <h2 className={ classes.optionLabel }>
                  { t( 'floors.ground.options.at_noon.label' ) }
                </h2>
                <span>
                  { t( 'floors.ground.options.at_noon.description' ) }
                </span>
              </th>
              <th className={ classes.cellOption }>
                <h2 className={ classes.optionLabel }>
                  { t( 'floors.ground.options.at_afternoon.label' ) }
                </h2>
                <span>
                  { t( 'floors.ground.options.at_afternoon.description' ) }
                </span>
              </th>
              <th className={ classes.cellOption }>
                <h2 className={ classes.optionLabel }>
                  { t( 'floors.ground.options.at_evening.label' ) }
                </h2>
                <span>
                  { t( 'floors.ground.options.at_evening.description' ) }
                </span>
              </th>
              <th className={ classes.cellOption }>
                <h2 className={ classes.optionLabel }>
                  { t( 'floors.ground.options.at_night.label' ) }
                </h2>
                <span>
                  { t( 'floors.ground.options.at_night.description' ) }
                </span>
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

export default translate()( injectSheet( styles )( PageGroundFloor ) );

/*
<th colSpan="2" >
  <span>.{ ( monthIndex + 1).toString().padStart( 2, '0' ) }</span>
  <span>{ t( 'month_names.' + monthIndex ) }</span>
  <span>{ t( 'floors.ground.abbrev_label' ) }</span>
</th>*/
