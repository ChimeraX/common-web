import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import { Icon, IconButton, ListItemIcon, ListItemText, MenuItem, ThemeProvider } from '@material-ui/core';
import ChimeraXTheme, { ThemeType } from '../theming/ChimeraXTheme';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		item: {
			'&:focus': {
				backgroundColor: theme.palette.primary.main,
				'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
					color: theme.palette.common.white,
				},
			},
		},
	}),
);

export interface ThemePickerItem {
	theme: ChimeraXTheme;
	iconActive: string;
	iconInactive?: string;
	displayName?: string;
}

export interface ThemePickerProperties {
	themeType: ThemeType;
	currentTheme: ChimeraXTheme;
	items: ThemePickerItem[];
	changeTheme: (theme: ChimeraXTheme) => void;
	changeBrightness: (themeType: ThemeType) => void;
}

const ThemePickerIcon = () => <Icon>invert_colors</Icon>;

const ThemePicker: React.FC<ThemePickerProperties> = (properties) => {
	const classes = useStyles();

	const { themeType, currentTheme, items = [], changeTheme, changeBrightness } = properties;
	const handleChangeBrightness = () => changeBrightness(themeType === 'dark' ? 'light' : 'dark');

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const dark = themeType === 'dark';

	return (
		<div>
			<IconButton aria-controls="customized-menu" aria-haspopup="true" color="primary" onClick={handleClick}>
				<ThemePickerIcon />
			</IconButton>
			<Menu
				id="customized-menu"
				elevation={0}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem className={classes.item} button onClick={handleChangeBrightness}>
					<ListItemIcon>
						<Icon>{dark ? 'brightness_low' : 'brightness_high'}</Icon>
					</ListItemIcon>
					<ListItemText>{dark ? 'Dark' : 'Bright'}</ListItemText>
				</MenuItem>
				{items.map((themeItem: ThemePickerItem) => {
					let { theme, iconActive, iconInactive, displayName } = themeItem;
					iconInactive = iconActive ? iconInactive : iconActive;
					const selected = theme.name === currentTheme.name;
					const icon = selected ? iconActive : iconInactive;
					const color = selected ? theme.palette.secondary.main : theme.palette.primary.main;
					const handleChangeTheme = () => changeTheme(theme);
					return (
						<ThemeProvider theme={theme}>
							<MenuItem className={classes.item} button onClick={handleChangeTheme}>
								<ListItemIcon>
									<Icon style={{ color }}>{icon}</Icon>
								</ListItemIcon>
								<ListItemText>{displayName ? displayName : theme.name}</ListItemText>
							</MenuItem>
						</ThemeProvider>
					);
				})}
			</Menu>
		</div>
	);
};

export default ThemePicker;
