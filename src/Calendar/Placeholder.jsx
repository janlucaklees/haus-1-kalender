
import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

import { useStyles as useDayStyles } from './Day';


const useStyles = createUseStyles({
	rowPlaceholder: {
		visibility: 'hidden',
		opacity: 0,
	},
	cellPlaceholder: {
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderColor: 'transparent',
	}
});

function Placeholder() {
	const classes = useStyles();
	const dayClasses = useDayStyles();

	return (
		<tr className={ classNames( dayClasses.rowDay, classes.rowPlaceholder ) }>
			<td className={ classNames( dayClasses.cellDayDate, classes.cellPlaceholder ) } />
			<td className={ classNames( dayClasses.cellDayName, classes.cellPlaceholder ) } />
		</tr>
	);
}

export default Placeholder;

