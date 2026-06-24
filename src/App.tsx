import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WebFont from 'webfontloader';
import { getYear } from 'date-fns';

import Controls from './Controls';
import Calendar from './Calendar/Calendar';
import browser from './browser';
import NoChromeWarning from './NoChromeWarning';
import classes from './App.module.css';


WebFont.load({
	google: {
		families: ['Buenard', 'Noto Sans', 'Noto Serif'],
	}
});

function App() {
	const { t } = useTranslation();

	const [ year, setYear ] = useState( getYear(new Date()) );

	const handleYearChange = useCallback((nextYearStr: string) => {
		const nextYear = parseInt( nextYearStr, 10 );

		if(isNaN(nextYear)) {
			throw new Error( 'Invalid year `' + nextYear + '` supplied.' );
		}

		setYear(nextYear);
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

				<Controls onYearChange={ handleYearChange }/>

			</div>

			{ browser.name !== 'chrome' && ( <NoChromeWarning /> ) }

			<Calendar year={ year } />

		</div>
	);
}

export default App;
