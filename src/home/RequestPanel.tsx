import * as React from 'react';
import { Paper } from '@mui/material';

export default function RequestPanel() {
	// get env var
	const API_URL_eric_gin_server = process.env.REACT_APP_API_URL_eric_gin_server;
	console.log('API_URL_eric_gin_server:', API_URL_eric_gin_server);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 240,
			}}
		>
			request panel
		</Paper>
	);
}
