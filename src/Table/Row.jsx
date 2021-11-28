import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

import range from "../range";
import browser from "../browser";


const styles = {
	white: {
		backgroundColor: '#ffffff',
	},
	lightgray: {
		backgroundColor: '#f7f8fb',
	},
	gray: {
		backgroundColor: '#eff0f2',
	},
	invisible: {
		backgroundColor: 'transparent',
	}
}

export const useStyles = createUseStyles({
	// Row Styles
	row: {
		backgroundColor: props => props.backgroundColor,
		fontSize: `4.4rem`,

		// For the cells to inherit
		borderColor: 'black',
	},
	invisible: {
		backgroundColor: 'transparent',
		visibility: 'hidden',
		opacity: 0,

		// Hide cell border as well. Somehow opacity and visibility are not hiding it.
		borderColor: 'transparent',
	},
	firefoxRow: {
		// Firefox does not print backgrounds by default. But with this hack, we force him to.
		boxShadow: props => `inset 0px 0px 0px 100vh ${props.backgroundColor}`,
	},

	// Cell Styles
	cell: {
		borderWidth: '0.375rem',
		borderStyle: 'solid',
		borderColor: 'inherit',
		verticalAlign: 'middle',
		position: 'relative',
	},
	cellDay: {
		borderRightWidth: 0,
		paddingRight: 0,
		textAlign: 'right',
	},
	cellDayName: {
		borderLeftWidth: 0,
		paddingLeft: '0.66rem',
	},
});

function Row({ day, dayName, numberOfTimeSlots, style }) {
	const classes = useStyles({ backgroundColor: styles[style].backgroundColor });

	const rowStyles = {
		[ classes.invisible  ]: style === 'invisible',
		[ classes.firefoxRow ]: browser.name === 'firefox',
	};

	return (
		<tr className={ classNames( classes.row, rowStyles ) }>

			<td
				className={ classNames( classes.cell, classes.cellDay ) }>
				{ day }
			</td>

			<td
				className={ classNames( classes.cell, classes.cellDayName ) }>
				{ dayName }
			</td>

			{ range(numberOfTimeSlots).map( i => (
				<td
					key={ `${day}_timeslot_${ i }` }
					className={ classNames( classes.cell, ) }>
					&nbsp;
				</td>
			) ) }

		</tr>
	);
}

//
// Generate a map from the styles where each key just has it's name as value.
Row.styles = Object.fromEntries(Object.entries(styles).map( ([key, value]) => [key, key] ));

Row.propTypes = {
	day: PropTypes.string.isRequired,
	dayName: PropTypes.string.isRequired,
	numberOfTimeSlots: PropTypes.number.isRequired,
	style: PropTypes.oneOf( Object.keys(styles) ),
};

Row.defaultProps = {
	style: 'white',
};

export default Row
