import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Floor from './Floor.jsx';
import TimeSlot from './TimeSlot.jsx';


function Month({ year, month }) {
	const { t } = useTranslation();

	return (
		<>

			<Floor
				year={ year }
				month={ month }
				label={ t( 'floors.ground.abbrev_label' ) }
				backgroundColor='#e7f0ff'>
				<TimeSlot
					label={       t( 'floors.ground.options.forenoon.label' ) }
					description={ t( 'floors.ground.options.forenoon.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.noon.label' ) }
					description={ t( 'floors.ground.options.noon.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.afternoon.label' ) }
					description={ t( 'floors.ground.options.afternoon.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.evening.label' ) }
					description={ t( 'floors.ground.options.evening.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.night.label' ) }
					description={ t( 'floors.ground.options.night.description' ) } />
			</Floor>

			<Floor
				year={ year }
				month={ month }
				label={ t( 'floors.first.abbrev_label' ) }
				backgroundColor='#e7ffdc'>
				<TimeSlot
					label={       t( 'floors.first.options.guest_room_1.label' ) }
					description={ t( 'floors.first.options.guest_room_1.description' ) } />
				<TimeSlot
					label={       t( 'floors.first.options.guest_room_2.label' ) }
					description={ t( 'floors.first.options.guest_room_2.description' ) } />
				<TimeSlot
					label={       t( 'floors.first.options.creative_room.label' ) }
					description={ t( 'floors.first.options.creative_room.description' ) } />
			</Floor>

		</>
	);
}

Month.propTypes = {
	year: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
};

export default Month;
