import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import LinkIcon from '@mui/icons-material/Link';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const mainListItemsData = [
	{ icon: HomeIcon, text: 'Home', route: '/home' },
	{ icon: SpeedIcon, text: 'Benchmark', route: '/benchmark' },
];

const aiPageData = [
	{ icon: LinkIcon, text: 'LangChain', route: '/langchaindemo' },
	{ icon: FindReplaceIcon, text: 'RAG', route: '/ragDemo' },
	{ icon: PsychologyIcon, text: 'Fine Tuning', route: '/fineTuningDemo' },
];

const secondaryListItemsData = [
	{ icon: DashboardIcon, text: 'Dashboard', route: '/dashboard' },
	{ icon: ShoppingCartIcon, text: 'Orders', route: '/orders' },
	{ icon: LoginIcon, text: 'Login', route: '/logoff' },
];

export const MainListItems = () => {
	const navigate = useNavigate();
	const handleItemClick = (route: string | undefined) => {
		if (route) {
			navigate(route);
		}
	};

	return (
		<React.Fragment>
			<ListSubheader component="div" inset sx={{ pl: 2 }}>
				Full Stack Skills Demo
			</ListSubheader>
			{mainListItemsData.map((item, index) => (
				<ListItemButton key={index} onClick={() => handleItemClick(item.route)}>
					<ListItemIcon>
						<item.icon />
					</ListItemIcon>
					<ListItemText primary={item.text} />
				</ListItemButton>
			))}
		</React.Fragment>
	);
};

export const AiPageItems = () => {
	const navigate = useNavigate();
	const handleItemClick = (route: string | undefined) => {
		if (route) {
			navigate(route);
		}
	};

	return (
		<React.Fragment>
			<ListSubheader component="div" inset sx={{ pl: 2 }}>
				AI LLM Demo Pages
			</ListSubheader>
			{aiPageData.map((item, index) => (
				<ListItemButton key={index} onClick={() => handleItemClick(item.route)}>
					<ListItemIcon>
						<item.icon />
					</ListItemIcon>
					<ListItemText primary={item.text} />
				</ListItemButton>
			))}
		</React.Fragment>
	);
};

export const SecondaryListItems = () => {
	const navigate = useNavigate();
	const handleItemClick = (route: string | undefined) => {
		if (route) {
			navigate(route);
		}
	};

	return (
		<React.Fragment>
			<ListSubheader component="div" inset sx={{ pl: 2 }}>
				Template pages - React UI
			</ListSubheader>
			{secondaryListItemsData.map((item, index) => (
				<ListItemButton key={index} onClick={() => handleItemClick(item.route)}>
					<ListItemIcon>
						<item.icon />
					</ListItemIcon>
					<ListItemText primary={item.text} />
				</ListItemButton>
			))}
		</React.Fragment>
	);
};
