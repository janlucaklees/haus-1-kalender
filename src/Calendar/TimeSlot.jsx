import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';


const useStyles = createUseStyles({
	cell: {
		textAlign: 'center',
		verticalAlign: 'bottom',
		paddingBottom: '1rem',
	},
	label: {
		fontSize: '5.5rem',
	},
	description: {
		fontSize: '3.3rem',
		color: '#696d7f',
		fontFamily: "'Noto Serif', serif",
	},
});

function TimeSlot({ label, description }) {
	const classes = useStyles();

	return (
		<th className={ classes.cell }>
			<h2 className={ classes.label }>{ label }</h2>
			<span className={ classes.description }>{ description }</span>
		</th>
	);
}

TimeSlot.propTypes = {
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
};

export default TimeSlot;

