import type { CSSProperties } from 'react';
import classNames from 'classnames';

import range from '../range';
import browser from '../browser';
import classes from './Row.module.css';


const rowColors = {
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
} as const;

export const rowStyles = Object.fromEntries(
	Object.keys(rowColors).map(key => [ key, key ])
) as { [Key in keyof typeof rowColors]: Key };

export type RowStyle = keyof typeof rowColors;

type RowProps = {
	day: string;
	dayName: string;
	numberOfTimeSlots: number;
	style?: RowStyle;
};

function Row({
	day,
	dayName,
	numberOfTimeSlots,
	style = 'white',
}: RowProps) {
	const rowStyles = {
		[ classes.invisible  ]: style === 'invisible',
		[ classes.firefoxRow ]: browser.name === 'firefox',
	};

	const cssVariables = {
		'--row-background': rowColors[ style ].backgroundColor,
	} as CSSProperties;

	return (
		<tr
			className={ classNames( classes.row, rowStyles ) }
			style={ cssVariables }>

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
					className={ classes.cell }>
					&nbsp;
				</td>
			) ) }

		</tr>
	);
}

export default Row;
