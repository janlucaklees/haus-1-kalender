import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import moment from  'moment';

import Month from './Month.jsx';


export const useStyles = createUseStyles({
	calendar: {},
});

function Calendar({ year }) {
	const classes = useStyles();

	let months = new Array();
	for( let monthIndex = 0; monthIndex < 12; monthIndex++ ) {
		months.push(
			<Month
				key={ 'month_' + monthIndex }
				year={ year }
				monthIndex={ monthIndex } />
		);
	}

	return (
		<div className={ classes.calendar }>
			{ months }
		</div>
	);
}

Calendar.propTypes = {
  year: PropTypes.number
};

Calendar.defaultProps = {
  year: moment().year()
};

export default Calendar;

