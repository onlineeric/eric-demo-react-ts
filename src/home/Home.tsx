import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import RequestPanel from './RequestPanel';
import ResponsePanel from './ResponsePanel';

export default function Home() {
	return (
		<Grid container spacing={3}>
			{/* Request Panel */}
			<Grid item xs={12} md={5} xl={4}>
				<RequestPanel />
			</Grid>
			{/* Response Panel */}
			<Grid item xs={12} md={7} xl={8}>
				<ResponsePanel />
			</Grid>
			{/* result chat */}
			<Grid item xs={12}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>result chat</Paper>
			</Grid>
		</Grid>
	);
}
