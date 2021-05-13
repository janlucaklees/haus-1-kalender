import React from 'react';
import PropTypes from 'prop-types';
import moment from  'moment';

import Month from './Month.jsx';


function Calendar({ year }) {
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
		<div className="calendar">
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

