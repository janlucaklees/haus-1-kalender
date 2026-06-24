import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WebFont from 'webfontloader';
import { getYear } from 'date-fns';

import Controls from './Controls';
import Calendar from './Calendar/Calendar';
import browser from './browser';
import NoChromeWarning from './NoChromeWarning';
import classes from './App.module.css';

const currentYear = getYear(new Date());

function getInitialYear() {
	const yearParam = new URLSearchParams(window.location.search).get('year');

	if(yearParam === null) {
		return currentYear;
	}

	if(!/^\d{4}$/.test(yearParam)) {
		throw new Error( 'Invalid year `' + yearParam + '` supplied.' );
	}

	return parseInt( yearParam, 10 );
}

WebFont.load({
	google: {
		families: ['Buenard', 'Noto Sans', 'Noto Serif'],
	}
});

function App() {
	const { t } = useTranslation();

	const [ year, setYear ] = useState( getInitialYear );

	const handleYearChange = useCallback((nextYearStr: string) => {
		const nextYear = parseInt( nextYearStr, 10 );

		if(isNaN(nextYear)) {
			throw new Error( 'Invalid year `' + nextYear + '` supplied.' );
		}

		setYear(nextYear);
		window.history.replaceState({}, '', '?year=' + nextYear);
	}, []);

	useEffect(() => {
		document.title = t( 'document.title', { year } );
	}, [ t, year ]);

	return (
		<div className={ classes.container }>

			<div className={ classes.header }>

				<h1 className={ classes.heading }>
					{ t('page.title') }
				</h1>

				<Controls year={ year } onYearChange={ handleYearChange }/>

			</div>

			{ browser.name !== 'chrome' && ( <NoChromeWarning /> ) }

			<Calendar year={ year } />

		</div>
	);
}

export default App;
