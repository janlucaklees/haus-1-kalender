import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';
import moment from  'moment';

import A4Page from '../Print/A4Page.jsx';
import TimeSlot from './TimeSlot.jsx';
import Day from './Day.jsx';

import { hexColor } from '../custom-prop-types.js';
import range from "../range";


const useStyles = createUseStyles({
	table: {
		width: '100%',
		height: '100%',
		tableLayout: 'fixed',
		borderCollapse: 'collapse',
	},
	colDate: {
		width: '9rem',
		textAlign: 'right',
	},
	colDayName: {
		width: '10.3rem',
	},
	rowHeader: {
		height: '12rem',
	},
	header: {
		position: 'relative',
		paddingTop: '0rem',
		paddingLeft: '6rem',
	},
	headerMonthNumber: {
		position: 'absolute',
		top: '-27rem',
		left: '-8rem',

		fontSize: '37rem',
		fontWeight: 'bold',

		opacity: 0.05,
		display: 'none',
	},
	headerMonthName: {
		fontSize: '8rem',
		fontWeight: 'bold',
	},
	rowOptions: {
		height: '12rem',
	},
	option: {
		textAlign: 'center',
		verticalAlign: 'middle',
		fontWeight: 'bold',
		fontSize: '5rem',
	},
});

function Floor({ className, label, year, month, children, backgroundColor }) {
	const classes = useStyles();
	const { t } = useTranslation();

	const date        = moment( [ year, month - 1 ] );
	const daysInMonth = date.daysInMonth();

	const numberOfTimeSlots = children.length;

	// Render days
	const days = range( 31 ).map( day => {
		const dayDate = date.clone().date( day );

		return (
			<Day
				date={ dayDate }
				numberOfTimeSlots={ numberOfTimeSlots }
				isPlaceholder={ day > daysInMonth }
				key={ dayDate.format( 'YYYY-MM-DD' ) } />
		);
	})

	return (
		<A4Page className={ className } backgroundColor={ backgroundColor }>
			<table className={ classes.table }>

				<thead>

					<tr>
						<td className={ classes.colDate }></td>
						<td className={ classes.colDayName }></td>
					</tr>

					<tr className={ classes.rowHeader }>
						<th className={ classes.header } colSpan={ 2 + numberOfTimeSlots }>
							<h1>
								<span className={ classes.headerMonthNumber }>
									{ date.format( '.MM.YYYY' ) }
								</span>
								<span className={ classes.headerMonthName }>
									{ t( 'month_names.' + date.month() ) }
									{ date.format( ' YYYY' ) }
								</span>
							</h1>
						</th>
					</tr>

					<tr className={ classes.rowOptions }>
						<th className={ classes.option } colSpan={2} >
							<h2>
								{ label }
							</h2>
						</th>
						{ children }
					</tr>

				</thead>

				<tbody>
					{ days }
				</tbody>

			</table>
		</A4Page>
	);
}

Floor.propTypes = {
	year: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	children: PropTypes.arrayOf(
		PropTypes.shape({ type: PropTypes.oneOf([ TimeSlot ]) })
	).isRequired,
	backgroundColor: hexColor,
};

export default Floor;

