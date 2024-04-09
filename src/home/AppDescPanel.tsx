import * as React from 'react';
import { Paper } from '@mui/material';
import Title from '../common/Title';

export default function AppDescPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 200,
			}}
		>
			<Title>Eric Demo Project Site</Title>
			{`Welcome! This website is a personal project, where I, Eric Cheng, showcase my Node.js, React, and web frontend expertise.`}
			<br />
			{`This UI is a Single Page App (SPA) built using React, TypeScript, and Material-UI.`}
			<br />
			{`The backend connents to my other demo projects, which are built using .Net C#, and GoLang.`}
		</Paper>
	);
}
