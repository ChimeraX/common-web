import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ChimeraXTheme from '../theming/ChimeraXTheme';

const useStyles = makeStyles((theme: ChimeraXTheme) => {
	return createStyles({
		root: {
			minHeight: window.innerHeight,
		},
	});
});

export interface PageProperties {
	title: string;
	classes?: {
		root?: string;
	};
}

const Page: React.FC<PageProperties> = (properties) => {
	// properties
	const { title, children } = properties;

	// classes
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<h1>{title}</h1>
			{children}
		</section>
	);
};

export default Page;
