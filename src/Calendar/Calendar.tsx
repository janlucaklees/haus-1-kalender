import { getYear } from 'date-fns';

import Month from './Month';
import range from '../range';
import classes from './Calendar.module.css';

type CalendarProps = {
	year?: number;
};

function Calendar({ year = getYear(new Date()) }: CalendarProps) {

	return (
		<div className={ classes.calendar }>

			{ range(12).map( month => (
				<Month
					key={ 'month_' + month }
					year={ year }
					month={ month } />
			) ) }

		</div>
	);
}

export default Calendar;
