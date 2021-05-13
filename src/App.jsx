import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';
import moment from  'moment';
import WebFont from 'webfontloader';

import i18n from './i18n';
import Controls from './Controls.jsx';
import Calendar from './Calendar/Calendar.jsx';
import { pageDimensions } from './Calendar/Sheet.jsx';


WebFont.load({
	google: {
		families: ['Buenard', 'Noto Sans', 'Noto Serif'],
	}
});

const useStyles = createUseStyles({
	'@global': {
		html: {
			fontSize: '1mm',
			'@media print': {
				fontSize: `${ 100 / pageDimensions.height }vh`,
			},
		},
		body: {
			backgroundColor: '#ddd',

		},
	},
	container: {
		width: '430rem',
		margin: '10rem auto',
		fontFamily: "'Noto Sans', sans-serif",
		color: '#0b0020',
		'@media print': {
			width: 'auto',
			margin: 0
		},
	},
	header: {
		backgroundColor: '#fff',
		padding: '5rem 7rem',
		boxShadow: '2px 2px 10px 0px #888',
		'@media print': {
			display: 'none',
		},
	},
	heading: {
		fontSize: '16rem',
		textAlign: 'center',
		marginBottom: '5rem',
	}
});

function App() {
	const classes = useStyles();
	const { t } = useTranslation();

	const [ year, setYear ] = useState( moment().year() );

	const handleYearChange = useCallback(nextYearStr => {
		let nextYear = parseInt( nextYearStr );

		if(isNaN(nextYear)) {
			throw new Error( 'Invalid year `' + nextYear + '` supplied.' );
		}

		document.title = t( 'document.title', { year: nextYear } );

		setYear(nextYear);
	});

	return (
		<div className={ classes.container }>

			<div className={ classes.header }>

				<h1 className={ classes.heading }>
					{ t('page.title') }
				</h1>

				<Controls onYearChange={ handleYearChange }/>

			</div>

			<Calendar year={ year } />

		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('react-root')
);

document.title = i18n.t( 'document.title', { year: moment().year() } );

module.hot.accept();

