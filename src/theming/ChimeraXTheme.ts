import { Theme } from '@material-ui/core';

export default interface ChimeraXTheme extends Theme {
	name: string;
	gradientImage: string;
	backgroundImage: string;
}

export type ThemeType = 'light' | 'dark';
