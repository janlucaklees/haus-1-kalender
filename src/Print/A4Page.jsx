import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

import browser from '../browser.js';
import { hexColor } from '../custom-prop-types.js';


export const pageDimensions = {
	width: 210,
	height: 297,
	padding: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5,
	},
};

const borderWidth = 1;

const useStyles = createUseStyles({
	page: {
		width:  `${ pageDimensions.width }rem`,
		height: `${ pageDimensions.height }rem`,

		padding: {
			top:    `${ pageDimensions.padding.top }rem`,
			right:  `${ pageDimensions.padding.right }rem`,
			bottom: `${ pageDimensions.padding.bottom }rem`,
			left:   `${ pageDimensions.padding.left }rem`,
		},

		overflow: 'hidden',
		pageBreakAfter: 'always',

		backgroundColor: props => props.backgroundColor,
		boxShadow: '2px 2px 10px 0px #888',
		'-webkit-print-color-adjust': 'exact !important',

		fontFamily: "'Buenard', serif",

		'@media print': {
			margin: 0,
			boxShadow: 'none',
			width: `${pageDimensions.width}mm`,
			height: `${pageDimensions.height}mm`,
		}
	},
	firefoxPage: {
		// apparently this border fixes render bugs in ff (like what?!)
		borderWidth: `${ borderWidth }rem`,
		borderStyle: 'solid',
		borderColor: props => props.backgroundColor,
		// Firefox does not print backgrounds by default. But with this hack, we force him to.
		boxShadow: props => `2px 2px 10px 0px #888, inset 0px 0px 0px 100vh ${props.backgroundColor}`,

		// On Print only use the inset shadow to color the page.
		'@media print': {
			boxShadow: props => `inset 0px 0px 0px 100vh ${props.backgroundColor}`,
		}
	},
});

function A4Page({ className, backgroundColor, children }){
	const classes = useStyles({ backgroundColor });

	const pageStyles = {
		[ classes.firefoxPage ]: browser.name === 'firefox',
	};

	return (
		<div className={ classNames( classes.page, pageStyles, className ) }>
			{ children }
		</div>
	);
}

A4Page.propTypes = {
	backgroundColor: hexColor,
}

A4Page.defaultProps = {
	backgroundColor: '#ffffff',
};

export default A4Page;
