import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import CalendarPage, { CalendarOption } from './CalendarPage.jsx';


class Month extends React.PureComponent {
  render() {
    let { t, year, monthIndex } = this.props;

    return (
      <div className="month">

        <CalendarPage year={ year } monthIndex={ monthIndex } label={ t( 'floors.ground.abbrev_label' ) }>
          <CalendarOption
            label={       t( 'floors.ground.options.at_forenoon.label' ) }
            description={ t( 'floors.ground.options.at_forenoon.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.at_noon.label' ) }
            description={ t( 'floors.ground.options.at_noon.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.at_afternoon.label' ) }
            description={ t( 'floors.ground.options.at_afternoon.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.at_evening.label' ) }
            description={ t( 'floors.ground.options.at_evening.description' ) } />
          <CalendarOption
            label={       t( 'floors.ground.options.at_night.label' ) }
            description={ t( 'floors.ground.options.at_night.description' ) } />
        </CalendarPage>

        <CalendarPage year={ year } monthIndex={ monthIndex } label={ t( 'floors.first.abbrev_label' ) }>
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

export default translate()( Month );
