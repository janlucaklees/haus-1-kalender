import React from 'react';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';


const useStyles = createUseStyles({
	warning: {
		fontSize: '6rem',
		textAlign: 'center',

		padding: '5rem',
		marginTop: '8rem',

		boxShadow: '2px 2px 10px 0px #888',
		border: '1rem solid #f5c2c7',
		backgroundColor: '#f8d7da',
		color: '#842029',

		'@media print': {
			display: 'none',
		},
	},
});

function NoChromeWarning() {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<div className={ classes.warning }>
			{ t( 'page.no-chrome-warning' ) }
		</div>
	);
}

export default NoChromeWarning
