import { useTranslation } from 'react-i18next';

import classes from './NoChromeWarning.module.css';

function NoChromeWarning() {
	const { t } = useTranslation();

	return (
		<div className={ classes.warning }>
			{ t( 'page.no-chrome-warning' ) }
		</div>
	);
}

export default NoChromeWarning
