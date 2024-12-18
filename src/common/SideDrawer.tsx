import React from 'react';
import {
	List,
	Divider,
	IconButton,
	styled,
	Drawer as MuiDrawer,
	DrawerProps,
	Toolbar,
	Box,
	Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AiPageItems, MainListItems, SecondaryListItems } from './SideDrawerListItems';
import packageJson from '../../package.json';

interface StyledDrawerProps extends DrawerProps {
	open: boolean;
	drawerwidth: number;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<StyledDrawerProps>(
	({ theme, open, drawerwidth }) => ({
		'& .MuiDrawer-paper': {
			position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerwidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
);

interface SideDrawerProps extends StyledDrawerProps {
	toggleDrawer: () => void;
}

export default function SideDrawer({ open, drawerwidth, toggleDrawer }: SideDrawerProps) {
	return (
		<Drawer variant="permanent" open={open} drawerwidth={drawerwidth}>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					px: [1],
				}}
			>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				<MainListItems />
				<Divider sx={{ my: 1 }} />
				<AiPageItems />
				<Divider sx={{ my: 1 }} />
				<SecondaryListItems />
			</List>
			<Box sx={{ mt: 'auto', p: 2 }}>
				<Typography variant="body2" color="textSecondary" align="center">
					Version: {packageJson.version}
				</Typography>
			</Box>
		</Drawer>
	);
}
