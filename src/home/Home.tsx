import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import RequestPanel from './RequestPanel';

export default function Home() {
	// get env var
	const API_URL_eric_gin_server = process.env.REACT_APP_API_URL_eric_gin_server;
	console.log('API_URL_eric_gin_server:', API_URL_eric_gin_server);

	return (
		<Grid container spacing={3}>
			{/* Request Panel */}
			<Grid item xs={12} md={5} xl={4}>
				<RequestPanel />
			</Grid>
			{/* Response Panel */}
			<Grid item xs={12} md={7} xl={8}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240,
					}}
				>
					response panel
				</Paper>
			</Grid>
			{/* result chat */}
			<Grid item xs={12}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>result chat</Paper>
			</Grid>
		</Grid>
	);
}
