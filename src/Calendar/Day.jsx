import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';
import moment from  'moment';

import DateRow from "../Table/Row";


const weekdayStyle = [
	DateRow.styles.gray,
	DateRow.styles.white,
	DateRow.styles.white,
	DateRow.styles.white,
	DateRow.styles.white,
	DateRow.styles.white,
	DateRow.styles.lightgray
];

export const useStyles = createUseStyles({
	day: {},
});

function Day({ date, numberOfTimeSlots, isPlaceholder }) {
	const classes = useStyles();
	const { t } = useTranslation();

	const weekday = date.day();

	if( isPlaceholder ) {
		return (
			<DateRow
				classNames={ classes.day }
				day='&nbsp;'
				dayName='&nbsp;'
				style={ DateRow.styles.invisible }
				numberOfTimeSlots={ numberOfTimeSlots } />
		);
	}

	return (
		<DateRow
			classNames={ classes.day }
			day={ date.format( 'DD.' ) }
			dayName={ t( 'day_names.' + weekday + '.abbrev' ) }
			style={ weekdayStyle[ weekday ] }
			numberOfTimeSlots={ numberOfTimeSlots } />
	);
}

Day.propTypes = {
	date: PropTypes.instanceOf( moment ).isRequired,
	numberOfTimeSlots: PropTypes.number.isRequired,
}

export default Day;
