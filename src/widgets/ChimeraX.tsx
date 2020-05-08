import React from 'react';
import { createMuiTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import ChimeraXTheme from '../theming/ChimeraXTheme';
import * as endpoints from '../rest/endpoints';
import { Button, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({});

const useStyles = makeStyles((theme: ChimeraXTheme) => {
	return createStyles({
		root: {
			fontFamily: 'arial',
			textTransform: 'none',
		},
	});
});

interface ChimeraXProperties {
	clientId: string;
	redirect: string;
	scopes: string[];
}

const ChimeraX: React.FC<ChimeraXProperties> = (properties) => {
	const { clientId, redirect, scopes } = properties;

	const classes = useStyles();

	const scope = scopes.join(',');

	const handleClick = () => {
		window.location.href = `${endpoints.oauthURL}?redirect=${redirect}&client=${clientId}&scope=${scope}`;
	};

	return (
		<ThemeProvider theme={theme}>
			<Button onClick={handleClick} color="secondary" variant={'outlined'} className={classes.root}>
				Connect with Chimera-X
			</Button>
		</ThemeProvider>
	);
};
export default ChimeraX;
