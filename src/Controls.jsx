import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';
import moment from  'moment';


const useStyles = createUseStyles({
	container: {
		textAlign: 'center',
		fontSize: '6rem',
	}
});

function Controls({ onYearChange }) {
	const classes = useStyles();
	const { t } = useTranslation();

	const currentYear = moment().year();

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

Controls.propTypes = {
	onYearChange: PropTypes.func,
}

export default Controls;

