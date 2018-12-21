import React from 'react';
import { translate } from 'react-i18next';

import CalendarPage, { CalendarPageOption } from './CalendarPage.jsx';


class Month extends React.PureComponent {
  render() {
    let { t, year, monthIndex } = this.props;

    return (
      <div className="month">

        <CalendarPage year={ year } monthIndex={ monthIndex } label={ t( 'floors.ground.abbrev_label' ) }>
          <CalendarPageOption
            label={       t( 'floors.ground.options.at_forenoon.label' ) }
            description={ t( 'floors.ground.options.at_forenoon.description' ) } />
          <CalendarPageOption
            label={       t( 'floors.ground.options.at_noon.label' ) }
            description={ t( 'floors.ground.options.at_noon.description' ) } />
          <CalendarPageOption
            label={       t( 'floors.ground.options.at_afternoon.label' ) }
            description={ t( 'floors.ground.options.at_afternoon.description' ) } />
          <CalendarPageOption
            label={       t( 'floors.ground.options.at_evening.label' ) }
            description={ t( 'floors.ground.options.at_evening.description' ) } />
          <CalendarPageOption
            label={       t( 'floors.ground.options.at_night.label' ) }
            description={ t( 'floors.ground.options.at_night.description' ) } />
        </CalendarPage>

        <CalendarPage year={ year } monthIndex={ monthIndex } label={ t( 'floors.first.abbrev_label' ) }>
          <CalendarPageOption
            label={       t( 'floors.first.options.guest_room_1.label' ) }
            description={ t( 'floors.first.options.guest_room_1.description' ) } />
          <CalendarPageOption
            label={       t( 'floors.first.options.guest_room_2.label' ) }
            description={ t( 'floors.first.options.guest_room_2.description' ) } />
          <CalendarPageOption
            label={       t( 'floors.first.options.creative_room.label' ) }
            description={ t( 'floors.first.options.creative_room.description' ) } />
        </CalendarPage>

      </div>
    );
  }
}

export default translate()( Month );
