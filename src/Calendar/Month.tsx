import { useTranslation } from 'react-i18next';

import Floor from './Floor';
import TimeSlot from './TimeSlot';

type MonthProps = {
	year: number;
	month: number;
};

function Month({ year, month }: MonthProps) {
	const { t } = useTranslation();

	return (
		<>

			<Floor
				year={ year }
				month={ month }
				label={ t( 'floors.ground.abbrev_label' ) }
				backgroundColor='#e7f0ff'>
				<TimeSlot
					label={       t( 'floors.ground.options.forenoon.label' ) }
					description={ t( 'floors.ground.options.forenoon.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.noon.label' ) }
					description={ t( 'floors.ground.options.noon.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.afternoon.label' ) }
					description={ t( 'floors.ground.options.afternoon.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.evening.label' ) }
					description={ t( 'floors.ground.options.evening.description' ) } />
				<TimeSlot
					label={       t( 'floors.ground.options.night.label' ) }
					description={ t( 'floors.ground.options.night.description' ) } />
			</Floor>

			<Floor
				year={ year }
				month={ month }
				label={ t( 'floors.first.abbrev_label' ) }
				backgroundColor='#e7ffdc'>
				<TimeSlot
					label={       t( 'floors.first.options.guest_room_1.label' ) }
					description={ t( 'floors.first.options.guest_room_1.description' ) } />
				<TimeSlot
					label={       t( 'floors.first.options.guest_room_2.label' ) }
					description={ t( 'floors.first.options.guest_room_2.description' ) } />
				<TimeSlot
					label={       t( 'floors.first.options.creative_room.label' ) }
					description={ t( 'floors.first.options.creative_room.description' ) } />
			</Floor>

		</>
	);
}

export default Month;
