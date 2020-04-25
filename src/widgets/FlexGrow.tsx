import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
	}),
);

const FlexGrow = () => {
	const classes = useStyles();
	return <div className={classes.grow} />;
};

export default FlexGrow;
