import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';

import Page from './Page.jsx';
import Option from './Option.jsx';


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

			<Page
				year={ year }
				monthIndex={ monthIndex }
				label={ t( 'floors.ground.abbrev_label' ) }
				backgroundColor='#e7f0ff'>
				<Option
					label={       t( 'floors.ground.options.forenoon.label' ) }
					description={ t( 'floors.ground.options.forenoon.description' ) } />
				<Option
					label={       t( 'floors.ground.options.noon.label' ) }
					description={ t( 'floors.ground.options.noon.description' ) } />
				<Option
					label={       t( 'floors.ground.options.afternoon.label' ) }
					description={ t( 'floors.ground.options.afternoon.description' ) } />
				<Option
					label={       t( 'floors.ground.options.evening.label' ) }
					description={ t( 'floors.ground.options.evening.description' ) } />
				<Option
					label={       t( 'floors.ground.options.night.label' ) }
					description={ t( 'floors.ground.options.night.description' ) } />
			</Page>

			<Page
				year={ year }
				monthIndex={ monthIndex }
				label={ t( 'floors.first.abbrev_label' ) }
				backgroundColor='#e7ffdc'>
				<Option
					label={       t( 'floors.first.options.guest_room_1.label' ) }
					description={ t( 'floors.first.options.guest_room_1.description' ) } />
				<Option
					label={       t( 'floors.first.options.guest_room_2.label' ) }
					description={ t( 'floors.first.options.guest_room_2.description' ) } />
				<Option
					label={       t( 'floors.first.options.creative_room.label' ) }
					description={ t( 'floors.first.options.creative_room.description' ) } />
			</Page>

		</div>
	);
}

Month.propTypes = {
	year: PropTypes.number.isRequired,
	monthIndex: PropTypes.number.isRequired,
};

export default Month;

