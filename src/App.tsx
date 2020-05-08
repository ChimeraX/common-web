import React from 'react';
import Page from './widgets/Page';
import UserWidget from './widgets/UserWidget';
import User from './model/User';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import ChimeraXTheme from './theming/ChimeraXTheme';

const user: User = {
	firstName: 'Tony',
	lastName: 'Stark',
	email: 'IronMan@stark.industries',
	profilePicture: 'https://ae01.alicdn.com/kf/HTB1SwWCcBKw3KVjSZFOq6yrDVXa4.jpg_q50.jpg',
	country: 'US',
	phoneNumber: '34242424543',
};

const theme = createMuiTheme({});

const defaultTheme: ChimeraXTheme = {
	...theme,
	gradientImage: `linear-gradient(315deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 74%)`,
	backgroundImage: `url('./images/red_car.jpg')`,
	name: 'RED_THEME',
};

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Page title={'Common web'}>
				<UserWidget/>
				<UserWidget user={user}/>
			</Page>
		</ThemeProvider>
	);
};

export default App;
