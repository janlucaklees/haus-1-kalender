import { useTranslation } from 'react-i18next';
import { getYear } from 'date-fns';

import classes from './Controls.module.css';

type ControlsProps = {
	onYearChange: (year: string) => void;
};

function Controls({ onYearChange }: ControlsProps) {
	const { t } = useTranslation();

	const currentYear = getYear(new Date());

	return (
		<div className={ classes.container }>
			{ t('page.select_year') }
			&nbsp;
			<select onChange={ event => onYearChange( event.target.value ) }>
				<option value={ currentYear }>{ currentYear }</option>
				<option value={ currentYear + 1 }>{ currentYear + 1 }</option>
				<option value={ currentYear + 2 }>{ currentYear + 2 }</option>
			</select>
		</div>
	);
}

export default Controls;
