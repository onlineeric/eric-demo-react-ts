import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import RequestPanel from './RequestPanel';
import ResponsePanel from './ResponsePanel';
import ServerStatusPanel from './ServerStatusPanel';

export default function Home() {
	return (
		<Grid container spacing={3}>
			{/* Server Status Panel */}
			<Grid item xs={12} md={5} xl={4}>
				<ServerStatusPanel />
			</Grid>
			{/* Request Panel */}
			<Grid item xs={12} md={7} xl={8}>
				<RequestPanel />
			</Grid>
			{/* Response Panel */}
			<Grid item xs={12}>
				<ResponsePanel />
			</Grid>
			{/* result chat */}
			<Grid item xs={12}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>result chat</Paper>
			</Grid>
		</Grid>
	);
}
