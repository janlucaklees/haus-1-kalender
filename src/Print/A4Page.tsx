import type { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

import browser from '../browser';
import classes from './A4Page.module.css';


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

type A4PageProps = {
	className?: string;
	backgroundColor?: string;
	children: ReactNode;
};

function A4Page({
	className,
	backgroundColor = '#ffffff',
	children,
}: A4PageProps) {
	const pageStyles = {
		[ classes.firefoxPage ]: browser.name === 'firefox',
	};

	const cssVariables = {
		'--page-background': backgroundColor,
	} as CSSProperties;

	return (
		<div
			className={ classNames( classes.page, pageStyles, className ) }
			style={ cssVariables }>
			{ children }
		</div>
	);
}

export default A4Page;
