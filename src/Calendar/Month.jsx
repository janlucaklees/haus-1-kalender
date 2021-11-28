import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';

import Floor from './Floor.jsx';
import TimeSlot from './TimeSlot.jsx';


const useStyles = createUseStyles({
	month: {
		width: '100%',
		margin: '25rem auto',
		display: 'flex',
		justifyContent: 'space-between',
		'@media print': {
			width: 'auto',
			margin: 0,
			display: 'block',
		},
	}
});

function Month({ year, monthIndex }) {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<div className={ classes.month }>

			<Floor
				year={ year }
				monthIndex={ monthIndex }
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
				monthIndex={ monthIndex }
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

		</div>
	);
}

Month.propTypes = {
	year: PropTypes.number.isRequired,
	monthIndex: PropTypes.number.isRequired,
};

export default Month;

