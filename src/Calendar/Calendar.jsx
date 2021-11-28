import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import moment from  'moment';

import Month from './Month.jsx';


// Generating an array with values 0 to 11.
const monthIndices = Array.from(Array(12).keys());


export const useStyles = createUseStyles({
	calendar: {},
});

function Calendar({ year }) {
	const classes = useStyles();

	return (
		<div className={ classes.calendar }>

			{ monthIndices.map( monthIndex => (
				<Month
					key={ 'month_' + monthIndex }
					year={ year }
					monthIndex={ monthIndex } />
			) ) }

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

