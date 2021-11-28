import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';
import moment from  'moment';
import classNames from 'classnames';

import Background from '../Print/Background.jsx';


const weekdayBackgroundColor = [
	'#eff0f2',
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#f7f8fb',
];

export const useStyles = createUseStyles({
	rowDay: {
		fontSize: `4.4rem`,
		backgroundColor: '#fff',
	},
	sunday:   { backgroundColor: weekdayBackgroundColor[ 0 ] },
	saturday: { backgroundColor: weekdayBackgroundColor[ 6 ] },
	cell: {
		borderWidth: '0.375rem',
		borderStyle: 'solid',
		borderColor: 'black',
		verticalAlign: 'middle',
		position: 'relative',
	},
	cellInner: {
		paddingTop: '1rem',
		paddingLeft: '0.66rem',
	},
	cellDayDate: {
		extend: 'cell',

		borderRightWidth: 0,
		paddingRight: 0,
		textAlign: 'right',
	},
	cellDayName: {
		extend: 'cell',

		borderLeftWidth: 0,
		paddingLeft: '0.66rem',
	},
});

function Day({ date, numberOfOptions }) {
	const classes = useStyles();
	const { t } = useTranslation();

	// generate cells for each option one
	const cells = [];
	for( let i = 0; i < numberOfOptions; i++ ){
		cells.push(
			<td
				key={ date.format( 'YYYY-MM-DD' ) + `_${ i }` }
				className={ classes.cell }>
				<Background
					backgroundColor={ weekdayBackgroundColor[ date.day() ] }>
					&nbsp;
				</Background>
			</td>
		);
	}

	const weekendHighlight = {};
	weekendHighlight[ classes.saturday ] = date.day() === 6;
	weekendHighlight[ classes.sunday ]   = date.day() === 0;

	return (
		<tr className={ classNames( classes.rowDay, weekendHighlight ) }>

			<td className={ classes.cellDayDate }>
				<Background
					className={ classes.cellInner }
					backgroundColor={ weekdayBackgroundColor[ date.day() ] } >
					{ date.format( 'DD' ) }.
				</Background>
			</td>

			<td className={ classes.cellDayName }>
				<Background
					backgroundColor={ weekdayBackgroundColor[ date.day() ] }
					className={ classes.cellInner }>
					{ t( 'day_names.' + date.day() + '.abbrev' ) }
				</Background>
			</td>

			{ cells }

		</tr>
	);
}

Day.propTypes = {
	date: PropTypes.instanceOf( moment ).isRequired,
	numberOfOptions: PropTypes.number.isRequired,
}

export default Day;

