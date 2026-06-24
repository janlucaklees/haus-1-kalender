import { useTranslation } from 'react-i18next';
import { getYear } from 'date-fns';

import classes from './Controls.module.css';

type ControlsProps = {
	year: number;
	onYearChange: (year: string) => void;
};

function Controls({ year, onYearChange }: ControlsProps) {
	const { t } = useTranslation();

	const currentYear = getYear(new Date());
	const years = [ currentYear, currentYear + 1, currentYear + 2 ];

	if(!years.includes(year)) {
		years.unshift(year);
	}

	return (
		<div className={ classes.container }>
			{ t('page.select_year') }
			&nbsp;
			<select
				value={ year }
				onChange={ event => onYearChange( event.target.value ) }>
				{ years.map(optionYear => (
					<option key={ optionYear } value={ optionYear }>
						{ optionYear }
					</option>
				)) }
			</select>
		</div>
	);
}

export default Controls;
