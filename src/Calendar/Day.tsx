import { useTranslation } from 'react-i18next';
import { format, getDay } from 'date-fns';

import DateRow, { rowStyles, type RowStyle } from '../Table/Row';

const weekdayStyle: RowStyle[] = [
	rowStyles.gray,
	rowStyles.white,
	rowStyles.white,
	rowStyles.white,
	rowStyles.white,
	rowStyles.white,
	rowStyles.lightgray
];

type DayProps = {
	date: Date;
	numberOfTimeSlots: number;
	isPlaceholder: boolean;
};

function Day({ date, numberOfTimeSlots, isPlaceholder }: DayProps) {
	const { t } = useTranslation();

	const weekday = getDay(date);

	if( isPlaceholder ) {
		return (
			<DateRow
				day=''
				dayName=''
				style={ rowStyles.invisible }
				numberOfTimeSlots={ numberOfTimeSlots } />
		);
	}

	return (
		<DateRow
			day={ format(date, 'dd.') }
			dayName={ t( 'day_names.' + weekday + '.abbrev' ) }
			style={ weekdayStyle[ weekday ] }
			numberOfTimeSlots={ numberOfTimeSlots } />
	);
}

export default Day;
