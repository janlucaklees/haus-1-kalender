import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

import Background from './Background.jsx';
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

		overflow: 'hidden',
		pageBreakAfter: 'always',

		boxShadow: '2px 2px 10px 0px #888',
		'-webkit-print-color-adjust': 'exact !important',

		fontFamily: "'Buenard', serif",

		'@media print': {
			margin: 0,
			boxShadow: 'none',
			width: '100vw',
			height: '100vh',
		}
	},
	pageStyledBackground: {
		padding: {
			top:    `${ pageDimensions.padding.top }rem`,
			right:  `${ pageDimensions.padding.right }rem`,
			bottom: `${ pageDimensions.padding.bottom }rem`,
			left:   `${ pageDimensions.padding.left }rem`,
		},
		backgroundColor: props => props.backgroundColor,
	},
	pageImageBackground: {
		position: 'relative',
	},
	foreground: {
		padding: {
			top:    `${ pageDimensions.padding.top }rem`,
			right:  `${ pageDimensions.padding.right }rem`,
			bottom: `${ pageDimensions.padding.bottom }rem`,
			left:   `${ pageDimensions.padding.left }rem`,
		},
	},
	pageFireFox: {
		// apparently this border fixes render bugs in ff (like what?!)
		borderWidth: `${ borderWidth }rem`,
		borderStyle: 'solid',
		borderColor: props => props.backgroundColor,
	},
	foregroundFireFox: {
		// negate the border with negative margin to not screw up the padding
		margin: {
			top:    `${ - borderWidth }rem`,
			right:  `${ - borderWidth }rem`,
			bottom: `${ - borderWidth }rem`,
			left:   `${ - borderWidth }rem`,
		},
	},
});

function A4Page({ className, backgroundColor, children }){
	const classes = useStyles({ backgroundColor });

	const isFirefox = browser.name === 'firefox';
	const isEdge    = browser.name === 'edge';

	const pageStyles = {
		[ classes.pageStyledBackground ]: !(isFirefox || isEdge),
		[ classes.pageImageBackground ]:  isFirefox || isEdge,
		[ classes.pageFireFox ]:          isFirefox,
	};

	const foregroundStyles = {
		[ classes.foregroundFireFox ]: isFirefox,
	};

	return (
		<div className={ classNames( classes.page, pageStyles, className ) }>
			<Background
				backgroundColor={ backgroundColor }
				className={ classNames( classes.foreground, foregroundStyles ) }>
				{ children }
			</Background>
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
