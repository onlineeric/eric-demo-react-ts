import * as React from 'react';
import { Input, Paper, Typography } from '@mui/material';
import Title from '../common/Title';

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
			<Title>Request submit to server</Title>
			<Typography variant="h6">Minimal API server:</Typography>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Typography variant="subtitle1">Execute times:</Typography>
				<Input type="number" defaultValue={500} sx={{ width: '100px', ml: 2 }} />
			</div>
		</Paper>
	);
}
