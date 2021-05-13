import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

import { hexColor } from '../custom-prop-types.js';
import browser from '../browser.js';


export const useStyles = createUseStyles({
	background: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		objectFit: 'cover',
	},
	foreground: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
});

function WithPrintableBackground({ className, backgroundColor, children }) {
	const classes = useStyles();

	if(['edge', 'firefox'].includes(browser.name)) {
		return (
			<>
				<img
					src={ `https://dummyimage.com/1x1/${ backgroundColor.substr( 1 ) }/${ backgroundColor.substr( 1 ) }.png` }
					className={ classes.background } />
				<div className={ classNames( classes.foreground, className ) }>
					{ children }
				</div>
			</>
		);
	}

	return children;
}

WithPrintableBackground.propTypes = {
	backgroundColor: hexColor,
}

export default WithPrintableBackground;

