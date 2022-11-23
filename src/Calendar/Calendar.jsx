import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import moment from  'moment';

import Month from './Month.jsx';
import range from "../range";


export const useStyles = createUseStyles({
	calendar: {
		display: 'grid',
		gridGap: '10rem',
		gridTemplateColumns: '210rem 210rem',

		padding: '10rem 0',

		'@media print': {
			display: 'block',

			gridGap: 'unset',
			gridTemplateColumns: 'unset',

			padding: '0',
		},
	},
});

function Calendar({ year }) {
	const classes = useStyles();

	return (
		<div className={ classes.calendar }>

			{ range(12).map( month => (
				<Month
					key={ 'month_' + month }
					year={ year }
					month={ month } />
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

