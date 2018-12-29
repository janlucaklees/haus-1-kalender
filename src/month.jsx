import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import CalendarPage, { CalendarOption } from './CalendarPage.jsx';


const styles = {
  month: {
    width: '100%',
    margin: '25mm auto',
    display: 'flex',
    justifyContent: 'space-between',
    '@media print': {
      width: 'auto',
      margin: 0,
      display: 'block',
    },
  }
}

class Month extends React.PureComponent {
  render() {
    let { classes, t, year, monthIndex } = this.props;

    return (
      <div className={ classes.month }>

        <CalendarPage year={ year } monthIndex={ monthIndex }
          label={ t( 'floors.ground.abbrev_label' ) }
          backgroundPrintColor='#e7f0ff'>
          <CalendarOption
            label={       t( 'floors.ground.options.forenoon.label' ) }
            description={ t( 'floors.ground.options.forenoon.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.noon.label' ) }
            description={ t( 'floors.ground.options.noon.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.afternoon.label' ) }
            description={ t( 'floors.ground.options.afternoon.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.evening.label' ) }
            description={ t( 'floors.ground.options.evening.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.night.label' ) }
            description={ t( 'floors.ground.options.night.description' ) } />
        </CalendarPage>

        <CalendarPage year={ year } monthIndex={ monthIndex }
          label={ t( 'floors.first.abbrev_label' ) }
          backgroundPrintColor='#e7ffdc'>
          <CalendarOption
            label={       t( 'floors.first.options.guest_room_1.label' ) }
            description={ t( 'floors.first.options.guest_room_1.description' ) } />
          <CalendarOption
            label={       t( 'floors.first.options.guest_room_2.label' ) }
            description={ t( 'floors.first.options.guest_room_2.description' ) } />
          <CalendarOption
            label={       t( 'floors.first.options.creative_room.label' ) }
            description={ t( 'floors.first.options.creative_room.description' ) } />
        </CalendarPage>

      </div>
    );
  }
}

Month.propTypes = {
  year: PropTypes.number.isRequired,
  monthIndex: PropTypes.number.isRequired,
};

export default translate()( injectSheet( styles )( Month ) );
