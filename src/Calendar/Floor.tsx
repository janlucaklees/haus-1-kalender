import type { ReactElement } from 'react';
import { Children } from 'react';
import { useTranslation } from 'react-i18next';
import { format, getDaysInMonth, getMonth } from 'date-fns';

import A4Page from '../Print/A4Page';
import type { TimeSlotProps } from './TimeSlot';
import Day from './Day';
import range from '../range';
import classes from './Floor.module.css';

type FloorProps = {
	className?: string;
	label: string;
	year: number;
	month: number;
	children: ReactElement<TimeSlotProps> | ReactElement<TimeSlotProps>[];
	backgroundColor?: string;
};

function Floor({
	className,
	label,
	year,
	month,
	children,
	backgroundColor,
}: FloorProps) {
	const { t } = useTranslation();

	const date = new Date(year, month - 1, 1);
	const daysInMonth = getDaysInMonth(date);

	const numberOfTimeSlots = Children.count(children);

	const days = range( 31 ).map( day => {
		const dayDate = new Date(year, month - 1, day);

		return (
			<Day
				date={ dayDate }
				numberOfTimeSlots={ numberOfTimeSlots }
				isPlaceholder={ day > daysInMonth }
				key={ format(dayDate, 'yyyy-MM-dd') } />
		);
	});

	return (
		<A4Page className={ className } backgroundColor={ backgroundColor }>
			<table className={ classes.table }>

				<thead>

					<tr>
						<td className={ classes.colDate }></td>
						<td className={ classes.colDayName }></td>
					</tr>

					<tr className={ classes.rowHeader }>
						<th className={ classes.header } colSpan={ 2 + numberOfTimeSlots }>
							<h1>
								<span className={ classes.headerMonthNumber }>
									{ format(date, '.MM.yyyy') }
								</span>
								<span className={ classes.headerMonthName }>
									{ t( 'month_names.' + getMonth(date) ) }
									{ format(date, ' yyyy') }
								</span>
							</h1>
						</th>
					</tr>

					<tr className={ classes.rowOptions }>
						<th className={ classes.option } colSpan={2} >
							<h2>
								{ label }
							</h2>
						</th>
						{ children }
					</tr>

				</thead>

				<tbody>
					{ days }
				</tbody>

			</table>
		</A4Page>
	);
}

export default Floor;
