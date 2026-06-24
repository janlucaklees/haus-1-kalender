import classes from './TimeSlot.module.css';

export type TimeSlotProps = {
	label: string;
	description?: string;
};

function TimeSlot({ label, description }: TimeSlotProps) {
	return (
		<th className={ classes.cell }>
			<h2 className={ classes.label }>{ label }</h2>
			<span className={ classes.description }>{ description }</span>
		</th>
	);
}

export default TimeSlot;
